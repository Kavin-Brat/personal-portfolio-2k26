export interface Job {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface PortfolioSkills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  cloud: string[];
  concepts: string[];
}

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  email: "contact@kavin.dev",
  resume: "/Kavin-Resume.pdf",
};

export const PORTFOLIO_SKILLS: PortfolioSkills = {
  languages: ["TypeScript", "JavaScript", "Python", "Golang", "SQL", "HTML/CSS"],
  frameworks: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Tailwind CSS"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Kafka"],
  cloud: ["AWS (EC2, S3, Lambda, API Gateway, IAM, CDK)", "GCP", "Docker", "Kubernetes"],
  concepts: ["Microservices", "RESTful APIs", "CI/CD Pipelines", "Event-Driven Architecture", "System Design"],
};

export const DOMAIN_EXPERTISE: string[] = [
  "FinTech", "E-Commerce", "SaaS Platforms", "Microservices & Distributed Systems", 
  "Customer Management System", "AI ChatBot Integration", "Automated Workflows", 
  "Healthcare Platforms", "Real Estate Portals", "Custom APIs & Gateways", 
  "Database Tuning & Scalability", "CI/CD & Infrastructure Codes (IaC)"
];

export const JOBS_EXPERIENCE: Job[] = [
  {
    role: "Lead Software Engineer",
    company: "Openturf Technologies",
    duration: "2024 - Present",
    description: [
      "Designed and implemented end-to-end architecture for fintech microservices including ledgers, onboarding, BizOps, and compliance pathways.",
      "Championed AWS-based DevOps practices, automated pipelines, secure IAM roles, and CDK infrastructure deployments.",
      "Led, mentored, and enabled junior developers within an agile development pod.",
      "Optimized database architectures with MongoDB, MySQL, PostgreSQL, and Kafka for microservices scalability."
    ]
  },
  {
    role: "Tech Lead - Full Stack Development",
    company: "AppXperts IT Solutions",
    duration: "2022 - 2024",
    description: [
      "Configured secure, high-availability AWS infrastructures using VPC, EC2, Lambda, and API Gateway instances.",
      "Engineered CI/CD flows with GitHub Actions to automate server configs and fast live deployments.",
      "Designed real-time event-driven messaging pipelines utilizing Kafka queues for decoupled messaging.",
      "Managed client communication, reviews, sprint iterations, and technical milestone planning."
    ]
  },
  {
    role: "Software Developer",
    company: "AppXperts IT Solutions",
    duration: "2020 - 2022",
    description: [
      "Programmed REST integrations and client portals using Node.js, Angular, and React frameworks.",
      "Created custom configurations for Calendly, Shopify, and social platform integrations.",
      "Assisted team with backup management, Docker setups, and script automations."
    ]
  },
  {
    role: "Software Trainee",
    company: "Hattussa IT Solutions",
    duration: "2019 - 2020",
    description: [
      "Created backend pipelines to query, filter, and structure raw data from 200+ external sources.",
      "Designed SQL/NoSQL databases optimization tasks reducing query latency.",
      "Assisted full-cycle QA testing and deployment prep tasks."
    ]
  }
];
