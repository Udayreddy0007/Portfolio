import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
  const links = [
    {
      href: "mailto:udaysaireddy82@gmail.com",
      icon: Mail,
      label: "Email",
      value: "udaysaireddy82@gmail.com",
      iconBg: "rgba(124,58,237,0.2)",
      iconColor: "#a78bfa",
    },
    {
      href: "https://www.linkedin.com/in/uday-reddy-01a1132a4/",
      icon: Linkedin,
      label: "LinkedIn",
      value: "Uday Sai Charan Reddy",
      iconBg: "rgba(8,145,178,0.2)",
      iconColor: "#67e8f9",
    },
    {
      href: "https://github.com/Udayreddy0007",
      icon: Github,
      label: "GitHub",
      value: "@Udayreddy0007",
      iconBg: "rgba(255,255,255,0.08)",
      iconColor: "#e2e8f0",
    },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <div
              className="h-0.5 w-20 rounded-full mx-auto mb-4"
              style={{ background: "linear-gradient(90deg, #7c3aed, #0891b2)" }}
            />
            <p className="text-lg text-slate-400">Open for opportunities in enterprise ServiceNow development.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-col md:flex-row gap-4">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card flex items-center gap-4 p-5 rounded-2xl flex-1 group transition-all duration-300 hover:scale-[1.03]"
                >
                  <div
                    className="p-3 rounded-xl shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: link.iconBg }}
                  >
                    <Icon className="w-6 h-6" style={{ color: link.iconColor }} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">{link.label}</div>
                    <div className="font-semibold text-white text-sm">{link.value}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
