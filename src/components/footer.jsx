import { useState } from "react";

const Footer = () => {
    const [year] = useState(new Date().getFullYear());

    return (
        <footer className="mt-5">
            <p className="text-center fs-4 fw-bold">
                Copyright &copy; {year}. Chivicks Hazard
            </p>
        </footer>
    );
};

export default Footer;
