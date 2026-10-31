
import React, { useEffect } from "react";

const projects = [
  {
    title: "E-Commerce Website",
    type: "Web Development",
    img: "photo-1556742049-0cfed4f6a45d",
  },
  {
    title: "Fitness Mobile App",
    type: "Mobile App",
    img: "photo-1510017803434-a899398421b3",
  },
  {
    title: "Dashboard UI/UX",
    type: "UI/UX Design",
    img: "photo-1460925895917-afdab827c52f",
  },
  {
    title: "Branding Identity",
    type: "Graphic Design",
    img: "photo-1556742049-0cfed4f6a45d",
  },
];

const imgUrl = (id, width = 650) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const revealClass =
    "reveal-on-scroll opacity-1 translate-y-8 transition-all duration-700 ease-out motion-reduce:transition-none";

  const hoverCardClass =
    "transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl motion-reduce:transform-none";

  return (
    <section id="portfolio" className="section-wrap min-h-screen !pt-2">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className={revealClass}>
          <p className="eyebrow">Our Work</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">
            Latest Projects
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Take a look at some of our recent work and success stories.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`project-card ${revealClass} ${hoverCardClass}`}
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={imgUrl(p.img, 650)}
                  alt={p.title}
                  loading="lazy"
                  className="w-full transition-transform duration-500 ease-out hover:scale-105 motion-reduce:transform-none"
                />
              </div>
              <div className="pt-3">
                <h2 className="text-sm font-extrabold">{p.title}</h2>
                <p className="mt-1 text-xs text-slate-500">{p.type}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
