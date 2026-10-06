import React, { useEffect, useRef } from "react";

// The page's signature element: a warm paper canvas with large, soft,
// slow-morphing gradient blobs drifting behind everything (violet, coral,
// peach, mint). A few smaller "confetti" specks add sparkle up close.
// Pure CSS — no canvas loop needed, so it stays light on the main thread.
export default function MeshBackground() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    let raf;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;

    function onMove(e) {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    }

    function tick() {
      cx += (tx - cx) * 0.04;
      cy += (ty - cy) * 0.04;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate3d(${cx * 18}px, ${cy * 14}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-canvas">
      {/* Large morphing mesh blobs — the core visual signature */}
      <div ref={parallaxRef} className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[36rem] w-[36rem] bg-violet-400/40 blur-[100px] animate-blob" />
        <div className="absolute top-1/4 -right-40 h-[32rem] w-[32rem] bg-coral-400/35 blur-[110px] animate-blob-slow [animation-delay:2s]" />
        <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] bg-peach-400/40 blur-[100px] animate-blob-slower [animation-delay:4s]" />
        <div className="absolute bottom-1/4 right-1/4 h-[22rem] w-[22rem] bg-mint-300/30 blur-[90px] animate-blob [animation-delay:6s]" />
      </div>

      {/* Fine grain of sparkle specks for texture up close */}
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(139,92,246,0.15)_1px,transparent_1px)] [background-size:34px_34px]" />

      {/* Soft vignette so foreground text keeps strong contrast at the edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(255,250,243,0.55)_100%)]" />
    </div>
  );
}
