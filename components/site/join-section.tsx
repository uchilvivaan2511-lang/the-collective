'use client'

import { useId, useState } from 'react'
import { ArrowRight, Check, PartyPopper } from 'lucide-react'
import { cn } from '@/lib/utils'

const interests = [
  'Engineering',
  'Design',
  'Events',
  'Community',
  'Content',
  'Other',
]

type Errors = {
  name?: string
  email?: string
  interest?: string
  reason?: string
}

export function JoinSection() {
  const nameId = useId()
  const emailId = useId()
  const interestId = useId()
  const reasonId = useId()

  const [values, setValues] = useState({
    name: '',
    email: '',
    interest: '',
    reason: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Please tell us your name.'
    if (!values.email.trim()) {
      next.email = 'We need an email to reach you.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'That email looks off — check it again.'
    }
    if (!values.interest) next.interest = 'Pick an area to get started.'
    if (!values.reason.trim()) {
      next.reason = 'A sentence or two is plenty.'
    } else if (values.reason.trim().length < 10) {
      next.reason = 'Tell us a little more (10+ characters).'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  const update = (key: keyof typeof values, value: string) => {
    setValues((v) => ({ ...v, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  return (
    <section id="join" className="scroll-mt-24 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_40px_80px_-40px_rgb(0,0,0,0.25)]">
        <div className="grid lg:grid-cols-[1fr_1.1fr]">
          {/* Left: invitation */}
          <div className="relative flex flex-col justify-between bg-primary p-8 text-primary-foreground sm:p-10">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(oklch(1 0 0 / 0.6) 1px, transparent 1.4px)',
                backgroundSize: '18px 18px',
                maskImage: 'linear-gradient(200deg, black, transparent 80%)',
              }}
            />
            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/70">
                Join us
              </span>
              <h2 className="mt-3 text-balance font-serif text-4xl leading-[1.02] tracking-tight sm:text-5xl">
                Your seat is waiting.
              </h2>
              <p className="mt-5 max-w-sm text-pretty leading-relaxed text-primary-foreground/85">
                Bring your ideas, curiosity, and energy. There&apos;s always room
                for another builder.
              </p>
            </div>
            <ul className="relative mt-8 space-y-2 text-sm text-primary-foreground/90">
              {['No experience required', 'Meet people who ship', 'Build things that matter'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="size-4" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Right: form or success */}
          <div className="p-8 sm:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <PartyPopper className="size-8" />
                </span>
                <h3 className="mt-6 font-serif text-4xl tracking-tight">
                  You&apos;re on the list.
                </h3>
                <p className="mt-3 max-w-xs text-pretty leading-relaxed text-muted-foreground">
                  Thanks for reaching out. We&apos;ll be in touch.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setValues({ name: '', email: '', interest: '', reason: '' })
                  }}
                  className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor={nameId}
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    value={values.name}
                    onChange={(e) => update('name', e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? `${nameId}-err` : undefined}
                    className={cn(
                      'w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20',
                      errors.name ? 'border-destructive' : 'border-border',
                    )}
                    placeholder="Jordan Rivera"
                  />
                  {errors.name && (
                    <p id={`${nameId}-err`} className="mt-1.5 text-xs text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={emailId}
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    value={values.email}
                    onChange={(e) => update('email', e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? `${emailId}-err` : undefined}
                    className={cn(
                      'w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20',
                      errors.email ? 'border-destructive' : 'border-border',
                    )}
                    placeholder="you@email.com"
                  />
                  {errors.email && (
                    <p id={`${emailId}-err`} className="mt-1.5 text-xs text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={interestId}
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Area of interest
                  </label>
                  <select
                    id={interestId}
                    value={values.interest}
                    onChange={(e) => update('interest', e.target.value)}
                    aria-invalid={!!errors.interest}
                    aria-describedby={errors.interest ? `${interestId}-err` : undefined}
                    className={cn(
                      'w-full appearance-none rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20',
                      errors.interest ? 'border-destructive' : 'border-border',
                      values.interest ? 'text-foreground' : 'text-muted-foreground',
                    )}
                  >
                    <option value="" disabled>
                      Choose one…
                    </option>
                    {interests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                  {errors.interest && (
                    <p id={`${interestId}-err`} className="mt-1.5 text-xs text-destructive">
                      {errors.interest}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={reasonId}
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Why do you want to join?
                  </label>
                  <textarea
                    id={reasonId}
                    rows={3}
                    value={values.reason}
                    onChange={(e) => update('reason', e.target.value)}
                    aria-invalid={!!errors.reason}
                    aria-describedby={errors.reason ? `${reasonId}-err` : undefined}
                    className={cn(
                      'w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20',
                      errors.reason ? 'border-destructive' : 'border-border',
                    )}
                    placeholder="I love building things and want to meet people who do too…"
                  />
                  {errors.reason && (
                    <p id={`${reasonId}-err`} className="mt-1.5 text-xs text-destructive">
                      {errors.reason}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Join the Collective
                  <ArrowRight className="size-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
