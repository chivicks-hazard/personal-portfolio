import Icon from "@/components/icon";

export const metadata = {
  title: {
    absolute: "Victor Chigbo | Skills",
  },
};

const SkillsPage = () => {
  const skills = [
    { skill: "HTML", class: "html" },
    { skill: "CSS", class: "css" },
    { skill: "JavaScript", class: "javascript" },
    { skill: "Bootstrap", class: "bootstrap" },
    { skill: "Tailwind CSS", class: "tailwindcss" },
    { skill: "React", class: "react" },
    { skill: "TypeScript", class: "typescript" },
    { skill: "Chart JS", class: "chartjs" },
    {
      skill: "Chakra UI",
      class: "charka-ui",
    },
    {
      skill: "NextJS",
      class: "nextjs",
    },
    {
      skill: "NodeJS",
      class: "nodejs",
    },
    {
      skill: "ExpressJS",
      class: "expressjs",
    },
    {
      skill: "Java",
      class: "java",
    },
    {
      skill: "Spring + SpringBoot",
      class: ["spring", "springboot"],
    },
    {
      skill: "PostgreSQL",
      class: "postgresql",
    },
    {
      skill: "Python",
      class: "python",
    },
    {
      skill: "Numpy",
      class: "numpy",
    },
    {
      skill: "Pandas",
      class: "pandas",
    },
    /*
    {
      skill: "MySQL",
      class: "mysql",
    },
    {
      skill: "Redux + RTK",
      class: "redux",
    }, */
  ];

  const tools = [
    {
      tool: "Git",
      class: "git",
    },
    {
      tool: "Github",
      class: "github",
    },
    {
      tool: "Visual Studio Code",
      class: "vscode",
    },
    {
      tool: "Vercel",
      class: "vercel",
    },
    {
      tool: "Figma",
      class: "figma",
    },
    {
      tool: "Maven",
      class: "maven",
    },
    {
      tool: "Jupyter",
      class: "jupyter",
    },
    {
      tool: "draw.io",
      class: "drawio",
    },
  ];

  return (
    <main id="skillset">
      <div className="mt-32">
        <div className="mt-5 pt-3 max-sm:mx-3">
          <h1 className="text-5xl md:text-6xl text-center mb-10 text-aliceblue">
            Skills
          </h1>
          <p className="text-xl md:text-2xl text-center">
            This is a collection of my skill set.{" "}
            {/* ranging from technical to
            non-technical. */}
          </p>
          <section id="languages" className="mt-20">
            <h2 className="text-3xl text-center text-aliceblue">
              Languages, Libraries, And Frameworks
            </h2>
            <div className="language mt-8 grid grid-cols-2 md:grid-cols-3 gap-2 mx-5 md:mx-40">
              {skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className={`border-2 border-ivory rounded py-3 px-3 row-span-1 col-span-1 flex flex-col items-center justify-center md:px-1`}
                  >
                    {Array.isArray(skill.class) ? (
                      <span
                        className={`mt-3 inline-flex flex-row max-sm:gap-2 md:gap-5 justify-center items-center text-3xl md:text-7xl ${skill.class[0]}`}
                      >
                        {skill.class.map((icon, index) => (
                          <Icon key={index} icon={`${icon}`} />
                        ))}
                      </span>
                    ) : (
                      <span
                        className={`mt-3 text-5xl md:text-9xl ${skill.class}`}
                      >
                        <Icon icon={`${skill.class}`} />
                      </span>
                    )}
                    <p className="mt-3 text-center text-ghostwhite">
                      {skill.skill}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Tools */}
          <section id="tools">
            <h2 className="text-3xl text-center text-aliceblue mt-20">Tools</h2>
            <div className="language mt-8 grid grid-cols-2 md:grid-cols-3 gap-2 mx-5 md:mx-40">
              {tools.map((tool, index) => {
                return (
                  <div
                    key={index}
                    className={`border-2 border-ivory rounded py-3 px-3 row-span-1 col-span-1 flex flex-col items-center justify-center md:px-1`}
                  >
                    {Array.isArray(tool.class) ? (
                      <span
                        className={`mt-3 inline-flex flex-row max-sm:gap-2 md:gap-5 justify-center items-center text-3xl md:text-7xl ${tool.class[0]}`}
                      >
                        {tool.class.map((icon, index) => (
                          <Icon key={index} icon={`${icon}`} />
                        ))}
                      </span>
                    ) : (
                      <span
                        className={`mt-3 text-5xl md:text-9xl ${tool.class}`}
                      >
                        <Icon icon={`${tool.class}`} />
                      </span>
                    )}
                    <p className="mt-3 text-center text-ghostwhite">
                      {tool.tool}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default SkillsPage;
