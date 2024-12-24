import { FaGithub } from "react-icons/fa6"
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm";
import { useEffect } from "react";
import Icon from "./icon";

const Socials = () => {
    const socialLinks  = [
        {
            title: "@chivicks_hazard",
            link: "https://x.com/chivicks_hazard",
            icon: "twitter"
        },
        {
            title: "in/victorchigbo",
            link: "https://linkedin.com/in/victorchigbo",
            icon: "linkedin"
        },
        {
            title: "@chivicks-hazard",
            link: "https://github.com/chivicks-hazard",	
            icon: "github"
        },
        {
            title: "victorchigbodev@gmail.com",
            link: "mailto:victorchigbodev@gmail.com",
            icon: "email"
        }
    ];

    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
    })

    return (
        <section id="socials">
            <div className="mx-5 mb-5">
                <h2 className="text-center mx-auto">My Socials</h2>
                <p className="text-center mx-4">You can connect and react out to me via the following handles</p>
                <div className="d-flex social-buttons justify-content-evenly align-items-center align-content-center">
                    {socialLinks.map((socialLink) => {
                        return <a href={socialLink.link} target="_blank" rel="referrer noreferrer" data-bs-toggle="tooltip" data-bs-placement="top" title={socialLink.title}>
                            <Icon icon={socialLink.icon} />
                        </a>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Socials