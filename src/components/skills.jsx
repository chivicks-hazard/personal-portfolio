"use client";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";
import Icon from "./icon";

const Skills = () => {
  const skills = [
    { skill: "HTML", class: "html" },
    { skill: "CSS", class: "css" },
    { skill: "JavaScript", class: "javascript" },
    { skill: "Bootstrap", class: "bootstrap" },
    { skill: "Tailwind CSS", class: "tailwindcss" },
    { skill: "React", class: "react" },
    { skill: "TypeScript", class: "typescript" },
    // { skill: "Chart JS", class: "chartjs" },
    {
      skill: "NextJS",
      class: "nextjs",
    },
  ];

  const router = useRouter();

  return (
    <section id="skillset">
      <div className="mt-5 pt-3 max-sm:mx-3">
        <h2 className="text-center mb-5 mt-5 text-3xl text-ghostwhite">
          Skills
        </h2>
        <div className="language mt-1 grid grid-cols-3 gap-2 md:mx-40">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className={`border-2 rounded py-3 px-3 row-span-1 col-span-1 flex flex-col items-center justify-center md:px-1`}
              >
                <span className={`mt-3 text-5xl md:text-9xl ${skill.class}`}>
                  <Icon icon={`${skill.class}`} />
                </span>
                <p className="mt-3 text-center text-ghostwhite">
                  {skill.skill}
                </p>
              </div>
            );
          })}
          <div
            onClick={() => router.push("/portfolio/skills")}
            className={`border-2 rounded py-3 px-3 row-span-1 col-span-1 flex flex-col items-center justify-center md:px-1 cursor-pointer`}
          >
            <span
              className={`mt-3 text-5xl md:text-9xl text-gray-400 hover:text-ghostwhite ease-in-out duration-500`}
            >
              <FaArrowRight />
            </span>
            <p className="mt-3 text-center text-ghostwhite">See More</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
