import Carousel from "./carousel";

const Projects = () => {
    return (
        <section id="projects" class="mx-auto mt-5">
            <h2 class="text-center mb-2">My Projects</h2>
            <p className="mx-4 text-center">
                These are the projects I have worked on so far.
            </p>
            <Carousel />
        </section>
    );
};

export default Projects;
