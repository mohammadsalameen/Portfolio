import {
  FaAws,
  FaClock,
  FaCodepen,
  FaDocker,
  FaLaptopCode,
  FaNetworkWired,
  FaReact,
  FaRobot,
  FaServer,
} from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { IoLogoNodejs } from "react-icons/io5";
import { BiBadge } from "react-icons/bi";
import {
  SiAngular,
  SiDotnet,
  SiElectron,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaChalkboardTeacher, FaNodeJs } from "react-icons/fa";
import { MdOutlineChangeCircle, MdOutlineManageAccounts } from "react-icons/md";
import {
  FaPuzzlePiece,
  FaRegClock,
  FaCogs,
  FaHandshake,
  FaExclamationTriangle,
  FaProjectDiagram,
  FaLightbulb,
  FaUserFriends,
  FaBrain,
  FaUserTie,
} from "react-icons/fa";
import { GiFactory, GiThink } from "react-icons/gi";

export const CV_Link = "/cv.pdf";
export const NavLinks = [
  {
    id: 1,
    url: "#home",
    label: "Home",
  },
  {
    id: 2,
    url: "#services",
    label: "Services",
  },
  {
    id: 3,
    url: "#resume",
    label: "Resume",
  },
  {
    id: 4,
    url: "#works",
    label: "Works",
  },
  {
    id: 5,
    url: "#skills",
    label: "Skills",
  },
  {
    id: 6,
    url: "#certifications",
    label: "Certifications",
  },
  {
    id: 7,
    url: "#contact",
    label: "Contact",
  },
];

export const WorkCard = [
  {
    id: 1,
    icon: FaCodepen,
    role: "Full-Stack Developer",
    description:
      "Full-Stack Developer with experience in developing enterprise-level business solutions, including ERP Systems, POS Systems, and Building & Maintenance Management Systems. Skilled in Angular, React.js, ASP.NET Core, Node.js, SQL Server, and MongoDB. Experienced in designing scalable architectures, implementing business workflows, inventory management, user roles and permissions, maintenance operations, and real-time reporting. Passionate about building high-performance business applications that improve operational efficiency and user experience.",
  },
  {
    id: 99,
    icon: FaLaptopCode,
    role: "IT Personnel Developer",
    description:
      "Responsible for developing, customizing, and integrating Project Portfolio Management (PPM) software to meet organizational needs. This includes coding, testing, debugging, ensuring data integrity, optimizing system performance, and providing ongoing technical support. Actively monitoring industry trends to implement best practices and cutting-edge technologies.",
  },
  {
    id: 2,
    icon: FaReact,
    role: "Frontend Developer",
    description:
      "As a front-end developer, I specialize in creating responsive and user-friendly interfaces using React. My work focuses on delivering high-quality user experiences through modern design principles and efficient coding practices.",
  },
  {
    id: 3,
    icon: BsDatabase,
    role: "Backend Developer",
    description:
      "In my role as a back-end developer, I have experience in building robust server-side applications using Node.js and Express. I focus on creating efficient APIs and managing databases to support the functionality of web applications.",
  },
  {
    id: 4,
    icon: IoLogoNodejs,
    role: "IOT Developer",
    description:
      "I have a passion for IoT development, where I create innovative solutions that connect devices and enhance user experiences through smart technology. My projects involve integrating hardware with software to build functional IoT systems.",
  },
];

export const EducationCard = [
  {
    id: 4,
    icon: FaLaptopCode,
    role: "Part-Time Full-Stack Developer at Spinel Tech",
    date: "Nov 2025 - Present",
  },
  {
    id: 1,
    icon: BiBadge,
    role: "Bachelor degree in Computer Systems Engineering",
    date: "Sep 2020 - Jan 2025",
  },
  {
    id: 2,
    icon: FaReact,
    role: "Certificate in Frontend Developer",
    date: "Jan 2024 - Nov 2024",
  },
  {
    id: 3,
    icon: BsDatabase,
    role: "Certificate in Backend Developer",
    date: "Nov 2024 - May 2025",
  },
];

