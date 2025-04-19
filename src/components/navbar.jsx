import { NavLink } from "react-router-dom";
import profilePic from "/images/ghibli-avatar.jpg";
import { IoHome } from "react-icons/io5";
import { FaCode, FaUser } from "react-icons/fa6";
import { MdPeopleAlt, MdSchool } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
    // If you want the component to manage its own state
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 z-10">
                <div className="flex flex-row justify-between items-center p-1 mx-3 bg-opacity-50 backdrop-blur-md">
                    <img
                        src={profilePic}
                        alt="Victor Chigbo"
                        className="w-16 rounded-full flex-start"
                    />

                    <div className="flex-end flex flex-row space-x-5 max-xs:flex-column max-sm:hidden">
                        <NavLink
                            to="/"
                            className="md:hover:scale-150 ease-in duration-500 inline-flex flex-row items-start gap-1"
                        >
                            <IoHome className="text-white text-lg" />
                            <span>Home</span>
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="md:hover:scale-150 ease-in duration-500 inline-flex flex-row items-start gap-1"
                        >
                            <FaUser className="text-white text-lg" />
                            <span>About</span>
                        </NavLink>
                        <NavLink
                            to="/portfolio"
                            className="md:hover:scale-150 ease-in duration-500 inline-flex flex-row items-start gap-1"
                        >
                            <FaCode className="text-white text-lg" />
                            <span>Portfolio</span>
                        </NavLink>
                        <NavLink
                            to="/communities"
                            className="md:hover:scale-150 ease-in duration-500 inline-flex flex-row items-start gap-1"
                        >
                            <MdPeopleAlt className="text-white text-lg" />
                            <span>Communities</span>
                        </NavLink>
                    </div>
                </div>
            </nav>

            {/* Offcanvas navbar */}
            <div
                className={`fixed top-0 bottom-0 right-0 ease-in-out duration-500 z-10 ${
                    isOpen ? "w-7/12" : "w-0"
                }`}
            >
                <div className="p-5 bg-opacity-50 backdrop-blur-md h-full">
                    <div className="flex-end flex flex-col gap-5 text-xl pt-12">
                        <NavLink
                            onClick={handleClick}
                            to="/"
                            className="md:hover:scale-150 ease-in duration-500 inline-flex flex-row items-start gap-1"
                        >
                            <IoHome className="text-white" />
                            <span>Home</span>
                        </NavLink>
                        <NavLink
                            onClick={handleClick}
                            to="/about"
                            className="md:hover:scale-150 ease-in duration-500 inline-flex flex-row items-start gap-1"
                        >
                            <FaUser className="text-white" />
                            <span>About</span>
                        </NavLink>
                        <NavLink
                            onClick={handleClick}
                            to="/portfolio"
                            className="md:hover:scale-150 ease-in duration-500 inline-flex flex-row items-start gap-1"
                        >
                            <FaCode className="text-white" />
                            <span>Portfolio</span>
                        </NavLink>
                        <NavLink
                            onClick={handleClick}
                            to="/communities"
                            className="md:hover:scale-150 ease-in duration-500 inline-flex flex-row items-start gap-1"
                        >
                            <MdPeopleAlt className="text-white" />
                            <span>Communities</span>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div
                className="z-50 fixed top-0 right-0 p-2 cursor-pointer md:hidden"
                onClick={handleClick}
            >
                <div
                    className={`w-9 h-1 bg-white m-2 duration-500 ${
                        isOpen ? "translate-y-3 rotate-45" : ""
                    }`}
                ></div>
                <div
                    className={`w-9 h-1 bg-white m-2 duration-500 ${
                        isOpen ? "opacity-0" : ""
                    }`}
                ></div>
                <div
                    className={`w-9 h-1 bg-white m-2 duration-500 ${
                        isOpen ? "-translate-y-3 -rotate-45" : ""
                    }`}
                ></div>
            </div>
        </div>
    );
};

export default NavBar;
