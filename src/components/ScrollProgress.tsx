"use client";

import { useEffect } from "react";
import { trackBoxes } from "@/lib/scroll";

const clamp = (x: number) => (x > 0 ? Math.min(x, 1) : 0); // also maps NaN to 0

/**
 * Drives the CSS scroll animations: every `[data-p]` element gets a smoothed 0..1 progress in
 * `--p`. The loop runs only while a value is moving.
 *   view: 0 when the element's top enters the viewport bottom → 1 when its bottom leaves the top
 *   pin:  0 when its top reaches the viewport top → 1 when its bottom reaches the viewport bottom
 *   exit: 0 at its top → 1 once scrolled past by its own height
 *   page: progress through the whole page
 */
export default function ScrollProgress() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-p]"));
    const modes = els.map((el) => el.dataset.p);
    const values = els.map(() => 0);
    const written = els.map(() => -1); // the value last set on each element, ×1e4
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    let pageHeight = 0;
    let frame = 0;
    let last = 0; // previous frame time; 0 when just woken from idle
    let first = true;

    const tick = (now: number) => {
      const y = scrollY;
      const vh = innerHeight;
      // Frame-rate independent easing (a frame woken from idle counts as one); the first pass snaps.
      const k = first || reduce.matches ? 1 : 1 - Math.pow(0.88, Math.min(12, last ? (now - last) / 16.7 : 1));
      first = false;
      last = now;
      frame = 0;

      let moving = false;
      for (let i = 0; i < els.length; i++) {
        const { top, height } = boxes[i];
        const mode = modes[i];
        const target = clamp(
          mode === "pin"
            ? (y - top) / (height - vh)
            : mode === "exit"
              ? (y - top) / height
              : mode === "page"
                ? y / (pageHeight - vh)
                : (y + vh - top) / (vh + height),
        );
        values[i] += (target - values[i]) * k;
        if (Math.abs(target - values[i]) < 0.0005) values[i] = target;
        else moving = true;

        const rounded = Math.round(values[i] * 1e4);
        if (rounded !== written[i]) {
          els[i].style.setProperty("--p", String(rounded / 1e4));
          written[i] = rounded;
        }
      }
      if (moving) frame = requestAnimationFrame(tick);
    };

    const wake = () => {
      if (frame) return;
      last = 0;
      frame = requestAnimationFrame(tick);
    };

    const { boxes, stop } = trackBoxes(els, () => {
      pageHeight = document.documentElement.scrollHeight;
      wake();
    });

    // Keyboard focus can land on a link that a pinned section has moved off screen. The section
    // clips, so the browser cannot scroll it into view: go to the progress that shows it instead.
    const showFocused = ({ target }: FocusEvent) => {
      if (!(target instanceof HTMLAnchorElement) || !target.matches(":focus-visible")) return;
      const i = els.findIndex((el, i) => modes[i] === "pin" && el.contains(target));
      if (i < 0) return;
      const links = Array.from(els[i].querySelectorAll("a"));
      const { top, height } = boxes[i];
      scrollTo({ top: top + ((height - innerHeight) * links.indexOf(target)) / Math.max(1, links.length - 1) });
    };

    addEventListener("scroll", wake, { passive: true });
    addEventListener("resize", wake);
    addEventListener("focusin", showFocused);

    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", wake);
      removeEventListener("resize", wake);
      removeEventListener("focusin", showFocused);
      stop();
    };
  }, []);

  return null;
}
