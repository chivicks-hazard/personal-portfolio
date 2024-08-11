import About from "./components/about"
import Education from "./components/education"
import Footer from "./components/footer"
import Intro from "./components/intro"
import Projects from "./components/projects"
import Skills from "./components/skills"
import Socials from "./components/socials"
import Testimonial from "./components/testominial"

const App = () => {
  return (
    <main>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Testimonial />
      <Socials />
      <Footer />
    </main>
  )
}

export default App