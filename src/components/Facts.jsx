import { Container } from './ui'
import { facts } from '../data/content'

export default function Facts() {
  return (
    <section className="pb-4">
      <Container>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {facts.map((f, i) => (
            <div key={i} className="rounded-xl border border-line bg-card p-4">
              <div className="font-display text-[22px] font-semibold text-accent">{f.v}</div>
              <div className="mt-1 text-[12px] leading-snug text-muted">{f.k}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
