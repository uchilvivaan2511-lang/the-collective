'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks } from '@/lib/data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = [...navLinks.map((l) => l.id), 'join']
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className={cn(
          'pointer-events-auto mt-4 flex w-full max-w-5xl items-center justify-between rounded-full border border-border bg-card/80 pl-5 pr-3 backdrop-blur-md transition-all duration-300',
          scrolled ? 'py-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)]' : 'py-2.5 shadow-sm',
        )}
      >
        <button
          type="button"
          onClick={() => go('home')}
          className="flex items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="font-serif text-sm font-semibold">C</span>
          </span>
          <span className="text-[0.9rem] font-semibold tracking-tight">
            THE COLLECTIVE
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => go(link.id)}
                className={cn(
                  'rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                  active === link.id
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
                aria-current={active === link.id ? 'true' : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go('join')}
            className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0 sm:inline-flex"
          >
            Join the Collective
            <ArrowRight className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'pointer-events-auto fixed inset-0 top-0 z-40 flex flex-col bg-background/95 px-6 pb-10 pt-24 backdrop-blur-md transition-all duration-300 md:hidden',
          open
            ? 'visible opacity-100'
            : 'invisible translate-y-2 opacity-0',
        )}
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => go(link.id)}
                className={cn(
                  'w-full rounded-2xl px-4 py-4 text-left font-serif text-3xl transition-colors',
                  active === link.id ? 'text-primary' : 'text-foreground',
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => go('join')}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 text-base font-semibold text-primary-foreground"
        >
          Join the Collective
          <ArrowRight className="size-5" />
        </button>
      </div>
    </header>
  )
}
