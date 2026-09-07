'use client'

import { Check, MapPin, ArrowRight, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { events, type CollectiveEvent } from '@/lib/data'
import { Reveal } from './reveal'

const statusLabel: Record<CollectiveEvent['status'], string> = {
  completed: 'Completed',
  current: 'Happening now',
  upcoming: 'Upcoming',
}

function EventCard({ event }: { event: CollectiveEvent }) {
  const isCurrent = event.status === 'current'
  return (
    <div
      className={cn(
        'group rounded-3xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgb(0,0,0,0.25)]',
        isCurrent ? 'border-primary/60 ring-1 ring-primary/20' : 'border-border',
      )}
    >
      <div className="flex items-center justify-between">
        <span className="font-serif text-4xl tracking-tight text-foreground/15">
          {event.number}
        </span>
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider',
            event.status === 'completed' &&
              'bg-secondary text-muted-foreground',
            event.status === 'current' && 'bg-primary text-primary-foreground',
            event.status === 'upcoming' &&
              'border border-border bg-card text-foreground',
          )}
        >
          {event.status === 'completed' && <Check className="size-3" />}
          {event.status === 'current' && (
            <span className="size-1.5 rounded-full bg-primary-foreground" />
          )}
          {statusLabel[event.status]}
        </span>
      </div>

      <h3 className="mt-2 font-serif text-2xl leading-tight tracking-tight">
        {event.name}
      </h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">
        {event.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span className="font-mono font-medium text-foreground">{event.date}</span>
        <span className="inline-flex items-center gap-1">
          <MapPin className="size-3.5" />
          {event.location}
        </span>
        <span className="rounded-md bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">
          {event.category}
        </span>
      </div>

      <button
        type="button"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
      >
        View event
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  )
}

function Node({ status }: { status: CollectiveEvent['status'] }) {
  return (
    <span
      className={cn(
        'z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 bg-background',
        status === 'completed' && 'border-primary text-primary',
        status === 'current' && 'border-primary bg-primary text-primary-foreground',
        status === 'upcoming' && 'border-border text-muted-foreground',
      )}
    >
      {status === 'completed' ? (
        <Check className="size-4" />
      ) : status === 'current' ? (
        <span className="size-2 rounded-full bg-primary-foreground" />
      ) : (
        <Circle className="size-2 fill-current" />
      )}
    </span>
  )
}

export function Questline() {
  return (
    <section
      id="questline"
      className="scroll-mt-24 bg-secondary/40 px-4 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            The journey
          </span>
          <h2 className="mt-3 text-balance font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            The Questline
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Every event is another checkpoint.
          </p>
        </Reveal>

        <div className="relative mt-12">
          {/* vertical line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-4 top-0 w-px bg-border lg:left-1/2 lg:-translate-x-1/2"
          />

          <ol className="space-y-6 lg:space-y-2">
            {events.map((event, i) => {
              const left = i % 2 === 0
              return (
                <li key={event.number} className="relative">
                  {/* Mobile / small: left aligned */}
                  <div className="flex gap-5 lg:hidden">
                    <div className="flex flex-col items-center pt-5">
                      <Node status={event.status} />
                    </div>
                    <Reveal className="flex-1 pb-2">
                      <EventCard event={event} />
                    </Reveal>
                  </div>

                  {/* Desktop: alternating */}
                  <div className="hidden items-center gap-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
                    <div className={cn(left ? 'block' : 'invisible')}>
                      {left && (
                        <Reveal>
                          <EventCard event={event} />
                        </Reveal>
                      )}
                    </div>
                    <div className="flex justify-center">
                      <Node status={event.status} />
                    </div>
                    <div className={cn(!left ? 'block' : 'invisible')}>
                      {!left && (
                        <Reveal>
                          <EventCard event={event} />
                        </Reveal>
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
