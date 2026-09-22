"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import Icon from "./icon";

const Projects = () => {
  const router = useRouter();

  const projects = [
    {
      name: "Playpick Games",
      description:
        "Your Ultimate Football Fantasy Playground!\n\nJoin a platform for predictions, competitions, and seamless management--start today!",
      stack: ["typescript", "react", "nextjs", "tailwindcss"],
      image: "/images/playpick.png",
      // interval: 5000,
      link: "https://playpick.app/",
      unoptimized: false,
    },
    {
      name: "Paysub",
      description:
        "The All-in-One Solution for Streamlining Your Bill Payments!\n\nSimplify Your Bill Payments And Management with Paysub",
      stack: ["typescript", "react", "nextjs", "tailwindcss"],
      image: "/images/paysub.png",
      // interval: 5000,
      link: "https://www.paysub.co/",
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
              <p className="p-2 md:text-xl">
                {project.description.split("\n").map((line, index, arr) => (
                  <Fragment key={index}>
                    {line}
                    {index < arr.length - 1 && <br />}
                  </Fragment>
                ))}
              </p>
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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-md md:text-2xl text-ivory border rounded border-ivory p-1"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          href={"/portfolio/projects"}
          className="block mx-auto text-center mt-18 text-2xl rounded hover:text-ghostwhite hover:text-3xl duration-700 ease-in-out cursor-pointer"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default Projects;
