import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ExternalLink, BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "ServiceNow Developer Internship Program",
    issuer: "Digital Edify",
    date: "2026",
    verifyUrl: "#",
  },
  {
    title: "ServiceNow Beginner Level",
    issuer: "Infosys Wingspan",
    date: "Feb 2026",
    verifyUrl: "#",
  },
];

export function Certifications() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
            <div
              className="h-0.5 w-20 rounded-full"
              style={{ background: "linear-gradient(90deg, #7c3aed, #0891b2)" }}
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {certifications.map((cert, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div
                className="glass-card rounded-2xl p-8 flex items-start gap-6 group transition-all duration-300 hover:scale-[1.01]"
              >
                <div
                  className="p-3 rounded-xl shrink-0 transition-colors"
                  style={{ background: "rgba(124,58,237,0.15)" }}
                >
                  <BadgeCheck
                    className="w-7 h-7"
                    style={{ color: "#a78bfa" }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white mb-1 leading-snug">{cert.title}</h3>
                  <p
                    className="font-semibold text-sm mb-1 text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(90deg, #a78bfa, #22d3ee)" }}
                  >
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-400 mb-4">Completed {cert.date}</p>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-violet-400 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Verify Certificate
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
