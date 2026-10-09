"use client";
import { Fragment } from "react";
import Icon from "./icon";

const ExpertiseSection = () => {
  const specializations = [
    {
      domain: "Frontend Engineering",
      icon: "frontend",
      skills: ["javascript", "react", "tailwindcss", "typescript", "nextjs"],
    },
    {
      domain: "Backend and API Development",
      icon: "servercog",
      skills: ["nodejs", "expressjs", "postgresql", "java", "springboot"],
    },
    {
      domain: "Full-Stack Application Engineering",
      icon: "fullstack",
      skills: [
        "typescript",
        "tailwindcss",
        "nextjs",
        "expressjs",
        "postgresql",
      ],
    },
    {
      domain: "Dashboard & Data Visualization Engineering",
      icon: "data",
      skills: ["react", "typescript", "chartjs", "dashboard", "postgresql"],
    },
    {
      domain: "Financial Application Engineering",
      icon: "wallet",
      skills: [
        "typescript",
        "nextjs",
        "chartjs",
        "expressjs",
        "springboot",
        "postgresql",
      ],
    },
    {
      domain: "AI-Powered Web Application Development",
      icon: "ai",
      skills: ["typescript", "nextjs", "expressjs", "gemini"],
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xl:gap-5 xl:mx-30 2xl:mx-40">
      {specializations.map((specialization, index) => (
        <div
          key={index}
          className="border-2 border-ivory rounded row-span-1 col-span-1"
        >
          <div className="py-3 px-3 flex flex-col items-center justify-center md:px-1">
            <span className={`mt-3 text-5xl md:text-9xl text-white`}>
              <Icon icon={specialization.icon} />
            </span>
            <p className="mt-3 text-center text-2xl px-15 text-ghostwhite">
              {specialization.domain.split("\n").map((line, index, arr) => (
                <Fragment key={index}>
                  {line}
                  {index < arr.length - 1 && <br />}
                </Fragment>
              ))}
            </p>
          </div>
          <div className="flex flex-row justify-around items-center p-5 border-t-2 border-ivory max-sm:gap-2">
            {specialization.skills.map((skill, index) => (
              <span key={index} className={`text-3xl md:text-4xl ${skill}`}>
                <Icon icon={skill} />
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpertiseSection;
