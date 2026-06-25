import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, Code, Shield, Sparkles, ChevronDown, FileText, CheckCircle, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createPortal } from "react-dom";

const PERSONAL_DATA = {
  name: "Clyde Miles Bonita",
  location: "Taguig 1632, Philippines",
  email: "princeclyde80@gmail.com",
  phone: "09109044620",
  tagline: "Service. Technology. Precision.",
  languages: ["English", "Tagalog"],
};

type PathId = "housekeeping" | "tech" | "security";

interface ResumeSection {
  heading: string;
  items: string[];
}

interface Experience {
  role: string;
  company: string;
  date: string;
  bullets?: string[];
}

interface Education {
  degree: string;
  school: string;
  date: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
}

interface PathData {
  id: PathId;
  label: string;
  icon: typeof Sparkles;
  accentColor: string;
  tagBg: string;
  profile: string;
  accomplishments: ResumeSection[];
  expertise: string[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  languages: string[];
  tools?: string[];
  projects?: { title: string; description: string; tags: string[] }[];
}

const PATHS: PathData[] = [
  {
    id: "housekeeping",
    label: "Housekeeping & Hospitality",
    icon: Sparkles,
    accentColor: "text-amber-400",
    tagBg: "bg-amber-400/10 text-amber-400 border-amber-400/30",
    profile:
      "A highly disciplined, detail-oriented, and guest-focused hospitality professional with formal TESDA NC II certification in luxury housekeeping standards. Adept at maintaining flawless cleanliness, managing high-volume guest requests, and executing tasks with a strong sense of urgency and discretion. Possesses exceptional conflict-resolution skills and a proactive mindset, fully prepared to deliver 5-star service and maintain premium brand standards in a fast-paced luxury hotel or cruise line environment.",
    accomplishments: [
      {
        heading: "Health, Safety & Sanitization Protocols",
        items: [
          "Proficient in chemical safety, room inspection checklists, and hazard prevention.",
          "Trained in proper handling and storage of cleaning agents per industry standards.",
        ],
      },
      {
        heading: "Time Management & Efficiency",
        items: [
          "Proven ability to manage strict room turnover timelines while maintaining immaculate quality.",
          "Capable of servicing multiple rooms per shift without compromising cleanliness standards.",
        ],
      },
      {
        heading: "Operational Discipline & Discretion",
        items: [
          "High standard of personal grooming, professional communication, and strict adherence to guest privacy.",
          "Demonstrates consistent reliability, punctuality, and attention to brand presentation.",
        ],
      },
      {
        heading: "Guest Relations & Service Excellence",
        items: [
          "Anticipates guest needs, handles inquiries professionally, and resolves issues effectively under pressure.",
          "Skilled at maintaining a calm, courteous demeanor in high-demand hospitality environments.",
        ],
      },
      {
        heading: "5-Star Cleanliness Standards",
        items: [
          "Deep cleaning, room makeup, turndown service, and meticulous attention to detail.",
          "Familiar with luxury property standards for linen, amenity placement, and room presentation.",
        ],
      },
    ],
    expertise: [
      "Meticulous Room Inspection & Detailing",
      "Public Area & Deep Cleaning Maintenance",
      "Turndown & Bed-Making Service",
      "Health & Safety Compliance",
      "Chemical Safety & Hazard Prevention",
      "Guest Privacy & Discretion",
      "Time Management Under Pressure",
      "Report Writing",
      "Public Interaction",
    ],
    experience: [
      {
        role: "Security Guard",
        company: "C6 Lakeside, Taguig City",
        date: "Aug 2024 – Present",
        bullets: [
          "Maintained a 100% safety record by enforcing strict access control protocols for all personnel and visitors.",
          "Demonstrated operational discipline and professional conduct in a service-facing environment.",
          "Developed strong conflict-resolution and communication skills through daily public interaction.",
        ],
      },
    ],
    education: [
      {
        degree: "High School Diploma",
        school: "Grant Cecilia Integrated School, Taguig City",
        date: "Aug 2024 – May 2025",
      },
    ],
    certifications: [
      { name: "Housekeeping NC II", issuer: "TESDA", date: "Jan 2026 – May 2026" },
      { name: "Financial Literacy", issuer: "TESDA", date: "Dec 2025" },
    ],
    languages: ["English", "Tagalog"],
  },
  {
    id: "tech",
    label: "Tech & Web Development",
    icon: Code,
    accentColor: "text-cyan-400",
    tagBg: "bg-cyan-400/10 text-cyan-400 border-cyan-400/30",
    profile:
      "A resourceful, self-taught full-stack developer skilled in AI-assisted web development workflows, utilizing platforms like Claude, Git/GitHub, and Vercel to rapidly build and deploy live applications. Demonstrates strong technical aptitude, a proactive learning mindset, and the ability to independently conceptualize, develop, and ship functional web products. Combines technical skill with financial literacy and strong work discipline for fast-paced development environments.",
    accomplishments: [
      {
        heading: "Full-Stack Web Development",
        items: [
          "Independently conceptualized, built, and deployed multiple functional front-end and full-stack web applications.",
          "Proficient in building responsive, production-ready interfaces using modern web technologies.",
        ],
      },
      {
        heading: "AI-Driven Development Workflow",
        items: [
          "Skilled in leveraging AI tools (Claude) to accelerate development cycles and solve complex technical problems.",
          "Uses AI as an integrator — maintaining full understanding of the code produced and shipped.",
        ],
      },
      {
        heading: "Version Control & Collaboration",
        items: [
          "Managed codebase version control using Git and GitHub repository workflows.",
          "Experienced in branching, pull requests, and maintaining clean commit histories.",
        ],
      },
      {
        heading: "Cloud Deployment & Hosting",
        items: [
          "Successfully deployed and maintained active cloud-hosted applications on Vercel, Render, and Firebase.",
          "Experienced in staging, production environments, and managing live web applications end-to-end.",
        ],
      },
    ],
    expertise: [
      "HTML / CSS / JavaScript",
      "React & Frontend Development",
      "Firebase Backend Integration",
      "Git & GitHub Version Control",
      "Cloud Deployment (Vercel, Render)",
      "AI-Assisted Development (Claude)",
      "Responsive Web Design",
      "Full-Stack Prototyping",
      "Financial Literacy",
    ],
    tools: ["Claude AI", "Git", "GitHub", "Vercel", "Render", "Firebase", "HTML", "CSS", "JavaScript", "React"],
    projects: [
      {
        title: "Web App Project 1",
        description: "A responsive front-end web application built and deployed independently.",
        tags: ["HTML", "CSS", "JavaScript", "Vercel"],
      },
      {
        title: "Portfolio Website",
        description: "Personal portfolio showcasing multiple career paths with dynamic tab navigation.",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
      },
      {
        title: "Full Stack App",
        description: "A full-stack application with backend data integration and cloud hosting.",
        tags: ["Firebase", "JavaScript", "Render", "GitHub"],
      },
    ],
    experience: [],
    education: [
      {
        degree: "High School Diploma",
        school: "Grant Cecilia Integrated School, Taguig City",
        date: "Aug 2024 – May 2025",
      },
    ],
    certifications: [
      { name: "Financial Literacy", issuer: "TESDA", date: "Dec 2025" },
    ],
    languages: ["English", "Tagalog"],
  },
  {
    id: "security",
    label: "Customer Service & Security",
    icon: Shield,
    accentColor: "text-violet-400",
    tagBg: "bg-violet-400/10 text-violet-400 border-violet-400/30",
    profile:
      "A dedicated and highly disciplined security and customer service professional with a proven track record in operational safety, access control, and public-facing service roles. Known for maintaining composure under pressure, resolving conflicts professionally, and delivering consistent, high-quality service to a large volume of daily customers. Brings strong communication skills, knowledge of laws and regulations, and an unwavering commitment to reliability and professionalism.",
    accomplishments: [
      {
        heading: "Operational Security Excellence",
        items: [
          "Maintained a 100% safety record by conducting regular patrols and strictly enforcing access control protocols for all personnel and visitors.",
          "Consistently enforced property security policies with professionalism and minimal escalation.",
        ],
      },
      {
        heading: "Customer Service & Public Interaction",
        items: [
          "Delivered high-quality customer service in a fast-paced environment, maintaining a positive attitude while handling high volumes of daily customers.",
          "Skilled at managing difficult situations calmly, ensuring all guests and visitors feel safe and respected.",
        ],
      },
      {
        heading: "Conflict Resolution",
        items: [
          "Demonstrates sharp conflict-resolution skills developed through daily public-facing work.",
          "Ability to de-escalate tense situations while maintaining authority and professionalism.",
        ],
      },
      {
        heading: "Reliability & Discipline",
        items: [
          "Consistent performance record with zero incidents across all assigned shifts.",
          "Recognized for punctuality, professional grooming, and strict adherence to post orders and company protocols.",
        ],
      },
    ],
    expertise: [
      "Access Control & Patrol",
      "Public Interaction & Guest Relations",
      "Knowledge of Laws and Regulations",
      "Conflict Resolution & De-escalation",
      "Report Writing & Incident Documentation",
      "Security Protocols & Emergency Response",
      "Customer Service in High-Volume Settings",
      "Financial Literacy",
    ],
    experience: [
      {
        role: "Security Guard",
        company: "C6 Lakeside, Taguig City",
        date: "Aug 2024 – Present",
        bullets: [
          "Conduct regular patrols and enforce access control protocols for all personnel and visitors.",
          "Deliver customer-facing services professionally, handling inquiries and resolving issues daily.",
          "Maintain incident reports and escalate security concerns according to company procedures.",
          "Maintained a 100% safety record across all assigned shifts.",
        ],
      },
    ],
    education: [
      {
        degree: "High School Diploma",
        school: "Grant Cecilia Integrated School, Taguig City",
        date: "Aug 2024 – May 2025",
      },
    ],
    certifications: [
      { name: "Financial Literacy", issuer: "TESDA", date: "Dec 2025" },
    ],
    languages: ["English", "Tagalog"],
  },
];

const TIMELINE = [
  { date: "Jan 2026 – May 2026", title: "Housekeeping NC II Certification", org: "TESDA", tag: "Hospitality", color: "bg-amber-400" },
  { date: "Dec 2025", title: "Certificate in Financial Literacy", org: "TESDA", tag: "Certification", color: "bg-emerald-400" },
  { date: "Aug 2024 – May 2025", title: "High School Diploma", org: "Grant Cecilia Integrated School", tag: "Education", color: "bg-sky-400" },
  { date: "Aug 2024 – Present", title: "Security Guard", org: "C6 Lakeside, Taguig City", tag: "Service", color: "bg-violet-400" },
];

/* ─── Paper-style resume document rendered as bond-paper pages ─── */
function ResumeDocument({ path }: { path: PathData }) {
  return (
    <div style={{ fontFamily: "'Times New Roman', Georgia, serif" }}>
      {/* PAGE 1 */}
      <div className="resume-page bg-white text-gray-900 w-full" style={{ padding: "0.55in 0.65in", minHeight: "10.5in", boxSizing: "border-box" }}>
        {/* Header */}
        <div style={{ borderBottom: "3px solid #1a2a4a", paddingBottom: "10px", marginBottom: "14px" }}>
          <h1 style={{ fontSize: "26pt", fontWeight: "700", color: "#1a2a4a", letterSpacing: "2px", margin: "0 0 2px 0", textTransform: "uppercase" }}>
            {PERSONAL_DATA.name}
          </h1>
          <p style={{ fontSize: "10pt", color: "#2a5298", fontFamily: "Arial, sans-serif", letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 6px 0" }}>
            {path.label}
          </p>
          <div style={{ fontSize: "9.5pt", color: "#444", fontFamily: "Arial, sans-serif", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <span>{PERSONAL_DATA.location}</span>
            <span>|</span>
            <span>{PERSONAL_DATA.email}</span>
            <span>|</span>
            <span>{PERSONAL_DATA.phone}</span>
          </div>
        </div>

        {/* Profile */}
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "9.5pt", fontWeight: "700", color: "#1a2a4a", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "1.5px solid #1a2a4a", paddingBottom: "3px", marginBottom: "7px", fontFamily: "Arial, sans-serif" }}>
            Profile
          </h2>
          <p style={{ fontSize: "10.5pt", lineHeight: "1.55", color: "#222", margin: 0 }}>{path.profile}</p>
        </div>

        {/* Accomplishments */}
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "9.5pt", fontWeight: "700", color: "#1a2a4a", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "1.5px solid #1a2a4a", paddingBottom: "3px", marginBottom: "8px", fontFamily: "Arial, sans-serif" }}>
            Key Accomplishments
          </h2>
          {path.accomplishments.map((section, i) => (
            <div key={i} style={{ marginBottom: "8px" }}>
              <p style={{ fontSize: "10.5pt", fontWeight: "700", color: "#111", margin: "0 0 2px 0" }}>{section.heading}:</p>
              {section.items.map((item, j) => (
                <p key={j} style={{ fontSize: "10.5pt", color: "#333", margin: "0 0 1px 14px", lineHeight: "1.5" }}>{item}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Experience */}
        {path.experience.length > 0 && (
          <div style={{ marginBottom: "14px" }}>
            <h2 style={{ fontSize: "9.5pt", fontWeight: "700", color: "#1a2a4a", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "1.5px solid #1a2a4a", paddingBottom: "3px", marginBottom: "8px", fontFamily: "Arial, sans-serif" }}>
              {path.id === "housekeeping" ? "Additional Experience" : "Professional Experience"}
            </h2>
            {path.experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <p style={{ fontSize: "10.5pt", fontWeight: "700", color: "#111", margin: 0 }}>{exp.role}, {exp.company}</p>
                  <p style={{ fontSize: "10pt", color: "#555", margin: 0, fontFamily: "Arial, sans-serif", whiteSpace: "nowrap", marginLeft: "12px" }}>{exp.date}</p>
                </div>
                {exp.bullets && (
                  <div style={{ marginTop: "4px" }}>
                    {exp.bullets.map((b, j) => (
                      <p key={j} style={{ fontSize: "10.5pt", color: "#333", margin: "0 0 2px 14px", lineHeight: "1.5" }}>• {b}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects (Tech only) */}
        {path.projects && (
          <div style={{ marginBottom: "14px" }}>
            <h2 style={{ fontSize: "9.5pt", fontWeight: "700", color: "#1a2a4a", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "1.5px solid #1a2a4a", paddingBottom: "3px", marginBottom: "8px", fontFamily: "Arial, sans-serif" }}>
              Projects
            </h2>
            {path.projects.map((proj, i) => (
              <div key={i} style={{ marginBottom: "7px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <p style={{ fontSize: "10.5pt", fontWeight: "700", color: "#111", margin: 0 }}>{proj.title}</p>
                  <p style={{ fontSize: "9.5pt", color: "#777", margin: 0, fontFamily: "Arial, sans-serif" }}>— {proj.tags.join(", ")}</p>
                </div>
                <p style={{ fontSize: "10.5pt", color: "#333", margin: "2px 0 0 14px", lineHeight: "1.5" }}>{proj.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Areas of Expertise */}
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "9.5pt", fontWeight: "700", color: "#1a2a4a", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "1.5px solid #1a2a4a", paddingBottom: "3px", marginBottom: "8px", fontFamily: "Arial, sans-serif" }}>
            Areas of Expertise
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px 24px" }}>
            {path.expertise.map((skill, i) => (
              <p key={i} style={{ fontSize: "10.5pt", color: "#333", margin: 0 }}>• {skill}</p>
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "9.5pt", fontWeight: "700", color: "#1a2a4a", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "1.5px solid #1a2a4a", paddingBottom: "3px", marginBottom: "8px", fontFamily: "Arial, sans-serif" }}>
            Education
          </h2>
          {path.education.map((edu, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
              <div>
                <p style={{ fontSize: "10.5pt", fontWeight: "700", color: "#111", margin: 0 }}>{edu.school}</p>
                <p style={{ fontSize: "10.5pt", color: "#555", margin: 0 }}>{edu.degree}</p>
              </div>
              <p style={{ fontSize: "10pt", color: "#555", margin: 0, fontFamily: "Arial, sans-serif", whiteSpace: "nowrap", marginLeft: "12px" }}>{edu.date}</p>
            </div>
          ))}
        </div>

        {/* Licenses & Certifications */}
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "9.5pt", fontWeight: "700", color: "#1a2a4a", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "1.5px solid #1a2a4a", paddingBottom: "3px", marginBottom: "8px", fontFamily: "Arial, sans-serif" }}>
            Licenses & Certifications
          </h2>
          {path.certifications.map((cert, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
              <p style={{ fontSize: "10.5pt", fontWeight: "700", color: "#111", margin: 0 }}>{cert.name}, {cert.issuer}</p>
              <p style={{ fontSize: "10pt", color: "#555", margin: 0, fontFamily: "Arial, sans-serif", whiteSpace: "nowrap", marginLeft: "12px" }}>{cert.date}</p>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div>
          <h2 style={{ fontSize: "9.5pt", fontWeight: "700", color: "#1a2a4a", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "1.5px solid #1a2a4a", paddingBottom: "3px", marginBottom: "8px", fontFamily: "Arial, sans-serif" }}>
            Languages
          </h2>
          <p style={{ fontSize: "10.5pt", color: "#333", margin: 0 }}>{path.languages.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}

/* Hidden print portal — only rendered during window.print() */
function PrintPortal({ path }: { path: PathData }) {
  return createPortal(
    <div id="resume-print-root" style={{ display: "none" }}>
      <ResumeDocument path={path} />
    </div>,
    document.body
  );
}

/* On-screen paper preview with desk background */
function ResumeViewer({ path, onPrint }: { path: PathData; onPrint: () => void }) {
  return (
    <div>
      {/* Toolbar */}
      <div className="no-print flex items-center justify-between mb-4 px-2">
        <p className="text-xs font-mono text-muted-foreground">
          {path.label} — Resume Preview
        </p>
        <button
          data-testid="button-print"
          onClick={onPrint}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <Printer className="w-4 h-4" />
          Print / Save as PDF
        </button>
      </div>

      {/* Desk background — gray */}
      <div className="rounded-xl overflow-hidden" style={{ background: "#525659", padding: "32px 24px" }}>
        {/* Paper shadow wrapper */}
        <div
          className="mx-auto"
          style={{
            maxWidth: "816px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)",
          }}
        >
          <ResumeDocument path={path} />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activePath, setActivePath] = useState<PathId>("housekeeping");
  const [showResume, setShowResume] = useState(false);

  const activePathData = PATHS.find(p => p.id === activePath)!;

  const scrollToSection = (id: string, pathId?: PathId) => {
    if (pathId) setActivePath(pathId);
    setShowResume(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Print portal — invisible until print dialog opens */}
      <PrintPortal path={activePathData} />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,_rgba(212,175,55,0.07),_transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,_rgba(56,189,248,0.05),_transparent)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-5xl relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-secondary border border-border text-muted-foreground text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for Opportunities
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4 text-foreground leading-none">
            {PERSONAL_DATA.name}
          </h1>

          <p className="text-primary font-mono text-lg md:text-xl tracking-widest mb-8 uppercase">
            {PERSONAL_DATA.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 text-sm font-mono text-muted-foreground">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />{PERSONAL_DATA.location}</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" />{PERSONAL_DATA.email}</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" />{PERSONAL_DATA.phone}</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("path-selector", "housekeeping")}
              className="font-semibold tracking-wide"
              data-testid="button-housekeeping"
            >
              <Sparkles className="w-4 h-4 mr-2" /> Housekeeping Resume
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection("path-selector", "tech")}
              className="font-semibold tracking-wide border border-border"
              data-testid="button-tech"
            >
              <Code className="w-4 h-4 mr-2" /> Tech Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("path-selector", "security")}
              className="font-semibold tracking-wide"
              data-testid="button-security"
            >
              <Shield className="w-4 h-4 mr-2" /> Customer Service Resume
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground cursor-pointer"
          onClick={() => scrollToSection("path-selector")}
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.div>
      </section>

      {/* ─── PATH SELECTOR ─── */}
      <section id="path-selector" className="py-24 px-6 md:px-12 lg:px-24 bg-card/20">
        <div className="max-w-7xl mx-auto">

          <div className="mb-4">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">Choose Your Path</p>
            <div className="flex flex-wrap gap-3">
              {PATHS.map(path => {
                const Icon = path.icon;
                const isActive = activePath === path.id;
                return (
                  <button
                    key={path.id}
                    data-testid={`tab-${path.id}`}
                    onClick={() => { setActivePath(path.id); setShowResume(false); }}
                    className={`flex items-center gap-3 px-6 py-3.5 rounded-xl font-mono text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-[0_0_24px_rgba(212,175,55,0.25)]"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80 border border-border"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {path.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Toggle: Overview / Resume View */}
          <div className="flex items-center gap-3 mb-10 pt-6 border-t border-border/40">
            <button
              onClick={() => setShowResume(false)}
              className={`px-4 py-2 rounded-lg text-sm font-mono transition-all ${!showResume ? "bg-secondary border border-primary/50 text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              data-testid="button-overview"
            >
              Overview
            </button>
            <button
              onClick={() => setShowResume(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono transition-all ${showResume ? "bg-secondary border border-primary/50 text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              data-testid="button-view-resume"
            >
              <FileText className="w-4 h-4" /> View Full Resume
            </button>
          </div>

          <AnimatePresence mode="wait">
            {showResume ? (
              <motion.div
                key={`resume-${activePath}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <ResumeViewer path={activePathData} onPrint={handlePrint} />
              </motion.div>
            ) : (
              <motion.div
                key={`overview-${activePath}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-10"
              >
                {/* Left: Main Content */}
                <div className="lg:col-span-2 space-y-10">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Professional Profile</h2>
                    <p className="text-muted-foreground leading-relaxed bg-secondary/40 p-6 rounded-xl border border-border/50 text-base">
                      {activePathData.profile}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-5 flex items-center gap-3">
                      <span className={`font-mono text-sm ${activePathData.accentColor}`}>01.</span>
                      Key Accomplishments
                    </h3>
                    <div className="space-y-5">
                      {activePathData.accomplishments.map((section, i) => (
                        <div key={i} className="border-l-2 border-border pl-5">
                          <p className="font-semibold text-foreground mb-2">{section.heading}</p>
                          {section.items.map((item, j) => (
                            <div key={j} className="flex gap-3 text-muted-foreground text-sm mb-1">
                              <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${activePathData.accentColor}`} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {activePathData.experience.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold mb-5 flex items-center gap-3">
                        <span className={`font-mono text-sm ${activePathData.accentColor}`}>02.</span>
                        Professional Experience
                      </h3>
                      {activePathData.experience.map((exp, i) => (
                        <div key={i} className="bg-secondary/30 border border-border/50 rounded-xl p-6">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <p className="font-bold text-foreground text-lg">{exp.role}</p>
                              <p className="text-muted-foreground text-sm">{exp.company}</p>
                            </div>
                            <span className={`text-xs font-mono px-3 py-1 rounded-full border ${activePathData.tagBg}`}>{exp.date}</span>
                          </div>
                          {exp.bullets && (
                            <ul className="space-y-2">
                              {exp.bullets.map((b, j) => (
                                <li key={j} className="flex gap-3 text-muted-foreground text-sm">
                                  <span className={`mt-1 ${activePathData.accentColor}`}>▹</span>
                                  {b}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {activePathData.projects && (
                    <div>
                      <h3 className="text-xl font-bold mb-5 flex items-center gap-3">
                        <span className="font-mono text-sm text-cyan-400">02.</span>
                        Featured Projects
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {activePathData.projects.map((proj, i) => (
                          <div key={i} className="bg-secondary/30 border border-border/50 hover:border-cyan-400/40 transition-colors rounded-xl p-5">
                            <p className="font-bold text-foreground mb-1">{proj.title}</p>
                            <p className="text-muted-foreground text-sm mb-3">{proj.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {proj.tags.map(tag => (
                                <span key={tag} className="text-xs font-mono bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 px-2 py-0.5 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Sidebar */}
                <div className="space-y-6">
                  <div className="bg-secondary/30 border border-border/50 rounded-xl p-6">
                    <h4 className={`font-mono text-sm font-bold mb-4 ${activePathData.accentColor}`}>Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {activePathData.expertise.map((skill, i) => (
                        <span key={i} className="text-xs bg-background border border-border px-3 py-1.5 rounded-lg text-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-secondary/30 border border-border/50 rounded-xl p-6">
                    <h4 className={`font-mono text-sm font-bold mb-4 ${activePathData.accentColor}`}>Education</h4>
                    {activePathData.education.map((edu, i) => (
                      <div key={i}>
                        <p className="text-sm font-semibold text-foreground">{edu.degree}</p>
                        <p className="text-xs text-muted-foreground">{edu.school}</p>
                        <p className="text-xs font-mono text-muted-foreground mt-1">{edu.date}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-secondary/30 border border-border/50 rounded-xl p-6">
                    <h4 className={`font-mono text-sm font-bold mb-4 ${activePathData.accentColor}`}>Licenses & Certifications</h4>
                    {activePathData.certifications.map((cert, i) => (
                      <div key={i} className="flex justify-between items-start mb-2 last:mb-0">
                        <div>
                          <p className="text-sm font-semibold text-foreground">{cert.name}</p>
                          <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <span className="text-xs font-mono text-muted-foreground whitespace-nowrap ml-3">{cert.date}</span>
                      </div>
                    ))}
                  </div>

                  {activePathData.tools && (
                    <div className="bg-secondary/30 border border-border/50 rounded-xl p-6">
                      <h4 className="font-mono text-sm font-bold mb-4 text-cyan-400">Tools & Platforms</h4>
                      <div className="flex flex-wrap gap-2">
                        {activePathData.tools.map((tool, i) => (
                          <span key={i} className="text-xs font-mono bg-background border border-border px-2.5 py-1 rounded text-muted-foreground">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-secondary/30 border border-border/50 rounded-xl p-6">
                    <h4 className={`font-mono text-sm font-bold mb-3 ${activePathData.accentColor}`}>Languages</h4>
                    <p className="text-sm text-muted-foreground">{activePathData.languages.join(" • ")}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2 text-center">History</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Journey & Experience</h2>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-16 md:pl-0"
                >
                  <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full ${item.color} shadow-lg mt-1.5 -translate-x-0.5 ring-4 ring-background`} />
                  <div className={`md:w-[43%] ${i % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12 md:text-right"}`}>
                    <p className="text-primary font-mono text-xs mb-1">{item.date}</p>
                    <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{item.org}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono border ${
                      item.tag === "Hospitality" ? "bg-amber-400/10 text-amber-400 border-amber-400/30" :
                      item.tag === "Certification" ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/30" :
                      item.tag === "Education" ? "bg-sky-400/10 text-sky-400 border-sky-400/30" :
                      "bg-violet-400/10 text-violet-400 border-violet-400/30"
                    }`}>
                      {item.tag}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-card/30 border-t border-border/40">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2 text-center">Let's Connect</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                Whether you're looking for a disciplined hospitality professional, a creative developer, or a reliable service team member — I'm ready to deliver.
              </p>

              <div className="space-y-4 mb-12">
                <a href={`mailto:${PERSONAL_DATA.email}`} className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors font-mono" data-testid="link-email">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center border border-border">
                    <Mail className="w-5 h-5" />
                  </div>
                  {PERSONAL_DATA.email}
                </a>
                <div className="flex items-center gap-4 text-muted-foreground font-mono">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center border border-border">
                    <Phone className="w-5 h-5" />
                  </div>
                  {PERSONAL_DATA.phone}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">View & Print Resumes</h3>
                <div className="space-y-3">
                  {PATHS.map(path => {
                    const Icon = path.icon;
                    return (
                      <button
                        key={path.id}
                        data-testid={`button-view-${path.id}`}
                        onClick={() => {
                          setActivePath(path.id);
                          setShowResume(true);
                          scrollToSection("path-selector");
                        }}
                        className="w-full flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-secondary/20 hover:border-primary/40 hover:bg-secondary/40 transition-all group text-left"
                      >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-border group-hover:border-primary/40 transition-colors">
                          <Icon className={`w-5 h-5 ${path.accentColor}`} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground text-sm">{path.label}</p>
                          <p className="text-xs text-muted-foreground font-mono mt-0.5">View on site & print as PDF</p>
                        </div>
                        <FileText className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input data-testid="input-name" placeholder="Your name" className="bg-secondary/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input data-testid="input-email" type="email" placeholder="your@email.com" className="bg-secondary/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea data-testid="input-message" placeholder="How can we work together?" className="min-h-[140px] bg-secondary/50" />
                  </div>
                  <Button data-testid="button-submit" type="submit" className="w-full h-12 text-base">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-border/40 text-muted-foreground text-xs font-mono bg-background">
        {new Date().getFullYear()} {PERSONAL_DATA.name} — Taguig, Philippines
      </footer>
    </div>
  );
}
