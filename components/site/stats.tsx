import { stats } from '@/lib/data'
import { Reveal } from './reveal'

export function Stats() {
  return (
    <section className="px-4 py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 60}
            className="flex flex-col items-center gap-1 bg-card px-4 py-8 text-center"
          >
            <span className="font-serif text-5xl tracking-tight text-foreground sm:text-6xl">
              {stat.value}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {stat.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
