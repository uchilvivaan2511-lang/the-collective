'use client'

import { Sparkles } from 'lucide-react'
import type { Member } from '@/lib/data'
import { MemberAvatar } from './member-avatar'

export function MemberCard({
  member,
  index,
  onOpen,
}: {
  member: Member
  index: number
  onOpen: (member: Member) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(member)}
      aria-label={`View ${member.name}'s profile`}
      className="group flex h-full flex-col rounded-3xl border border-border bg-card p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-24px_rgb(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-secondary px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
          {member.squad}
        </span>
        <span className="font-mono text-[0.65rem] text-muted-foreground">
          #{String(index + 1).padStart(3, '0')}
        </span>
      </div>

      <div className="relative mb-4">
        <MemberAvatar
          name={member.name}
          hue={member.hue}
          className="aspect-square w-full text-5xl transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-card/90 px-2.5 py-1 text-[0.65rem] font-medium text-foreground shadow-sm backdrop-blur-sm">
          <Sparkles className="size-3 text-primary" />
          {member.personality}
        </span>
      </div>

      <h3 className="font-serif text-xl leading-tight tracking-tight">
        {member.name}
      </h3>
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
        {member.role}
      </p>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {member.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-secondary px-2 py-1 text-[0.7rem] font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <span className="text-[0.7rem] text-muted-foreground">Contribution</span>
        <span className="font-mono text-sm font-semibold text-foreground">
          {member.contribution}
        </span>
      </div>
    </button>
  )
}