export const SkillsList = [
  {
    id: 1,
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    id: 2,
    name: "React.js",
    icon: SiReact,
  },
  {
    id: 3,
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    id: 4,
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    id: 6,
    name: "Typescript",
    icon: SiTypescript,
  },
  {
    id: 18,
    name: "Angular",
    icon: SiAngular,
  },
  {
    id: 19,
    name: ".NET",
    icon: SiDotnet,
  },
  {
    id: 20,
    name: "SQL Server",
    icon: BsDatabase,
  },
  {
    id: 21,
    name: "Electron Web",
    icon: SiElectron,
  },
  {
    id: 22,
    name: "Background Services",
    icon: FaServer,
  },

  {
    id: 7,
    name: "Problem Solving",
    icon: FaPuzzlePiece,
  },
  {
    id: 8,
    name: "Time Management",
    icon: FaRegClock,
  },
  {
    id: 9,
    name: "Technical Understanding",
    icon: FaCogs,
  },
  {
    id: 10,
    name: "Conflict Resolution",
    icon: FaHandshake,
  },
  {
    id: 11,
    name: "Risk Assessment",
    icon: FaExclamationTriangle,
  },
  {
    id: 13,
    name: "Project Management",
    icon: FaProjectDiagram,
  },
  {
    id: 14,
    name: "Strategic Planning",
    icon: FaLightbulb,
  },
  {
    id: 15,
    name: "Client Relations",
    icon: FaUserFriends,
  },
  {
    id: 16,
    name: "Critical Thinking",
    icon: FaBrain,
  },
  {
    id: 17,
    name: "Leadership",
    icon: FaUserTie,
  },
];

export const ContactData = {
  email: "mohammadsalameen.02@gmail.com",
  phoneId: "+972 56 854 1413",
  location: "Hebron, Palestine",
  facebook: "https://www.facebook.com/mohamad.salameen.2025",
  github: "https://github.com/mohammadsalameen",
  linkedin: "https://www.linkedin.com/in/mohammad-salameen-8a182630b/",
};

export const CertificationsList = [
  {
    id: 8,
    name: "DigComp Hub MOOC on the DigComp Framework",
    date: "Mar, 2024",
    icon: FaProjectDiagram,
  },
  {
    id: 9,
    name: "Generative AI and Digital Resources",
    date : "Mar, 2024",
    icon: FaBrain,
  },
  {
    id: 10,
    name: "Artificial Intelligence MOOC",
    date : "Apr, 2024",
    icon: FaRobot,
  },
  {
    id: 11,
    name: "Internet of Things MOOC",
    date : "Apr, 2024",
    icon: FaNetworkWired,
  },
  {
    id: 1,
    name: "Problem Solving & Decision Making in the Workplace",
    date: "Feb, 2025",
    icon: FaBrain,
  },
  {
    id: 2,
    name: "Delegation, Coaching, and Mentoring Skills",
    date: "Feb, 2025",
    icon: FaChalkboardTeacher,
  },
  {
    id: 3,
    name: "90-hours React & NextJS Training",
    date: "Apr, 2025",
    icon: FaReact,
  },
  {
    id: 4,
    name: "Back End 'Node JS'",
    date: "May, 2025",
    icon: FaNodeJs,
  },
  {
    id: 5,
    name: "Driving Change through Impactful Communication",
    date: "Aug, 2025",
    icon: MdOutlineChangeCircle,
  },
  {
    id: 6,
    name: "Communicating with Clarity as a Manager",
    date: "Aug, 2025",
    icon: MdOutlineManageAccounts,
  },
  {
    id: 7,
    name: "Critical Thinking for More Effective Communication",
    date: "Aug, 2025",
    icon: GiThink,
  },
  {
    id: 12,
    name: "Time Management",
    icon: FaClock,
  },
  {
    id: 13,
    name: "AWS Certified Cloud Practitioner ",
    date : "Aug, 2025",
    icon: FaAws,
  },
  {
    id: 14,
    name: "Become a PLC Developer",
    date : "Sep, 2025",
    icon: GiFactory,
  },
  {
  id: 15,
  name: "Docker for Developers",
  date : "Sep, 2025",
  icon: FaDocker,
}
];
