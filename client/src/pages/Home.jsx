import Hero from '../components/sections/Hero/Hero'
import About from '../components/sections/About/About'
import Skills from '../components/sections/Skills/Skills'
import Experience from '../components/sections/Experience/Experience'
import Projects from '../components/sections/Projects/Projects'
import Achievements from '../components/sections/Achievements/Achievements'
import Contact from '../components/sections/Contact/Contact'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  )
}

export default Home