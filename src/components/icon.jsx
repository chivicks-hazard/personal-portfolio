"use client";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaBootstrap,
  FaBriefcase,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaJava,
  FaLinkedin,
  FaNode,
  FaReact,
  FaRegEnvelope,
  FaXTwitter,
} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiChakraui,
  SiChartdotjs,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiRedux,
  SiSpring,
  SiSpringboot,
} from "react-icons/si";

const Icon = ({ icon }) => {
  switch (icon) {
    case "html":
      return <SiHtml5 />;

    case "css":
      return <SiCss3 />;

    case "javascript":
      return <SiJavascript />;

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

    case "spring":
      return <SiSpring />;

    case "springboot":
      return <SiSpringboot />;

    case "redux":
      return <SiRedux />;

    case "nodejs":
      return <FaNode />;

    case "expressjs":
      return <SiExpress />;

    case "mysql":
      return <SiMysql />;

    default:
      break;
  }
};

export default Icon;
