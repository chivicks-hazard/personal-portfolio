import futo from "/images/futo.png";

const Education = () => {
    return (
        <section id="education">
            <div className="mx-sm-5 mb-5 mt-5">
                <h2 className="text-center mb-3">Education</h2>
                <div className="p-3 futo position-relative">
                    <p className="p-3">
                        I'm currently pursuing a Bachelor's degree in Software
                        Engineering at the Federal University of Technology,
                        Owerri. It is a five-year course, I'm currently in the
                        first year.
                    </p>
                    <img
                        src={futo}
                        alt=""
                        className="me-3 my-3 position-absolute"
                    />
                </div>
            </div>
        </section>
    );
};

export default Education;
