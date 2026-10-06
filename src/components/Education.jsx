import React from "react";
import { motion } from "framer-motion";
import { GiGraduateCap } from "react-icons/gi";
import SectionHeading from "./SectionHeading";
import AnimatedIcon from "./AnimatedIcon";
import { popUp } from "../lib/motion";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="container py-20 sm:py-28">
      <SectionHeading eyebrow="Roots // 05" title="Education" />

      <div className="mt-12 space-y-4">
        {education.map((ed, i) => (
          <motion.div
            key={ed.degree}
            variants={popUp(i)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="glass card-hover flex flex-col gap-4 rounded-3xl p-7 sm:flex-row sm:items-center"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow-violet">
              <AnimatedIcon icon={GiGraduateCap} variant="bounce" size={32} color="#ffffff" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-violet-600">{ed.date}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink-900">
                {ed.degree}
              </h3>
              <p className="text-smoke">{ed.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
