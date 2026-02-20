import clsx from 'clsx'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx(center ? 'mx-auto text-center' : '', className)}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="mt-4 text-xl leading-relaxed text-brand-text sm:text-2xl">{description}</p> : null}
    </div>
  )
}
