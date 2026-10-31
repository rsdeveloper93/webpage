
import React, { useEffect } from "react";
import {
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Cloud,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Modern, responsive and scalable websites tailored to your business needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Powerful mobile applications designed for smooth user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Beautiful and user-friendly interfaces that engage your customers.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Strategies that help your brand reach more customers and grow online.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Reliable cloud services to improve performance and scalability.",
  },
  {
    icon: Headphones,
    title: "IT Consulting",
    desc: "Expert technology guidance to help your business move forward.",
  },
];

function Services() {
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
  const hoverCardClass = "transition-all duration-300 hover:-translate-y-2";

  return (
    <section id="services" className="bg-gradient-to-r from-[#fafafa] to-[#fff4ec] min-h-screen">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className={revealClass}>
          <p className="eyebrow">Our Services</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">
            What We Offer
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            We provide end-to-end digital solutions to help your business
            stand out and grow in the competitive world.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className={`service-card group ${revealClass} ${hoverCardClass}`}
            >
              <span className="icon-bubble transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <Icon size={22} />
              </span>
              <h2 className="mt-4 text-sm font-extrabold">{title}</h2>
              <p className="mt-2 text-xs leading-5 text-slate-500">{desc}</p>
              <ArrowUpRight
                size={16}
                className="mt-4 text-orange opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
