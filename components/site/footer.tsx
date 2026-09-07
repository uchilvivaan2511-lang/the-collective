'use client'

import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './brand-icons'
import { navLinks } from '@/lib/data'

const socials = [
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'LinkedIn', href: '#', Icon: LinkedinIcon },
  { label: 'GitHub', href: '#', Icon: GithubIcon },
]

export function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <footer className="border-t border-border px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="font-serif text-sm font-semibold">C</span>
              </span>
              <span className="text-sm font-semibold tracking-tight">
                THE COLLECTIVE
              </span>
            </div>
            <p className="mt-4 max-w-xs font-serif text-2xl leading-tight tracking-tight text-foreground">
              Built together. Better together.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => go(link.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Say hello
            </h3>
            <a
              href="mailto:hello@thecollective.dev"
              className="mt-4 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4" />
              hello@thecollective.dev
            </a>
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Collective. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made by people, for people.
          </p>
        </div>
      </div>
    </footer>
  )
}
