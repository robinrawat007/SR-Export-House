import { CheckCircle2, ShieldCheck, Truck, Users } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { missionCards } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

const qualityFlow = [
  {
    title: 'Responsible Sourcing',
    description: 'We source from trusted suppliers and farming networks with an emphasis on consistency and fairness.',
    icon: Users,
  },
  {
    title: 'Quality Validation',
    description: 'Each batch is inspected against defined quality parameters before packing and shipment.',
    icon: CheckCircle2,
  },
  {
    title: 'Secure Packaging',
    description: 'Products are packed using suitable materials and handling standards to preserve quality in transit.',
    icon: ShieldCheck,
  },
  {
    title: 'Reliable Dispatch',
    description: 'Our logistics workflow ensures timely dispatch and transparent communication for global buyers.',
    icon: Truck,
  },
]

export function CertificationsPage() {
  usePageMeta({
    title: 'Our Certifications - S.R Export House',
    description:
      'Discover S.R Export House mission, vision, values, and quality-driven export process designed for reliable global supply.',
  })

  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(251,188,52,0.18),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(35,81,48,0.6),transparent_35%)]" />
        <div className="section-wrap relative">
          <Reveal>
            <p className="eyebrow text-brand-gold">Our Certifications</p>
            <h1 className="max-w-4xl font-display text-5xl leading-tight text-white sm:text-6xl">
              Quality, Integrity, and Accountability in Every Shipment
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85 sm:text-2xl">
              Our operational standards are built around transparency, product safety, and dependable export execution.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-wrap">
          <Reveal>
            <SectionHeading
              title="Mission, Vision, and Values"
              description="These principles guide our sourcing, quality systems, and customer relationships."
              center
              className="mx-auto max-w-5xl"
            />
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {missionCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <article className="h-full rounded-sm border border-black/10 bg-white p-8 shadow-soft">
                  <p className="font-display text-7xl leading-none text-brand-primary">{index + 1}.</p>
                  <h3 className="mt-3 font-display text-5xl leading-tight">{card.title}</h3>
                  <p className="mt-5 text-xl leading-relaxed text-brand-text">{card.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-wrap">
          <Reveal>
            <SectionHeading
              title="Our Export Quality Workflow"
              description="A practical quality pipeline that helps us maintain consistency from origin to destination."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {qualityFlow.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <article className="h-full rounded-sm bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1">
                  <step.icon className="h-7 w-7 text-brand-primary" />
                  <h3 className="mt-4 font-display text-4xl leading-tight">{step.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-brand-text">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
