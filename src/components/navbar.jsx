"use client";

import { IoHome } from "react-icons/io5";
import { FaCode, FaUser } from "react-icons/fa6";
import { MdPeopleAlt, MdSchool } from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest(".navbar")) {
        setIsOpen(false);
      }
    };

    const mediaQuery = window.matchMedia("(max-width: 640px)"); // max-sm: breakpoint

    if (mediaQuery.matches) {
      document.body.addEventListener("click", handleDocumentClick);
    }

    return () => {
      document.body.removeEventListener("click", handleDocumentClick);
    };
  }, [setIsOpen]);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-10">
        <div className="flex flex-row justify-between items-center p-1 mx-3 bg-opacity-50 backdrop-blur-md">
          <Image
            src="/images/ghibli-mask.png"
            alt="Victor Chigbo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-16 rounded-full flex-start"
          />

          <div className="flex-end flex flex-row gap-8 max-xs:flex-column max-sm:hidden">
            <Link
              href="/"
              className="md:hover:scale-150 ease-in duration-500 inline-flex flex-row items-start gap-1"
            >
              <IoHome className="text-white text-lg" />
              <span>Home</span>
            </Link>
            {/* <Link
              href="/about"
              className="md:hover:scale-150 ease-in duration-500 inline-flex flex-row items-start gap-1"
            >
              <FaUser className="text-white text-lg" />
              <span>About</span>
            </Link> */}
            <Link
              href="/portfolio"
              className="md:hover:scale-150 ease-in duration-500 inline-flex flex-row items-start gap-1"
            >
              <FaCode className="text-white text-lg" />
              <span>Portfolio</span>
            </Link>
            <Link
              href="/communities"
              className="md:hover:scale-150 ease-in duration-500 inline-flex flex-row items-start gap-1"
            >
              <MdPeopleAlt className="text-white text-lg" />
              <span>Communities</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Offcanvas navbar */}
      <div
        className={`fixed top-0 bottom-0 right-0 ease-in-out duration-500 z-10 landscape:max-lg:hidden ${
          isOpen ? "w-7/12" : "w-0"
        }`}
      >
        <div className="p-5 bg-opacity-50 backdrop-blur-md h-full">
          <div className="flex-end flex flex-col gap-5 text-xl pt-12">
            <Link
              onClick={handleClick}
              href="/"
              className="md:hover:scale-150 ease-in duration-500 inline-flex flex-row items-start gap-1"
            >
              <IoHome className="text-white" />
              <span>Home</span>
            </Link>
            {/* <Link
              onClick={handleClick}
              href="/about"
              className="md:hover:scale-150 ease-in duration-500 inline-flex flex-row items-start gap-1"
            >
              <FaUser className="text-white" />
              <span>About</span>
            </Link> */}
            <Link
              onClick={handleClick}
              href="/portfolio"
              className="md:hover:scale-150 ease-in duration-500 inline-flex flex-row items-start gap-1"
            >
              <FaCode className="text-white" />
              <span>Portfolio</span>
            </Link>
            <Link
              onClick={handleClick}
              href="/communities"
              className="md:hover:scale-150 ease-in duration-500 inline-flex flex-row items-start gap-1"
            >
              <MdPeopleAlt className="text-white" />
              <span>Communities</span>
            </Link>
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

export default Navbar;
