// "use client";
import Image from "next/image";
import Link from "next/link";
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
            <Image
              src="/images/profile_pic_1.jpg"
              alt="Victor Chigbo"
              width={0}
              height={0}
              sizes="100vw"
              className="mx-auto rounded-sm col-span-1 row-span-1 w-full md:w-1/3"
            />
            <div className="col-span-1 row-span-1 md:flex md:flex-col md:justify-between md:items-start gap-5">
              <div>
                <h1 className="text-3xl md:text-5xl text-aliceblue mt-3">
                  Victor Chigbo
                </h1>
                <h2 className="text-2xl">
                  Tech Extrovert, Enthusiast, and Polymath || Software Engineer
                  || Front-End Web Developer
                </h2>
              </div>
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
                  {socialLinks.map((socialLink, index) => {
                    return (
                      <Link
                        key={index}
                        href={socialLink.link}
                        target="_blank"
                        rel="referrer noreferrer"
                        title={socialLink.title}
                        className="hover:text-aliceblue ease-in"
                      >
                        <Icon icon={socialLink.icon} />
                      </Link>
                    );
                  })}
                </div>
                <div className="flex flex-row justify-center gap-10 mt-4 max-sm:mt-10 max-sm:w-full max-sm:gap-1">
                  <button className="text-xl p-2 hover:bg-zinc-900 hover:text-aliceblue duration-500 ease-in-out cursor-pointer">
                    <a href="https://drive.google.com/file/d/1CvCdpnyexZrk_dpSfRSnbgfihTnMkr0T/view?usp=drive_link">
                      View My Resume
                    </a>
                  </button>
                  <button className="text-xl p-2 hover:bg-zinc-900 hover:text-aliceblue duration-500 ease-in-out cursor-pointer">
                    <Link href={"/portfolio"}>View My Portfolio</Link>
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
