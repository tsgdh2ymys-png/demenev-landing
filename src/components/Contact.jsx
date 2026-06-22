import { Container } from './ui'
import { cta, contacts, profile } from '../data/content'

export default function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 py-10 sm:py-14">
      <Container>
        <div className="rounded-2xl bg-ink p-7 text-white sm:p-10">
          <h2 className="font-display text-[22px] font-semibold tracking-tight sm:text-[26px]">{cta.title}</h2>
          <p className="mt-2.5 max-w-xl text-[14px] leading-relaxed text-[#c2c8d2]">{cta.text}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={contacts.telegram.href}
              className="rounded-lg bg-white px-4 py-2.5 text-[13px] font-medium text-ink transition-opacity hover:opacity-90"
            >
              Telegram {contacts.telegram.label}
            </a>
            <a
              href={contacts.email.href}
              className="rounded-lg border border-[#374151] px-4 py-2.5 text-[13px] text-white transition-colors hover:bg-white/10"
            >
              Написать на почту
            </a>
            <a
              href={profile.resumeHref}
              download
              className="rounded-lg border border-[#374151] px-4 py-2.5 text-[13px] text-white transition-colors hover:bg-white/10"
            >
              Резюме (PDF)
            </a>
          </div>
          <div className="mt-5 font-mono text-[10.5px] text-[#8b93a1]">{cta.note}</div>
        </div>
      </Container>
    </section>
  )
}
