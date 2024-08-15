import { Analytics } from "@vercel/analytics/react"
import About from "./components/about"
import Education from "./components/education"
import Footer from "./components/footer"
import Intro from "./components/intro"
import Projects from "./components/projects"
import Skills from "./components/skills"
import Socials from "./components/socials"
import Testimonial from "./components/testominial"
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  return (
    <>
      <main>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Testimonial />
        <Socials />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App