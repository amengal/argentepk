const publicBase = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

/** Root-relative path to a file in `public/` (must start with `/`). */
export function assetUrl(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${publicBase}${path}`;
}
