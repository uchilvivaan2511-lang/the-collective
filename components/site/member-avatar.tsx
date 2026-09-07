import { cn } from '@/lib/utils'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function MemberAvatar({
  name,
  hue,
  className,
  textClassName,
}: {
  name: string
  hue: number
  className?: string
  textClassName?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-2xl',
        className,
      )}
      style={{
        background: `radial-gradient(120% 120% at 25% 15%, oklch(0.92 0.09 ${hue}) 0%, oklch(0.82 0.13 ${hue}) 45%, oklch(0.66 0.15 ${hue}) 100%)`,
      }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(oklch(1 0 0 / 0.35) 1px, transparent 1.6px)',
          backgroundSize: '10px 10px',
          maskImage: 'linear-gradient(160deg, black, transparent 70%)',
        }}
      />
      <span
        className={cn(
          'relative font-serif font-semibold tracking-tight text-white drop-shadow-sm',
          textClassName,
        )}
        style={{ color: `oklch(0.28 0.08 ${hue})` }}
      >
        {initials(name)}
      </span>
    </div>
  )
}
