import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import AnimatedIcon from "./AnimatedIcon";
import { popUp } from "../lib/motion";
import { about } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="container py-20 sm:py-28">
      <SectionHeading eyebrow="Say hello // 01" title="About" />

      <div className="mt-12 grid gap-10 md:grid-cols-5">
        {/* Bio Text */}
        <motion.div
          variants={popUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-4 md:col-span-3"
        >
          {/* Waving hello beside the bio heading */}
          <div className="flex items-center gap-3 mb-2">
            <AnimatedIcon emoji="👋" variant="wave" size={30} />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-violet-600">
              Hey there!
            </span>
          </div>

          {about.bio.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-smoke">
              {p}
            </p>
          ))}
        </motion.div>

        {/* Stats card with animated icons */}
        <motion.div
          variants={popUp(1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="glass card-hover rounded-3xl p-6 md:col-span-2"
        >
          <div className="flex items-center gap-2 mb-4">
            <AnimatedIcon icon={FiBriefcase} variant="bounce" size={18} color="#ff6b4a" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-coral-500">
              System readout
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-6">
            {about.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-[11px] uppercase tracking-wide text-smoke">
                  {s.label}
                </dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-ink-900">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Location */}
          <div className="mt-6 flex items-center gap-2 border-t border-ink-900/10 pt-4">
            <AnimatedIcon icon={FiMapPin} variant="bounce" size={16} color="#8b5cf6" />
            <span className="text-sm text-smoke">Lahore, Pakistan</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
