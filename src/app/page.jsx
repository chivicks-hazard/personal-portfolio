import Icon from "../components/icon";
import Link from "next/link";
import Image from "next/image";

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
              className="w-1/3 mx-auto rounded-sm col-span-1 row-span-1 w-full md:w-1/3"
            />
            <div className="col-span-1 row-span-1">
              <p className="text-2xl">
                Hi there
                <br />
                My name is
              </p>
              <h1 className="text-3xl md:text-5xl text-aliceblue mt-3">
                Victor Chigbo
              </h1>
              <p className="text-xl md:text-2xl mt-10">
                I am a frontend developer who loves to build responsive,
                user-intuitive and accessible web applications.
              </p>

              <div className="flex flex-row justify-start text-xl md:text-3xl gap-3 mt-4">
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
