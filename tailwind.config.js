module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        xs: "1.5rem",
        sm: "2rem",
      },
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1280px",
      },
    },
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        display: ["'Poppins'", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        // Warm paper tones — the light base the mesh blobs float on
        cream: {
          50: "#fffdf9",
          100: "#fdf7ee",
          200: "#f9ecdb",
          300: "#f3e0c9",
        },
        // Dark, ink-y text tones (replaces the old bright-on-dark "starlight")
        ink: {
          900: "#1c1330",
          800: "#2a2044",
          700: "#392c58",
          500: "#5b4d78",
        },
        smoke: "#726a8a",
        // Accents — violet (primary), coral (energy), peach (warmth), mint (spark)
        violet: {
          300: "#c9b8fb",
          400: "#a685fa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        coral: {
          300: "#ffb199",
          400: "#ff8a69",
          500: "#ff6b4a",
          600: "#ef4f2c",
        },
        peach: {
          300: "#ffe0b8",
          400: "#ffc584",
          500: "#ffa759",
          600: "#f4883a",
        },
        mint: {
          300: "#a7f3e6",
          400: "#5eead4",
          500: "#2dd4bf",
          600: "#14b8a6",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at 15% 15%, rgba(139,92,246,0.14) 0%, transparent 55%)",
        "gradient-primary": "linear-gradient(135deg, #8b5cf6 0%, #ff6b4a 55%, #ffa759 100%)",
        "gradient-warm": "linear-gradient(135deg, #ff8a69 0%, #ffa759 100%)",
        "gradient-canvas": "linear-gradient(180deg, #fffaf3 0%, #fdf3ec 45%, #fdeef3 100%)",
      },
      boxShadow: {
        glow: "0 10px 40px rgba(139,92,246,0.22)",
        "glow-violet": "0 10px 40px rgba(139,92,246,0.28)",
        "glow-coral": "0 10px 40px rgba(255,107,74,0.28)",
        "glow-mint": "0 10px 40px rgba(45,212,191,0.28)",
        soft: "0 10px 34px rgba(70,45,110,0.10)",
        "soft-lg": "0 24px 60px rgba(70,45,110,0.14)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marqueeReverse 32s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-in": "slideIn 0.6s ease-out forwards",
        "spin-slow": "spin 40s linear infinite",
        "spin-reverse-slow": "spinReverse 35s linear infinite",
        blob: "blob 18s ease-in-out infinite",
        "blob-slow": "blob 26s ease-in-out infinite",
        "blob-slower": "blob 34s ease-in-out infinite",
        wiggle: "wiggle 1.2s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "gradient-shift": "gradientShift 6s ease infinite",
        "border-spin": "borderSpin 6s linear infinite",
        "bounce-in": "bounceIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        borderSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        spinReverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(139,92,246,0.2)" },
          "50%": { boxShadow: "0 0 45px rgba(139,92,246,0.45)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        blob: {
          "0%, 100%": {
            transform: "translate(0,0) scale(1)",
            borderRadius: "42% 58% 65% 35% / 45% 45% 55% 55%",
          },
          "33%": {
            transform: "translate(4%,-6%) scale(1.08)",
            borderRadius: "60% 40% 30% 70% / 55% 65% 35% 45%",
          },
          "66%": {
            transform: "translate(-5%,5%) scale(0.94)",
            borderRadius: "35% 65% 55% 45% / 40% 50% 50% 60%",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "60%": { transform: "scale(1.03)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
