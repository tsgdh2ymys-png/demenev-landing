import { Container, SectionHeading } from './ui'
import { projects } from '../data/content'

export default function Registry() {
  return (
    <section id="proekty" className="scroll-mt-24 py-10 sm:py-14">
      <Container>
        <SectionHeading
          title="Проекты"
          sub="Где-то убирал ручную работу в командах, а Vibehost и MoodCare собрал с нуля как свои продукты."
        />
        <div className="grid gap-3.5 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={i}
              className="rounded-xl border border-line bg-card p-5 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2">
                <h3 className="font-display text-[15px] font-semibold">{p.title}</h3>
                <span
                  className={`ml-auto rounded-full px-2.5 py-0.5 text-[10px] font-medium ${
                    p.status.variant === 'done' ? 'bg-okbg text-ok' : 'bg-amberbg text-amber'
                  }`}
                >
                  {p.status.label}
                </span>
              </div>
              <div className="mt-1 text-[11px] text-muted">{p.place}</div>
              <p className="mt-3 text-[13px] leading-relaxed text-[#3f4757]">{p.body}</p>
              {p.stack && <div className="mt-3 font-mono text-[10.5px] text-muted">{p.stack}</div>}
              <div className="mt-3 border-t border-line pt-3 text-[13px] font-medium text-accent">{p.result}</div>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-[12px] font-medium text-accent hover:underline"
                >
                  Открыть сайт →
                </a>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
