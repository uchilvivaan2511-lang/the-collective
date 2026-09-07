'use client'

import { useEffect, useRef } from 'react'
import { X, ArrowUpRight } from 'lucide-react'
import type { Member } from '@/lib/data'
import { MemberAvatar } from './member-avatar'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './brand-icons'

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
}

export function MemberModal({
  member,
  onClose,
}: {
  member: Member | null
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!member) return
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], input, [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [member, onClose])

  if (!member) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="member-modal-name"
    >
      <button
        type="button"
        aria-label="Close profile"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-in fade-in"
      />
      <div
        ref={panelRef}
        className="relative z-10 flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl border border-border bg-card shadow-2xl duration-300 animate-in slide-in-from-bottom-4 sm:rounded-3xl sm:zoom-in-95"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur-sm transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="size-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <MemberAvatar
              name={member.name}
              hue={member.hue}
              className="size-24 shrink-0 text-3xl"
            />
            <div className="pt-1">
              <span className="inline-block rounded-full bg-secondary px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                {member.squad} Squad
              </span>
              <h2
                id="member-modal-name"
                className="mt-2 font-serif text-3xl leading-none tracking-tight"
              >
                {member.name}
              </h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-primary">
                {member.role}
              </p>
            </div>
          </div>

          <p className="mt-6 leading-relaxed text-muted-foreground">{member.bio}</p>

          <div className="mt-6">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Skills
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {member.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-secondary px-2.5 py-1 text-sm font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="font-serif text-3xl text-foreground">
                {member.contribution}
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Contribution
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="font-serif text-xl leading-tight text-primary">
                {member.personality}
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Known for
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            {Object.entries(member.socials).map(([key, href]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons]
              if (!Icon || !href) return null
              return (
                <a
                  key={key}
                  href={href}
                  aria-label={`${member.name} on ${key}`}
                  className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon className="size-4" />
                </a>
              )
            })}
            <span className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground">
              Member profile
              <ArrowUpRight className="size-3.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
