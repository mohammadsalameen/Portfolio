import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { IoLogoNodejs } from "react-icons/io5";
import { BiBadge } from "react-icons/bi";

export const NavLinks = [
  {
    id: 1,
    url: "#",
    label: "Home",
  },
  {
    id: 2,
    url: "#",
    label: "Services",
  },
  {
    id: 3,
    url: "#",
    label: "Resume",
  },
  {
    id: 4,
    url: "#",
    label: "Works",
  },
  {
    id: 5,
    url: "#",
    label: "Skills",
  },
  {
    id: 6,
    url: "#",
    label: "Certifications",
  },
  {
    id: 7,
    url: "#",
    label: "Contact",
  },
];

export const WorkCard = [
  {
    id: 1,
    icon: FaCodepen,
    role: "Full-Stack Developer",
    description:
      "I have worked on various projects as a full-stack developer, utilizing technologies such as React, Node.js, and MongoDB to build dynamic web applications. My experience includes both front-end and back-end development, ensuring seamless integration and functionality across the stack.",
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

export const EducationCard = [{
    id: 1,
    icon: BiBadge,
    role: "Bachelor degree in Computer Systems Engineering",
    date: "Sep 2020 - Jan 2025",
},
{
    id : 2,
    icon : FaReact,
    role : 'Certificate in Frontend Developer',
    date : 'Dec 2024 - Jun 2025',
},
{
    id: 3,
    icon: BsDatabase,
    role: "Certificate in Backend Developer",
    date: "Nov 2024 - May 2025",
},
];