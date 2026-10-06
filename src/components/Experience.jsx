import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiBriefcase, FiBarChart2 } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import AnimatedIcon from "./AnimatedIcon";
import { popUpX } from "../lib/motion";
import { experience } from "../data/portfolioData";

const ROLE_ICONS = [
  { icon: FiTrendingUp, variant: "bounce" }, // current role
  { icon: FiBriefcase, variant: "wiggle" },
  { icon: FiBarChart2, variant: "float" },
];

export default function Experience() {
  return (
    <section id="experience" className="container py-20 sm:py-28">
      <SectionHeading eyebrow="The journey // 04" title="Experience" />

      <div className="relative mt-14 ml-3">
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-violet-500/60 via-coral-400/60 to-transparent" />

        {experience.map((role, i) => {
          const { icon, variant } = ROLE_ICONS[i] || ROLE_ICONS[1];
          return (
            <motion.div
              key={role.role + role.org}
              variants={popUpX(i)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="relative py-6 pl-8"
            >
              {/* Animated icon dot on the timeline */}
              <div className="absolute left-0 top-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-primary shadow-glow-violet">
                <AnimatedIcon icon={icon} variant={variant} size={15} color="#ffffff" />
              </div>

              <p className="font-mono text-xs uppercase tracking-wider text-violet-600">{role.date}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-ink-900">
                {role.role} · <span className="text-smoke">{role.org}</span>
              </h3>
              <p className="mt-2 max-w-2xl text-smoke">{role.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
