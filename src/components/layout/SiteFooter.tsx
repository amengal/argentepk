import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200/80 bg-[var(--surface-muted)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-display text-stone-700">{site.name}</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
          <a
            href={site.instagramUrl}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-stone-600 transition-colors hover:bg-stone-200/60 hover:text-stone-900"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 shrink-0"
              aria-hidden
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
