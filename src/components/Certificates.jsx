import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiStar } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import AnimatedIcon from "./AnimatedIcon";
import { popUp } from "../lib/motion";
import { certificates } from "../data/portfolioData";

const CERT_ICONS = [
  { icon: FiAward, variant: "wiggle" },
  { icon: FiStar, variant: "pulse" },
];

export default function Certificates() {
  return (
    <section id="certificates" className="container py-20 sm:py-28">
      <SectionHeading eyebrow="Proof // 06" title="Certificates" />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {certificates.map((cert, i) => {
          const { icon, variant } = CERT_ICONS[i % CERT_ICONS.length];
          return (
            <motion.div
              key={cert.name}
              variants={popUp(i)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="glass card-hover rounded-3xl p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow-violet">
                <AnimatedIcon icon={icon} variant={variant} size={26} color="#ffffff" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
                {cert.name}
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-violet-600">{cert.org}</p>
              <p className="mt-3 text-sm text-smoke">{cert.description}</p>
              <p className="mt-3 font-mono text-xs text-smoke/70">{cert.date}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
