export interface Job {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

export interface Project {
  name: string;
  duration: string;
  subtitle: string;
  description: string;
}

export interface SkillItem {
  name: string;
  icon?: string; // optional icon slug
}

export interface PortfolioSkills {
  languages: SkillItem[];
  frameworks: SkillItem[];
  databases: SkillItem[];
  tools: SkillItem[];
  concepts: SkillItem[];
}

export const SOCIAL_LINKS = {
  github: "https://github.com/Kavin-Brat",
  linkedin: "https://www.linkedin.com/in/kavin-barath/",
  email: "kavinbarath66@gmail.com",
  resume: "/KavinBarathS_Resume.pdf",
};

export const PORTFOLIO_SKILLS: PortfolioSkills = {
  languages: [
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "SQL", icon: "mysql" }, // custom dolphin icon handled in SkillIcon
    { name: "Ruby", icon: "ruby" },
  ],
  frameworks: [
    { name: "React.js", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express" },
    { name: "Vite", icon: "vite" },
    { name: "Material UI", icon: "materialui" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Redux", icon: "redux" },
    { name: "Angular", icon: "angular" },
    { name: "Next.js", icon: "nextjs" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MySQL", icon: "mysql" },
    { name: "MongoDB", icon: "mongodb" },
  ],
  tools: [
    { name: "Webpack Module Federation", icon: "webpack" },
    { name: "Nginx", icon: "nginx" },
    { name: "API Gateway", icon: "aws" },
    { name: "Git", icon: "git" },
  ],
  concepts: [
    { name: "Micro Frontend (MFE)", icon: "github" },
    { name: "Microservices", icon: "github" },
    { name: "API Design", icon: "github" },
    { name: "Security", icon: "github" },
    { name: "Clean Architecture", icon: "github" },
    { name: "Performance Optimization", icon: "github" },
    { name: "Code Reviews & Standards", icon: "github" },
    { name: "System Design", icon: "github" },
  ],
} as const;

export const DOMAIN_EXPERTISE: string[] = [
  "FinTech",
  "E-Commerce & Q-Commerce",
  "CRM & Client Portals",
  "Enterprise SaaS Platforms",
  "Partner Onboarding Systems",
  "AI Chatbots & GenAI",
  "Customer Support Platforms",
  "Microservices & Micro-Frontends",
  "Inventory & Logistics",
  "Event & Ticket Booking"
];

export const JOBS_EXPERIENCE: Job[] = [
  {
    role: "Senior Software Engineer",
    company: "Openturf Technologies",
    duration: "03/2024 - Present",
    location: "Bengaluru, India",
    description: [
      "Architected and led the monolithic migration of the TOPS Portal (an enterprise transaction management system) into a modular Micro Frontend (MFE) architecture using Webpack Module Federation, drastically improving cross-team deployment autonomy.",
      "Designed and engineered highly resilient backend microservices using Node.js to securely process, cancel, and reverse high-volume financial transactions coming from the Engage Plus Portal.",
      "Spearheaded an engineering team of 4 members, overseeing end-to-end development, testing workflows, and core API gateway integrations for the transaction monitoring platform.",
      "Deployed client-side onsite to partner directly with Product Engineering and Business Operations stakeholders, translating complex transaction compliance workflows into scalable technical requirements.",
      "Established strict engineering standards by driving comprehensive code reviews, which successfully optimized bundle sizes and resulted in a 15% measurable improvement in overall codebase maintainability.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Openturf Technologies",
    duration: "08/2021 - 02/2024",
    location: "Bengaluru, India",
    description: [
      "Engineered core modules for two enterprise transactional solutions: a Partner Management Portal automating API onboarding workflows for external partners, and the Engage Portal tracking global remittance data streams.",
      "Architected & developed high-performance analytics dashboards within the Engage Plus Portal using React.js and Vite, delivering real-time transaction summaries, ledger details, dynamic FX rate visualizations, and custom daily dashboard charting tools.",
      "Designed and deployed an integrated customer support module that streamlined transaction issue resolution, significantly reducing ticket resolution latency for end-users.",
      "Optimized application load times and state synchronization across complex web interfaces by implementing clean code architectures, advanced data-fetching paradigms, and robust REST API integrations.",
      "Partnered with cross-functional product and design teams to transform financial reporting wireframes into intuitive, highly accessible, and pixel-perfect dashboard interfaces.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "TOPS Portal",
    duration: "08/2024 - Present",
    subtitle: "Transaction Operations and Processing System",
    description:
      "An enterprise transaction management platform designed to streamline financial workflows. It facilitates real-time transaction monitoring, handles complex failure recovery pathways (such as automated cancellations and reversals), and processes live FX data tracking. Additionally, it provides critical, high-availability internal operations suites to optimize transaction resolution cycles for business units.",
  },
  {
    name: "Engage Portal",
    duration: "02/2023 - 08/2024",
    subtitle: "Global Transaction Monitoring & Support",
    description:
      "A client-facing platform built for a global payments company to help users monitor, track, and report international remittance transactions in real-time. Includes comprehensive dashboards for transaction summaries, FX rate analysis, ledger details, and daily dashboard tools. Also implemented a support module to help customers raise tickets and resolve issues directly through the platform.",
  },
  {
    name: "Partner Management Portal",
    duration: "08/2021 - 02/2023",
    subtitle: "Partner Onboarding & API Integration",
    description:
      "A partner onboarding platform offering real-time access to APIs, allowing partners to generate reports based on specific corridors and test cases, track API testing progress in UAT environments, and receive technical support for smooth integration and collaboration.",
  },
];
