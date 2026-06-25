import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Code, Shield, Sparkles, ChevronDown, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Import resume thumbnails
import resumeImg1 from "@assets/IMG_7438_1782370269024.png";
import resumeImg2 from "@assets/IMG_7441_1782370269024.jpeg";
import resumeImg3 from "@assets/IMG_7446_1782370269024.jpeg";

// Personal Data
const PERSONAL_DATA = {
  name: "Clyde Miles Bonita",
  location: "Taguig 1632, Philippines",
  email: "princeclyde80@gmail.com",
  phone: "09109044620",
  languages: "English, Tagalog",
  hobbies: "Gaming, Cardio Exercise, Making Websites",
  profile: "I work security now, but I study finance so I handle money better than I earn it, and I train housekeeping because your environment reflects your mindset."
};

const PATHS = [
  {
    id: "housekeeping",
    title: "Housekeeping & Hospitality",
    icon: Sparkles,
    thumbnail: resumeImg1,
    profile: "A highly disciplined, detail-oriented, and guest-focused hospitality professional with formal training in luxury housekeeping standards and a proven track record in environmental safety and operational security. Adept at maintaining flawless cleanliness, managing high-volume guest requests, and executing tasks with a strong sense of urgency and discretion. Possesses exceptional conflict-resolution skills and a proactive mindset, fully prepared to deliver 5-star service and maintain premium brand standards in a fast-paced luxury hotel environment.",
    accomplishments: [
      "Health, Safety & Sanitization Protocols: Proficient in chemical safety, room inspection checklists, and hazard prevention.",
      "Time Management & Efficiency: Proven ability to manage strict room turnover timelines while maintaining immaculate quality.",
      "Operational Discipline & Discretion: High standard of personal grooming, professional communication, and strict adherence to guest privacy.",
      "Guest Relations & Service Excellence: Anticipating guest needs, handling inquiries professionally, and resolving issues effectively under pressure.",
      "5-Star Cleanliness Standards: Deep cleaning, room makeup, turndown service, and meticulous attention to detail.",
      "Maintained a 100% safety record by conducting regular patrols and strictly enforcing access control protocols.",
      "Delivered high-quality customer service in a fast-paced environment."
    ],
    expertise: ["Meticulous Room Inspection & Detailing", "Public Area & Deep Cleaning Maintenance", "Financial Literacy", "Modern Dev Tools & Workflow", "Public Interaction", "Knowledge of Laws and Regulations", "Report Writing", "Full stack website Development"],
    education: [
      "Housekeeping (NC II), TESDA — Jan 2026 to May 2026",
      "Security Guard, C6 Lakeside, Taguig City — Aug 2024 to Present",
      "Grant Cecilia Integrated School, Taguig City — Aug 2024 to May 2025",
      "Financial Literacy, TESDA — Dec 2025"
    ]
  },
  {
    id: "tech",
    title: "Tech & Web Dev",
    icon: Code,
    thumbnail: resumeImg2,
    profile: "Dedicated and highly disciplined professional with a proven track record in operational security and a strong aptitude for modern technology. A resourceful, self-taught developer skilled in AI-assisted full-stack web development, utilizing platforms like Claude, Git/GitHub, and Vercel to rapidly build and deploy live applications. Brings a unique blend of sharp conflict-resolution skills, financial literacy, and a proactive mindset ready for fast-paced environments.",
    accomplishments: [
      "Independent Full-Stack Web Projects | Developer & Integrator",
      "Utilized AI-driven development workflows and use AI to conceptualize, write, and build functional front-end and full-stack web applications.",
      "Managed codebase version control using Git and GitHub repository workflows.",
      "Successfully deployed and maintained active cloud-hosted applications on platform-as-a-service (PaaS) networks including Vercel and Render.",
      "Maintained a 100% safety record (security background adds reliability and discipline to dev work)"
    ],
    expertise: ["Technical aptitude", "Modern Dev Tools & Workflow", "Cloud Deployment & Hosting", "Full stack website Development", "Financial Literacy"],
    education: [
      "Grant Cecilia Integrated School — Aug 2024 to May 2025",
      "Financial Literacy, TESDA — Dec 2025"
    ],
    tools: ["Claude AI", "Git", "GitHub", "Vercel", "Render", "Firebase"],
    projects: [
      { title: "Web App Project 1", tags: ["HTML", "CSS", "JavaScript"] },
      { title: "Portfolio Site", tags: ["React", "Tailwind", "Vercel"] },
      { title: "Full Stack App", tags: ["Firebase", "GitHub", "Render"] }
    ]
  },
  {
    id: "security",
    title: "Customer Service & Security",
    icon: Shield,
    thumbnail: resumeImg3,
    profile: "Dedicated and highly disciplined professional with a proven track record in operational security and a strong aptitude for modern technology. A resourceful, self-taught developer skilled in AI-assisted full-stack web development. Brings a unique blend of sharp conflict-resolution skills, financial literacy, and a proactive mindset ready for fast-paced environments.",
    accomplishments: [
      "Maintained a 100% safety record by conducting regular patrols and strictly enforcing access control protocols for all personnel and visitors.",
      "Delivered high-quality customer service in a fast-paced environment, maintaining a positive attitude while handling high volumes of daily customers.",
      "Independent Full-Stack Web Projects | Developer & Integrator",
      "Utilized AI-driven development workflows.",
      "Managed codebase version control using Git and GitHub repository workflows.",
      "Successfully deployed and maintained active cloud-hosted applications."
    ],
    expertise: ["Public Interaction", "Knowledge of Laws and Regulations", "Report Writing", "Financial Literacy", "Technical aptitude"],
    education: [
      "Security Guard, C6 Lakeside, Taguig City — Aug 2024 to Present"
    ]
  }
];

