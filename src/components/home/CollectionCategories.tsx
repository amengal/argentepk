import Image from "next/image";
import Link from "next/link";
import { categories } from "@/content/site";

export function CollectionCategories() {
  return (
    <div className="border-t border-stone-200/80 bg-[var(--surface)]">
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
              Shop by form
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-stone-900 sm:text-4xl">
              Categories
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-stone-600 sm:text-right">
            Explore silhouettes we return to again and again. Add imagery when your catalogue is ready.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const card = (
              <article className="group flex h-full flex-col border border-stone-200/90 bg-white p-6 transition hover:border-stone-300 hover:shadow-sm">
                {"imageSrc" in cat && cat.imageSrc ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm ring-1 ring-inset ring-stone-900/[0.04]">
                    <Image
                      src={encodeURI(cat.imageSrc)}
                      alt={cat.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] rounded-sm bg-gradient-to-br from-stone-100 to-stone-200/80 ring-1 ring-inset ring-stone-900/[0.04]" />
                )}
                <h3 className="mt-5 font-display text-xl text-stone-900">
                  {cat.title}
                </h3>
                <span className="mt-4 inline-flex text-xs font-medium uppercase tracking-wider text-stone-500 transition group-hover:text-stone-800">
                  View range →
                </span>
              </article>
            );

            return (
              <li key={cat.slug}>
                {"href" in cat && cat.href ? (
                  <Link href={cat.href} className="block h-full">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
