import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Aurora background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="aurora-orb-violet"
          style={{ width: 700, height: 700, top: "-20%", left: "-12%" }}
        />
        <div
          className="aurora-orb-cyan"
          style={{ width: 600, height: 600, top: "5%", right: "-12%" }}
        />
        <div
          className="aurora-orb-violet"
          style={{ width: 400, height: 400, bottom: "0%", left: "40%", opacity: 0.08 }}
        />
      </div>

      <div className="container relative z-10 px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-4xl mx-auto"
        >
          {/* Name badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-sm font-medium text-violet-300"
            style={{
              background: "rgba(124, 58, 237, 0.12)",
              border: "1px solid rgba(124, 58, 237, 0.3)",
            }}
          >
            <Terminal size={13} />
            Donthiri Uday Sai Charan Reddy
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8">
            ServiceNow Developer Building{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Enterprise Solutions
            </span>{" "}
            That Scale
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            8+ months of hands-on experience delivering ITSM automation, workflow
            optimization, REST integrations, and custom ServiceNow applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #0891b2 100%)",
              }}
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="/Uday_Res.pdf"
              download="Uday_Sai_Charan_Reddy_Resume.docx"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:bg-white/10"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
