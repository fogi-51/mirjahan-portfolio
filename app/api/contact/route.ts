import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const PROJECT_TYPES = [
  "AI Automation",
  "AI Agent",
  "Chatbot",
  "SaaS",
  "Web Application",
  "n8n Automation",
  "API Integration",
  "Other",
];

const BUDGETS = ["Under ₹25K", "₹25K–₹50K", "₹50K–₹1L", "₹1L+", "Not Decided"];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured. Please set RESEND_API_KEY." },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const projectType = typeof body.projectType === "string" ? body.projectType.trim() : "";
  const budget = typeof body.budget === "string" ? body.budget.trim() : "";
  const description = typeof body.description === "string" ? body.description.trim() : "";

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Please provide your name." }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (!description || description.length > 5000) {
    return NextResponse.json({ error: "Please describe your project." }, { status: 400 });
  }

  const from = process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
  const to = (process.env.CONTACT_TO_EMAIL || "mirjahan@fogi.co.in")
    .split(",")
    .map((addr) => addr.trim())
    .filter(Boolean);

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family:Inter,system-ui,sans-serif;background:#f6f6f8;padding:24px;color:#18181b;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e4e4e7;">
        <div style="background:linear-gradient(135deg,#4f7dff,#8b5cf6);padding:24px 28px;">
          <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;">New Project Inquiry</h1>
          <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">Received from the portfolio contact form</p>
        </div>
        <div style="padding:28px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr>
              <td style="padding:8px 0;color:#71717a;width:140px;">Name</td>
              <td style="padding:8px 0;color:#18181b;font-weight:600;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#71717a;">Email</td>
              <td style="padding:8px 0;color:#18181b;font-weight:600;">
                <a href="mailto:${escapeHtml(email)}" style="color:#4f7dff;">${escapeHtml(email)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#71717a;">Company</td>
              <td style="padding:8px 0;color:#18181b;font-weight:600;">${company ? escapeHtml(company) : "—"}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#71717a;">Project Type</td>
              <td style="padding:8px 0;color:#18181b;font-weight:600;">${projectType || "—"}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#71717a;">Budget</td>
              <td style="padding:8px 0;color:#18181b;font-weight:600;">${budget || "—"}</td>
            </tr>
          </table>
          <div style="margin-top:20px;padding-top:20px;border-top:1px solid #e4e4e7;">
            <p style="margin:0 0 8px;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Project Description</p>
            <p style="margin:0;color:#18181b;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(description)}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      html,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 }
    );
  }
}
