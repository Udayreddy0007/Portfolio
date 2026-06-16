import { Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  const socials = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:udaysaireddy82@gmail.com",
      color: "#a78bfa",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/uday-reddy-01a1132a4/",
      color: "#67e8f9",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Udayreddy0007",
      color: "#e2e8f0",
    },
  ];

  return (
    <footer
      className="py-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Donthiri Uday Sai Charan Reddy
        </p>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, label, href, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 hover:scale-110"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Icon size={18} style={{ color }} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
