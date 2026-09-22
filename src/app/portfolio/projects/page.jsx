import ProjectSection from "@/components/ProjectSection";

export const metadata = {
  title: {
    absolute: "Victor Chigbo | Projects",
  },
};

const ProjectsPage = () => {
  return (
    <main id="skillset">
      <div className="mt-32">
        <div className="mt-5 pt-3 max-sm:mx-3">
          <h1 className="text-4xl md:text-5xl text-center mb-10 text-aliceblue">
            Projects
          </h1>
          <p className="text-xl md:text-2xl text-center md:w-1/2 md:mx-auto">
            This is a collection of the projects I have worked on so far, each
            showcasing my thought process as a software engineer.
          </p>

          <ProjectSection />
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
