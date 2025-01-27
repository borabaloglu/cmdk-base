import type { Config } from "tailwindcss"

export default {
  content: ["./src/{app,components,constants}/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["var(--font-geist-sans)", "sans"],
      serif: ["var(--font-instrument-serif)", "serif"],
    },
    extend: {
      colors: {
        bg: "oklch(from var(--background) l c h / <alpha-value>)",
        fg: "oklch(from var(--foreground) l c h / <alpha-value>)",
        subtle: {
          DEFAULT: "oklch(from var(--subtle) l c h / <alpha-value>)",
          fg: "oklch(from var(--subtle-fg) l c h / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(from var(--muted) l c h / <alpha-value>)",
          fg: "oklch(from var(--muted-fg) l c h / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(from var(--accent) l c h / <alpha-value>)",
          fg: "oklch(from var(--accent-fg) l c h / <alpha-value>)",
        },
        success: {
          DEFAULT: "oklch(from var(--success) l c h / <alpha-value>)",
          fg: "oklch(from var(--success-fg) l c h / <alpha-value>)",
        },
        danger: {
          DEFAULT: "oklch(from var(--danger) l c h / <alpha-value>)",
          fg: "oklch(from var(--danger-fg) l c h / <alpha-value>)",
        },
        warning: {
          DEFAULT: "oklch(from var(--warning) l c h / <alpha-value>)",
          fg: "oklch(from var(--warning-fg) l c h / <alpha-value>)",
        },
        info: {
          DEFAULT: "oklch(from var(--info) l c h / <alpha-value>)",
          fg: "oklch(from var(--info-fg) l c h / <alpha-value>)",
        },
        link: {
          fg: "oklch(from var(--link-fg) l c h / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
