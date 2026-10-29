
import React, { useEffect, useState } from "react";
import Register from "./Register";


import {
  ArrowRight, ArrowUpRight, Menu, X, Monitor, Smartphone, Workflow,
  Megaphone, Cloud, Users, Smile, Trophy, Star, CheckCircle2, Code2,
  BriefcaseBusiness, HeartHandshake, Headphones, ChevronDown, ChevronLeft,
  ChevronRight, Quote, Send
} from "lucide-react";

const services = [
  { icon: Monitor, title: "Web Development", desc: "Modern, responsive and scalable websites for your business." },
  { icon: Smartphone, title: "Mobile App Development", desc: "iOS and Android apps that deliver great user experiences." },
  { icon: Workflow, title: "UI/UX Design", desc: "Beautiful and user-friendly designs your users will love." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Grow your brand with result-driven digital marketing." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Secure and scalable cloud infrastructure for your business." },
  { icon: Users, title: "IT Consulting", desc: "Expert advice to help you make the right technology decisions." }
];

const benefits = [
  { icon: HeartHandshake, title: "Creative Team", desc: "Skilled & passionate experts" },
  { icon: BriefcaseBusiness, title: "Flexible Process", desc: "Agile and transparent workflow" },
  { icon: Workflow, title: "Affordable Pricing", desc: "High quality within budget" },
  { icon: Headphones, title: "24/7 Support", desc: "We're always here to help" }
];

const projects = [
  { title: "E-Commerce Website", type: "Web Development", img: "photo-1556742049-0cfed4f6a45d" },
  { title: "Fitness Mobile App", type: "Mobile App", img: "photo-1510017803434-a899398421b3" },
  { title: "Dashboard UI/UX", type: "UI/UX Design", img: "photo-1460925895917-afdab827c52f" },
  { title: "Branding Identity", type: "Graphic Design", img: "photo-1556742049-0cfed4f6a45d" },
  // { title: "Branding Identity", type: "Graphic Design", img: "photo-1634942536790-2534db6a2b3c" }
];

const articles = [
  { title: "The Future of Web Development in 2025", date: "Apr 22, 2025", img: "photo-1498050108023-c5249f4df085" },
  { title: "Top 10 Mobile App Trends in 2025", date: "Apr 10, 2025", img: "photo-1512941937669-90a1b58e7e9c" },
  { title: "Digital Marketing Strategies for Small Businesses", date: "Apr 12, 2025", img: "photo-1460925895917-afdab827c52f" },
  { title: "Cloud Computing: Benefits and Future", date: "Apr 08, 2025", img: "photo-1451187580459-43490279c0fa" }
];

const team = [
  { name: "Rohit Verma", role: "Founder & CEO", img: "photo-1500648767791-00dcc994a43e" },
  { name: "Neha Gupta", role: "Lead Designer", img: "photo-1534528741775-53994a69daeb" },
  { name: "Amit Verma", role: "Senior Developer", img: "photo-1506794778202-cad84cf45f1d" },
  { name: "Sinha Yadav", role: "Marketing Specialist", img: "photo-1544005313-94ddf0286df2" }
];

const testimonials = [
  { quote: "IT Soft delivered our website on time and exceeded our expectations. Their team is professional and very responsive.", name: "Rahul Sharma", role: "CEO, TechNova", img: "photo-1500648767791-00dcc994a43e" },
  { quote: "Amazing work! The mobile app they built for us has helped us grow our user base significantly.", name: "Priya Verma", role: "Founder, FitLife", img: "photo-1534528741775-53994a69daeb" },
  { quote: "Highly recommended! They understood our requirements perfectly and delivered great results.", name: "Amit Patel", role: "Marketing Head, Brandify", img: "photo-1506794778202-cad84cf45f1d" }
];

