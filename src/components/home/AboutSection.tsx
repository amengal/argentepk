import { about } from "@/content/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-stone-200/80 bg-[var(--surface-muted)]"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-stone-900 sm:text-4xl">
            {about.heading}
          </h2>
          <div className="mx-auto mt-6 h-px w-12 bg-stone-300" aria-hidden />
          <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-stone-600 sm:text-center sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