const TIMELINE = [
  {
    date: "Jan 2026 – May 2026",
    title: "Housekeeping NC II Training",
    organization: "TESDA",
    tag: "Hospitality"
  },
  {
    date: "Dec 2025",
    title: "Certificate in Financial Literacy",
    organization: "TESDA",
    tag: "Certification"
  },
  {
    date: "Aug 2024 – May 2025",
    title: "High School",
    organization: "Grant Cecilia Integrated School",
    tag: "Education"
  },
  {
    date: "Aug 2024 – Present",
    title: "Security Guard",
    organization: "C6 Lakeside, Taguig City",
    tag: "Service"
  }
];

export default function Home() {
  const [activePath, setActivePath] = useState(PATHS[0].id);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = (pathId: string) => {
    // Placeholder download handler
    console.log(`Downloading resume for ${pathId}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-secondary text-muted-foreground text-sm font-mono border border-border">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for Opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-foreground">
            {PERSONAL_DATA.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            {PERSONAL_DATA.profile}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12 text-sm font-mono text-muted-foreground">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {PERSONAL_DATA.location}</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> {PERSONAL_DATA.email}</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> {PERSONAL_DATA.phone}</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => { setActivePath("housekeeping"); scrollToSection("path-selector"); }} className="font-semibold tracking-wide">
              Housekeeping Resume
            </Button>
            <Button size="lg" variant="secondary" onClick={() => { setActivePath("tech"); scrollToSection("path-selector"); }} className="font-semibold tracking-wide border border-border">
              Tech Portfolio
            </Button>
            <Button size="lg" variant="outline" onClick={() => { setActivePath("security"); scrollToSection("path-selector"); }} className="font-semibold tracking-wide">
              Customer Service Resume
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground cursor-pointer"
          onClick={() => scrollToSection("path-selector")}
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.div>
      </section>

      {/* Path Selector Section */}
      <section id="path-selector" className="py-24 px-6 md:px-12 lg:px-24 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-12">
            {PATHS.map(path => {
              const Icon = path.icon;
              return (
                <button
                  key={path.id}
                  onClick={() => setActivePath(path.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-lg font-mono text-sm transition-all duration-300 ${
                    activePath === path.id 
                      ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(212,175,55,0.2)]' 
                      : 'bg-secondary text-muted-foreground hover:bg-secondary/80 border border-border'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {path.title}
                </button>
              )
            })}
          </div>

          <div className="min-h-[600px]">
            {PATHS.map(path => (
              activePath === path.id && (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-12"
                >
                  <div className="lg:col-span-2 space-y-10">
                    <div>
                      <h2 className="text-3xl font-bold mb-6 text-foreground">Professional Profile</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed bg-secondary/50 p-6 rounded-xl border border-border/50">
                        {path.profile}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <span className="text-primary font-mono text-sm">01.</span> Key Accomplishments
                      </h3>
                      <ul className="space-y-4">
                        {path.accomplishments.map((item, i) => (
                          <li key={i} className="flex gap-4 text-muted-foreground">
                            <span className="text-primary mt-1">▹</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {path.projects && (
                      <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                          <span className="text-primary font-mono text-sm">02.</span> Featured Projects
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {path.projects.map((project, i) => (
                            <Card key={i} className="bg-background border-border/50 hover:border-primary/50 transition-colors">
                              <CardHeader>
                                <CardTitle className="text-lg">{project.title}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="flex flex-wrap gap-2">
                                  {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-8">
                    <Card className="bg-secondary/30 border-border/50">
                      <CardHeader>
                        <CardTitle className="text-lg font-mono text-primary">Areas of Expertise</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {path.expertise.map((skill, i) => (
                            <span key={i} className="text-sm bg-background border border-border px-3 py-1.5 rounded-md text-foreground">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-secondary/30 border-border/50">
                      <CardHeader>
                        <CardTitle className="text-lg font-mono text-primary">Education & Certs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {path.education.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground pb-4 border-b border-border/50 last:border-0 last:pb-0">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {path.tools && (
                      <Card className="bg-secondary/30 border-border/50">
                        <CardHeader>
                          <CardTitle className="text-lg font-mono text-primary">Tools & Platforms</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {path.tools.map((tool, i) => (
                              <span key={i} className="text-sm text-muted-foreground">
                                {tool}{i < path.tools!.length - 1 ? " •" : ""}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Journey & Experience</h2>
          
          <div className="space-y-12">
            {TIMELINE.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2" />
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-border" />
                
                <div className={`absolute w-4 h-4 rounded-full bg-primary left-[-8px] md:left-[50%] md:-translate-x-1/2 mt-1.5 shadow-[0_0_10px_rgba(212,175,55,0.5)]`} />
                
                <div className={`md:w-[45%] ${i % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:text-right'}`}>
                  <div className="text-primary font-mono text-sm mb-2">{item.date}</div>
                  <h4 className="text-xl font-bold text-foreground mb-1">{item.title}</h4>
                  <div className="text-muted-foreground mb-3">{item.organization}</div>
                  <span className="inline-block px-3 py-1 bg-secondary border border-border rounded-full text-xs font-mono text-muted-foreground">
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-card/50 border-t border-border/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Whether you're looking for a disciplined professional, a creative developer, or a reliable team member, I'm ready to bring value to your organization.
            </p>
            
            <div className="space-y-4 mb-12">
              <a href={`mailto:${PERSONAL_DATA.email}`} className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors font-mono">
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

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Download Resumes</h3>
              {PATHS.map(path => (
                <Button key={path.id} variant="outline" className="w-full justify-start h-auto p-3 group border-border/50 hover:border-primary/50" onClick={() => handleDownload(path.id)}>
                  <div className="w-12 h-16 mr-4 bg-muted/50 rounded overflow-hidden flex-shrink-0">
                    <img src={path.thumbnail} alt={`${path.title} Resume Thumbnail`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-foreground">{path.title}</div>
                    <div className="text-xs text-muted-foreground font-mono mt-1">PDF Download</div>
                  </div>
                  <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors ml-4" />
                </Button>
              ))}
            </div>
          </div>

          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="John Doe" className="bg-secondary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-secondary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="How can we work together?" className="min-h-[150px] bg-secondary/50" />
                </div>
                <Button type="submit" className="w-full h-12 text-lg">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-border/50 text-muted-foreground text-sm font-mono bg-background">
        © {new Date().getFullYear()} {PERSONAL_DATA.name}. All rights reserved.
      </footer>
    </div>
  );
}
