import Expertise from "@/components/expertise";
import Projects from "../../components/projects";
import Skills from "../../components/skills";

const PortfolioPage = () => {
  return (
    <main>
      <section id="portfolio">
        <div className="mt-32">
          <h1 className="text-4xl md:text-5xl text-center mb-10 text-aliceblue">
            My Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-center mx-5 md:mx-40 md:w-3/4">
            This is a collection of my expertise as a software engineer, my
            skills, and the projects I have worked on so far.
          </p>

          <Expertise />
          <Skills />
          <Projects />
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
