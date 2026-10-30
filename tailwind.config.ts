import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07080A", panel: "#0E1013", raised: "#14171C", line: "#22262D",
        fg: "#E8EAEE", muted: "#8B909C", accent: "#5B8CFF", cyan: "#3DD6F5",
      },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], mono: ["var(--font-mono)", "ui-monospace", "monospace"] },
    },
  },
  plugins: [],
};
export default config;
