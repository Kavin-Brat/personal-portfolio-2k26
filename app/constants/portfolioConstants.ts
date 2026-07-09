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

export interface PortfolioSkills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
  concepts: string[];
}

export const SOCIAL_LINKS = {
  github: "https://github.com/Kavin-Brat",
  linkedin: "https://www.linkedin.com/in/kavin-barath/",
  email: "kavinbarath66@gmail.com",
  resume: "/Kavin-Resume.pdf",
};

export const PORTFOLIO_SKILLS: PortfolioSkills = {
  languages: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  frameworks: ["React.js", "Node.js", "Express.js", "Vite", "Material UI", "Tailwind CSS", "Redux"],
  databases: ["PostgreSQL", "REST APIs"],
  tools: ["Webpack Module Federation", "Nginx", "API Gateway", "Git"],
  concepts: ["Micro Frontend (MFE)", "Microservices", "RESTful APIs", "Monolithic Migration", "Code Reviews & Standards"],
};

export const DOMAIN_EXPERTISE: string[] = [
  "FinTech & Global Remittance",
  "Transaction Management Systems",
  "Micro Frontend Architecture",
  "Enterprise Portal Development",
  "Real-time FX Rate Visualization",
  "Fintech Partner Onboarding",
  "API Gateway Integration",
  "Financial Dashboards & Analytics",
  "Customer Support Modules",
  "Cross-functional Team Leadership",
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
      "Engineered core modules for two enterprise fintech solutions: a Partner Management Portal automating API onboarding workflows for external fintech partners, and the Engage Portal tracking global remittance data streams.",
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
    subtitle: "Fintech Partner Onboarding & API Integration",
    description:
      "A fintech partner onboarding platform offering real-time access to APIs, allowing partners to generate reports based on specific corridors and test cases, track API testing progress in UAT environments, and receive technical support for smooth integration and collaboration.",
  },
];
