import Link from "next/link";
import { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Icon from "./icon";

const Expertise = () => {
  const specializations = [
    {
      domain: "Frontend\nEngineering",
      icon: "frontend",
      skills: ["javascript", "react", "tailwindcss", "typescript", "nextjs"],
    },
    {
      domain: "Backend and API Development",
      icon: "servercog",
      skills: ["nodejs", "expressjs", "postgresql", "java", "springboot"],
    },
  ];

  return (
    <section id="expertise">
      <div className="mt-5 pt-3 max-sm:mx-10">
        <h2 className="text-center mb-5 mt-5 text-3xl text-ghostwhite">
          Expertise
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:mx-40">
          {specializations.map((specialization, index) => (
            <div
              key={index}
              className="border-2 border-ivory rounded row-span-1 col-span-1"
            >
              <div className="py-3 px-3 flex flex-col items-center justify-center md:px-1">
                <span className={`mt-3 text-5xl md:text-9xl text-white`}>
                  <Icon icon={specialization.icon} />
                </span>
                <p className="mt-3 text-center text-2xl text-ghostwhite">
                  {specialization.domain.split("\n").map((line, index, arr) => (
                    <Fragment key={index}>
                      {line}
                      {index < arr.length - 1 && <br />}
                    </Fragment>
                  ))}
                </p>
              </div>
              <div className="flex flex-row justify-around items-center p-5 border-t-2 border-ivory">
                {specialization.skills.map((skill, index) => (
                  <span key={index} className={`text-3xl md:text-4xl ${skill}`}>
                    <Icon icon={skill} />
                  </span>
                ))}
              </div>
            </div>
          ))}
          <Link
            href={"/portfolio/expertise"}
            className={`border-2 border-ivory rounded py-3 px-3 row-span-1 col-span-1 flex flex-col items-center justify-center md:px-1 cursor-pointer`}
          >
            <span
              className={`mt-3 text-5xl md:text-9xl text-gray-400 hover:text-ghostwhite ease-in-out duration-500`}
            >
              <FaArrowRight />
            </span>
            <p className="mt-3 text-center text-ghostwhite">View More</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
