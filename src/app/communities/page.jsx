import gdgfuto from "../../../public/images/gdgfuto.jpg";
import gdg from "../../../public/images/gdg.jpg";
import ieee from "../../../public/images/ieee.jpeg";
import hack4futo from "../../../public/images/hack4futo.jpg";
import Image from "next/image";

export const metadata = {
  title: "Communities",
  openGraph: {
    title: "Victor Chigbo | Portfolio",
    type: "website",
  },
  keywords: [
    "Victor",
    "Chigbo",
    "chivicks_hazard",
    "Chivicks",
    "Hazard",
    "Victor Chigbo",
    "Chivicks Hazard",
    "communities",
    "gdg",
    "gdgfuto",
    "gdg futo",
    "ieee",
    "hack4futo",
  ],
};

const CommunitiesPage = () => {
  return (
    <main>
      <div className="mt-32">
        <h1 className="text-4xl md:text-5xl text-center mb-10 text-aliceblue">
          Communities
        </h1>

        <p className="text-xl md:text-2xl text-center">
          I'm proudly a member of the following communities:
        </p>

        <div className="container mx-auto mt-20">
          {/* GDG FUTO */}
          <section
            id="gdgfuto"
            className="flex justify-between items-start max-xs:gap-5 md:items-center flex-row max-sm:flex-col mt-20"
          >
            <Image
              src={gdgfuto}
              alt="GDG FUTO"
              className="md:mx-auto rounded-sm col-span-1 row-span-1 w-1/2 md:w-1/4"
            />

            <div className="col-span-1 row-span-1 p mx-auto md:w-1/2 text-wrap max-sm:mt-5">
              <h2 className="text-3xl md:text-4xl mb-2 text-aliceblue">
                Google Developer Groups: Federal University of Technology,
                Owerri
              </h2>
              <p className="text-xl text-wrap">
                Link:{" "}
                <a
                  href="https://gdg.community.dev/gdg-on-campus-federal-university-of-technology-owerri-nigeria/"
                  className="text-ghostwhite hover:underline"
                >
                  GDG FUTO
                </a>
              </p>
              <p className="text-xl text-wrap mt-5">
                The Google Developers Group Federal University of Technology -
                Owerri is a dynamic community of students passionate about
                technology and eager to harness their skills to create a
                positive impact and solve local challenges.
                <br />
                {/* <br /> */}
                We are a student-driven tech community with a mission to
                positively influence as many students as possible for as long as
                possible. Our core belief is that tech education can be fun, as
                long as you're learning with us. As a tight-knit group of
                friends and fellow students, we engage in the collective pursuit
                of learning, sharing knowledge, and growing together.
              </p>
            </div>
          </section>

          {/* GDG Owerri */}
          <section
            id="gdgowerri"
            className="flex justify-between items-start max-xs:gap-5 md:items-center flex-row max-sm:flex-col mt-20"
          >
            <Image
              src={gdg}
              alt="GDG: Owerri"
              className="md:mx-auto rounded-sm col-span-1 row-span-1 w-1/2 md:w-1/4"
            />

            <div className="col-span-1 row-span-1 p mx-auto md:w-1/2 text-wrap max-sm:mt-5">
              <h2 className="text-3xl md:text-4xl mb-5 text-aliceblue">
                Google Developer Groups: Owerri
              </h2>
              <p className="text-xl text-wrap">
                Link:{" "}
                <a
                  href="https://gdg.community.dev/gdg-owerri/"
                  className="text-ghostwhite hover:underline"
                >
                  GDG Owerri
                </a>
              </p>
              <p className="text-xl text-wrap mt-5"></p>
            </div>
          </section>
          <section
            id="ieee"
            className="flex justify-between items-start max-xs:gap-5 md:items-center flex-row max-sm:flex-col mt-20"
          >
            <Image
              src={ieee}
              alt="Institute of Electrical and Electronics Engineers"
              className="md:mx-auto rounded-sm col-span-1 row-span-1 w-1/2 md:w-1/4"
            />

            <div className="col-span-1 row-span-1 p mx-auto md:w-1/2 text-wrap max-sm:mt-5">
              <h2 className="text-3xl md:text-4xl mb-5 text-aliceblue">
                Institute of Electrical and Electronics Engineers
              </h2>
              <p className="text-xl text-wrap">
                Link:{" "}
                <a
                  href="https://www.ieee.org/"
                  className="text-ghostwhite hover:underline"
                >
                  IEEE
                </a>
              </p>
              <p className="text-xl text-wrap mt-5">
                IEEE is the world’s largest technical professional organization
                and is a public charity dedicated to advancing technological
                innovation and excellence for the benefit of humanity. IEEE and
                its members inspire a global community through its highly cited
                publications, conferences, technology standards, and
                professional and educational activities. IEEE is the trusted
                “voice” for engineering, computing and technology information
                around the globe.
                <br />
                <br />
                <span className="text-ghostwhite font-medium">PS: </span> I'm a
                member of the student branch in FUTO, which also makes me an
                IEEE member 😁
              </p>
            </div>
          </section>
          <section
            id="hackfuto"
            className="flex justify-between items-start max-xs:gap-5 md:items-center flex-row max-sm:flex-col mt-20"
          >
            <Image
              src={hack4futo}
              alt="Institute of Electrical and Electronics Engineers"
              className="md:mx-auto rounded-sm col-span-1 row-span-1 w-1/2 md:w-1/4"
            />

            <div className="col-span-1 row-span-1 p mx-auto md:w-1/2 text-wrap max-sm:mt-5">
              <h2 className="text-3xl md:text-4xl mb-5 text-aliceblue">
                Hack4FUTO
              </h2>
              <p className="text-xl text-wrap">
                Link:{" "}
                <a
                  href="https://hackfuto.com/"
                  className="text-ghostwhite hover:underline"
                >
                  Hack4FUTO
                </a>
              </p>
              <p className="text-xl text-wrap mt-5">
                Empowering FUTO students, innovators, and devs tackle global
                challenges in Fintech, sustainability, education, digital
                inclusion and the future of work.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CommunitiesPage;
