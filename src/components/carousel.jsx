import React from "react";
import { FaArrowUpRightFromSquare, FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaJava, FaJs, FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import flavorfiesta from "../assets/images/flavorfiesta.png";
import cliConverter from "../assets/images/cli-converter.gif";
import opay from "../assets/images/my-opay-clone.gif";

const Carousel = () => {
    const stacks = {
        html: <FaHtml5 />,
        css: <FaCss3Alt />,
        javascript: <FaJs />,
        bootstrap: <FaBootstrap />,
        tailwindcss: <RiTailwindCssFill />,
        react: <FaReact />,
        java: <FaJava />
    };

    const projects = [
        {
            name: "Flavorfiesta Bites",
            description: "This was inspired by a restaurant's page with the aim of building a landing page.",
            stack: ["html", "css", "javascript", "bootstrap"],
            image: flavorfiesta,
            interval: 5000,
            link: "https://flavorfiesta.vercel.app/",
            github: "https://github.com/chivicks-hazard/landing-page"
        },
        {
            name: "CLI Converter App",
            description: "This is an app I was able to build with Java",
            image: cliConverter,
            interval: 35000,
            stack: ["java"],
            github: "https://github.com/chivicks-hazard/java-unit-converter"
        },
        {
            name: "Opay Clone",
            description: "This is a project used to exercise my skills in React and Tailwind CSS",
            image: opay,
            interval: 35000,
            stack: ["react", "tailwindcss"],
            link: "https://my-opay-clone.vercel.app/",
            github: "https://github.com/chivicks-hazard/opay-clone"
        }
    ];

    return (
        <div className="carousel slide mt-5" id="projectCarousel" data-bs-ride="carousel">
            <div className="carousel-inner">
                {projects.map((project, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval={project.interval ? (project.interval) : null} key={index}>
                        <div className="d-flex justify-content-center">
                            <div className="card w-50">
                                <h5 className="card-header">{project.name}</h5>
                                <div className="card-body">
                                    <img src={project.image} alt={project.name} className='card-img-top w-100 mb-3' />
                                    <p className="card-text">{project.description}</p>
                                </div>
                                <div className="card-footer p-2 d-flex flex-column justify-content-center">
                                    <div className="d-flex flex-row justify-content-center align-self-start mx-auto mb-2">
                                        {project.link && (
                                            <a href={project.link} target="_blank" className="btn text-center p-2 me-lg-1">
                                                View Live Project <FaArrowUpRightFromSquare />
                                            </a>
                                        )}
                                        <a href={project.github} target="_blank" className="btn text-center p-2 ms-lg-1">
                                            View Source <FaGithub />
                                        </a>
                                    </div>
                                    <div className="d-flex flex-lg-column align-self-end mx-auto mt-2">
                                        <h4 className="d-lg-block mx-lg-auto text-white align-self-start">Built With:</h4>
                                        <div className="align-self-end">
                                            {project.stack.map((stack, idx) => (
                                                <span key={idx} className={`icon ${stack} mx-lg-2`}>
                                                    {React.cloneElement(stacks[stack], { className: `icon ${stack}` })}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;


/* 
    <div className="carousel-item active">
                <div className="d-flex justify-content-center">
                    <div className="card w-50">
                        <h5 className="card-header">Car</h5>
                        <div className="card-body">
                            <img src={opay} alt="Flavorfiesta Bites" className='card-img-top w-100 mb-3' />
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Laborum omnis quis libero! Quam veniam, voluptatibus repellat nisi quod praesentium rem,
                                mollitia qui numquam illum modi unde recusandae quisquam laborum corporis.
                            </p>
                        </div>
                        <div className="card-footer p-2 d-flex justify-content-between">
                            <div className="d-flex flex-column">
                                <a className="btn text-center mb-1">View Live Project <FaArrowUpRightFromSquare /></a>
                                <a className="btn text-center mt-1">View Source <FaGithub /></a>
                            </div>
                            <div>
                                <h4 className="text-white">Built With: </h4>
                                <FaHtml5 className="icon html" />
                                <FaCss3Alt className="icon css" />
                                <FaJs className="icon javascript" />
                                <FaBootstrap className="icon bootstrap" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
*/