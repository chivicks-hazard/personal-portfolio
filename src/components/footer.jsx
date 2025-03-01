import { useState } from "react";

const Footer = () => {
    const [year] = useState(new Date().getFullYear());

    return (
        <footer className="mt-10 absolute left-0 right-0 text-lg md:text-3xl">
            <p className="text-center fs-4 fw-bold">
                Copyright &copy; {year}. Chivicks Hazard
            </p>
        </footer>
    );
};

export default Footer;
