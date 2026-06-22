import { profile, nav } from '../data/content'

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1080px] items-center gap-3 px-6 py-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ink font-display text-[12px] font-semibold text-white">
          {profile.initials}
        </span>
        <span className="font-display text-[15px] font-semibold">{profile.name}</span>
        <nav className="ml-auto hidden items-center gap-5 text-[13px] text-muted sm:flex">
          {nav.map((i) => (
            <a key={i.href} href={i.href} className="transition-colors hover:text-ink">
              {i.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.resumeHref}
          download
          className="ml-auto rounded-lg border border-line px-3 py-1.5 text-[13px] transition-colors hover:border-ink sm:ml-3"
        >
          Резюме PDF
        </a>
      </div>
    </header>
  )
}
