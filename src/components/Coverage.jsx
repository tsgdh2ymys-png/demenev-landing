import { Container, SectionHeading, StatusChip } from './ui'
import { coverage, statusLegend } from '../data/content'

export default function Coverage() {
  return (
    <section id="vakansiya" className="scroll-mt-24 py-10 sm:py-14">
      <Container>
        <SectionHeading
          title="Что из вакансии я уже закрываю"
          sub="Прошёлся по списку обязанностей и честно отметил, где у меня реальный опыт, где свои проекты, а где пока учусь."
        />
        <div className="overflow-hidden rounded-xl border border-line bg-card">
          {coverage.map((c) => (
            <div
              key={c.n}
              className="grid grid-cols-[56px_24px_1fr] items-start gap-3 border-b border-line px-3 py-3 last:border-0 sm:px-4"
            >
              <StatusChip status={c.status} />
              <span className="font-mono text-[10px] text-muted">{c.n}</span>
              <span className="text-[13px] leading-relaxed">
                <span className="text-ink">{c.duty}.</span> <span className="text-muted">{c.proof}</span>
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[12px] text-muted">
          {statusLegend.map((l) => (
            <span key={l.status} className="flex items-center gap-1.5">
              <StatusChip status={l.status} />
              {l.label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}
