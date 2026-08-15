"use client";

import { useState, type FormEvent } from "react";
import { Send, Phone, Mail, Linkedin, Github, MessageCircle, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const projectTypes = [
  "AI Automation",
  "AI Agent",
  "Chatbot",
  "SaaS",
  "Web Application",
  "n8n Automation",
  "API Integration",
  "Other",
];

const budgets = ["Under ₹25K", "₹25K–₹50K", "₹50K–₹1L", "₹1L+", "Not Decided"];

const contactChannels = [
  { label: "Phone / WhatsApp", value: siteConfig.phone, href: siteConfig.social.whatsapp, icon: Phone },
  { label: "Email", value: siteConfig.email, href: siteConfig.social.email, icon: Mail },
];

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
  { label: "GitHub", href: siteConfig.social.github, icon: Github },
  { label: "WhatsApp", href: siteConfig.social.whatsapp, icon: MessageCircle },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    description: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          data?.error || "Something went wrong sending your message. Please try again."
        );
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all focus:border-accent/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-accent/20";

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 left-1/2 h-[480px] w-[860px] -translate-x-1/2 rounded-full bg-accent/[0.1] blur-[150px]" />
      </div>

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Contact"
          title="Have a Process Worth Automating?"
          description="Tell me what you want to build, automate or improve. Let's turn the idea into a practical digital system."
        />

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="glass-card flex h-full flex-col rounded-3xl p-7 md:p-8">
              <h3 className="font-display text-lg font-semibold text-white">
                Direct Contact
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Prefer to reach out directly? I usually respond the same day.
              </p>

              <div className="mt-7 space-y-4">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3.5 transition-all hover:border-accent/40 hover:bg-white/[0.05]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wider text-zinc-500">
                          {channel.label}
                        </p>
                        <p className="truncate text-sm font-medium text-white">
                          {channel.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Based In
                  </p>
                  <p className="text-sm font-medium text-white">
                    {siteConfig.location} — Building for the Global Market
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-6">
                <p className="mb-3 text-xs uppercase tracking-wider text-zinc-500">
                  Find me on
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("#") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-white hover:shadow-[0_0_16px_rgba(79,125,255,0.25)]"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass-card rounded-3xl p-7 md:p-8">
              {status === "success" ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.25)]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">
                    Message Sent
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
                    Thanks — your project details were sent successfully. I&apos;ll
                    get back to you at your email shortly. For the fastest
                    response, reach out directly on WhatsApp.
                  </p>
                  <a
                    href={siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-violet px-6 py-3 text-sm font-semibold text-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Message on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-zinc-300">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Company or project name (optional)"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-zinc-300">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                        className={`${inputClass} appearance-none ${
                          form.projectType ? "text-white" : "text-zinc-500"
                        }`}
                      >
                        <option value="" disabled className="bg-ink-card">
                          Select project type
                        </option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-ink-card text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="mb-2 block text-sm font-medium text-zinc-300">
                      Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setForm({ ...form, budget })}
                          className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                            form.budget === budget
                              ? "border-accent bg-accent/15 text-white shadow-[0_0_16px_rgba(79,125,255,0.25)]"
                              : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/25 hover:text-white"
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="mb-2 block text-sm font-medium text-zinc-300">
                      Project Description
                    </label>
                    <textarea
                      id="description"
                      required
                      rows={5}
                      placeholder="Tell me about the process you want to automate, build or improve..."
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-violet px-7 py-4 text-sm font-semibold text-white shadow-[0_0_32px_rgba(79,125,255,0.35)] transition-all hover:shadow-[0_0_48px_rgba(79,125,255,0.55)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Start the Conversation
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
