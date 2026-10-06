// ────────────────────────────────────────────────────────────
// Real content, pulled from your CV. Feel free to keep tweaking
// wording here any time — nothing else in the app needs to change.
// ────────────────────────────────────────────────────────────

export const profile = {
  name: "Ali Raza Javed",
  role: "Software Engineer",
  tagline:
    "I build dynamic frontends with React.js and reliable backends with Python & FastAPI — currently deep in AI-driven knowledge systems using GCP and FalkorDB.",
  location: "Lahore, Pakistan",
  email: "alirazajaved2001@gmail.com",
  phone: "+92 310 4630501",
  resumeUrl: "#",
  socials: {
    github: "https://github.com/AliRazaJaved1221",
    linkedin: "https://www.linkedin.com/in/alirazajaved2001/",
  },
};

export const about = {
  bio: [
    "I'm a software engineer currently working as a Software Engineer at Databiqs, building health-focused chatbot products with React.js on the frontend and Python FastAPI on the backend, backed by GCP.",
    "Before that, I spent time at Xeven Solutions — first as a frontend developer building e-commerce platforms, and earlier still in an admin role, which taught me a lot about how the operational side of a company actually runs. These days I'm focused on knowledge management and retrieval systems, designing Cypher queries against FalkorDB to power context-aware AI agents.",
  ],
  stats: [
    { label: "Current role", value: "Software Engineer" },
    { label: "Since", value: "May 2025" },
    { label: "Based in", value: "Lahore, PK" },
    { label: "Degree", value: "BSCS" },
  ],
};

export const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "Bootstrap", level: 85 },
      { name: "Redux", level: 78 },
    ],
  },
  {
    category: "Backend & Cloud",
    skills: [
      { name: "Python", level: 85 },
      { name: "FastAPI", level: 82 },
      { name: "Google Cloud Platform", level: 75 },
      { name: "Firebase", level: 78 },
      { name: "FalkorDB / Cypher", level: 80 },
    ],
  },
  {
    category: "Automation & Workflows",
    skills: [
      { name: "GoHighLevel (GHL)", level: 88 },
      { name: "n8n", level: 85 },
      { name: "Make.com", level: 84 },
      { name: "Zapier", level: 86 },
      { name: "Airtable", level: 82 },
    ],
  },
  {
    category: "Tools & Practice",
    skills: [
      { name: "Git & GitHub", level: 86 },
      { name: "Microsoft Office", level: 88 },
      { name: "Query Optimization", level: 78 },
      { name: "Networking Essentials", level: 70 },
    ],
  },
];

export const projects = [
  {
    title: "Automation Builder",
    description:
      "Built and maintained automated business processes across multiple client workflows using Airtable, GHL, Make.com and other automation tools. Connected platforms through APIs and workflow logic to automate data movement and reduce manual operational work, troubleshooting workflow failures to improve reliability and process execution.",
    tags: ["Airtable", "GoHighLevel (GHL)", "Make.com", "n8n", "API Integrations"],
  },
  {
    title: "Airtable Automation Developer",
    description:
      "Built a data operations system in Airtable with custom JavaScript automations integrating Shopify, Amazon, GA4, advertising platforms and Klaviyo. Implemented automated P&L reporting, a rules-based inventory classifier, and customer segmentation synchronized with Shopify, debugging refund COGS and API attribution issues.",
    tags: ["Airtable", "JavaScript", "Shopify", "Amazon", "GA4", "Klaviyo", "Advertising Platforms"],
  },
  {
    title: "QuickBooks Automated Reporting Pipeline",
    description:
      "Built an automated pipeline where clients upload QuickBooks files and financial data is processed through a structured workflow. Automated report generation from uploaded accounting data, reducing repetitive manual processing and improving reporting efficiency.",
    tags: ["Workflow Automation", "QuickBooks", "Data Processing", "Automated Reporting"],
  },
  {
    title: "AI Agents",
    description:
      "Worked on the knowledge management component with a focus on efficient data retrieval and query handling using FalkorDB. Designed and executed Cypher queries, optimized query strategies, and structured knowledge data for reliable, context-aware retrieval.",
    tags: ["FalkorDB", "Cypher", "Knowledge Management", "AI Agents"],
  },
  {
    title: "Wellness Core AI",
    description:
      "Developed pixel-perfect React.js frontend screens and backend services with Python Flask. Integrated specialized libraries for processing health documents and chats and resolved technical issues affecting performance and user experience.",
    tags: ["React.js", "Python", "Flask", "AI / Document Processing"],
  },
  {
    title: "Online Pets Buying and Selling Store",
    description:
      "Built responsive frontend screens from scratch for a university marketplace project. Used React Hooks for state management and data consistency while contributing to application architecture and user experience.",
    tags: ["React.js", "React Bootstrap", "React Hooks"],
  },
];

export const experience = [
  {
    date: "May 2025 — Present",
    role: "Software Engineer",
    org: "Databiqs",
    description:
      "Engineering advanced web applications with React.js on the frontend and Python FastAPI on the backend, using GCP as the database layer. Built deep expertise developing a chatbot specialized for health-related conversations, working closely with a strong team of developers.",
  },
  {
    date: "May 2024 — Feb 2025",
    role: "Internee Software Engineer",
    org: "Xeven Solutions",
    description:
      "Worked as a frontend developer engineering advanced web applications with React.js. Gained hands-on experience building user-centric e-commerce platforms, including an independent university project.",
  },
];

export const education = [
  {
    date: "Oct 2020 — Dec 2024",
    degree: "BSCS — Bachelor of Science in Computer Science",
    org: "Virtual University of Pakistan",
  },
];

export const certificates = [
  {
    name: "Networking Essentials",
    org: "Cisco Networking Academy",
    date: "21 July 2023",
    description: "Certificate of course completion focused on the fundamentals of networking.",
  },
  {
    name: "Freelancing Training",
    org: "DigiSkills.pk",
    date: "Feb 2021 — May 2021",
    description: "Comprehensive training certificate covering the fundamentals of freelancing.",
  },
];
