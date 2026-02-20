import clsx from 'clsx'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
  className?: string
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={clsx(center ? 'mx-auto text-center' : '', className)}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2
        className={clsx(
          'section-title',
          light ? 'text-white' : '',
        )}
      >
        {title}
      </h2>

      {/* Decorative gradient underline */}
      <span
        className={clsx('section-heading-rule', center ? 'mx-auto' : '')}
        aria-hidden
      />

      {description ? (
        <p
          className={clsx(
            'mt-5 text-lg leading-relaxed sm:text-xl',
            light ? 'text-white/75' : 'text-brand-text',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
