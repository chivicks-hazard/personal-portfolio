import Link from "next/link";

import DisplayImage from "@/components/DisplayImage";
import DisplayHeader from "../components/DisplayHeader";
import Icon from "../components/icon";

export const metadata = {
  title: {
    absolute: "Victor Chigbo | Home",
  },
};

const HomePage = () => {
  const socialLinks = [
    {
      title: "@chivicks_hazard",
      link: "https://x.com/chivicks_hazard",
      icon: "twitter",
    },
    {
      title: "in/victorchigbo",
      link: "https://linkedin.com/in/victorchigbo",
      icon: "linkedin",
    },
    {
      title: "@chivicks-hazard",
      link: "https://github.com/chivicks-hazard",
      icon: "github",
    },
    {
      title: "victorchigbodev@gmail.com",
      link: "mailto:victorchigbodev@gmail.com",
      icon: "email",
    },
  ];

  return (
    <div className="">
      <main>
        <section id="intro">
          <div className="flex flex-col gap-5 mt-32 items-center mx-5 md:flex-row">
            <DisplayImage />
            <div className="col-span-1 row-span-1 md:flex md:flex-col md:justify-between md:items-start gap-5">
              <DisplayHeader />
              <div>
                <p className="text-xl md:text-2xl mt-10">
                  I am a software engineer and frontend developer who
                  specializes in building responsive, user-intuitive and
                  accessible web applications. From time to time, I also try to
                  extend my knowledge and skills in the field of software
                  engineering. Currently, I'm focused on building my skills in
                  system design, problem-solving, analytical thinking, DSA,
                  testing, documentation and agile practices.
                </p>
                <div className="flex flex-row justify-start text-xl md:text-3xl gap-3 mt-4">
                  <span className="text-aliceblue">Connect with me:</span>
                  <span className="inline-flex gap-5">
                    {socialLinks.map((socialLink, index) => {
                      return (
                        <Link
                          key={index}
                          href={socialLink.link}
                          target="_blank"
                          rel="referrer noreferrer"
                          title={socialLink.title}
                          className="hover:text-aliceblue pointer-fine:hover:-translate-y-1 duration-100 ease-in"
                        >
                          <Icon icon={socialLink.icon} />
                        </Link>
                      );
                    })}
                  </span>
                </div>
                <div className="flex flex-row max-sm:flex-col justify-start gap-10 max-sm:gap-5 mt-20 max-sm:mt-10 max-sm:w-full">
                  <button className="text-xl p-3 max-sm:p-1 bg-zinc-900 hover:bg-zinc-700 hover:shadow shadow-cyan  duration-500 ease-in-out cursor-pointer rounded-md">
                    <a href="https://drive.google.com/file/d/1cz1G2ino7SezEX-gzyW40eQYF1ugtSJ8/view?usp=sharing">
                      View My Resume
                    </a>
                  </button>
                  <button className="text-xl p-3 max-sm:p-1 bg-zinc-900 hover:bg-zinc-700 hover:shadow shadow-emerald-green hover:text-aliceblue duration-500 ease-in-out cursor-pointer rounded-md">
                    <Link href={"/portfolio"}>View My Portfolio</Link>
                  </button>
                  <button className="text-xl p-3 max-sm:p-1 bg-zinc-900 hover:bg-zinc-700 hover:shadow shadow-emerald-green hover:text-aliceblue duration-500 ease-in-out cursor-pointer rounded-md">
                    <Link href={"/about"}>About Me</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
