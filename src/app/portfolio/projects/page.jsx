"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import Icon from "../../../components/icon";

const ProjectsPage = () => {
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
      unoptimized: false,
    },
    {
      name: "Opay Clone",
      description:
        "This is a project used to exercise my skills in React and Tailwind CSS",
      image: "/images/my-opay-clone.gif",
      // interval: 35000,
      stack: ["react", "tailwindcss"],
      link: "https://my-opay-clone.vercel.app/",
      github: "https://github.com/chivicks-hazard/opay-clone",
      unoptimized: true,
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
      unoptimized: false,
    },
    {
      name: "Twitter Thread Maker",
      description: "A tool for generating Twitter threads.",
      image: "/images/twitter-thread-maker.png",

      stack: ["react", "tailwindcss"],
      link: "https://twitter-thread-maker-omega.vercel.app/",
      github: "https://github.com/chivicks-hazard/twitter-thread-maker",
      unoptimized: false,
    },
    {
      name: "CLI Converter App",
      description: "This is an app I was able to build with Java",
      image: "/images/cli-converter.gif",
      // interval: 35000,
      stack: ["java"],
      github: "https://github.com/chivicks-hazard/java-unit-converter",
      unoptimized: true,
    },
    {
      name: "VIdeo Streaming Server",
      description:
        "This is a project I used to understand streams, and how they work, especially when sending media data across a network through a server. It is built with NodeJS.",
      image: "/images/video-streamer.png",
      // interval: 35000,
      stack: ["nodejs"],
      github:
        "https://github.com/chivicks-hazard/nodejs-video-streaming-server",
      unoptimized: false,
    },
  ];

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

          <div className="flex flex-col mt-20 items-center gap-36">
            {projects.map((project, index) => (
              <motion.div
                className=" border-2 border-ivory rounded md:max-sm:w-full md:w-1/2"
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
                  unoptimized={project.unoptimized}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="border-b border-ivory max-xs:w-fit w-full"
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
      </div>
    </main>
  );
};

export default ProjectsPage;
