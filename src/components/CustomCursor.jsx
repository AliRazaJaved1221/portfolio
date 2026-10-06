import React, { useEffect, useRef, useState } from "react";

// Playful cursor: a small gradient dot with a lagging ring around it.
// The ring bounces up in size over clickable elements. Pointer-events-none
// so it never blocks clicks.
export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!supportsHover || reducedMotion) return;

    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx,
      ry = my;
    let hovering = false;
    let frame;

    function onMove(e) {
      mx = e.clientX;
      my = e.clientY;
    }
    function onOver(e) {
      if (e.target.closest("a, button, input, textarea, [data-cursor-hover]")) hovering = true;
    }
    function onOut(e) {
      if (e.target.closest("a, button, input, textarea, [data-cursor-hover]")) hovering = false;
    }

    function raf() {
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(${
          hovering ? 1.9 : 1
        })`;
        ringRef.current.style.borderColor = hovering
          ? "rgba(255,107,74,0.9)"
          : "rgba(139,92,246,0.55)";
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%) scale(${
          hovering ? 0 : 1
        })`;
      }
      frame = requestAnimationFrame(raf);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    frame = requestAnimationFrame(raf);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 rounded-full bg-gradient-primary transition-transform duration-150 ease-out"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-8 w-8 rounded-full border-2 transition-[border-color,transform] duration-200 ease-out"
        style={{ borderColor: "rgba(139,92,246,0.55)" }}
      />
    </>
  );
}
