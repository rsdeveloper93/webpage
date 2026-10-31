
import React, { useEffect } from "react";
import { CheckCircle2, Star, Workflow } from "lucide-react";

const imgUrl = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function About() {
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

  const revealClass = "reveal-on-scroll";

  return (
    <section
      id="about"
      className="bg-gradient-to-r from-[#fafafa] to-[#fff4ec] min-h-screen"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center lg:px-8">
        <div className={`relative ${revealClass}`}>
          <img
            src={imgUrl("photo-1498050108023-c5249f4df085", 900)}
            alt="Developer working on a laptop"
            className="h-[300px] w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.02] motion-reduce:transform-none sm:h-[370px]"
          />

          <div className="absolute -bottom-4 right-4 rounded-xl bg-orange px-6 py-4 text-white shadow-soft transition-transform duration-300 hover:-translate-y-2">
            <strong className="block text-3xl">15+</strong>
            <span className="text-xs font-semibold">
              Years of Experience
            </span>
          </div>
        </div>

        <div className={revealClass}>
          <p className="eyebrow">About Us</p>

          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            We Are IT <span className="text-orange">Soft</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            We are a team of passionate developers, designers and
            strategists who love turning ideas into digital products.
            Our mission is to help businesses build a stronger online
            presence with innovative and reliable technology solutions.
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "Experienced & Skilled Team",
              "Quality & On-Time Delivery",
              "Client-Centric Approach",
            ].map((x) => (
              <li
                key={x}
                className="flex items-center gap-3 text-sm font-bold transition-transform duration-300 hover:translate-x-1"
              >
                <CheckCircle2 size={18} className="text-orange" />
                {x}
              </li>
            ))}
          </ul>

          <div className="mt-7 grid gap-4 border-t border-slate-200 pt-5 sm:grid-cols-2">
            <div className="flex gap-3">
              <span className="icon-bubble">
                <Star size={20} />
              </span>
              <div>
                <h3 className="text-sm font-extrabold">Our Vision</h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  To be a global leader in digital transformation.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="icon-bubble">
                <Workflow size={20} />
              </span>
              <div>
                <h3 className="text-sm font-extrabold">Our Mission</h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  To deliver innovative, scalable and affordable tech solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
