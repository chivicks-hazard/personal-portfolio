import profilePic from "../../../public/images/profile_pic_1.jpg";
import beginning from "../../../public/images/beginning.jpg";
import coding from "../../../public/images/coding.jpg";
import gdg1 from "../../../public/images/gdg-1.jpg";
import gdg2 from "../../../public/images/gdg-2.jpg";
import h4f21 from "../../../public/images/h4f2-1.jpg";
import h4f23 from "../../../public/images/h4f2-3.jpg";
import h4f2 from "../../../public/images/h4f2.jpg";
import devfest from "../../../public/images/devfest.jpg";
// import devfest1 from "../../../public/images/devfest-1.jpg";
import devfest2 from "../../../public/images/devfest-2.jpg";
import africanshrine from "../../../public/images/african-shrine.jpg";
import linkedinlocalowerri from "../../../public/images/linklocowerri.jpg";
import gaming from "../../../public/images/gaming.jpeg";
import hoodie from "../../../public/images/side-mask.jpg";
import h4f3 from "../../../public/images/h4f3.jpg";
import h4f31 from "../../../public/images/h4f3-1.jpg";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About",
};

const AboutPage = () => {
  const communitypics = [
    africanshrine,
    linkedinlocalowerri,
    h4f3,
    h4f31,
    h4f2,
    gdg1,
    gdg2,
    h4f21,
    h4f23,
    devfest,
    // devfest1,
    devfest2,
  ];

  return (
    <main>
      <div className="mt-32">
        <div className="text-3xl md:text-5xl text-center">
          Hi, I'm <span className="text-ghostwhite">Victor</span> 👋
        </div>

        <div className="container mx-auto">
          <section className="flex justify-between items-start max-xs:gap-5 md:items-center flex-row mt-20">
            <Image
              src={profilePic}
              alt="Victor Chigbo"
              className="mx-auto rounded-sm col-span-1 row-span-1 w-1/2 md:w-1/4"
            />
            <div className="col-span-1 row-span-1 p mx-auto md:w-1/2 text-wrap">
              <p className="text-xl text-wrap">
                My name is{" "}
                <span className="text-ghostwhite">Victor Chigbo</span> (also
                known as{" "}
                <span className="text-ghostwhite">Chivicks Hazard</span>) . I'm
                a software engineering student, currently studying at the
                Federal University of Technology, Owerri. Technically, I'm a
                frontend web developer who can build responsive, user-intuitive
                and accessible web applications using modern web technologies.{" "}
                <br />
                <br /> And yes, I'm a software engineer 😌🔥
              </p>
            </div>
          </section>

          <section className="flex justify-between items-start max-xs:gap-5 md:items-center flex-row-reverse mt-20">
            <Image
              src={beginning}
              alt="Victor Chigbo writing Java"
              className="mx-auto rounded-sm col-span-1 row-span-1 w-1/2 md:w-1/4"
            />
            <div className="col-span-1 row-span-1 w-1/2 text-wrap">
              <p className="text-xl text-wrap">
                I decided to start writing code in{" "}
                <span className="text-ghostwhite">2022</span> after I got access
                to a classs that was held in my school at the time then. Ever
                since then, I've simply allowed my curiosity to lead me to go
                deeper into the world of building software. I don't have any big
                project or contribution to my name yet 😅 <br />
                <br />
                But if you want to see some of the stuff I've made, you can
                check them out{" "}
                <Link
                  href="/portfolio"
                  className="text-ghostwhite hover:underline"
                >
                  here
                </Link>
                . If you want to see more of my undocumented developer
                shenanigans, you can find them at my{" "}
                <Link
                  href="https://github.com/chivicks-hazard"
                  className="text-ghostwhite hover:underline"
                >
                  GitHub
                </Link>
              </p>
            </div>
          </section>

          <section className="flex justify-between items-start max-xs:gap-5 md:items-center flex-row mt-20">
            <Image
              src={coding}
              alt="Victor Chigbo writing code at a cafe"
              className="mx-auto rounded-sm col-span-1 row-span-1 w-1/2 md:w-1/4"
            />
            <div className="col-span-1 row-span-1 mx-auto w-1/2 text-wrap">
              <p className="text-xl text-wrap">
                Being a student by day and a developer by night is undeniably a
                hassle for me. From trekking under the hot sun to covering
                random sleeps, to the point that at any given point in time, I
                always feel sleepy, and liable to burnouts. The struggle between{" "}
                <span className="text-ghostwhite">Albert Einstein</span> (or in
                my case, <span className="text-ghostwhite">Linus Torvalds</span>
                ) and <span className="text-ghostwhite">Bill Gates</span> is
                really, really hard, but that's the price I'm paying to give
                myself a bright future.
              </p>
            </div>
          </section>

          <section className="flex justify-between items-center flex-col mt-20 md:mb-96">
            <div className="text-center text-wrap">
              <p className="text-xl text-wrap">
                Asides being a nerdy techie, I'm very passionate about community
                engagement and collaboration. Growing up in a background that
                barely gave me any experience minus the Internet, joining a tech
                community really helped me to find my feet in the tech space,
                and I'm always eager to participate and engage myself in
                community activities wherever and whenever I can 😃
                <br />
                <br />
                Also, in the process, I get to meet people who really helped in
                this. From classmates to univerisy seniors and juniors to
                graduates. Their presence, I wilndwjnl always appreciate 🙂
              </p>

              <p className="text-center text-xl mt-10 md:hidden">
                Scroll to see more
              </p>

              <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 h-[18.75rem] mt-5 md:mt-32 md:mb-96 max-xs:overflow-x-auto">
                {communitypics.map((pic, index) => (
                  <div className="w-5/8 h-full self-stretch">
                    <Image
                      src={pic}
                      key={index}
                      className="rounded-sm h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="flex justify-between items-start max-xs:gap-5 md:items-center flex-row mt-32 md:mt-80">
            <Image
              src={gaming}
              alt="Victor Chigbo writing code at a cafe"
              className="mx-auto rounded-sm col-span-1 row-span-1 w-1/2 md:w-1/4"
            />
            <div className="col-span-1 row-span-1 mx-auto w-1/2 text-wrap">
              <p className="text-xl text-wrap">
                Steering away from the tech extrovert, you'll find a video
                gamer, book reader, and someone who simply loves to stay in his
                sanctuary 😅
              </p>
            </div>
          </section>

          <section className="flex justify-between items-start max-xs:gap-5 md:items-center flex-row-reverse mt-20">
            <Image
              src={hoodie}
              alt="Victor Chigbo writing code at a cafe"
              className="mx-auto rounded-sm col-span-1 row-span-1 w-1/2 md:w-1/4"
            />
            <div className="col-span-1 row-span-1 mx-auto w-1/2 text-wrap">
              <p className="text-xl text-wrap">
                Last but not the least, I love hoodies.
              </p>
            </div>
          </section>
        </div>

        <div className="text-3xl md:text-5xl text-center mt-24 mb-28 md:mb-40">
          Well, that's all I say about me.
          <br />
          <br />
          Bye for now! 👋
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
