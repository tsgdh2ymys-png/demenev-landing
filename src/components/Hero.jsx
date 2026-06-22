import { Container } from './ui'
import { hero, profile } from '../data/content'

export default function Hero() {
  return (
    <section className="pt-12 pb-8 sm:pt-16 sm:pb-12">
      <Container>
        <div className="ld-rise">
          <div className="text-[14px] font-medium text-accent">{hero.greeting}</div>
          <h1 className="mt-3 font-display text-[30px] font-semibold leading-[1.12] tracking-tight sm:text-[44px]">
            {hero.titleTop}
            <br />
            {hero.titleBottom}
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-sub">{hero.sub}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={hero.ctaPrimaryHref}
              className="rounded-lg bg-accent px-4 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href={profile.resumeHref}
              download
              className="rounded-lg border border-line px-4 py-2.5 text-[13px] transition-colors hover:border-ink"
            >
              Резюме (PDF)
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
