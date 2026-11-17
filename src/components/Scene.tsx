"use client";

import { useEffect, useRef } from "react";
import {
  CanvasTexture,
  Color,
  DirectionalLight,
  Group,
  Mesh,
  MeshPhysicalMaterial,
  PerspectiveCamera,
  PMREMGenerator,
  Scene as ThreeScene,
  SphereGeometry,
  SRGBColorSpace,
  TorusKnotGeometry,
  WebGLRenderer,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { trackBoxes } from "@/lib/scroll";

const CAMERA_DISTANCE = 6;
const CAMERA_FOV = 35;
// Half the visible height at z = 0, so waypoint x/y in -1..1 map to viewport edges.
const HALF_HEIGHT = Math.tan(((CAMERA_FOV / 2) * Math.PI) / 180) * CAMERA_DISTANCE;
const ENTRANCE_MS = 1600;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** The glass object behind the page. It also reveals the page once its first frame is drawn. */
export default function Scene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;
    let bornAt = 0; // when the entrance animation started; 0 = page not revealed yet
    let teardown = () => {};
    let renderer: WebGLRenderer | undefined;

    try {
      // Each [data-o="x,y,scale"] element is a waypoint: x/y are fractions of the half-viewport,
      // and the object glides from one to the next as their tops cross the top of the viewport.
      const waypointEls = Array.from(document.querySelectorAll<HTMLElement>("[data-o]"));
      const waypoints = waypointEls.map((el) => (el.dataset.o ?? "").split(",").map(Number));
      if (waypoints.length < 2) throw new Error("need at least two [data-o] waypoints");
      const lastSegment = waypoints.length - 2;

      const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Soft pastel backdrop painted once; the glass refracts it.
      const backdrop = document.createElement("canvas");
      backdrop.width = backdrop.height = 512;
      const ctx = backdrop.getContext("2d");
      if (!ctx) throw new Error("2D canvas unavailable");
      ctx.fillStyle = "#eef1f5";
      ctx.fillRect(0, 0, 512, 512);
      for (const [x, y, radius, color] of [
        [80, 100, 320, "#cfdcf5"],
        [440, 210, 280, "#e3dbf3"],
        [250, 480, 300, "#f7e6da"],
      ] as const) {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, color + "00");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 512, 512);
      }
      const backgroundTexture = new CanvasTexture(backdrop);
      backgroundTexture.colorSpace = SRGBColorSpace;

      const activeRenderer = new WebGLRenderer({ canvas, antialias: true });
      renderer = activeRenderer;
      // The glass's transmission pass re-renders the viewport into a multisampled float target
      // every frame, so pixel count is the main GPU cost. The soft object and blurred backdrop
      // don't need more than 1.5x.
      activeRenderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));

      const scene = new ThreeScene();
      scene.background = backgroundTexture;
      const camera = new PerspectiveCamera(CAMERA_FOV, 1, 0.1, 50);
      camera.position.z = CAMERA_DISTANCE;

      // Reflections come from a prefiltered studio environment held in a render target.
      const buildEnvironment = () => {
        const pmrem = new PMREMGenerator(activeRenderer);
        const room = new RoomEnvironment();
        const target = pmrem.fromScene(room, 0.04);
        room.dispose();
        pmrem.dispose();
        scene.environment = target.texture;
        return target;
      };
      let environment = buildEnvironment();

      const glass = new MeshPhysicalMaterial({
        transmission: 1,
        thickness: 0.9,
        roughness: 0.03,
        ior: 1.5,
        clearcoat: 1,
        clearcoatRoughness: 0.04,
        iridescence: 0.25,
        iridescenceIOR: 1.3,
        dispersion: 6,
        attenuationColor: new Color("#dbe6f4"),
        attenuationDistance: 4,
        envMapIntensity: 1,
      });

      const object = new Group();
      const knotGeometry = new TorusKnotGeometry(0.95, 0.25, 260, 40, 2, 3);
      const knot = new Mesh(knotGeometry, glass);
      const moons = new Group();
      const moonGeometries = [
        [1.9, 0.5, 0.2, 0.2],
        [-1.7, -0.9, 0.6, 0.13],
        [0.3, 1.8, -0.5, 0.09],
      ].map(([x, y, z, radius]) => {
        const geometry = new SphereGeometry(radius, 48, 48);
        const moon = new Mesh(geometry, glass);
        moon.position.set(x, y, z);
        moons.add(moon);
        return geometry;
      });
      object.add(knot, moons);
      scene.add(object);

      const sun = new DirectionalLight(0xffffff, 2.5);
      sun.position.set(3, 4, 5);
      scene.add(sun);

      const tracker = trackBoxes(waypointEls);
      const current = waypoints[0].slice(); // smoothed [x, y, scale]
      let lastFrameMs = 0;

      const frame = (ms: number) => {
        if (!innerWidth || !innerHeight) return; // hidden or zero-sized viewport: nothing to draw
        const elapsed = Math.max(0, ms - lastFrameMs);
        const smoothing = reducedMotion ? 1 : 1 - Math.pow(0.92, Math.min(12, elapsed / 16.7));
        lastFrameMs = ms;

        // The segment starts at the last waypoint whose top has scrolled past the viewport top.
        const boxes = tracker.boxes;
        let segment = 0;
        for (let i = 0; i < boxes.length; i++) if (boxes[i].top - scrollY <= 0) segment = i;
        segment = Math.min(segment, lastSegment);
        const fromTop = boxes[segment].top - scrollY;
        const toTop = boxes[segment + 1].top - scrollY;
        const t = Math.min(1, Math.max(0, -fromTop / (toTop - fromTop)));
        const eased = t * t * (3 - 2 * t);

        const from = waypoints[segment];
        const to = waypoints[segment + 1];
        for (let j = 0; j < 3; j++) {
          const target = from[j] + (to[j] - from[j]) * eased;
          current[j] += (target - current[j]) * smoothing;
        }

        const pop = reducedMotion
          ? 1
          : bornAt
            ? 1 - Math.pow(1 - Math.min(1, (ms - bornAt) / ENTRANCE_MS), 4) // ease-out entrance
            : 0;
        const fit = Math.min(1, camera.aspect);
        object.position.set(current[0] * HALF_HEIGHT * camera.aspect, current[1] * HALF_HEIGHT, 0);
        object.scale.setScalar(current[2] * fit * (0.35 + 0.65 * pop));

        const scroll = scrollY * 0.002;
        const time = reducedMotion ? 0 : ms * 0.0002;
        knot.rotation.set(time + scroll * 0.9 + (1 - pop) * 1.2, time * 1.3 + scroll * 1.4 - (1 - pop) * 2, 0);
        moons.rotation.set(-scroll * 0.5, time * 2 + scroll, 0);

        activeRenderer.render(scene, camera);
      };
      const redraw = () => frame(performance.now());

      const resize = () => {
        if (!innerWidth || !innerHeight) return;
        activeRenderer.setSize(innerWidth, innerHeight, false);
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
        redraw(); // resizing clears the canvas
      };
      addEventListener("resize", resize);
      // This draws the first frame now rather than on the next animation frame, which compiles
      // the shaders: the page is only revealed once the object can actually be shown.
      resize();

      // A restored WebGL context (e.g. a phone tab returning from the background) brings render
      // targets back empty, which would leave the glass without reflections.
      const restoreEnvironment = () => {
        environment.dispose();
        environment = buildEnvironment();
        redraw();
      };
      canvas.addEventListener("webglcontextrestored", restoreEnvironment);

      // Without the idle spin nothing changes between scrolls, so reduced motion needs no loop.
      if (reducedMotion) addEventListener("scroll", redraw, { passive: true });
      else activeRenderer.setAnimationLoop(frame);

      teardown = () => {
        activeRenderer.setAnimationLoop(null);
        removeEventListener("resize", resize);
        removeEventListener("scroll", redraw);
        canvas.removeEventListener("webglcontextrestored", restoreEnvironment);
        tracker.stop();
        knotGeometry.dispose();
        moonGeometries.forEach((geometry) => geometry.dispose());
        glass.dispose();
        backgroundTexture.dispose();
        environment.dispose();
        activeRenderer.dispose();
      };
    } catch (error) {
      console.warn("3D unavailable, showing the page without it", error);
      renderer?.dispose();
    }

    // Reveal the page, with or without 3D. Waiting for the font avoids a visible swap of the large
    // name mid-intro (it is preloaded, so this is normally instant), and the 700 ms floor keeps a
    // fast load from flashing the loader; a slow load is already past it.
    (async () => {
      await Promise.race([document.fonts.ready, sleep(2500)]);
      await sleep(Math.max(0, 700 - performance.now()));
      if (cancelled) return;
      document.documentElement.dataset.ready = "";
      bornAt = performance.now();
    })();

    return () => {
      cancelled = true;
      teardown();
    };
  }, []);

  return <canvas ref={canvasRef} className="scene" aria-hidden />;
}
