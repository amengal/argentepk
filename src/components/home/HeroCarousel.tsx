"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { carouselSlides } from "@/content/site";
import { CollectionCategories } from "@/components/home/CollectionCategories";

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5200, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  return (
    <section
      id="collections"
      className="relative overflow-hidden border-b border-stone-200/80 bg-[var(--surface)]"
      aria-label="Collections"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-100/80 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-5xl px-6 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-12">
        <div className="mb-8 max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            New season
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-stone-900 sm:text-5xl">
            Silver that stays close
          </h1>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-sm border border-stone-200/90 bg-white shadow-sm ring-1 ring-stone-900/[0.02]">
            <div ref={emblaRef}>
              <div className="flex">
                {carouselSlides.map((slide) => (
                  <div
                    key={slide.id}
                    className="min-w-0 flex-[0_0_100%] px-8 py-14 sm:px-12 sm:py-16"
                  >
                    <div className="mx-auto max-w-lg text-center sm:text-left">
                      <h2 className="font-display text-3xl text-stone-900 sm:text-4xl">
                        {slide.title}
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-stone-600">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex gap-2" role="tablist" aria-label="Carousel slides">
              {carouselSlides.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={selected === i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    selected === i
                      ? "w-8 bg-stone-800"
                      : "w-1.5 bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition hover:border-stone-300 hover:bg-stone-50"
                aria-label="Previous slide"
              >
                <span aria-hidden className="text-lg leading-none">
                  ‹
                </span>
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition hover:border-stone-300 hover:bg-stone-50"
                aria-label="Next slide"
              >
                <span aria-hidden className="text-lg leading-none">
                  ›
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <CollectionCategories />
    </section>
  );
}
