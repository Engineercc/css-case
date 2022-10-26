module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1020px",
        xl: "1440px",
      },
      colors: {
        // darkBlue: "hsl(217, 28%, 15%)",
        mainDark: "#0A142F;",
        darkBlue1: "hsl(218, 28%, 13%)",
        darkBlue2: "hsl(216, 53%, 9%)",
        darkBlue3: "hsl(219, 30%, 18%)",
        accentCyan: "hsl(176, 68%, 64%)",
        accentBlue: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
        colorMain: "#FFC93E",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        redRose:["Red Rose","sans-serif"]
      },
      backgroundImage: (theme) => ({
        "head-left": "url('../images/bg-left-1.svg')",
        "head-left-bg": "url('../images/ellipse.png')",
        "head-right": "url('../images/header-right-side.png')",
        "head-left-circle": "url('../images/left-circle.png')",
        "hero-bg-desktop": "url('../images/hero-bg-vector.png')",
        "hero-bg-mobile": "url('../images/hero-vector-mobile.png')",
      }),
      boxShadow: {
        neon: "0px 0px 8px 0px #fff",
        imageNeon: "0px 0px 8px 2px #a0f0f2",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
