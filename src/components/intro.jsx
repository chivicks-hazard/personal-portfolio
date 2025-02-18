import myPfp from "../assets/images/profile_pic_1.jpg";

const intro = () => {
    return (
        <section id="intro">
            <div className="px-5 pt-1 mb-5 profile text-center">
                <img
                    src={myPfp}
                    alt="Victor Chigbo"
                    className="profile-pic mx-auto d-block mt-4 mb-3 rounded-circle"
                />
                <h1>Victor Chigbo</h1>
                <p className="my-text">
                    Tech Extrovert And Enthusiast || Aspiring Software Engineer
                    || Front-End Web Developer
                </p>
            </div>
        </section>
    );
};

export default intro;
