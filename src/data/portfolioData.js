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
    title: "Wellness Core AI",
    description:
      "A health-focused application with pixel-perfect React.js screens on the frontend and Python Flask services on the backend, integrating specialized libraries to process health documents and chats for accurate, relevant responses.",
    tags: ["React.js", "Flask", "Python", "Healthcare"],
    link: "#",
    repo: "#",
    date: "May 2025 — Aug 2025",
  },
  {
    title: "Fastyr — AI Agents & Knowledge Management",
    description:
      "Working on the knowledge management layer of an AI agents platform, designing and executing Cypher queries against FalkorDB for accurate, context-aware retrieval, and optimizing how the knowledge base is structured for reliable responses.",
    tags: ["FalkorDB", "Cypher", "Python", "AI Agents"],
    link: null,
    repo: null,
    date: "Aug 2025 — Present",
  },
  {
    title: "Insight Bridge — Conversational BI Pipeline",
    description:
      "Architected an end-to-end conversational BI pipeline connecting Google BigQuery to Claude for natural-language data analysis, alongside standardized executive reporting in Looker Studio. Engineered SQL views to codify business logic, clean up schemas, and pre-join mapping tables into a single source of truth, then configured OAuth 2.0 client credentials with scoped API access in Google Cloud Console so Claude could query and manipulate data safely without compromising warehouse integrity — giving non-technical stakeholders both high-level dashboards and ad-hoc, AI-driven hypothesis testing.",
    tags: ["BigQuery", "Claude", "Looker Studio", "OAuth 2.0", "SQL"],
    link: null,
    repo: null,
    date: "2025 — Present",
  },
  {
    title: "E-Commerce Financial Reconciliation & P&L Engine",
    description:
      "An automated e-commerce financial engine that synchronizes multi-channel Shopify sales, refunds, and shipping logistics into a relational Airtable database, dynamically tracking real-time COGS, return shipping expenses, and monthly profitability with high accuracy.",
    tags: ["JavaScript", "Airtable", "Shopify API", "GoShippo API", "E-Commerce"],
    link: "#",
    repo: "#",
    date: "2024 — Present",
  },
  {
    title: "Online Pets Buying & Selling Store",
    description:
      "A university project built from scratch with React.js and React Bootstrap for a sleek, intuitive interface, using Hooks for state management and data consistency across the app.",
    tags: ["React.js", "React Bootstrap", "Hooks"],
    link: "#",
    repo: "#",
    date: "Jan 2024 — Dec 2024",
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
