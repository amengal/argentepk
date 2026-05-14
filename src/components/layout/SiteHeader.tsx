import Link from "next/link";
import { site } from "@/content/site";

const nav = [
  { href: "#collections", label: "Collections" },
  { href: "#about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200/80 bg-[var(--surface)]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-stone-900 sm:text-xl"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm text-stone-600">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-stone-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
