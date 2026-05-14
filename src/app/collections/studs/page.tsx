import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { elaraPearStuds, site } from "@/content/site";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  title: "Studs",
  description: `${site.name} — studs.`,
};

export default function StudsCollectionPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-stone-600">
            <Link href="/" className="transition-colors hover:text-stone-900">
              Home
            </Link>
            <span className="mx-2 text-stone-400" aria-hidden>
              /
            </span>
            <Link href="/#collections" className="transition-colors hover:text-stone-900">
              Collections
            </Link>
            <span className="mx-2 text-stone-400" aria-hidden>
              /
            </span>
            <span className="text-stone-900">Studs</span>
          </nav>

          <header className="mt-10 border-b border-stone-200/80 pb-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">Collections</p>
            <h1 className="mt-3 font-display text-4xl tracking-tight text-stone-900 sm:text-5xl">Studs</h1>
          </header>

          <section className="mt-14" aria-labelledby="elara-pear-studs-heading">
            <h2
              id="elara-pear-studs-heading"
              className="font-display text-3xl tracking-tight text-stone-900 sm:text-4xl"
            >
              {elaraPearStuds.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-600">
              {elaraPearStuds.description}
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {elaraPearStuds.images.map((src, index) => (
                <div
                  key={src}
                  className="relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-100 ring-1 ring-stone-900/[0.04]"
                >
                  <Image
                    src={encodeURI(src)}
                    alt={`${elaraPearStuds.title} — photo ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
