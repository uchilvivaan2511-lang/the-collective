'use client'

import { ArrowRight } from 'lucide-react'
import { MemberAvatar } from './member-avatar'
import { members } from '@/lib/data'

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const featured = [members[1], members[0], members[3]]

function HeroCard({
  member,
  className,
  style,
}: {
  member: (typeof members)[number]
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      className={
        'absolute w-52 rounded-3xl border border-border bg-card p-4 shadow-[0_20px_50px_-20px_rgb(0,0,0,0.25)] ' +
        (className ?? '')
      }
      style={style}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-secondary px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
          {member.squad}
        </span>
        <span className="font-mono text-[0.65rem] text-muted-foreground">
          #{String(members.indexOf(member) + 1).padStart(3, '0')}
        </span>
      </div>
      <MemberAvatar
        name={member.name}
        hue={member.hue}
        className="mb-3 aspect-square w-full text-4xl"
      />
      <p className="font-serif text-lg leading-tight">{member.name}</p>
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
        {member.role}
      </p>
      <div className="flex flex-wrap gap-1">
        {member.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-secondary px-2 py-0.5 text-[0.65rem] font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function FloatBadge({
  value,
  label,
  className,
}: {
  value: string
  label: string
  className?: string
}) {
  return (
    <div
      className={
        'absolute flex items-center gap-2 rounded-full border border-border bg-card/90 px-3 py-1.5 shadow-sm backdrop-blur-sm ' +
        (className ?? '')
      }
    >
      <span className="font-serif text-sm font-semibold text-primary">{value}</span>
      <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pt-32 sm:pt-36 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(oklch(0.21 0.015 65 / 0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(120% 90% at 50% 0%, black, transparent 75%)',
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            A community of builders &amp; makers
          </span>
          <h1 className="mt-6 text-balance font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Built by people.
            <br />
            <span className="text-primary">Powered by ideas.</span>
          </h1>
          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            A collective of builders, designers, organizers and dreamers
            creating things together.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => go('members')}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Meet the Collective
              <ArrowRight className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => go('questline')}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Explore Questline
            </button>
          </div>
        </div>

        {/* Card composition */}
        <div className="relative mx-auto hidden h-[460px] w-full max-w-md lg:block">
          <HeroCard
            member={featured[0]}
            className="left-0 top-6 -rotate-6"
            style={{ zIndex: 1 }}
          />
          <HeroCard
            member={featured[1]}
            className="left-1/2 top-0 z-20 -translate-x-1/2 rotate-1"
          />
          <HeroCard
            member={featured[2]}
            className="right-0 top-10 rotate-6"
            style={{ zIndex: 1 }}
          />
          <FloatBadge value="42" label="Members" className="left-2 top-0" />
          <FloatBadge value="18" label="Events" className="right-0 top-52" />
          <FloatBadge value="6" label="Squads" className="bottom-8 left-6" />
          <FloatBadge value="1" label="Collective" className="bottom-0 right-8" />
        </div>

        {/* Mobile composition: simplified stack */}
        <div className="relative mx-auto flex h-72 w-full max-w-sm items-center justify-center lg:hidden">
          <div className="absolute -rotate-6 scale-90 opacity-70">
            <div className="w-44 rounded-3xl border border-border bg-card p-4 shadow-lg">
              <MemberAvatar
                name={featured[0].name}
                hue={featured[0].hue}
                className="mb-3 aspect-square w-full text-3xl"
              />
              <p className="font-serif text-base leading-tight">{featured[0].name}</p>
              <p className="text-[0.65rem] font-medium uppercase tracking-wider text-primary">
                {featured[0].role}
              </p>
            </div>
          </div>
          <div className="relative z-10 rotate-2">
            <div className="w-48 rounded-3xl border border-border bg-card p-4 shadow-xl">
              <MemberAvatar
                name={featured[1].name}
                hue={featured[1].hue}
                className="mb-3 aspect-square w-full text-4xl"
              />
              <p className="font-serif text-lg leading-tight">{featured[1].name}</p>
              <p className="text-[0.65rem] font-medium uppercase tracking-wider text-primary">
                {featured[1].role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
