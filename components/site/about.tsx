import { principles } from '@/lib/data'
import { Reveal } from './reveal'

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-secondary/40 px-4 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Who we are
            </span>
            <h2 className="mt-3 text-balance font-serif text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              More than a club.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              We&apos;re a group of people who believe the best things happen
              when different skills, perspectives, and ideas collide.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ul className="divide-y divide-border border-y border-border">
              {principles.map((p) => (
                <li
                  key={p.number}
                  className="group flex items-baseline gap-5 py-5 transition-colors"
                >
                  <span className="font-serif text-2xl tabular-nums text-primary/70 transition-colors group-hover:text-primary">
                    {p.number}
                  </span>
                  <span className="font-serif text-3xl tracking-tight text-foreground transition-transform group-hover:translate-x-1 sm:text-4xl">
                    {p.title}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
