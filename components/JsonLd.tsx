import { siteConfig } from "@/lib/data";

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mirjahan Ali",
  jobTitle: "AI Developer & Automation Engineer",
  description:
    "AI Developer and Automation Engineer building AI agents, automation workflows, n8n systems, chatbots, SaaS platforms and custom web applications.",
  url: "https://mirjahanali.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  telephone: "+916290403092",
  knowsAbout: [
    "AI Development",
    "AI Automation",
    "AI Agents",
    "n8n Workflow Automation",
    "AI Chatbots",
    "SaaS Development",
    "Web Application Development",
    "API Integration",
    "Business Automation",
    "Cloud Deployment",
  ],
  sameAs: [],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Mirjahan Ali — AI Developer & Automation Engineer",
  description:
    "AI Development, AI Automation, AI Agents, n8n Workflow Automation, AI Chatbots, SaaS Development, Web Applications, API Integration and Business Process Automation.",
  url: "https://mirjahanali.com",
  telephone: "+916290403092",
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  serviceType: [
    "AI Development",
    "AI Automation",
    "AI Agent Development",
    "n8n Automation",
    "AI Chatbot Development",
    "SaaS Development",
    "Web Application Development",
    "API Integration",
    "Business Automation",
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
