import { Container } from './ui'
import { footerNote } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container>
        <div className="text-center font-mono text-[10.5px] leading-relaxed text-muted">
          {footerNote.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </Container>
    </footer>
  )
}
