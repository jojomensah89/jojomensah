import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ebenezer Jojo Mensah",
  initials: "EJM",
  location: "Takoradi, Ghana, GMT",
  locationLink: "https://www.google.com/maps/place/Takoradi/",
  about:
    "Software Engineer",
  summary:
    "As a Software Engineer, I bring a comprehensive skill set to create innovative solutions with an acute attention to detail.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/96825758?s=400&u=2b6df1c4538901a8d2e15cedabe9557dfd75741d&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "jojomensah89@gmail.com",
    tel: "+233597880519",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jojomensah89",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ebenezer-jojo-mensah-0554a9230/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/jojomensah89",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Kwame Nkrumah University of Science and Technology",
      degree: "Bachelor's Degree in Geological Engineering",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Amalitech",
      link: "https://amalitech.com/",
      badges: ["Hybrid"],
      title: "Frontend Developer",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "Lead a team to implement new features, improving the way developers ship the code. Technologies: React, TypeScript, GraphQL",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Rust",
    "Solidity",
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt",
    "AngularJS",
    "Node.js/Express/Hono",
    "FastAPI",
    "AI Integration (OpenAI, GEMINI, CLAUDE)",
    "AI Agents(smolagents,llamaindex,langraph)",
    "Foundry",
    "Hardhat",
    "GraphQL",
  ],
  projects: [
    {
      title: "Acme Dashboard",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "A platform to see invoices and customers",
      logo: ConsultlyLogo,
      link: {
        label: "nextjs-dashboard-dun-xi-36.vercel.app",
        href: "https://nextjs-dashboard-dun-xi-36.vercel.app/",
      },
    },
  ],
} as const;
