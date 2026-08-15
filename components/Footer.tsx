import { navLinks, siteConfig } from "@/lib/data";
import { ArrowUp, Mail, Linkedin, Github, MessageCircle } from "lucide-react";

export default function Footer() {
  const footerLinks = navLinks.filter((l) => l.href !== "#home");

  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-soft/60">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />
      </div>

      <div className="container-x relative py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a
              href="#home"
              className="font-display text-sm font-bold tracking-[0.25em] text-white"
            >
              {siteConfig.brand}
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              AI Developer • Automation Engineer • AI Agent Builder
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              {siteConfig.location} • Building for the Global Market
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                target={siteConfig.social.linkedin.startsWith("#") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.github}
                target={siteConfig.social.github.startsWith("#") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.email}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href={siteConfig.phoneHref} className="transition-colors hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.location}</li>
              <li>Available for Global Projects</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © 2026 Mirjahan Ali. All rights reserved.
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-white"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
