import type { Config } from "tailwindcss";

/**
 * Tailwind CSS v4: theme extensions and design tokens live in `src/app/globals.css`
 * (`@theme`, `@utility`, `:root`). This file is loaded via `@config` for content paths
 * and tooling that expects a config module at the project root.
 */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
} satisfies Config;