const imgUrl = (id, width = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const revealClass =
  "reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out motion-reduce:transition-none";

const hoverCardClass =
  "transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl motion-reduce:transform-none";

function Logo({ light = false }) {
  return (
    <a
      href="#home"
      className={`inline-flex items-center gap-2 text-xl font-extrabold tracking-tight ${
        light ? "text-white" : "text-ink"
      }`}
    >
      <span className="brand-mark"><span /></span>
      IT Soft
    </a>
  );
}

function SectionHeading({ eyebrow, title, desc, right }) {
  return (
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
        {desc && (
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            {desc}
          </p>
        )}
      </div>

      {right && (
        <a
          href="#contact"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-orange transition-all duration-300 hover:gap-3"
        >
          {right}
          <ArrowRight size={16} />
        </a>
      )}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [faqOpen, setFaqOpen] = useState(-1);
  const [formSent, setFormSent] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(true);

  const [contactForm, setContactForm] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const [formSubmitting, setFormSubmitting] = useState(false);
const [formError, setFormError] = useState("");

  const nav = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Portfolio", "#portfolio"],
    ["Blog", "#blog"],
    ["Contact", "#contact"]
  ];

  const faqs = [
    ["What services does IT Soft provide?", "We provide website development, mobile app development, UI/UX design, digital marketing, cloud solutions and IT consulting."],
    ["How does your project process work?", "We start by understanding your goals, then plan the scope, share designs, build and test the solution, and support you after launch."],
    ["Can you work with a small business?", "Yes. We tailor the project scope and delivery plan to your business goals and budget."],
    ["How can I get a project quote?", "Send us a message through the contact form with a few details about your project. Our team can follow up to discuss next steps."]
  ];

  const activeTestimonials = testimonials.map(
    (_, i) => testimonials[(i + testimonialIndex) % testimonials.length]
  );

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => {
        element.classList.remove("opacity-0", "translate-y-8");
        element.classList.add("opacity-100", "translate-y-0");
      });
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.remove("opacity-0", "translate-y-8");
        element.classList.add("opacity-100", "translate-y-0");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);


