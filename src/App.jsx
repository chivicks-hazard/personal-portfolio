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
import profilePic from "./assets/images/profile_pic_1.jpg"
import { FaBootstrap, FaGithub, FaJs, FaLinkedin, FaReact, FaRegEnvelope, FaXTwitter } from "react-icons/fa6"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { BiLogoTypescript } from "react-icons/bi"
import { SiChakraui } from "react-icons/si"
import { useState } from "react"

const App = () => {
	const [clickCount, setClickCount] = useState(0);
	const [showBackdrop, setShowBackdrop] = useState();

	const handleClick = () => {
		setClickCount((prevCount) => {
			const clickCount = prevCount + 1;
			console.log(clickCount); // Logs the updated state
			if (clickCount === 10) {
				setShowBackdrop("hidden");
			}
			return clickCount;
		});

	}


  return (
    <>
      {/* Create a fullscreen backdrop blur cover with TailwindCSS */}
      	<div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-10 flex justify-center items-center ${showBackdrop}`}
			onClick={handleClick}
		>
			<div className="w-full text-center warning absolute top-0 right-0">
				<h1 className="text-3xl">Portfolio Under Reconstruction</h1>
			</div>

		  	<div className="border-2 border-gray-400 p-4 md:p-5 rounded-lg w-3/4 md:w-1/2 mt-5">
				<div className="flex flex-row space-x-5 md:space-x-20 items-center">
					<img src={profilePic} className="w-20 rounded-full" alt="Victor Chigbo" />
					<h1 className="text-2xl md:text-xl text-white font-bold">Victor Chigbo</h1>
				</div>
				<div>
					<p className="text-white mt-4 text-xl md:text-sm">
						I am a frontend developer who loves to build user-intuitive and
						accessible web applications. I am proficient in HTML, CSS, and
						Javascript. I am also familiar with React, TailwindCSS, and other
						frontend technologies. Let's build something amazing together.
					</p>
				</div>
				<div className="flex flex-row items-center text-white mt-2 text-xl md:text-sm">
					Stack: 
					<div className="flex flex-row items-center space-x-2 text-2xl md:text-xl ml-2">
						<FaJs className="text-yellow-400" />
						<FaBootstrap style={{color: "#7952B3"}} />
						<RiTailwindCssFill style={{color: "#06B6D4"}} />
						<FaReact style={{color: "#61DAFB"}} />
						<BiLogoTypescript style={{color: "#3178C6"}} />
						<RiNextjsFill />
						<SiChakraui style={{color: "#319795"}} />
					</div>
				</div>
				<div className="flex flex-row items-center text-white mt-2 text-xl md:text-sm">
					Let's connect:
					<div className="flex flex-row items-center space-x-2 text-2xl md:text-xl ml-2 text-white">
						<a href="https://x.com/chivicks_hazard" target="_blank" rel="referrer noreferrer">
							<FaXTwitter />
						</a>
						<a href="https://linkedin.com/in/victorchigbo" target="_blank" rel="referrer noreferrer">
							<FaLinkedin />
						</a>
						<a href="https://github.com/chivicks-hazard" target="_blank" rel="referrer noreferrer">
							<FaGithub />
						</a>
						<a href="mailto:victorchigbodev@gmail.com" target="_blank" rel="referrer noreferrer">
							<FaRegEnvelope />
						</a>
					</div>
				</div>
			</div>
    	</div>
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