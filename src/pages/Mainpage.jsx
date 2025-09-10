import { useState } from "react";
import Icon from "../components/icon";
import profilePic from "/images/profile_pic_1.jpg";

const MainPage = () => {
    const [clickCount, setClickCount] = useState(1);
    const [showBackdrop, setShowBackdrop] = useState();

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

    const handleClick = () => {
        setClickCount((prevCount) => {
            const clickCount = prevCount + 1;
            console.log(clickCount); // Logs the updated state
            if (clickCount === 10) {
                setShowBackdrop("hidden");
            }
            return clickCount;
        });
    };

    return (
        <div className="">
            {/* Create a fullscreen backdrop blur cover with TailwindCSS */}
            {/* <div
                className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-10 flex justify-center items-center ${showBackdrop}`}
                onClick={handleClick}
            >
                <div className="w-full text-center warning absolute top-0 right-0">
                    <h1 className="text-2xl md:text-6xl text-aliceblue">
                        Portfolio Under Reconstruction
                    </h1>
                </div>

                <div className="border-2 border-gray-400 p-4 md:p-5 rounded-lg w-3/4 mt-5 max-xs:mt-10">
                    <div className="flex flex-row space-x-5 md:space-x-20 items-center">
                        <img
                            src={profilePic}
                            className="w-20 rounded-full"
                            alt="Victor Chigbo"
                        />
                        <h1 className="text-2xl md:text-3xl text-white font-bold">
                            Victor Chigbo
                        </h1>
                    </div>
                    <div>
                        <p className="text-white mt-4 text-xl md:text-3xl">
                            I am a frontend developer who loves to build
                            user-intuitive and accessible web applications. I am
                            proficient in HTML, CSS, and Javascript. I am also
                            familiar with React, TailwindCSS, and other frontend
                            technologies. Let's build something amazing
                            together.
                        </p>
                    </div>
                    <div className="flex flex-row justify-evenly items-center gap-2 text-3xl md:text-3xl ml-2 mt-2 md:mt-10">
                        <FaJs className="text-yellow-400" />
                        <FaBootstrap style={{ color: "#7952B3" }} />
                        <RiTailwindCssFill style={{ color: "#06B6D4" }} />
                        <FaReact style={{ color: "#61DAFB" }} />
                        <BiLogoTypescript style={{ color: "#3178C6" }} />
                        <SiNextdotjs className="text-white" />
                        <SiChakraui style={{ color: "#319795" }} />
                    </div>
                    <div className="flex flex-row justify-around items-center space-x-2 text-3xl md:text-4xl mt-5 ml-2 text-white">
                        <a
                            href="https://x.com/chivicks_hazard"
                            target="_blank"
                            rel="referrer noreferrer"
                        >
                            <Icon icon="twitter" />
                        </a>
                        <a
                            href="https://linkedin.com/in/victorchigbo"
                            target="_blank"
                            rel="referrer noreferrer"
                        >
                            <Icon icon={"linkedin"} />
                        </a>
                        <a
                            href="https://github.com/chivicks-hazard"
                            target="_blank"
                            rel="referrer noreferrer"
                        >
                            <Icon icon={"github"} />
                        </a>
                        <a
                            href="mailto:victorchigbodev@gmail.com"
                            target="_blank"
                            rel="referrer noreferrer"
                        >
                            <Icon icon={"email"} />
                        </a>
                    </div>
                </div>
            </div> */}
            <main>
                <section id="intro">
                    <div className="flex flex-col gap-5 mt-32 items-center mx-5 md:flex-row">
                        <img
                            src={profilePic}
                            alt="Victor Chigbo"
                            className="mx-auto rounded-sm col-span-1 row-span-1 md:w-1/3 brightness-75 max-xs:contrast-[0.9]"
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
                                I am a frontend developer who loves to build
                                responsive, user-intuitive and accessible web
                                applications.
                            </p>

                            <div className="flex flex-row justify-start text-xl md:text-3xl gap-3 mt-4">
                                {socialLinks.map((socialLink) => {
                                    return (
                                        <a
                                            href={socialLink.link}
                                            target="_blank"
                                            rel="referrer noreferrer"
                                            title={socialLink.title}
                                            className="hover:text-aliceblue ease-in"
                                        >
                                            <Icon icon={socialLink.icon} />
                                        </a>
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

export default MainPage;
