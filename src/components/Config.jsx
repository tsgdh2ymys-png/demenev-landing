import { Container, SectionHeading } from './ui'
import { config } from '../data/content'

function Box({ data }) {
  return (
    <div className="rounded-xl border border-line bg-card p-5">
      <h3 className="mb-3 font-display text-[14px] font-semibold">{data.title}</h3>
      <dl className="space-y-2.5">
        {data.rows.map((r, i) => (
          <div key={i}>
            <dt className="text-[12px] text-muted">{r.k}</dt>
            <dd className="text-[13px] leading-relaxed text-[#3f4757]">{r.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default function Config() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <SectionHeading title="Инструменты и немного обо мне" />
        <div className="grid gap-3.5 md:grid-cols-2">
          <Box data={config.stack} />
          <Box data={config.profile} />
        </div>
      </Container>
    </section>
  )
}
