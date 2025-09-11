import React from "react";
import Skills from "../../components/skills";
import Projects from "../../components/projects";

export const metadata = {
  title: "Portfolio",
  openGraph: {
    title: "Victor Chigbo | Portfolio",
    description: "Chivicks Hazard's Portfolio",
    type: "website",
  },
  keywords: [
    "Victor",
    "Chigbo",
    "chivicks_hazard",
    "Chivicks",
    "Hazard",
    "Victor Chigbo",
    "Chivicks Hazard",
    "portfolio",
    "skills",
    "projects",
  ],
};

const PortfolioPage = () => {
  return (
    <main>
      <section id="portfolio">
        <div className="mt-32">
          <h1 className="text-4xl md:text-5xl text-center mb-10 text-aliceblue">
            My Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-center">
            This is a collection of my skill set, ranging from technical to
            non-technical.
            <br />
            This page also contains some of the projects I have worked on so
            far.
          </p>

          <Skills />
          <Projects />
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
