import React from "react";
import { FiArrowUp, FiHeart } from "react-icons/fi";
import AnimatedIcon from "./AnimatedIcon";
import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="container flex flex-col items-center justify-between gap-4 border-t border-ink-900/10 py-8 text-sm text-smoke sm:flex-row">
      <div className="flex items-center gap-2">
        <AnimatedIcon icon={FiHeart} variant="heartbeat" size={16} color="#ff6b4a" />
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
      </div>
      <a
        href="#hero"
        data-cursor-hover
        className="flex items-center gap-1.5 rounded-full border border-ink-900/10 px-3 py-1.5 transition-colors hover:border-violet-400 hover:text-violet-600"
      >
        Back to top <FiArrowUp />
      </a>
    </footer>
  );
}
