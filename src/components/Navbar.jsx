import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { profile } from "../data/portfolioData";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      {/* Scroll progress indicator */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-primary"
      />

      <nav
        className={`container flex items-center justify-between rounded-full px-4 py-2.5 transition-colors duration-300 sm:px-5 ${
          scrolled ? "glass" : ""
        }`}
      >
        <a
          href="#hero"
          data-cursor-hover
          className="font-display text-lg font-semibold tracking-tight text-ink-900 transition-transform hover:scale-105"
        >
          {profile.name.split(" ")[0]}
          <span className="text-coral-500">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                data-cursor-hover
                className={`relative rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                  active === id ? "text-white" : "text-ink-700 hover:text-ink-900"
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-primary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          data-cursor-hover
          className="btn-shine hidden rounded-full border border-ink-900/15 px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-white/60 hover:shadow-glow-violet lg:inline-block"
        >
          <span>Say hello</span>
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          data-cursor-hover
          className="text-2xl text-ink-900 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {open ? <HiX /> : <HiMenu />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="container mt-2 lg:hidden"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
              className="glass flex flex-col gap-1 rounded-3xl p-3"
            >
              {LINKS.map(({ id, label }) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                  className={`rounded-2xl px-4 py-3 font-mono text-sm uppercase tracking-wider transition-colors ${
                    active === id ? "bg-violet-500/10 text-violet-600" : "text-ink-700 hover:bg-white/40 hover:text-ink-900"
                  }`}
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                className="mt-1 rounded-2xl bg-gradient-primary px-4 py-3 text-center font-mono text-sm uppercase tracking-wider text-white"
              >
                Say hello
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
