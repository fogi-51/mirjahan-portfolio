export const siteConfig = {
  name: "Mirjahan Ali",
  brand: "MIRJAHAN ALI",
  location: "Kolkata, India",
  phone: "+91 6290403092",
  phoneHref: "tel:+916290403092",
  role: "AI Developer • Automation Engineer",
  badge: "AI DEVELOPER • AUTOMATION ENGINEER",
  headline: "I Build AI-Powered Systems That Automate Real Business.",
  subheadline:
    "I design AI agents, automation workflows, chatbots, SaaS platforms and custom software that help businesses reduce repetitive work and operate smarter.",
  email: "mirjahan@fogi.co.in",
  social: {
    email: "mailto:mirjahan@fogi.co.in",
    linkedin: "#",
    github: "#",
    whatsapp: "https://wa.me/916290403092",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "AI Automation",
    description:
      "Automate repetitive business processes using AI and intelligent workflows that run without constant supervision.",
  },
  {
    title: "AI Agents",
    description:
      "Build AI agents for customer support, research, lead qualification and complex business tasks.",
  },
  {
    title: "n8n Automation",
    description:
      "Connect applications, APIs, databases and AI models through powerful, reliable n8n workflows.",
  },
  {
    title: "AI Chatbots",
    description:
      "Build intelligent website, WhatsApp and Messenger chatbot systems that respond instantly, 24/7.",
  },
  {
    title: "SaaS Development",
    description:
      "Build custom scalable web-based software platforms designed to grow with your business.",
  },
  {
    title: "Web Application Development",
    description:
      "Create modern, responsive business applications with clean UX and production-grade code.",
  },
  {
    title: "API Integration",
    description:
      "Connect CRMs, payment systems, databases, AI services and external platforms into one workflow.",
  },
  {
    title: "Business Automation",
    description:
      "Convert manual processes into reliable, measurable automated systems that save real hours.",
  },
];

export const problems = [
  "Manual work",
  "Repetitive tasks",
  "Slow customer response",
  "Lost leads",
  "Disconnected tools",
  "Manual reports",
  "Support overload",
];

export const solutions = [
  "AI Agents",
  "Automated Workflows",
  "CRM Integration",
  "Chatbots",
  "API Automation",
  "Lead Automation",
  "Automated Reporting",
];

export const projects = [
  {
    title: "AI Business Automation Platform",
    category: "AI + n8n + APIs + Web App",
    challenge:
      "A growing business was drowning in manual data entry and repetitive follow-ups across disconnected tools.",
    solution:
      "Designed an AI-powered automation platform that orchestrates data flow between the web app, APIs and AI models, handling repetitive work automatically.",
    technology: ["OpenAI", "n8n", "Node.js", "REST APIs"],
    result:
      "A central platform where routine business processes run automatically and staff focus on work that needs human judgment.",
  },
  {
    title: "AI Customer Support System",
    category: "AI + Chatbot + API + Automation",
    challenge:
      "Customer queries piled up during and after business hours, and support teams re-answered the same questions daily.",
    solution:
      "Built an AI customer support system that understands queries, answers from the business's own knowledge base, and routes complex issues to the right person.",
    technology: ["AI Chatbot", "LLM API", "Webhooks", "CRM"],
    result:
      "Customers get instant, accurate answers any time of day while the support team handles only the conversations that truly need them.",
  },
  {
    title: "Business SaaS Platform",
    category: "SaaS + Database + API + Web Application",
    challenge:
      "A manual process running on spreadsheets had no real-time data, access control, or way to scale.",
    solution:
      "Developed a custom SaaS platform with a secure database, structured API and responsive web application tailored to the business workflow.",
    technology: ["React", "Next.js", "PostgreSQL", "Node.js"],
    result:
      "A reliable, scalable platform where data is centralized, always current, and every user works from a single source of truth.",
  },
  {
    title: "Lead Automation System",
    category: "n8n + CRM + AI + Messaging",
    challenge:
      "Incoming leads went cold because there was no fast, consistent follow-up and no structured qualification.",
    solution:
      "Automated the full lead pipeline: capture, AI qualification, CRM logging and instant WhatsApp follow-up, all connected through n8n.",
    technology: ["n8n", "WhatsApp API", "CRM", "AI"],
    result:
      "Every lead is contacted within minutes, qualified automatically, and tracked in the CRM without manual effort.",
  },
  {
    title: "Custom Business Management System",
    category: "Web App + Database + Automation",
    challenge:
      "Operations were scattered across documents and manual updates, making reporting slow and error-prone.",
    solution:
      "Built a custom management system with role-based access, automated reporting and integrated workflows tailored to the operation.",
    technology: ["Web App", "Database", "Automation", "Deployment"],
    result:
      "A single system that runs day-to-day operations and generates reports automatically, replacing hours of manual work.",
  },
];

