'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { members, filters, type Category, type Member } from '@/lib/data'
import { MemberCard } from './member-card'
import { MemberModal } from './member-modal'
import { Reveal } from './reveal'

export function MembersSection() {
  const [active, setActive] = useState<Category | 'all'>('all')
  const [selected, setSelected] = useState<Member | null>(null)

  const visible = useMemo(() => {
    if (active === 'all') return members
    return members.filter((m) => m.categories.includes(active))
  }, [active])

  return (
    <section id="members" className="scroll-mt-24 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            The people
          </span>
          <h2 className="mt-3 text-balance font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Meet the Collective
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Different skills. Different perspectives. One community.
          </p>
        </Reveal>

        <Reveal
          as="div"
          className="mt-8 flex flex-wrap gap-2"
          delay={80}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActive(filter.id)}
              aria-pressed={active === filter.id}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                active === filter.id
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground',
              )}
            >
              {filter.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((member, i) => (
            <Reveal key={member.id} delay={(i % 3) * 70}>
              <MemberCard
                member={member}
                index={members.indexOf(member)}
                onOpen={setSelected}
              />
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            No members in this squad yet.
          </p>
        )}
      </div>

      <MemberModal member={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
