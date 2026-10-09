"use client";
import { BiLogoTypescript, BiLogoVisualStudio } from "react-icons/bi";
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
import { IoAnalytics } from "react-icons/io5";
import {
  LuChartNoAxesCombined,
  LuLayers3,
  LuMonitor,
  LuServer,
  LuServerCog,
  LuSparkles,
  LuWalletCards,
} from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiApachemaven,
  SiChakraui,
  SiChartdotjs,
  SiCss3,
  SiDiagramsdotnet,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiMysql,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiRedux,
  SiSpring,
  SiSpringboot,
  SiVercel,
} from "react-icons/si";

const Icon = ({ icon }) => {
  switch (icon) {
    // languages, libraries, and frameworks
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

    case "python":
      return <SiPython />;

    case "postgresql":
      return <SiPostgresql />;

    case "expressjs":
      return <SiExpress />;

    case "mysql":
      return <SiMysql />;

    case "numpy":
      return <SiNumpy />;

    case "pandas":
      return <SiPandas />;

    // tools
    case "git":
      return <SiGit />;

    case "github":
      return <SiGithub />;

    case "vscode":
      return <BiLogoVisualStudio />;

    case "vercel":
      return <SiVercel />;

    case "figma":
      return <SiFigma />;

    case "maven":
      return <SiApachemaven />;

    case "jupyter":
      return <SiJupyter />;

    case "drawio":
      return <SiDiagramsdotnet />;

    // domains
    case "frontend":
      return <LuMonitor />;

    case "server":
      return <LuServer />;

    case "servercog":
      return <LuServerCog />;

    case "fullstack":
      return <LuLayers3 />;

    case "data":
      return <LuChartNoAxesCombined />;

    case "analytics":
      return <IoAnalytics />;

    case "dashboard":
      return <MdDashboard />;

    case "wallet":
      return <LuWalletCards />;

    case "ai":
      return <LuSparkles />;

    case "gemini":
      return <SiGooglegemini />;

    default:
      break;
  }
};

export default Icon;
