import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import profilePic from "../assets/images/profile_pic_1.jpg";
import { IoHome } from "react-icons/io5";
import { FaCode, FaUser } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";

const MainLayout = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-10">
                <div className="flex flex-row justify-between items-center p-1 mx-3 bg-opacity-50 backdrop-blur-md">
                    <img
                        src={profilePic}
                        alt="Victor Chigbo"
                        className="w-16 rounded-full flex-start"
                    />

                    <div className="flex-end flex flex-row space-x-5 max-xs:flex-column">
                        <NavLink
                            to="/"
                            className="md:hover:scale-150 ease-in duration-500"
                        >
                            <IoHome className="text-white text-lg" />
                        </NavLink>
                        <NavLink
                            to=""
                            className="md:hover:scale-150 ease-in duration-500"
                        >
                            <FaUser className="text-white text-lg" />
                        </NavLink>
                        <NavLink
                            to="/portfolio"
                            className="md:hover:scale-150 ease-in duration-500"
                        >
                            <FaCode className="text-white text-lg" />
                        </NavLink>
                        <NavLink
                            to=""
                            className="md:hover:scale-150 ease-in duration-500"
                        >
                            <MdSchool className="text-white text-lg" />
                        </NavLink>
                        <NavLink
                            to=""
                            className="md:hover:scale-150 ease-in duration-500"
                        >
                            <FaQuoteLeft className="text-white text-lg" />
                        </NavLink>
                    </div>
                </div>
            </nav>
            <Outlet />
            <Footer />
            <Analytics />
            <SpeedInsights />
        </>
    );
};

export default MainLayout;
