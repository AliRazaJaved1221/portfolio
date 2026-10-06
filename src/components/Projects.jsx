import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiZap,
  FiDatabase,
  FiBarChart2,
  FiCpu,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import AnimatedIcon from "./AnimatedIcon";
import { popUp } from "../lib/motion";
import { projects } from "../data/portfolioData";

// Distinct animated icon per project — keyed by title so the icon stays
// attached to its project regardless of display order.
const PROJECT_ICON_BY_TITLE = {
  "Automation Builder": { icon: FiZap, variant: "wiggle" },
  "Airtable Automation Developer": { icon: FiDatabase, variant: "pulse" },
  "QuickBooks Automated Reporting Pipeline": { icon: FiBarChart2, variant: "float" },
  "AI Agents": { icon: FiCpu, variant: "pulse" },
  "Wellness Core AI": { icon: FiHeart, variant: "heartbeat" },
  "Online Pets Buying and Selling Store": { icon: FiShoppingBag, variant: "float" },
};
const DEFAULT_PROJECT_ICON = { icon: FiCpu, variant: "float" };

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }
  function handleMouseLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  const { icon: ProjectIcon, variant } = PROJECT_ICON_BY_TITLE[project.title] || DEFAULT_PROJECT_ICON;

  return (
    <motion.div
      variants={popUp(index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-shadow hover:shadow-glow-violet"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(139,92,246,0.14), transparent 60%)",
          }}
        />
        <div className="relative flex flex-1 flex-col" style={{ transform: "translateZ(30px)" }}>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Animated icon — plays continuously */}
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600">
                <AnimatedIcon icon={ProjectIcon} variant={variant} size={20} color="currentColor" />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink-900">
                {project.title}
              </h3>
            </div>
            <div className="flex gap-3 text-lg text-smoke">
              {project.repo && (
                <a href={project.repo} data-cursor-hover aria-label="Repository" className="transition-colors hover:text-violet-500">
                  <FiGithub />
                </a>
              )}
              {project.link && (
                <a href={project.link} data-cursor-hover aria-label="Live site" className="transition-colors hover:text-coral-500">
                  <FiArrowUpRight />
                </a>
              )}
            </div>
          </div>
          <p className="text-sm leading-relaxed text-smoke">{project.description}</p>
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ink-900/10 bg-white/40 px-3 py-1 font-mono text-[11px] text-smoke"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="container py-20 sm:py-28">
      <SectionHeading eyebrow="Built things // 03" title="Selected Projects" />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
