import type { NextConfig } from "next";

/** GitHub Pages project sites are served under `/<repo-name>/`. Set at build time in CI. */
const basePath =
  process.env.BASE_PATH?.replace(/\/$/, "") ||
  process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ||
  "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
