import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiCloud, FiZap, FiTool } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import AnimatedIcon from "./AnimatedIcon";
import { popUp } from "../lib/motion";
import { skillGroups } from "../data/portfolioData";

// Icon + motion variant per skill category
const CATEGORY_META = {
  "Frontend":               { icon: FiCode, variant: "float" },
  "Backend & Cloud":        { icon: FiCloud, variant: "float" },
  "Automation & Workflows": { icon: FiZap, variant: "wiggle" },
  "Tools & Practice":       { icon: FiTool, variant: "wiggle" },
};

export default function Skills() {
  return (
    <section id="skills" className="container py-20 sm:py-28">
      <SectionHeading eyebrow="Toolbelt // 02" title="Skills" />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, gi) => {
          const meta = CATEGORY_META[group.category] || { icon: FiCode, variant: "float" };
          return (
            <motion.div
              key={group.category}
              variants={popUp(gi)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="glass card-hover rounded-3xl p-6"
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow-violet">
                <AnimatedIcon icon={meta.icon} variant={meta.variant} size={26} color="#ffffff" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink-900">
                {group.category}
              </h3>
              <div className="mt-6 space-y-5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm text-smoke">{skill.name}</span>
                      <span className="font-mono text-xs text-violet-600">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-900/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 1, delay: 0.15 * si, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
