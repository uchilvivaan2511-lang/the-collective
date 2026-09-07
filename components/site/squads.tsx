'use client'

import { Code, Palette, Calendar, Users, PenLine, ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { squads } from '@/lib/data'
import { Reveal } from './reveal'

const icons: Record<string, LucideIcon> = {
  code: Code,
  palette: Palette,
  calendar: Calendar,
  users: Users,
  pen: PenLine,
}

export function Squads() {
  return (
    <section id="squads" className="scroll-mt-24 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Where you belong
          </span>
          <h2 className="mt-3 text-balance font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Find your squad
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Small teams. Big ideas.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {squads.map((squad, i) => {
            const Icon = icons[squad.icon]
            return (
              <Reveal key={squad.id} delay={(i % 3) * 70}>
                <button
                  type="button"
                  className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-24px_rgb(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -right-8 -top-8 size-28 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150"
                  />
                  <span className="relative flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="relative mt-5 font-serif text-2xl tracking-tight">
                    {squad.name}
                  </h3>
                  <p className="relative mt-2 leading-relaxed text-muted-foreground">
                    {squad.description}
                  </p>
                  <div className="relative mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-sm font-medium text-foreground">
                      {squad.members} members
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Explore
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
