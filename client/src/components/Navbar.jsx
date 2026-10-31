
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Portfolio", "/portfolio"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur transition-shadow duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xl font-extrabold tracking-tight text-ink"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark"><span /></span>
          IT Soft
        </Link>

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
          {nav.map(([label, path]) => (
            <Link
              key={label}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-orange"
            >
              {label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="orange-btn mt-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:mt-0"
          >
            Get Started
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
