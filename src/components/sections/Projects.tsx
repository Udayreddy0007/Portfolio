import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "ServiceNow ITSM & CRM Implementation",
    period: "Dec 2025 – Feb 2026",
    tags: ["Incident Mgmt", "Change Mgmt", "SOM", "SLA Automation", "REST APIs"],
    tagVariant: "violet" as const,
    outcome: "Designed reusable approval workflows and notification rules reducing process completion time by 35%",
    bullets: [
      "Built full ITSM suite covering Incident, Problem, Change, and Knowledge Management with automated routing and SLA policies",
      "Developed a Lead-to-Cash workflow automating the complete sales lifecycle within ServiceNow's CRM (SOM) module",
      "Implemented REST API integrations to synchronize data between ServiceNow and an external ERP system",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "Sports Flex – E-Commerce Web App",
    period: "Personal Project",
    tags: ["HTML5", "CSS3", "JavaScript"],
    tagVariant: "cyan" as const,
    outcome: "Fully responsive sportswear e-commerce app with cart, checkout workflow, product filtering, and mobile-first design",
    bullets: [
      "Built using HTML5, CSS3, and vanilla JavaScript — no frameworks",
      "Features shopping cart, simulated checkout, and DOM-based product filtering & search",
    ],
    liveUrl: "https://sports-flex-phi.vercel.app/",
    githubUrl: "https://github.com/Udayreddy0007/Sports-Flex",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div
              className="h-0.5 w-20 rounded-full"
              style={{ background: "linear-gradient(90deg, #7c3aed, #0891b2)" }}
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.12}>
              <div
                className="glass-card rounded-2xl p-8 h-full flex flex-col group transition-all duration-300 hover:scale-[1.015]"
                style={{ cursor: project.liveUrl ? "pointer" : "default" }}
                onClick={() =>
                  project.liveUrl &&
                  window.open(project.liveUrl, "_blank", "noopener,noreferrer")
                }
              >
                {/* Header row */}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-slate-400">{project.period}</span>
                  {project.liveUrl && (
                    <ArrowUpRight
                      size={18}
                      className="text-slate-500 group-hover:text-cyan-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-violet-300 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 rounded-md"
                      style={
                        project.tagVariant === "violet"
                          ? {
                              background: "rgba(124,58,237,0.12)",
                              color: "#c4b5fd",
                              border: "1px solid rgba(124,58,237,0.25)",
                            }
                          : {
                              background: "rgba(8,145,178,0.12)",
                              color: "#67e8f9",
                              border: "1px solid rgba(8,145,178,0.25)",
                            }
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-5 flex-grow">
                  {project.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-400/60 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Outcome + links */}
                <div className="mt-auto space-y-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-1 text-violet-400">
                      Business Outcome
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.outcome}</p>
                  </div>

                  {(project.liveUrl || project.githubUrl) && (
                    <div
                      className="flex gap-3 pt-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:opacity-80"
                          style={{
                            background: "rgba(8,145,178,0.15)",
                            color: "#67e8f9",
                            border: "1px solid rgba(8,145,178,0.3)",
                          }}
                        >
                          <ExternalLink size={13} />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:text-white"
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            color: "#94a3b8",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
