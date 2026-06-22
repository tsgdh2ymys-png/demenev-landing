import Nav from './components/Nav'
import Hero from './components/Hero'
import Facts from './components/Facts'
import Experience from './components/Experience'
import Competencies from './components/Competencies'
import Coverage from './components/Coverage'
import Registry from './components/Registry'
import Config from './components/Config'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Facts />
        <Experience />
        <Competencies />
        <Coverage />
        <Registry />
        <Config />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