// Contact Form Backend API
const handleContactSubmit = async (e) => {
  e.preventDefault();

  setFormError("");
  setFormSent(false);
  setFormSubmitting(true);

  try {
    const response = await fetch("https://webpage-6hq4.vercel.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactForm),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Form submit nahi hua.");
    }

    setFormSent(true);

    // Clear all fields after successful submission
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    setFormError(error.message || "Backend connection failed.");
  } finally {
    setFormSubmitting(false);
  }
};
// End Contact Form Backend API


  return (
    <div className="min-h-screen overflow-hidden bg-white text-ink [&_img]:cursor-pointer [&_img]:transition-transform [&_img]:duration-300 [&_button]:cursor-pointer [&_button]:transition-transform [&_button]:duration-300 [&_button]:active:scale-95">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur transition-shadow duration-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <Logo />

          <button
            className="rounded-lg p-2 transition-transform duration-200 hover:scale-110 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute left-0 right-0 top-full flex-col gap-1 border-b bg-white p-4 shadow-soft md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {nav.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-orange"
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="orange-btn mt-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:mt-0"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="hero-grid relative bg-gradient-to-br from-white via-[#fafafa] to-[#fff0e7]"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-2 md:py-20 lg:px-8 lg:py-24">
            <div className={`relative z-10 ${revealClass}`}>
              <span className="eyebrow-pill">Innovative IT Solutions</span>

              <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.7rem]">
                Build Your Digital{" "}
                <span className="text-orange">Future With Us</span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                We help businesses grow with modern technology, creative design
                and powerful digital solutions. From web and mobile apps to
                branding and cloud services — we turn your ideas into reality.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  className="orange-btn cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
                  href="#contact"
                >
                  Get Started <ArrowRight size={16} />
                </a>

                <a
                  href="#services"
                  className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold transition-all duration-300 hover:gap-3 hover:text-orange"
                >
                  Our Services
                  <ArrowUpRight size={16} className="text-orange" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex -space-x-2">
                  {team.slice(0, 4).map((p) => (
                    <img
                      key={p.name}
                      className="h-9 w-9 rounded-full border-2 border-white object-cover transition-transform duration-300 hover:z-10 hover:scale-125"
                      src={imgUrl(p.img, 100)}
                      alt={p.name}
                    />
                  ))}
                </div>

                <div>
                  <p className="text-xs font-bold">10K+ Happy Clients</p>
                  <div className="mt-1 flex items-center gap-2 text-xs">
                    <span className="tracking-wide text-orange">★★★★★</span>
                    <span className="text-slate-500">4.8 (500+ Reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`relative mx-auto w-full max-w-xl ${revealClass}`}>
              <div className="absolute -left-4 top-12 h-3/4 w-[88%] rounded-[2rem] bg-orange/90 sm:-left-8" />
              <div className="absolute -right-3 top-5 h-[85%] w-[85%] rounded-[2rem] bg-orange/10" />

              <img
                src={imgUrl("photo-1521737711867-e3b97375f902", 1100)}
                alt="Creative team collaborating around a laptop"
                className="relative z-10 h-[300px] w-full rounded-[1.6rem] object-cover shadow-soft transition-transform duration-700 ease-out hover:scale-[1.02] motion-reduce:transform-none sm:h-[410px]"
              />

              <div className="absolute -right-2 top-1/2 z-20 flex max-w-[220px] -translate-y-1/2 items-center gap-3 rounded-xl bg-white p-4 shadow-soft transition-transform duration-300 hover:-translate-y-[55%] sm:-right-7">
                <span className="rounded-lg bg-orange/10 p-2 text-orange">
                  <Code2 size={22} />
                </span>
                <span className="text-xs font-bold leading-5">
                  Modern Technology
                  <br />
                  Better Tomorrow <ArrowRight className="inline" size={13} />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section-wrap">
          <div className={revealClass}>
            <SectionHeading
              eyebrow="Our Services"
              title="What We Offer"
              desc="We provide end-to-end digital solutions to help your business stand out and grow in the competitive world."
              right="View All Services"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className={`service-card group ${revealClass} ${hoverCardClass}`}
              >
                <span className="icon-bubble transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-sm font-extrabold">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{desc}</p>
                <ArrowUpRight
                  size={16}
                  className="mt-4 text-orange opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="bg-gradient-to-r from-[#fafafa] to-[#fff4ec]"
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
                <span className="text-xs font-semibold">Years of Experience</span>
              </div>
            </div>

            <div className={revealClass}>
              <p className="eyebrow">About Us</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                We Are IT <span className="text-orange">Soft</span>
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We are a team of passionate developers, designers and
                strategists who love turning ideas into digital products. Our
                mission is to help businesses build a stronger online presence
                with innovative and reliable technology solutions.
              </p>

              <ul className="mt-5 space-y-3">
                {[
                  "Experienced & Skilled Team",
                  "Quality & On-Time Delivery",
                  "Client-Centric Approach"
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
                  <span className="icon-bubble"><Star size={20} /></span>
                  <div>
                    <h3 className="text-sm font-extrabold">Our Vision</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      To be a global leader in digital transformation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="icon-bubble"><Workflow size={20} /></span>
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

        {/* Stats */}
        <section className="bg-[#111315] text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-9 sm:grid-cols-4 lg:px-8">
            {[
              { icon: Smile, num: "250+", label: "Happy Clients" },
              { icon: Workflow, num: "500+", label: "Projects Completed" },
              { icon: Trophy, num: "15+", label: "Years Experience" },
              { icon: Star, num: "98%", label: "Client Satisfaction" }
            ].map(({ icon: Icon, num, label }) => (
              <div
                key={label}
                className={`flex items-center justify-center gap-4 ${revealClass}`}
              >
                <Icon
                  size={32}
                  strokeWidth={1.7}
                  className="text-orange transition-transform duration-300 hover:scale-125"
                />
                <div>
                  <strong className="block text-2xl font-extrabold text-orange">
                    {num}
                  </strong>
                  <span className="text-xs text-slate-300">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why choose us */}
        <section className="section-wrap">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.6fr]">
            <div className={revealClass}>
              <p className="eyebrow">Why Choose Us</p>
              <h2 className="mt-2 text-3xl font-extrabold">Why Work With Us?</h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                We combine creativity, technology and strategy to deliver
                solutions that make a real impact.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <article
                  key={title}
                  className={`service-card !p-5 ${revealClass} ${hoverCardClass}`}
                >
                  <span className="icon-bubble transition-transform duration-300 hover:scale-110">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-3 text-sm font-extrabold">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="section-wrap !pt-2">
          <div className={revealClass}>
            <SectionHeading
              eyebrow="Our Work"
              title="Latest Projects"
              desc="Take a look at some of our recent work and success stories."
              right="View All Projects"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                  <h3 className="text-sm font-extrabold">{p.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{p.type}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gradient-to-br from-[#fffaf6] to-[#f5f6f7]">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
            <div className={revealClass}>
              <SectionHeading
                eyebrow="Testimonials"
                title="What Our Clients Say"
                desc="Real feedback from real people. We value every opinion."
              />
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {activeTestimonials.map((t) => (
                <article
                  key={t.name}
                  className={`rounded-xl border border-slate-100 bg-white p-6 shadow-sm ${revealClass} ${hoverCardClass}`}
                >
                  <Quote size={22} className="text-orange" />
                  <p className="mt-3 min-h-[76px] text-sm leading-6 text-slate-600">
                    “{t.quote}”
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={imgUrl(t.img, 100)}
                      alt={t.name}
                    />
                    <div>
                      <h3 className="text-xs font-extrabold">{t.name}</h3>
                      <p className="mt-1 text-[11px] text-slate-500">{t.role}</p>
                    </div>
                    <span className="ml-auto text-xs tracking-wider text-orange">
                      ★★★★★
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                aria-label="Previous testimonials"
                onClick={() =>
                  setTestimonialIndex(
                    (testimonialIndex + testimonials.length - 1) %
                      testimonials.length
                  )
                }
                className="round-btn transition-transform duration-200 hover:scale-110 active:scale-95"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next testimonials"
                onClick={() =>
                  setTestimonialIndex(
                    (testimonialIndex + 1) % testimonials.length
                  )
                }
                className="round-btn transition-transform duration-200 hover:scale-110 active:scale-95"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="section-wrap">
          <div className={revealClass}>
            <SectionHeading
              eyebrow="Our Blog"
              title="Latest News & Articles"
              desc="Stay updated with the latest trends in technology and digital marketing."
              right="View All Articles"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((a) => (
              <article
                key={a.title}
                className={`overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft ${revealClass}`}
              >
                <div className="overflow-hidden">
                  <img
                    className="h-36 w-full object-cover transition-transform duration-500 hover:scale-105 motion-reduce:transform-none"
                    src={imgUrl(a.img, 600)}
                    alt={a.title}
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-extrabold leading-5">{a.title}</h3>
                  <div className="mt-4 flex items-center justify-between gap-2 text-[11px] text-slate-500">
                    <span>{a.date}</span>
                    <a
                      href="#contact"
                      className="cursor-pointer font-bold text-orange transition-colors duration-300 hover:text-orange-700"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-8">
          <div className={revealClass}>
            <SectionHeading
              eyebrow="Our Team"
              title="Meet Our Experts"
              desc="A team of creative minds, technical experts and problem solvers."
              right="View All Team"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((p) => (
              <article
                key={p.name}
                className={`flex items-center gap-3 rounded-xl bg-slate-50 p-3 ${revealClass} ${hoverCardClass}`}
              >
                <img
                  src={imgUrl(p.img, 150)}
                  alt={p.name}
                  className="h-16 w-16 rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                />
                <div>
                  <h3 className="text-sm font-extrabold">{p.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{p.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-[#fff3eb]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 lg:px-8">
            <div className={revealClass}>
              <p className="eyebrow">Let's Talk</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                Tell us what you're building. We'll help you find the right
                digital solution for your business.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <p>✉ hello@itsoft.example</p>
                <p>☎ +1 (555) 012-3456</p>
                <p>⌖ New Delhi, India</p>
              </div>
            </div>
<form
  onSubmit={handleContactSubmit}
  className={`rounded-2xl bg-white p-6 shadow-soft sm:p-8 ${revealClass}`}
>
  <div className="grid gap-4 sm:grid-cols-2">
    <label className="form-label">
      Your Name
      <input
        required
        placeholder="Full name"
        className="form-input transition-shadow duration-300 focus:shadow-md"
        value={contactForm.name}
        onChange={(e) =>
          setContactForm({ ...contactForm, name: e.target.value })
        }
      />
    </label>

    <label className="form-label">
      Email Address
      <input
        required
        type="email"
        placeholder="you@example.com"
        className="form-input transition-shadow duration-300 focus:shadow-md"
        value={contactForm.email}
        onChange={(e) =>
          setContactForm({ ...contactForm, email: e.target.value })
        }
      />
    </label>
  </div>

  <label className="form-label mt-4">
    Subject
    <input
      required
      placeholder="How can we help?"
      className="form-input transition-shadow duration-300 focus:shadow-md"
      value={contactForm.subject}
      onChange={(e) =>
        setContactForm({ ...contactForm, subject: e.target.value })
      }
    />
  </label>

  <label className="form-label mt-4">
    Your Message
    <textarea
      required
      rows="4"
      placeholder="Tell us a little about your project..."
      className="form-input resize-y transition-shadow duration-300 focus:shadow-md"
      value={contactForm.message}
      onChange={(e) =>
        setContactForm({ ...contactForm, message: e.target.value })
      }
    />
  </label>

  <button
  className="orange-btn mt-5 cursor-pointer"
  type="submit"
>
  Send Message
  <Send size={15} />
</button>

  {formSent && (
    <p className="mt-3 text-xs text-green-600">
      Your message has been saved successfully!
    </p>
  )}

  {formError && (
    <p className="mt-3 text-xs text-red-600">
      {formError}
    </p>
  )}
</form>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
          <div className={`flex flex-col items-center justify-between gap-4 rounded-2xl bg-orange px-7 py-8 text-white md:flex-row md:px-10 ${revealClass}`}>
            <div>
              <h2 className="text-2xl font-extrabold">
                Ready to grow your business?
              </h2>
              <p className="mt-2 text-sm text-white/85">
                Let's build something great together.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-orange transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50 hover:shadow-lg"
            >
              Start a Project <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#111315] text-slate-300">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              We build digital solutions that help businesses grow and succeed.
            </p>
            <div className="mt-5 flex gap-3">
              {["f", "𝕏", "in", "◎"].map((x) => (
                <a
                  key={x}
                  href="#home"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:text-orange"
                >
                  {x}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-extrabold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {nav.map(([n, h]) => (
                <li key={n}>
                  <a className="transition-colors duration-300 hover:text-orange" href={h}>{n}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-extrabold text-white">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a className="transition-colors duration-300 hover:text-orange" href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-extrabold text-white">Contact Us</h3>
            <p className="text-sm leading-7">
              hello@itsoft.example
              <br />
              +1 (555) 012-3456
              <br />
              New Delhi, India
            </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>© 2025 IT Soft. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#contact" className="transition-colors duration-300 hover:text-white">Privacy Policy</a>
              <a href="#contact" className="transition-colors duration-300 hover:text-white">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Register / Login Popup */}
      {showRegisterPopup && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-3 sm:p-6"
          onClick={() => setShowRegisterPopup(false)}
        >
          <div
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Register onClose={() => setShowRegisterPopup(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
