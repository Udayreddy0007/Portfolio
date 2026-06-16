import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/card";
import { CalendarDays, Users } from "lucide-react";

export function Leadership() {
  return (
    <section className="py-16 bg-card/20">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leadership & Events</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <Card className="bg-background border-border/50 p-8 flex items-start gap-6 hover:border-primary/30 transition-colors">
              <div className="p-4 rounded-xl bg-primary/10 text-primary shrink-0">
                <CalendarDays className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">ATHERIA 2025</h3>
                <p className="text-base text-primary font-medium mb-1">Event Coordinator</p>
                <p className="text-muted-foreground">Managed logistics and coordination for a 500+ attendee college technical fest</p>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card className="bg-background border-border/50 p-8 flex items-start gap-6 hover:border-primary/30 transition-colors">
              <div className="p-4 rounded-xl bg-primary/10 text-primary shrink-0">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">TECKZITE 2025</h3>
                <p className="text-base text-primary font-medium mb-1">Event Coordinator</p>
                <p className="text-muted-foreground">Led cross-functional student team for college-level technical and cultural events</p>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
