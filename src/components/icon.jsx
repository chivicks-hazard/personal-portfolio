"use client";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaBootstrap,
  FaBriefcase,
  FaCss3Alt,
  FaFacebookF,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJava,
  FaJs,
  FaLinkedin,
  FaReact,
  FaRegEnvelope,
  FaXTwitter,
} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui, SiChartdotjs, SiNextdotjs } from "react-icons/si";

const Icon = ({ icon }) => {
  switch (icon) {
    case "html":
      return <FaHtml5 />;

    case "css":
      return <FaCss3Alt />;

    case "javascript":
      return <FaJs />;

    case "bootstrap":
      return <FaBootstrap />;

    case "tailwindcss":
      return <RiTailwindCssFill />;

    case "react":
      return <FaReact />;

    case "java":
      return <FaJava />;

    case "typescript":
      return <BiLogoTypescript />;

    case "github":
      return <FaGithub />;

    case "linkedin":
      return <FaLinkedin />;

    case "twitter":
      return <FaXTwitter />;

    case "facebook":
      return <FaFacebookF />;

    case "instagram":
      return <FaInstagram />;

    case "email":
      return <FaRegEnvelope />;

    case "briefcase":
      return <FaBriefcase />;

    case "chartjs":
      return <SiChartdotjs />;

    case "charka-ui":
      return <SiChakraui />;

    case "nextjs":
      return <SiNextdotjs />;

    default:
      break;
  }
};

export default Icon;
