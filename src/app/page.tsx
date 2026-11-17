import Image from "next/image";
import henry from "@/assets/henry.jpg";
import Scene from "@/components/Scene";
import ScrollProgress from "@/components/ScrollProgress";
import { experience, projects, socials } from "@/lib/content";

const newTab = { target: "_blank", rel: "noopener noreferrer" };

// `data-p` drives the section's --p (see ScrollProgress); each `data-o="x,y,scale"` is a waypoint for the 3D object (see Scene).
export default function Home() {
  return (
    <>
      <div className="loader" aria-hidden>
        <div className="lens glass">HC</div>
      </div>
      <Scene />
      <ScrollProgress />

      <header>
        <a href="#top" aria-label="Henry Chen">
          HC
        </a>
        <nav>
          <a href="#work">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <div className="rail" data-p="page" aria-hidden />

      <main>
        <section className="hero" id="top" data-p="exit" data-o=".42,.08,1">
          <p className="eyebrow">Software Engineer</p>
          <h1>
            Henry
            <br />
            Chen
          </h1>
        </section>

        <section className="about" data-p="view" data-o="-.5,.3,.6">
          <div className="portrait glass">
            <Image src={henry} alt="Henry Chen" sizes="(max-width: 640px) 60vw, (max-width: 1058px) 34vw, 360px" />
          </div>
          <div className="about-text">
            <p className="eyebrow">About</p>
            <h2>
              Computer Science
              <br />
              University of Virginia
            </h2>
          </div>
        </section>

        <section className="work" id="work" data-p="view" data-o="0,.1,1.1">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Software Engineer</h2>
          </div>
          <div className="companies">
            {experience.map(({ company, logo, logoWidth }, i) => (
              <div key={company} className="company glass" style={{ "--i": i, "--lw": logoWidth } as React.CSSProperties}>
                <div className="logo">
                  <Image src={logo} alt="" sizes="(max-width: 640px) 50vw, 25vw" />
                </div>
                {company}
              </div>
            ))}
          </div>
        </section>

        <section
          className="projects"
          id="projects"
          data-p="pin"
          data-o=".62,.6,.4"
          style={{ "--n": projects.length } as React.CSSProperties}
        >
          <div className="projects-pin">
            <div className="projects-heading">
              <p className="eyebrow">Projects</p>
              <h2>Selected work</h2>
            </div>
            <div className="track">
              {projects.map(({ title, tag, href, image }) => (
                <a key={title} className="project glass" href={href} {...newTab}>
                  {/* eager: inside the clipped, transformed track native lazy-loading only fires once a card is on screen */}
                  <Image src={image} alt="" sizes="(max-width: 640px) 78vw, (max-width: 1034px) 58vw, 600px" loading="eager" />
                  <p>
                    {title}{" "}
                    <span>
                      {tag} <span aria-hidden>↗</span>
                    </span>
                  </p>
                </a>
              ))}
            </div>
          </div>
          <span className="projects-end" data-o=".62,-.55,.4" />
        </section>

        <section className="contact" id="contact" data-p="view" data-o="0,0,1.3">
          <h2>Let’s talk</h2>
          <div className="socials">
            {socials.map(({ label, href }) => (
              <a key={label} className="glass" href={href} {...(href.startsWith("mailto:") ? {} : newTab)}>
                {label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
