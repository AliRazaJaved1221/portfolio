import React, { useState } from "react";
import AnimatedIcon from "./AnimatedIcon";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiPhone, FiCode } from "react-icons/fi";
import {
  SiReact,
  SiPython,
  SiJavascript,
  SiTailwindcss,
  SiFastapi,
  SiGooglecloud,
  SiFirebase,
  SiRedux,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiAirtable,
  SiN8N,
  SiZapier,
  SiMake,
} from "react-icons/si";
import { TbBrandOffice, TbGraph } from "react-icons/tb";
import { profile } from "../data/portfolioData";

// Custom SVG for GoHighLevel (GHL)
function GhlIcon({ size = 16, color = "currentColor", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 14.5L12 6.5L20 14.5" />
      <path d="M7 18.5L12 13.5L17 18.5" />
    </svg>
  );
}

// Custom SVG for FalkorDB Graph Database
function FalkorDbIcon({ size = 16, color = "currentColor", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="6" cy="6" r="3" fill={color} fillOpacity="0.25" />
      <circle cx="18" cy="6" r="3" fill={color} fillOpacity="0.25" />
      <circle cx="12" cy="18" r="3" fill={color} fillOpacity="0.25" />
      <line x1="8.5" y1="7" x2="15.5" y2="7" />
      <line x1="7.5" y1="8.5" x2="10.5" y2="15.5" />
      <line x1="16.5" y1="8.5" x2="13.5" y2="15.5" />
    </svg>
  );
}

// Inner orbital satellites (Core Languages & Web)
const INNER_ORBIT_ICONS = [
  { label: "React.js", Icon: SiReact, color: "#8b5cf6", angle: 0 },
  { label: "Python", Icon: SiPython, color: "#ffa759", angle: 90 },
  { label: "FastAPI", Icon: SiFastapi, color: "#ff6b4a", angle: 180 },
  { label: "JavaScript", Icon: SiJavascript, color: "#f4883a", angle: 270 },
];

