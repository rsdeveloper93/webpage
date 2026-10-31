
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const nav = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Portfolio", "/portfolio"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Cloud Solutions",
  ];

  return (
    <footer className="bg-[#111315] text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* Company Info */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xl font-extrabold tracking-tight text-white"
          >
            <span className="brand-mark"><span /></span>
            IT Soft
          </Link>

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

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 font-extrabold text-white">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            {nav.map(([name, path]) => (
              <li key={name}>
                <Link
                  className="transition-colors duration-300 hover:text-orange"
                  to={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-4 font-extrabold text-white">Our Services</h3>

          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <li key={service}>
                <Link
                  className="transition-colors duration-300 hover:text-orange"
                  to="/services"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
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

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <p>© 2025 IT Soft. All rights reserved.</p>

          <div className="flex gap-5">
            <Link
              to="/contact"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/contact"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
