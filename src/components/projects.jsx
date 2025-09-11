"use client";

import Icon from "./icon";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { motion } from "motion/react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      name: "Flavorfiesta Bites",
      description:
        "This was inspired by a restaurant's page with the aim of building a landing page.",
      stack: ["html", "css", "javascript", "bootstrap"],
      image: "/images/flavorfiesta.jpg",
      // interval: 5000,
      link: "https://flavorfiesta.vercel.app/",
      github: "https://github.com/chivicks-hazard/landing-page",
    },
    {
      name: "Opay Clone",
      description:
        "This is a project used to exercise my skills in React and Tailwind CSS",
      image: "images/my-opay-clone.gif",
      // interval: 35000,
      stack: ["react", "tailwindcss"],
      link: "https://my-opay-clone.vercel.app/",
      github: "https://github.com/chivicks-hazard/opay-clone",
    },
    {
      name: "Finance Dashboard",
      description:
        "This was a project I used to increase my skills in TypeScript and get into data visualisation as a frontend developer.",
      image: "/images/dashboard.png",
      // interval: 5000,
      stack: ["react", "tailwindcss", "typescript", "chartjs"],
      link: "https://my-finance-dashboard.vercel.app/",
      github: "https://github.com/chivicks-hazard/finance-dashboard",
    },
    {
      name: "Twitter Thread Maker",
      description: "A tool for generating Twitter threads.",
      image: "/images/twitter-thread-maker.png",

      stack: ["react", "tailwindcss"],
      link: "https://twitter-thread-maker-omega.vercel.app/",
      github: "https://github.com/chivicks-hazard/twitter-thread-maker",
    },
    {
      name: "CLI Converter App",
      description: "This is an app I was able to build with Java",
      image: "/images/cli-converter.gif",
      // interval: 35000,
      stack: ["java"],
      github: "https://github.com/chivicks-hazard/java-unit-converter",
    },
  ];

  return (
    <section id="projects">
      <div className="mt-40 pt-3 max-sm:mx-1">
        <h2 className="text-center mb-5 mt-5 text-3xl text-ghostwhite">
          Projects
        </h2>

        <div className="flex flex-col mt-20 items-center gap-36">
          {projects.map((project, index) => (
            <motion.div
              className=" border-2 border-ivory rounded max-xs:w-fit md:w-1/2 relative"
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg text-ivory border-b border-ivory p-2">
                {project.name}
              </h3>
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="border-b border-ivory object-cover"
              />
              <p className="p-2 md:text-xl">{project.description}</p>
              <div className="flex flex-row justify-between items-center p-2 border-t border-ivory">
                <div className="flex flex-row items-center gap-2">
                  {project.stack.map((stack, index) => (
                    <span
                      key={index}
                      className={`text-2xl md:text-5xl ${stack}`}
                    >
                      <Icon icon={stack} />
                    </span>
                  ))}
                </div>
                <div className="flex flex-row items-center gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-md md:text-2xl text-ivory border rounded border-ivory p-1"
                    >
                      <FaArrowUpRightFromSquare />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-md md:text-2xl text-ivory border rounded border-ivory p-1"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
