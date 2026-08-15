import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mirjahanali.com"),
  title: {
    default: "Mirjahan Ali | AI Developer & Automation Engineer",
    template: "%s | Mirjahan Ali",
  },
  description:
    "Mirjahan Ali is an AI Developer and Automation Engineer from Kolkata, India, building AI agents, automation workflows, n8n systems, chatbots, SaaS platforms and custom web applications.",
  keywords: [
    "AI Developer",
    "AI Automation",
    "AI Agent Developer",
    "n8n Automation",
    "AI Chatbot Developer",
    "SaaS Developer",
    "Automation Engineer",
    "Business Automation",
    "Web Development",
    "AI Development",
  ],
  authors: [{ name: "Mirjahan Ali" }],
  creator: "Mirjahan Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mirjahanali.com",
    siteName: "Mirjahan Ali",
    title: "Mirjahan Ali | AI Developer & Automation Engineer",
    description:
      "Mirjahan Ali is an AI Developer and Automation Engineer from Kolkata, India, building AI agents, automation workflows, n8n systems, chatbots, SaaS platforms and custom web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirjahan Ali | AI Developer & Automation Engineer",
    description:
      "AI Developer and Automation Engineer building AI agents, automation workflows, n8n systems, chatbots and SaaS platforms.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-ink text-zinc-100 antialiased">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
