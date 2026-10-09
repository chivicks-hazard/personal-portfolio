import ExpertiseSection from "@/components/ExpertiseSection";

export const metadata = {
  title: {
    absolute: "Victor Chigbo | Expertise",
  },
};

const ExpertisePage = () => {
  return (
    <main id="skillset">
      <div className="mt-32">
        <div className="mt-5 pt-3 max-sm:mx-10">
          <h1 className="text-4xl md:text-6xl text-center mb-10 text-aliceblue">
            Expertise
          </h1>
          <p className="text-xl md:text-2xl text-center">
            This is a comprehension of my software engineering expertise
          </p>

          <ExpertiseSection />
        </div>
      </div>
    </main>
  );
};

export default ExpertisePage;
