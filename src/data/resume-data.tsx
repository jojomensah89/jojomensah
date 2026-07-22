export const RESUME_DATA = {
  name: "Ebenezer Jojo Mensah",
  initials: "EJM",
  location: "Takoradi, Ghana",
  locationLink: "https://www.google.com/maps/place/Takoradi/",
  about: "Software Engineer building dependable digital products.",
  summary:
    "I build thoughtful product experiences across the frontend, backend, and the systems that keep them reliable.",
  avatarUrl: "/profile.jpg",
  contact: {
    email: "ebenezerjojomensah16@gmail.com",
    github: "https://github.com/jojomensah89",
    linkedin: "https://www.linkedin.com/in/jojomensah/",
  },
  experience: [
    {
      company: "AmaliTech",
      role: "Software Engineer",
      period: "May 2023 — Sep 2025",
      description:
        "Built and refined product features across modern web applications, working with Vue, React, TypeScript, GraphQL, and collaborative delivery teams.",
    },
    {
      company: "AmaliTech",
      role: "Graduate Trainee",
      period: "Apr 2022 — Apr 2023",
      description:
        "Developed production engineering foundations through structured training, team delivery, and modern frontend practice.",
    },
    {
      company: "Lands Commission Ghana",
      role: "Graduate Geological Engineer",
      period: "Sep 2020 — Aug 2021",
      description:
        "Supported geospatial and land-survey work, bringing a systems-oriented engineering mindset into software.",
    },
    {
      company: "AYA Engineering Ltd",
      role: "Engineering Intern",
      period: "Jun 2019 — Aug 2019",
      description:
        "Gained early professional experience in field engineering, structural geology, and collaborative technical work.",
    },
  ],
  capabilities: [
    {
      title: "Product engineering",
      items: ["React", "TypeScript", "Next.js", "TanStack Start", "Vue.js"],
    },
    {
      title: "Backend & infrastructure",
      items: ["Node.js", "Hono", "PostgreSQL", "Cloudflare Workers", "Drizzle"],
    },
    {
      title: "AI & automation",
      items: ["OpenAI", "Gemini", "AI SDK", "LangGraph", "Background queues"],
    },
    {
      title: "Tools & practices",
      items: ["GitHub", "GraphQL", "Testing", "CI/CD", "Product design"],
    },
  ],
  projects: [
    {
      name: "RefFlow",
      eyebrow: "Flagship product · KNUST-first pilot",
      description:
        "A structured academic-request platform that helps students request recommendation letters and gives lecturers a clear workspace to manage and complete them.",
      contribution:
        "Designed role-aware experiences and the request lifecycle across student, lecturer, and admin workflows. Built the queue-backed notification path and idempotency safeguards for notifications and payment callbacks.",
      stack: [
        "React",
        "TanStack Start",
        "Cloudflare Workers",
        "PostgreSQL",
        "Better Auth",
        "Gemini",
      ],
      href: "https://refflow.jsd-technologies.com/",
      linkLabel: "Visit RefFlow",
      private: true,
    },
    {
      name: "Spendy",
      eyebrow: "Personal finance product",
      description:
        "A personal spending tracker for categorising transactions, reviewing spending history, and exporting records to CSV.",
      contribution:
        "Built a focused Next.js product experience with secure authentication, database-backed spending records, responsive dashboards, and export-ready reporting.",
      stack: [
        "Next.js 14",
        "TypeScript",
        "Prisma",
        "Clerk",
        "TanStack Query",
        "React Hook Form",
        "Zod",
        "Tailwind CSS",
        "Framer Motion",
      ],
      href: "https://spendy-ashy.vercel.app",
      repositoryHref: "https://github.com/jojomensah89/spendy",
      linkLabel: "Open live demo",
      private: false,
    },
  ],
  openSource: [
    {
      project: "GOAT SDK",
      description:
        "Improved wallet-viem integration documentation and onboarding for EVM-compatible wallet setup, replacing Solana-specific guidance.",
      href: "https://github.com/goat-sdk/goat/pull/162",
      linkLabel: "View merged pull request",
    },
  ],
} as const;
