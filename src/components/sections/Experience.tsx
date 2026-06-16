import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Experience() {
  const achievements = [
    "Developed and configured 20+ ServiceNow components including Business Rules, Client Scripts, UI Policies, and Flow Designer automations across ITSM and CSM modules",
    "Automated ITSM workflows reducing manual effort by 30% and improving average ticket resolution speed by 25% across 500+ monthly tickets",
    "Implemented end-to-end Incident, Problem, Change, and Knowledge Management processes following ITIL best practices",
    "Designed Service Catalog items with multi-level approvals, SLA tracking, and automated notifications — cutting catalog fulfillment time significantly",
    "Built reusable Script Includes and optimized GlideRecord queries, reducing backend script redundancy by 40%",
    "Integrated 3+ external systems using REST APIs enabling real-time data exchange and eliminating manual sync tasks",
    "Configured ACLs and role-based access controls (RBAC) to enforce data security across all modules",
    "Managed update sets, performed pre-production testing, and followed change management best practices for all deployments",
  ];

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
            <div
              className="h-0.5 w-20 rounded-full"
              style={{ background: "linear-gradient(90deg, #7c3aed, #0891b2)" }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="glass-card rounded-2xl p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">ServiceNow Developer</h3>
                <p className="text-lg font-semibold text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg, #a78bfa, #22d3ee)" }}>
                  Digital Edify
                </p>
                <p className="text-sm text-slate-400 mt-1">Hyderabad, India</p>
              </div>
              <div
                className="text-sm font-medium text-slate-300 px-4 py-1.5 rounded-full w-fit"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                Aug 2025 – Mar 2026
              </div>
            </div>

            <div className="space-y-4">
              {achievements.map((item, index) => (
                <ScrollReveal key={index} delay={0.08 + index * 0.06} className="flex items-start gap-3">
                  <span className="text-cyan-400 shrink-0 mt-0.5 text-base">▹</span>
                  <p className="text-slate-300 leading-relaxed">{item}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
