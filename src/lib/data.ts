import { Linkedin, Github, Mail } from "lucide-react";

export const navItems = ["Home", "About", "Projects", "Skills"];

export const skilltags = [
  "Web Designer",
  "UI/UX Designer",
  "Hardware Designer",
  "Frontend Developer",
  "Content Writer",
  "Technical Writer",
];

export const about = {
  description: `I'm a multidisciplinary creator specializing in UI/UX designer, Frontend developer and IoT Innovator.
I design intuitive digital experiences and express ideas through comics and logo design, blending creativity with technology.
`,
  works: [
    { id: 1, image: "/assets/works/tpmhiring.webp" },
    { id: 2, image: "/assets/works/tpmsquad.webp" },
    { id: 3, image: "/assets/works/saddleup.webp" },
    { id: 4, image: "/assets/works/beyondsyllabus.webp" },
    { id: 5, image: "/assets/works/tpm.webp" },
    { id: 6, image: "/assets/works/tpmrelease.webp" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Purple Movement",
    description:
      "A visually immersive landing page crafted to inspire creativity, collaboration, and growth beyond traditional limits.",
    link: "https://www.figma.com/design/LJ15uH59yV6PbMidOSBoMa/PORTFOLIO?node-id=66-562&t=BJ7Pf3uDueojMgLC-0",
    mockupBg: "from-orange-600/30 to-red-600/30",
    image: "/assets/projects/purple.webp",
  },
  {
    id: 2,
    title: "Beyond Syllabus",
    description:
      "A modern AI-powered education platform UI designed to simplify university learning and syllabus exploration.",
    link: "https://www.figma.com/design/LJ15uH59yV6PbMidOSBoMa/PORTFOLIO?node-id=66-726&t=BJ7Pf3uDueojMgLC-0",
    mockupBg: "from-blue-600/30 to-purple-600/30",
    image: "/assets/projects/beyond.webp",
  },
  {
    id: 3,
    title: "DropaNote",
    description:
      "A modern SaaS landing page design focused on collecting, managing, and analyzing user feedback with clarity and speed.",
    link: "https://www.figma.com/design/LJ15uH59yV6PbMidOSBoMa/PORTFOLIO?node-id=67-2486&t=BJ7Pf3uDueojMgLC-0",
    mockupBg: "from-green-600/30 to-teal-600/30",
    image: "/assets/projects/dropanote.webp",
  },
  {
    id: 4,
    title: "XCARTA",
    description:
      "A bold gaming platform website design showcasing immersive experiences, creators, and digital worlds.",
    link: "https://www.figma.com/design/LJ15uH59yV6PbMidOSBoMa/PORTFOLIO?node-id=67-2700&t=BJ7Pf3uDueojMgLC-0",
    mockupBg: "from-yellow-600/30 to-orange-600/30",
    image: "/assets/projects/xcarta.webp",
  },
  {
    id: 5,
    title: "μLearn",
    description:
      "A community-driven learning platform UI designed to enable peer learning, mentorship, and collaborative growth.",
    link: "https://www.figma.com/design/LJ15uH59yV6PbMidOSBoMa/PORTFOLIO?node-id=66-1383&t=BJ7Pf3uDueojMgLC-0",
    mockupBg: "from-red-600/30 to-blue-600/30",
    image: "/assets/projects/mulearn.webp",
  },
  {
    id: 6,
    title: "The adventures of sunny the solar flare",
    description:
      "Explore the wonders of space weather with Sunny, the Solar Flare, and learn how the Sun shapes life on Earth.",
    link: "https://astro-ignite.vercel.app/",
    mockupBg: "from-purple-600/30 to-blue-600/30",
    image: "/assets/projects/storybook.webp",
  },
];

export const education = [
  {
    id: 1,
    institution: "Marian Engineering College",
    degree: "B.Tech in Electronics and Computer Engineering",
    icon: "/assets/education/mec.webp",
  },
];

export const experiences = [
  {
    id: 1,
    role: "UI/UX Design Intern",
    company: "Metaloom",
    location: "Remote",
    duration: "2025 - Present",
    description:
      "Designed user interfaces and experiences for web applications. Collaborated with cross-functional teams to deliver pixel-perfect designs.",
    achievements: ["5+ UI Designs", "100% UX Improvement", "Design Sprints"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    role: "Documentation Lead",
    company: "FOSS",
    location: "Campus-based",
    duration: "2024 - present",
    description:
      "Managed and curated documentation for open-source projects, transforming complex ideas into clear, contributor friendly content.",
    achievements: ["10+ Projects", "200% Growth", "Team Building"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 3,
    role: "Design Lead",
    company: "Pragya IEDC",
    location: "Campus-based",
    duration: "2024 - 2025",
    description:
      "Shaped the visual identity of Pragya IEDC by leading design efforts that brought campus innovation and ideas to life.",
    achievements: ["10+ Projects", "200% Growth", "Team Building"],
    gradient: "from-orange-500 to-red-500",
  },
];

export const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:arafan383@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arafa-n-571490385/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Arafa-21",
  },
];
