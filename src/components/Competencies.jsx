import { Container, SectionHeading } from './ui'
import { competencies } from '../data/content'

export default function Competencies() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <SectionHeading title="Что я умею" sub="Коротко по областям, в которых работаю." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((c, i) => (
            <div key={i} className="rounded-xl border border-line bg-card p-4">
              <h3 className="font-display text-[14px] font-semibold">{c.title}</h3>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-sub">{c.items}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