export const architectureSteps = [
  { label: "Customer", icon: "User" },
  { label: "Website / WhatsApp / Messenger", icon: "MessageSquare" },
  { label: "AI Agent", icon: "Brain" },
  { label: "n8n", icon: "Workflow" },
  { label: "Business Logic", icon: "Cpu" },
  { label: "API", icon: "Plug" },
  { label: "CRM / Database", icon: "Database" },
  { label: "Automated Action", icon: "Zap" },
];

export const skillGroups = [
  {
    category: "AI",
    items: ["OpenAI", "Claude", "Gemini", "LLM APIs", "AI Agents"],
    icon: "Brain",
  },
  {
    category: "Automation",
    items: ["n8n", "Webhooks", "REST APIs", "Workflow Automation", "Cron Jobs"],
    icon: "Workflow",
  },
  {
    category: "Development",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PHP", "Laravel", "Python"],
    icon: "Code2",
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
    icon: "Database",
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Linux", "VPS", "cPanel", "Cloudflare", "Git/GitHub"],
    icon: "Server",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business problem, the current workflow, and what you actually need to improve.",
  },
  {
    number: "02",
    title: "Design",
    description: "Design the architecture and workflow — the right tools, systems and automation for the job.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop the AI, automation and software — clean, tested and built for the real world.",
  },
  {
    number: "04",
    title: "Test",
    description: "Test reliability and edge cases so the system works in production, not just in demos.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy, monitor and optimize — then keep improving as the business grows.",
  },
];

export const whyMe = [
  {
    title: "Business-first approach",
    description: "I solve business problems, not just technical ones. Every build starts with the outcome you want.",
    icon: "Target",
  },
  {
    title: "AI + automation expertise",
    description: "Deep practical work with AI agents, LLMs and automation platforms like n8n.",
    icon: "Brain",
  },
  {
    title: "Custom solutions",
    description: "No templates, no one-size-fits-all. Systems are designed around your workflow.",
    icon: "PenTool",
  },
  {
    title: "Practical problem solving",
    description: "I focus on what works in the real world and keeps your team productive.",
    icon: "Lightbulb",
  },
  {
    title: "Scalable architecture",
    description: "Built cleanly from day one so your system grows with your business.",
    icon: "Layers",
  },
  {
    title: "Clean user experience",
    description: "Tools and interfaces that are simple for real people to use every day.",
    icon: "MousePointerClick",
  },
  {
    title: "End-to-end development",
    description: "From concept and design through build, testing and deployment — one accountable partner.",
    icon: "Rocket",
  },
  {
    title: "Deployment & integration",
    description: "Server and cloud deployment with Docker, Linux, VPS and cPanel, connected to your stack.",
    icon: "Cloud",
  },
];

export const faqs = [
  {
    question: "What kind of projects do you work on?",
    answer:
      "I build AI-powered systems: AI agents, automation workflows, chatbots for web/WhatsApp/Messenger, SaaS platforms and custom web applications. If it involves connecting tools, automating work, or adding AI to a business process, it's in my lane.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. I work with startups, entrepreneurs, agencies and small businesses globally, and I'm based in Kolkata, India. Communication happens over calls, WhatsApp and email in a clear, structured way.",
  },
  {
    question: "How do you handle a new project?",
    answer:
      "Every project starts with discovery — I want to understand your business problem before recommending a solution. Then I design the architecture, build it, test it, and deploy it. You stay informed at every stage.",
  },
  {
    question: "What do your projects usually cost?",
    answer:
      "It depends on scope. Simple automations start under ₹25K, while larger SaaS builds run higher. After we discuss your project I'll give you a clear fixed quote before any work begins — no surprises.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Small automation workflows can be live in a few days. Full SaaS platforms typically take a few weeks. We'll agree on a realistic timeline during discovery based on exactly what you need.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Just a clear description of the problem you want to solve. From there I'll map out the workflow, recommend the right tools, and guide you through everything else step by step.",
  },
];
