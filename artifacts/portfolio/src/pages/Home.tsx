import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, Code, Shield, Sparkles, ChevronDown, FileText, CheckCircle, Printer, LayoutGrid, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
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

type PathId = "housekeeping" | "tech" | "security" | "finance" | "all";

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
  hobbies: string;
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
      "A highly disciplined, detail-oriented, and guest-focused hospitality professional with formal TESDA NC II certification in luxury housekeeping standards. Adept at maintaining flawless cleanliness, managing high-volume guest requests, and executing tasks with a strong sense of urgency and discretion. Applies strong financial literacy and budgeting principles to optimize inventory control, reduce supply waste, and support cost-efficient operations — key competencies for large-scale shipboard hospitality environments.",
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
        heading: "Inventory Control & Resource Management",
        items: [
          "Leveraged financial literacy and budgeting principles to optimize inventory tracking and significantly reduce supply waste.",
          "Practiced strict resource allocation and cost-control measures aligned with operational budget goals in high-volume service environments.",
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
      "Inventory Control & Management",
      "Resource Allocation",
      "Budgeting & Cost Management",
      "Waste Reduction & Operational Efficiency",
      "Guest Privacy & Discretion",
      "Time Management Under Pressure",
    ],
    experience: [
      {
        role: "Security Guard",
        company: "C6 Lakeside, Taguig City",
        date: "Aug 2024 – Present",
        bullets: [
          "Maintained a 100% safety record by enforcing strict access control protocols for all personnel and visitors.",
          "Demonstrated operational discipline and professional conduct in a service-facing environment.",
          "Leveraged strong financial literacy and budgeting principles to optimize inventory tracking, reducing supply waste and operational costs.",
          "Maintained precise logs of high-volume transactions and operations, ensuring 100% accountability and zero discrepancies.",
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
      { name: "Financial Literacy and Budgeting", issuer: "BDO Foundation", date: "Dec 2025" },
    ],
    languages: ["English", "Tagalog"],
    hobbies: "Gaming, Cardio Exercise, Making Websites",
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
      { name: "Financial Literacy and Budgeting", issuer: "BDO Foundation", date: "Dec 2025" },
    ],
    languages: ["English", "Tagalog"],
    hobbies: "Gaming, Cardio Exercise, Making Websites",
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
      "Financial Literacy & Budgeting",
      "Resource Allocation & Cost Control",
    ],
    experience: [
      {
        role: "Security Guard",
        company: "C6 Lakeside, Taguig City",
        date: "Aug 2024 – Present",
        bullets: [
          "Conduct regular patrols and enforce access control protocols for all personnel and visitors.",
          "Deliver customer-facing services professionally, handling inquiries and resolving issues daily.",
          "Maintained precise logs of high-volume digital and physical transactions, ensuring 100% accountability and zero discrepancies.",
          "Applied financial literacy and budgeting principles to support cost-control measures and resource management across daily operations.",
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
      { name: "Financial Literacy and Budgeting", issuer: "BDO Foundation", date: "Dec 2025" },
    ],
    languages: ["English", "Tagalog"],
    hobbies: "Gaming, Cardio Exercise, Making Websites",
  },
  {
    id: "finance",
    label: "Finance & Budgeting",
    icon: TrendingUp,
    accentColor: "text-emerald-400",
    tagBg: "bg-emerald-400/10 text-emerald-400 border-emerald-400/30",
    profile:
      "A financially literate and detail-oriented professional with formal training in personal finance, budgeting, and asset management through the BDO Foundation. Skilled in applying sound financial principles to real-world operational settings — including inventory cost control, resource allocation, and budget tracking. Brings a disciplined, accuracy-focused mindset and a strong commitment to financial accountability, well-suited for entry-level finance, accounting support, or administrative roles.",
    accomplishments: [
      {
        heading: "Budgeting & Cost Management",
        items: [
          "Trained in creating and managing personal and operational budgets to maximize resource efficiency and minimize unnecessary expenditure.",
          "Applied budgeting principles in daily operations to track spending, identify cost-saving opportunities, and maintain financial discipline.",
        ],
      },
      {
        heading: "Asset & Inventory Management",
        items: [
          "Practiced systematic tracking and valuation of assets and supplies to ensure accurate accountability and zero discrepancies.",
          "Reduced operational waste by implementing structured inventory monitoring aligned with financial targets.",
        ],
      },
      {
        heading: "Financial Record-Keeping & Reporting",
        items: [
          "Maintained precise logs of high-volume digital and physical transactions, ensuring 100% accountability across all recorded entries.",
          "Demonstrates strong attention to detail and accuracy in financial documentation and report generation.",
        ],
      },
      {
        heading: "Savings & Investment Awareness",
        items: [
          "Knowledgeable in personal savings strategies, investment fundamentals, and the principles of compound growth.",
          "Understands risk assessment, diversification basics, and the importance of emergency funds in financial planning.",
        ],
      },
    ],
    expertise: [
      "Personal Financial Planning",
      "Budgeting & Cost Management",
      "Asset & Inventory Management",
      "Financial Record-Keeping",
      "Resource Allocation",
      "Waste Reduction & Operational Efficiency",
      "Savings & Investment Basics",
      "Risk Awareness & Assessment",
      "Report Writing & Documentation",
      "Attention to Detail & Accuracy",
    ],
    experience: [
      {
        role: "Security Guard / Operations Staff",
        company: "C6 Lakeside, Taguig City",
        date: "Aug 2024 – Present",
        bullets: [
          "Maintained precise logs of high-volume digital and physical commercial transactions, ensuring 100% accountability and zero discrepancies.",
          "Applied financial literacy and budgeting principles to support cost-control measures and resource management across daily operations.",
          "Tracked and monitored operational supplies, reducing waste through disciplined inventory management aligned with budget goals.",
          "Demonstrated consistent financial discipline and professional conduct across all assigned responsibilities.",
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
      { name: "Financial Literacy and Budgeting", issuer: "BDO Foundation", date: "Dec 2025" },
    ],
    languages: ["English", "Tagalog"],
    hobbies: "Gaming, Cardio Exercise, Making Websites",
  },
];

const TIMELINE = [
  { date: "Jan 2026 – May 2026", title: "Housekeeping NC II Certification", org: "TESDA", tag: "Hospitality", color: "bg-amber-400" },
  { date: "Dec 2025", title: "Financial Literacy and Budgeting", org: "BDO Foundation", tag: "Certification", color: "bg-emerald-400" },
  { date: "Aug 2024 – May 2025", title: "High School Diploma", org: "Grant Cecilia Integrated School", tag: "Education", color: "bg-sky-400" },
  { date: "Aug 2024 – Present", title: "Security Guard", org: "C6 Lakeside, Taguig City", tag: "Service", color: "bg-violet-400" },
];

/* ── Shared resume style constants ── */
const RS = {
  name:        { fontSize: "24pt", fontWeight: "800", color: "#1a3a8c", textTransform: "uppercase" as const, letterSpacing: "1.5px", margin: "0 0 4px 0", fontFamily: "Arial, sans-serif" },
  contact:     { fontSize: "10pt", color: "#333", fontFamily: "Arial, sans-serif", margin: "0 0 2px 0" },
  sectionHead: { fontSize: "10pt", fontWeight: "800", color: "#1a3a8c", textTransform: "uppercase" as const, letterSpacing: "1.5px", borderBottom: "2px solid #1a3a8c", paddingBottom: "3px", marginBottom: "8px", marginTop: "0", fontFamily: "Arial, sans-serif" },
  body:        { fontSize: "10.5pt", color: "#222", lineHeight: "1.5", margin: "0" },
  bold:        { fontSize: "10.5pt", fontWeight: "700", color: "#111", margin: "0 0 2px 0" },
  small:       { fontSize: "10pt", color: "#555", margin: "0", fontFamily: "Arial, sans-serif", whiteSpace: "nowrap" as const },
  pageNum:     { fontSize: "9pt", color: "#aaa", fontFamily: "Arial, sans-serif" },
};

/* Reusable section heading */
function RH({ children }: { children: string }) {
  return <h2 style={RS.sectionHead}>{children}</h2>;
}

/* ─── Page 1: Header + Profile + Accomplishments + Experience/Projects + Education ─── */
function ResumePage1({ path }: { path: PathData }) {
  return (
    <div
      className="resume-page"
      style={{
        background: "#fff",
        width: "816px",
        minHeight: "1056px",
        padding: "52px 62px 48px",
        boxSizing: "border-box",
        position: "relative",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Name & Contact — photo floated to top-right */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
        <div style={{ flex: 1, paddingRight: "16px" }}>
          <h1 style={RS.name}>{PERSONAL_DATA.name}</h1>
          <p style={{ ...RS.contact, marginTop: "4px" }}>{path.label}</p>
          <p style={{ ...RS.contact, marginTop: "6px" }}>
            {PERSONAL_DATA.location}&nbsp; | &nbsp;
            <span style={{ color: "#1a3a8c" }}>{PERSONAL_DATA.email}</span>&nbsp; | &nbsp;
            {PERSONAL_DATA.phone}
          </p>
        </div>
        {/* Passport-style photo */}
        <img
          src="/clyde-photo.jpg"
          alt="Clyde Miles Bonita"
          style={{
            width: "100px",
            height: "120px",
            objectFit: "cover",
            objectPosition: "center top",
            border: "2px solid #1a3a8c",
            flexShrink: 0,
          }}
        />
      </div>

      {/* Profile */}
      <div style={{ marginBottom: "12px" }}>
        <RH>Profile</RH>
        <p style={{ ...RS.body, fontWeight: "700" }}>{path.profile}</p>
      </div>

      {/* Accomplishments */}
      <div style={{ marginBottom: "12px" }}>
        <RH>Accomplishments</RH>
        {path.accomplishments.map((sec, i) => (
          <div key={i} style={{ marginBottom: "6px" }}>
            <p style={RS.bold}>{sec.heading}:</p>
            {sec.items.slice(0, 1).map((item, j) => (
              <p key={j} style={{ ...RS.body, marginLeft: "0" }}>{item}</p>
            ))}
          </div>
        ))}
      </div>

      {/* Professional Experience */}
      {path.experience.length > 0 && (
        <div style={{ marginBottom: "12px" }}>
          <RH>{path.id === "housekeeping" ? "Professional Experience" : "Professional Experience"}</RH>
          {path.experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={RS.bold}>{exp.role}, {exp.company}</p>
                <p style={RS.small}>{exp.date}</p>
              </div>
              <p style={{ ...RS.body, color: "#555" }}>{exp.company.split(",")[1]?.trim() || ""}</p>
              <p style={{ ...RS.body, color: "#555" }}>{exp.role}</p>
            </div>
          ))}
        </div>
      )}

      {/* Projects (Tech path only) */}
      {path.projects && (
        <div style={{ marginBottom: "12px" }}>
          <RH>Projects</RH>
          {path.projects.map((proj, i) => (
            <div key={i} style={{ marginBottom: "6px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <p style={RS.bold}>{proj.title}</p>
                <p style={{ ...RS.small, fontSize: "9.5pt" }}>— {proj.tags.join(", ")}</p>
              </div>
              <p style={{ ...RS.body, marginLeft: "0" }}>{proj.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      <div style={{ marginBottom: "0" }}>
        <RH>Education</RH>
        {path.education.map((edu, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
            <div>
              <p style={RS.bold}>{edu.school}</p>
              <p style={{ ...RS.body, color: "#555" }}>Highschool</p>
              <p style={{ ...RS.body, color: "#555" }}>Graduated high school</p>
            </div>
            <p style={RS.small}>{edu.date}</p>
          </div>
        ))}
      </div>

      {/* Page number */}
      <div style={{ position: "absolute", bottom: "28px", right: "62px", ...RS.pageNum }}>1</div>
    </div>
  );
}

/* ─── Page 2: Expertise + Certifications + Training + Experience + Languages + Hobbies ─── */
function ResumePage2({ path }: { path: PathData }) {
  return (
    <div
      className="resume-page"
      style={{
        background: "#fff",
        width: "816px",
        minHeight: "1056px",
        padding: "52px 62px 48px",
        boxSizing: "border-box",
        position: "relative",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Areas of Expertise — 4-column grid matching reference */}
      <div style={{ marginBottom: "14px" }}>
        <RH>Areas of Expertise</RH>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "4px 16px" }}>
          {path.expertise.map((skill, i) => (
            <p key={i} style={{ ...RS.body, margin: "0 0 2px 0" }}>• {skill}</p>
          ))}
        </div>
      </div>

      {/* Licenses & Certifications */}
      <div style={{ marginBottom: "14px" }}>
        <RH>Licenses &amp; Certifications</RH>
        {path.certifications.map((cert, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
            <p style={RS.bold}>{cert.name} , {cert.issuer}</p>
            <p style={RS.small}>{cert.date}</p>
          </div>
        ))}
      </div>

      {/* Additional Experience (for HK: list security guard under Additional Experience) */}
      {path.id === "housekeeping" && path.experience.length > 0 && (
        <div style={{ marginBottom: "14px" }}>
          <RH>Additional Experience</RH>
          {path.experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={RS.bold}>{exp.role}, {exp.company}</p>
                <p style={RS.small}>{exp.date}</p>
              </div>
              <p style={{ ...RS.body, color: "#555" }}>{exp.company.split(",")[1]?.trim() || "Taguig City"}</p>
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      <div style={{ marginBottom: "14px" }}>
        <RH>Languages</RH>
        <p style={RS.body}>{path.languages.join(", ")}</p>
      </div>

      {/* Hobbies */}
      <div style={{ marginBottom: "14px" }}>
        <RH>Hobbies</RH>
        <p style={RS.body}>{path.hobbies}</p>
      </div>

      {/* Page number */}
      <div style={{ position: "absolute", bottom: "28px", right: "62px", ...RS.pageNum }}>2</div>
    </div>
  );
}

/* ─── Full two-page document (used for print portal) ─── */
function ResumeDocument({ path }: { path: PathData }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <ResumePage1 path={path} />
      <ResumePage2 path={path} />
    </div>
  );
}

/* Print portal — hidden on screen via CSS, shown only during window.print() */
function PrintPortal({ path }: { path: PathData }) {
  return createPortal(
    <div id="resume-print-root">
      <ResumeDocument path={path} />
    </div>,
    document.body
  );
}

/* All-paths resume viewer — shows all 3 resumes (6 pages) on the gray desk */
function AllPathsResumeViewer({ onPrint }: { onPrint: () => void }) {
  const deskRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const compute = () => {
      if (!deskRef.current) return;
      const available = deskRef.current.clientWidth - 48;
      setScale(Math.min(1, available / PAGE_W));
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (deskRef.current) ro.observe(deskRef.current);
    return () => ro.disconnect();
  }, []);

  const scaledH = Math.round(scale * PAGE_H);
  const scaledW = Math.round(scale * PAGE_W);

  const allPages = PATHS.flatMap(path => [
    { key: `${path.id}-p1`, label: path.label, el: <ResumePage1 path={path} /> },
    { key: `${path.id}-p2`, label: null, el: <ResumePage2 path={path} /> },
  ]);

  return (
    <div>
      <div className="no-print flex items-center justify-between mb-4 px-2 gap-3 flex-wrap">
        <p className="text-xs font-mono text-muted-foreground">All Paths — 6-page resume</p>
        <button
          onClick={onPrint}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <Printer className="w-4 h-4" /> Print / Save as PDF
        </button>
      </div>
      <div ref={deskRef} className="rounded-xl" style={{ background: "#525659", padding: "24px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
          {allPages.map(({ key, label, el }) => (
            <div key={key} style={{ display: "flex", flexDirection: "column", gap: "8px", width: `${scaledW}px` }}>
              {label && (
                <p style={{ color: "#d4d4d4", fontFamily: "monospace", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px" }}>
                  ── {label}
                </p>
              )}
              <div style={{ width: `${scaledW}px`, height: `${scaledH}px`, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.55)" }}>
                <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: `${PAGE_W}px`, lineHeight: "normal" }}>
                  {el}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const PAGE_W = 816;
const PAGE_H = 1056;
const PAGE_GAP = 24;

/* On-screen paper preview — two pages on a gray desk, scales to fit screen */
function ResumeViewer({ path, onPrint }: { path: PathData; onPrint: () => void }) {
  const deskRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const compute = () => {
      if (!deskRef.current) return;
      // available width = desk width minus left+right padding (48px total)
      const available = deskRef.current.clientWidth - 48;
      setScale(Math.min(1, available / PAGE_W));
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (deskRef.current) ro.observe(deskRef.current);
    return () => ro.disconnect();
  }, []);

  // After scaling, each page visually occupies scale*PAGE_H px tall
  const scaledH = Math.round(scale * PAGE_H);
  const scaledW = Math.round(scale * PAGE_W);

  return (
    <div>
      {/* Toolbar */}
      <div className="no-print flex items-center justify-between mb-4 px-2 gap-3 flex-wrap">
        <p className="text-xs font-mono text-muted-foreground">
          {path.label} — 2-page resume
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

      {/* Desk — gray, contains the two scaled paper pages */}
      <div
        ref={deskRef}
        className="rounded-xl"
        style={{ background: "#525659", padding: "24px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: `${PAGE_GAP}px`,
          }}
        >
          {/* Each page: outer div at scaled dimensions (acts as viewport/clip), inner div scaled */}
          {[<ResumePage1 key="p1" path={path} />, <ResumePage2 key="p2" path={path} />].map((page, idx) => (
            <div
              key={idx}
              style={{
                width: `${scaledW}px`,
                height: `${scaledH}px`,
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.3)",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                  width: `${PAGE_W}px`,
                  lineHeight: "normal",
                }}
              >
                {page}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activePath, setActivePath] = useState<PathId>("housekeeping");
  const [showResume, setShowResume] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMsg, setFormMsg] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formError, setFormError] = useState("");

  const activePathData = PATHS.find(p => p.id === activePath) ?? PATHS[0];

  const scrollToSection = (id: string, pathId?: PathId) => {
    if (pathId) setActivePath(pathId);
    setShowResume(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handlePrint = () => { window.print(); };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setFormError("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/princeclyde80@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          phone: formPhone || "Not provided",
          subject: formSubject || `New message from ${formName}`,
          message: formMsg,
          _captcha: "false",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success === "true") {
        setFormStatus("sent");
        setFormName("");
        setFormEmail("");
        setFormPhone("");
        setFormSubject("");
        setFormMsg("");
      } else {
        setFormError(data.message || `Error ${res.status}`);
        setFormStatus("error");
      }
    } catch (err) {
      setFormError(String(err));
      setFormStatus("error");
    }
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
              {/* All Paths tab */}
              <button
                data-testid="tab-all"
                onClick={() => { setActivePath("all"); setShowResume(false); }}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-xl font-mono text-sm transition-all duration-300 ${
                  activePath === "all"
                    ? "bg-primary text-primary-foreground shadow-[0_0_24px_rgba(212,175,55,0.25)]"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 border border-border"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                All Paths
              </button>
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
                {activePath === "all" ? (
                  /* All paths: show all three resumes stacked */
                  <AllPathsResumeViewer onPrint={handlePrint} />
                ) : (
                  <ResumeViewer path={activePathData} onPrint={handlePrint} />
                )}
              </motion.div>
            ) : activePath === "all" ? (
              /* All paths overview: three summary cards side by side */
              <motion.div
                key="overview-all"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-muted-foreground mb-8 text-sm font-mono">All three career paths — select any to see the full resume.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {PATHS.map(path => {
                    const Icon = path.icon;
                    return (
                      <div key={path.id} className="bg-secondary/30 border border-border/50 rounded-2xl p-6 flex flex-col gap-4">
                        <div className={`flex items-center gap-3 font-bold text-lg ${path.accentColor}`}>
                          <Icon className="w-5 h-5" /> {path.label}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1">{path.profile.slice(0, 180)}…</p>
                        <div className="flex flex-wrap gap-1.5">
                          {path.expertise.slice(0, 5).map((s, i) => (
                            <span key={i} className="text-xs bg-background border border-border px-2 py-1 rounded text-foreground">{s}</span>
                          ))}
                        </div>
                        <div className="flex gap-2 pt-2">
                          <button
                            onClick={() => { setActivePath(path.id as PathId); setShowResume(false); }}
                            className={`flex-1 text-xs font-mono py-2 rounded-lg border border-border/60 hover:border-primary/40 transition-colors`}
                          >
                            Overview
                          </button>
                          <button
                            onClick={() => { setActivePath(path.id as PathId); setShowResume(true); }}
                            className={`flex-1 text-xs font-mono py-2 rounded-lg bg-primary/10 hover:bg-primary/20 ${path.accentColor} border border-primary/20 transition-colors flex items-center justify-center gap-1`}
                          >
                            <FileText className="w-3 h-3" /> Resume
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
                <CardDescription>Fill in the form and I'll receive it directly in my inbox.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-5" onSubmit={handleSendMessage}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name</label>
                    <Input
                      data-testid="input-name"
                      placeholder="Your name"
                      className="bg-secondary/50"
                      required
                      value={formName}
                      onChange={e => setFormName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Email</label>
                    <Input
                      data-testid="input-email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-secondary/50"
                      required
                      value={formEmail}
                      onChange={e => setFormEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone / WhatsApp <span className="text-muted-foreground font-normal">(optional)</span></label>
                    <Input
                      data-testid="input-phone"
                      type="tel"
                      placeholder="+63 912 345 6789"
                      className="bg-secondary/50"
                      value={formPhone}
                      onChange={e => setFormPhone(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input
                      data-testid="input-subject"
                      placeholder="What's this about?"
                      className="bg-secondary/50"
                      value={formSubject}
                      onChange={e => setFormSubject(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea
                      data-testid="input-message"
                      placeholder="How can we work together?"
                      className="min-h-[140px] bg-secondary/50"
                      value={formMsg}
                      onChange={e => setFormMsg(e.target.value)}
                    />
                  </div>
                  {formStatus === "sent" && (
                    <p className="text-sm text-emerald-400 font-medium text-center py-2">✓ Message sent! I'll get back to you soon.</p>
                  )}
                  {formStatus === "error" && (
                    <div className="text-sm text-red-400 font-medium text-center py-2 space-y-1">
                      <p>Something went wrong.</p>
                      {formError && <p className="text-xs opacity-75 font-mono">{formError}</p>}
                      <p className="text-xs">Or email directly: princeclyde80@gmail.com</p>
                    </div>
                  )}
                  <Button data-testid="button-submit" type="submit" disabled={formStatus === "sending" || formStatus === "sent"} className="w-full h-12 text-base">
                    <Mail className="w-4 h-4 mr-2" /> {formStatus === "sending" ? "Sending..." : formStatus === "sent" ? "Sent!" : "Send Message"}
                  </Button>
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
