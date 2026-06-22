export function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-[1080px] px-6 ${className}`}>{children}</div>
}

export function SectionHeading({ kicker, title, sub }) {
  return (
    <div className="mb-4">
      {kicker && <div className="font-mono text-[11px] text-muted">{kicker}</div>}
      <h2 className="mt-1 font-display text-[19px] font-semibold tracking-tight sm:text-[21px]">{title}</h2>
      {sub && <p className="mt-1 max-w-2xl text-[13px] text-muted">{sub}</p>}
    </div>
  )
}

const chipStyle = {
  opyt: 'bg-okbg text-ok',
  pet: 'bg-accentbg text-accent',
  rost: 'bg-soft text-muted',
}
const chipLabel = { opyt: 'опыт', pet: 'пет', rost: 'рост' }

export function StatusChip({ status }) {
  return (
    <span className={`inline-block w-14 rounded-[4px] py-0.5 text-center font-mono text-[9px] ${chipStyle[status]}`}>
      {chipLabel[status]}
    </span>
  )
}
