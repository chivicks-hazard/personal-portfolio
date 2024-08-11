import React, { useEffect } from 'react';
import Icon from './icon';

const Socials = () => {
    const socialLinks = [
        {
            link: "https://x.com/chivicks_hazard",
            icon: "twitter",	
            tooltip: "@chivicks_hazard"
        },
        {
            class: "linkedin",
            link: "https://www.linkedin.com/in/victorchigbo",
            icon: "linkedin",
            tooltip: "in/victorchigbo"
        },
        {
            link: "https://github.com/chivicks-hazard",
            icon: "github",
            tooltip: "@chivicks-hazard"
        },
        {
            class: "facebook",
            link: "https://www.facebook.com/chivickshazard",
            icon: "facebook",
            tooltip: "@chivickshazard"
        },
        {
            link: "mailto:victorchigbodev0@gmail.com",
            icon: 'briefcase',
            tooltip: "victorchigbodev0@gmail.com"
        },
        {
            link: "mailto:chigbovcm2020@gmail.com",
            icon: 'email',
            tooltip: "chigbovcm2020@gmail.com"
        }
    ];

    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new window.bootstrap.Tooltip(tooltipTriggerEl));
    }, []);

    return (
        <section id="socials">
            <div className="mx-5 mb-5">
                <h2 className="text-center">My Social Handles</h2>
                <p className="text-center fs-4">You can connect with me via the following handles <Icon icon="" /> </p>
                <div className="social-buttons d-flex justify-content-evenly align-items-center align-content-center mx-5 my-5">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.link}
                            className={`${link.class ? link.class : ""}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title={link.tooltip}
                        >
                            <Icon icon={`${link.icon}`} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Socials;
