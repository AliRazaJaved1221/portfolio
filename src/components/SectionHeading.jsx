import React from "react";
import { motion } from "framer-motion";
import { popUp } from "../lib/motion";

export default function SectionHeading({ eyebrow, title, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <motion.span
        variants={popUp(0, 0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-white/50 px-3 py-1 font-mono text-xs tracking-[0.25em] text-violet-600 backdrop-blur-sm"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={popUp(0, 0, 0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="mt-4 font-display text-3xl font-bold text-ink-900 sm:text-4xl"
      >
        {title}
      </motion.h2>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className={`underline-grow mt-4 block h-[4px] w-16 rounded-full bg-gradient-primary ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
