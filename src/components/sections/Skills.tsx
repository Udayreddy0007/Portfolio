import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Layers, GitMerge, Plug, Code2, Wrench, Bot } from "lucide-react";

const skillGroups = [
  {
    icon: Layers,
    title: "ServiceNow Platform",
    iconColor: "#a78bfa",
    iconBg: "rgba(124,58,237,0.15)",
    chipHoverColor: "rgba(124,58,237,0.2)",
    skills: [
      "ITSM", "CSM", "HRSD", "CRM (SOM)", "CMDB",
      "Service Catalog", "Flow Designer", "Business Rules",
      "Client Scripts", "UI Policies", "Script Includes",
      "GlideRecord", "ACLs / RBAC", "SLA Management",
      "Notifications", "Update Sets",
    ],
    wide: true,
  },
  {
    icon: GitMerge,
    title: "ITSM Processes",
    iconColor: "#c4b5fd",
    iconBg: "rgba(139,92,246,0.15)",
    chipHoverColor: "rgba(139,92,246,0.18)",
    skills: [
      "Incident Management", "Problem Management",
      "Change Management", "Knowledge Management",
      "ITIL-aligned Workflows",
    ],
    wide: false,
  },
  {
    icon: Plug,
    title: "Integrations",
    iconColor: "#67e8f9",
    iconBg: "rgba(8,145,178,0.15)",
    chipHoverColor: "rgba(8,145,178,0.18)",
    skills: [
      "REST APIs", "Integration Hub",
      "External System Connectivity",
      "Import Sets", "Transform Maps", "JSON / XML",
    ],
    wide: false,
  },
  {
    icon: Code2,
    title: "Web & Languages",
    iconColor: "#6ee7b7",
    iconBg: "rgba(16,185,129,0.15)",
    chipHoverColor: "rgba(16,185,129,0.18)",
    skills: ["JavaScript", "HTML5", "CSS3", "Java", "C", "C++", "SQL", "MySQL"],
    wide: false,
  },
  {
    icon: Wrench,
    title: "Tools",
    iconColor: "#fcd34d",
    iconBg: "rgba(245,158,11,0.15)",
    chipHoverColor: "rgba(245,158,11,0.18)",
    skills: ["VS Code", "Notion", "Git"],
    wide: false,
  },
  {
    icon: Bot,
    title: "AI Tools",
    iconColor: "#fda4af",
    iconBg: "rgba(244,63,94,0.15)",
    chipHoverColor: "rgba(244,63,94,0.18)",
    skills: ["ChatGPT", "Claude", "Gemini", "Deepseek", "Lovable"],
    wide: false,
  },
];

export function Skills() {
  const [featured, ...rest] = skillGroups;

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Competencies</h2>
            <div
              className="h-0.5 w-20 rounded-full"
              style={{ background: "linear-gradient(90deg, #7c3aed, #0891b2)" }}
            />
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          <ScrollReveal>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg" style={{ background: featured.iconBg }}>
                  <featured.icon className="w-5 h-5" style={{ color: featured.iconColor }} />
                </div>
                <h3 className="text-base font-semibold" style={{ color: featured.iconColor }}>
                  {featured.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {featured.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium text-slate-300 rounded-lg cursor-default transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((group, index) => {
              const Icon = group.icon;
              return (
                <ScrollReveal key={index} delay={index * 0.08}>
                  <div className="glass-card rounded-2xl p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg" style={{ background: group.iconBg }}>
                        <Icon className="w-5 h-5" style={{ color: group.iconColor }} />
                      </div>
                      <h3 className="text-base font-semibold" style={{ color: group.iconColor }}>
                        {group.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm font-medium text-slate-300 rounded-lg cursor-default transition-colors"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
