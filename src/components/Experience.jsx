import { Container, SectionHeading } from './ui'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="opyt" className="scroll-mt-24 py-10 sm:py-14">
      <Container>
        <SectionHeading
          title="Опыт работы"
          sub="Три места за пять с лишним лет. Показываю то, что ближе всего к автоматизации и этой роли."
        />
        <div className="space-y-3.5">
          {experience.map((e, i) => (
            <div key={i} className="rounded-xl border border-line bg-card p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-[15px] font-semibold">{e.company}</h3>
                <span className="text-[13px] text-ink">{e.role}</span>
                <span className="ml-auto font-mono text-[11px] text-muted">{e.period}</span>
              </div>
              <div className="mt-1 text-[12.5px] leading-relaxed text-muted">{e.summary}</div>
              <ul className="mt-3 space-y-1.5">
                {e.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-[13px] leading-relaxed text-[#3f4757]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