// Middle orbital satellites (Cloud, DB & Styling)
const MID_ORBIT_ICONS = [
  { label: "Firebase", Icon: SiFirebase, color: "#f59e0b", angle: 30 },
  { label: "Google Cloud", Icon: SiGooglecloud, color: "#60a5fa", angle: 102 },
  { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#2dd4bf", angle: 174 },
  { label: "FalkorDB", Icon: FalkorDbIcon, color: "#f43f5e", angle: 246 },
  { label: "Git", Icon: SiGit, color: "#f97316", angle: 318 },
];

// Outer orbital satellites (Automation & Productivity)
const OUTER_ORBIT_ICONS = [
  { label: "GoHighLevel", Icon: GhlIcon, color: "#22c55e", angle: 15 },
  { label: "n8n", Icon: SiN8N, color: "#fb7185", angle: 75 },
  { label: "Make.com", Icon: SiMake, color: "#a685fa", angle: 135 },
  { label: "Zapier", Icon: SiZapier, color: "#fb923c", angle: 195 },
  { label: "Airtable", Icon: SiAirtable, color: "#facc15", angle: 255 },
  { label: "Microsoft Office", Icon: TbBrandOffice, color: "#ea580c", angle: 315 },
];

// Marquee Row 1: Core Frameworks, Languages & Cloud
const MARQUEE_ROW_1 = [
  { label: "React.js", Icon: SiReact, color: "#8b5cf6" },
  { label: "Python", Icon: SiPython, color: "#ffa759" },
  { label: "FastAPI", Icon: SiFastapi, color: "#ff6b4a" },
  { label: "JavaScript", Icon: SiJavascript, color: "#f4883a" },
  { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#2dd4bf" },
  { label: "HTML5", Icon: SiHtml5, color: "#f97316" },
  { label: "CSS3", Icon: SiCss3, color: "#38bdf8" },
  { label: "Bootstrap", Icon: SiBootstrap, color: "#a855f7" },
  { label: "Google Cloud", Icon: SiGooglecloud, color: "#60a5fa" },
  { label: "Firebase", Icon: SiFirebase, color: "#f59e0b" },
  { label: "FalkorDB", Icon: FalkorDbIcon, color: "#f43f5e" },
  { label: "Redux", Icon: SiRedux, color: "#a685fa" },
];

// Marquee Row 2: Automation, Workflows & Productivity Tools
const MARQUEE_ROW_2 = [
  { label: "GoHighLevel", Icon: GhlIcon, color: "#22c55e" },
  { label: "n8n", Icon: SiN8N, color: "#fb7185" },
  { label: "Make.com", Icon: SiMake, color: "#a685fa" },
  { label: "Zapier", Icon: SiZapier, color: "#fb923c" },
  { label: "Airtable", Icon: SiAirtable, color: "#facc15" },
  { label: "Git", Icon: SiGit, color: "#f05032" },
  { label: "GitHub", Icon: SiGithub, color: "#392c58" },
  { label: "Microsoft Office", Icon: TbBrandOffice, color: "#ea580c" },
  { label: "Cypher Queries", Icon: TbGraph, color: "#2dd4bf" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function NameReveal({ text }) {
  const letters = text.split("");
  return (
    <span className="inline-block">
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.035, ease: "easeOut" }}
          className="inline-block"
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

function OrbitBadge() {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isUniverseHovered, setIsUniverseHovered] = useState(false);

  const isPaused = isUniverseHovered || Boolean(hoveredTech);

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      onMouseEnter={() => setIsUniverseHovered(true)}
      onMouseLeave={() => {
        setIsUniverseHovered(false);
        setHoveredTech(null);
      }}
      className="relative mx-auto mb-16 h-40 w-40 xs:h-48 xs:w-48 sm:mb-20 sm:h-64 sm:w-64"
    >
      {/* Background Orbit Ring Geometries */}
      <div className="pointer-events-none absolute inset-0 rounded-full border border-ink-900/10" />
      <div className="pointer-events-none absolute -inset-4 rounded-full border border-dashed border-violet-500/25 sm:-inset-6" />
      <div className="pointer-events-none absolute -inset-9 rounded-full border border-dashed border-coral-400/20 sm:-inset-14" />
      <div className="pointer-events-none absolute -inset-12 rounded-full border border-ink-900/5 sm:-inset-20" />

      {/* Ring 1: Inner Orbit (Core Languages) */}
      <div
        className="pointer-events-none absolute -inset-4 animate-spin-slow z-30 sm:-inset-6"
        style={{
          animationDuration: "24s",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {INNER_ORBIT_ICONS.map((tech) => {
          const { label, Icon, color, angle } = tech;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 50 * Math.cos(rad);
          const y = 50 + 50 * Math.sin(rad);
          const isItemHovered = hoveredTech?.label === label;

          return (
            <div
              key={label}
              className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ left: `${x}%`, top: `${y}%` }}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div
                data-cursor-hover
                className={`flex h-7 w-7 items-center justify-center rounded-full glass transition-all duration-200 sm:h-8 sm:w-8 ${
                  isItemHovered ? "scale-135 border-violet-400" : "hover:scale-125"
                }`}
                style={{
                  boxShadow: isItemHovered ? `0 0 25px ${color}` : `0 0 12px ${color}40`,
                }}
              >
                <Icon size={15} color={color} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Ring 2: Middle Orbit (Cloud, DB, Style) — Rotating Counter-Clockwise */}
      <div
        className="pointer-events-none absolute -inset-9 animate-spin-reverse-slow z-20 sm:-inset-14"
        style={{
          animationDuration: "36s",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {MID_ORBIT_ICONS.map((tech) => {
          const { label, Icon, color, angle } = tech;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 50 * Math.cos(rad);
          const y = 50 + 50 * Math.sin(rad);
          const isItemHovered = hoveredTech?.label === label;

          return (
            <div
              key={label}
              className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ left: `${x}%`, top: `${y}%` }}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div
                data-cursor-hover
                className={`flex h-7 w-7 items-center justify-center rounded-full glass transition-all duration-200 sm:h-8 sm:w-8 ${
                  isItemHovered ? "scale-135 border-coral-400" : "hover:scale-125"
                }`}
                style={{
                  boxShadow: isItemHovered ? `0 0 25px ${color}` : `0 0 12px ${color}40`,
                }}
              >
                <Icon size={14} color={color} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Ring 3: Outer Orbit (Automation & Tools) */}
      <div
        className="pointer-events-none absolute -inset-12 animate-spin-slow z-10 sm:-inset-20"
        style={{
          animationDuration: "48s",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {OUTER_ORBIT_ICONS.map((tech) => {
          const { label, Icon, color, angle } = tech;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 50 * Math.cos(rad);
          const y = 50 + 50 * Math.sin(rad);
          const isItemHovered = hoveredTech?.label === label;

          return (
            <div
              key={label}
              className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ left: `${x}%`, top: `${y}%` }}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div
                data-cursor-hover
                className={`flex h-7 w-7 items-center justify-center rounded-full glass transition-all duration-200 sm:h-8 sm:w-8 ${
                  isItemHovered ? "scale-135 border-mint-400" : "hover:scale-125"
                }`}
                style={{
                  boxShadow: isItemHovered ? `0 0 25px ${color}` : `0 0 12px ${color}40`,
                }}
              >
                <Icon size={14} color={color} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Center Avatar Badge - Text only visible in center circle */}
      <div className="absolute inset-5 flex items-center justify-center rounded-full bg-gradient-primary shadow-glow-violet sm:inset-6 overflow-hidden z-40">
        <AnimatePresence mode="wait">
          {hoveredTech ? (
            <motion.div
              key={hoveredTech.label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center p-3 text-center"
            >
              <hoveredTech.Icon size={32} color="#ffffff" />
              <span className="mt-1.5 max-w-[120px] font-display text-xs font-bold uppercase tracking-wider text-white sm:text-sm leading-tight">
                {hoveredTech.label}
              </span>
            </motion.div>
          ) : (
            <motion.span
              key="initials"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              className="font-display text-3xl font-bold tracking-wider text-white sm:text-4xl"
            >
              {initials}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden px-4 pt-32 pb-20 text-center sm:px-6 sm:pt-40 sm:pb-24"
    >
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
        <motion.div variants={item}>
          <OrbitBadge />
          {/* Small animated code glyph floating below the orbit */}
          <div className="mx-auto -mt-4 flex justify-center opacity-70">
            <AnimatedIcon icon={FiCode} variant="float" size={28} color="#8b5cf6" />
          </div>
        </motion.div>

        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/50 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-ink-700 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-coral-500" />
          Available for new work
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-3xl font-semibold leading-tight text-ink-900 xs:text-4xl sm:text-6xl"
        >
          <NameReveal text={`Hi, I'm ${profile.name.split(" ")[0]}`} />
          <br />
          <span className="text-gradient-animated">{profile.role}</span>
        </motion.h1>

        <motion.p variants={item} className="mx-auto mt-6 max-w-2xl text-base text-ink-700 sm:text-lg">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" data-cursor-hover className="btn-primary">
            <span>View my work</span>
          </a>
          <a href="#contact" data-cursor-hover className="btn-secondary">
            <span>Get in touch</span>
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center justify-center gap-5 text-xl text-ink-700">
          <a href={profile.socials.github} data-cursor-hover aria-label="GitHub" className="transition-colors hover:text-violet-500">
            <FiGithub />
          </a>
          <a href={profile.socials.linkedin} data-cursor-hover aria-label="LinkedIn" className="transition-colors hover:text-mint-500">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} data-cursor-hover aria-label="Email" className="transition-colors hover:text-coral-500">
            <FiMail />
          </a>
          <a href={`tel:${profile.phone}`} data-cursor-hover aria-label="Phone" className="transition-colors hover:text-ink-900">
            <FiPhone />
          </a>
        </motion.div>
      </motion.div>

      {/* Dual Marquee Tech Streams */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-16 flex w-full max-w-5xl flex-col gap-4 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]"
      >
        {/* Stream 1: Core Frameworks & Cloud (Leftwards) */}
        <div className="flex w-max animate-marquee gap-6 sm:gap-8">
          {[...MARQUEE_ROW_1, ...MARQUEE_ROW_1].map(({ label, Icon, color }, i) => (
            <div
              key={`row1-${i}`}
              className="glass flex items-center gap-2 rounded-full px-3.5 py-1.5 text-ink-700 transition-colors hover:text-ink-900"
            >
              <Icon size={16} color={color} />
              <span className="font-mono text-xs uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>

        {/* Stream 2: Automation, Workflows & Tools (Rightwards) */}
        <div className="flex w-max animate-marquee-reverse gap-6 sm:gap-8">
          {[...MARQUEE_ROW_2, ...MARQUEE_ROW_2].map(({ label, Icon, color }, i) => (
            <div
              key={`row2-${i}`}
              className="glass flex items-center gap-2 rounded-full px-3.5 py-1.5 text-ink-700 transition-colors hover:text-ink-900"
            >
              <Icon size={16} color={color} />
              <span className="font-mono text-xs uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#about"
        data-cursor-hover
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="mt-12 flex flex-col items-center gap-2 text-ink-700"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <FiArrowDown />
        </motion.span>
      </motion.a>
    </section>
  );
}
