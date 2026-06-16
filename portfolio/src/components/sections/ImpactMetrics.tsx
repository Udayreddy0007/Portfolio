import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useCountUp } from "@/hooks/use-count-up";

function MetricCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { count, ref } = useCountUp(value, 2.5);

  return (
    <ScrollReveal delay={delay} className="w-full">
      <div
        ref={ref}
        className="glass-card rounded-2xl p-6 flex flex-col items-center text-center justify-center h-full transition-all duration-300 hover:scale-[1.02]"
      >
        <div
          className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-transparent bg-clip-text"
          style={{ backgroundImage: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)" }}
        >
          {count}{suffix}
        </div>
        <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">
          {label}
        </div>
      </div>
    </ScrollReveal>
  );
}

export function ImpactMetrics() {
  const metrics = [
    { value: 20, suffix: "+", label: "Platform Components Delivered" },
    { value: 30, suffix: "%", label: "Reduction in Manual Effort" },
    { value: 25, suffix: "%", label: "Faster Ticket Resolution" },
    { value: 500, suffix: "+", label: "Monthly Tickets Supported" },
    { value: 3, suffix: "+", label: "Enterprise Integrations" },
  ];

  return (
    <section className="py-20" style={{ background: "transparent" }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {metrics.map((metric, i) => (
            <MetricCard
              key={i}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
