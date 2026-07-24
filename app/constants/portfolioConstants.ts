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

export interface HeroContent {
  greeting: string;
  name: string;
  title: string;
  roles: string[];
  elevatorPitch: string;
}

export const HERO_CONTENT: HeroContent = {
  greeting: "Hi, I'm ",
  name: "Kavin Barath",
  title: "Senior Software Engineer",
  roles: ["Full Stack Developer", "Frontend Engineer", "Backend Architect"],
  elevatorPitch: "An engineer who loves turning complex challenges into simple, elegant digital experiences. I bring ideas from concept to production with a focus on smart design and continuous learning. Always evolving with modern tech to create software that makes a real impact. Let’s build something great together.",
};

export interface AboutContent {
  titleWho: string;
  titleSkills: string;
  paragraphs: string[];
}

export const ABOUT_CONTENT: AboutContent = {
  titleWho: "Who I Am",
  titleSkills: "Technical Skills",
  paragraphs: [
    "Senior Full-Stack Engineer with <strong>5+ years of experience</strong> specializing in building and scaling enterprise-level applications using <strong>React.js and Node.js</strong>. Proven track record of leading development teams, collaborating across cross-functional units, and delivering customer-centric solutions with robust API integrations.",
    "Strong advocate for project ownership, direct client engagement, and clean code practices, with consistent recognition for high-quality product delivery in large-scale environments.",
  ],
};

export interface ContactContent {
  title: string;
  location: string;
  descSection: string;
  descPage: string;
  formLabels: {
    name: string;
    email: string;
    message: string;
  };
  formPlaceholders: {
    name: string;
    email: string;
    message: string;
  };
  statusMessages: {
    sending: string;
    success: string;
    error: string;
    devSuccess: string;
    devError: string;
    credentialsMissing: string;
  };
}

export const CONTACT_CONTENT: ContactContent = {
  title: "Get In Touch",
  location: "Bengaluru, India",
  descSection: "Looking to collaborate, discuss technical architecture, or build custom software solutions? Drop me a message—I’m always happy to connect over interesting ideas and projects.",
  descPage: "Have a project in mind, need architecture reviews, or want to discuss full stack code? Drop a message below or reach out via socials.",
  formLabels: {
    name: "Your Name",
    email: "Your Email",
    message: "Your Message",
  },
  formPlaceholders: {
    name: "John Doe",
    email: "john@example.com",
    message: "Tell me about your project...",
  },
  statusMessages: {
    sending: "Sending...",
    success: "Thank you! Your message has been sent successfully.",
    error: "Something went wrong while sending your message. Please try again later.",
    devSuccess: "Message sent successfully! (Dev Mode: Dispatched notification and auto-reply templates)",
    devError: "Error: {error} (Verify EmailJS Service ID, Template IDs, or CSP)",
    credentialsMissing: "EmailJS credentials are not configured. Please define them in your environment variables.",
  },
};

export interface BlogTopic {
  title: string;
  desc: string;
  tag: string;
  comingSoon?: boolean;
}

export const FUTURE_TOPICS: BlogTopic[] = [
  {
    title: "Uncoupling Monoliths to Microservices",
    desc: "A practical guide to database separation and event-driven patterns in enterprise applications.",
    tag: "System Design",
    comingSoon: true,
  },
  {
    title: "Securing AWS Event-Driven Models",
    desc: "Fine-grained IAM policy scripting, API Gateways authorization, and secure Lambda deployments.",
    tag: "AWS / Cloud",
    comingSoon: true,
  },
  {
    title: "Next.js 16 & React 19 Client Workflows",
    desc: "Exploring the new rendering pipelines, server components, and performance optimizations.",
    tag: "Frontend",
    comingSoon: true,
  },
  {
    title: "Database Tuning for Transactional Integrity",
    desc: "Indexing strategies, locking profiles, and read/write scaling in PostgreSQL and MySQL.",
    tag: "Databases",
    comingSoon: true,
  },
];

export interface NotFoundContent {
  title: string;
  errorTag: string;
  description: string;
  backButtonText: string;
}

export const NOT_FOUND_CONTENT: NotFoundContent = {
  title: "Page Not Found",
  errorTag: "Error 404",
  description: "The page you are looking for does not exist or has been moved. Use the link above to head back to the main homepage.",
  backButtonText: "Back to Portfolio",
};

