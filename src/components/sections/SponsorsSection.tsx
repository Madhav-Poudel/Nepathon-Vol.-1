import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const SponsorsSection = () => {
  return (
    <section className="py-20 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-neon-purple">
            Our Valued Partners
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            We're grateful to our sponsors and partners who make Nepathon possible. 
            Together, we're building a stronger tech community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Placeholder sponsor cards */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="bg-card/50 border-border/20 p-8 text-center hover:border-neon-green/50 transition-all duration-300 group">
              <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4 group-hover:text-neon-green transition-colors duration-300" />
              <div className="h-6 bg-muted/50 rounded mb-2"></div>
              <div className="h-4 bg-muted/30 rounded w-3/4 mx-auto"></div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-8 border border-neon-blue/30 rounded-lg bg-card/30">
            <h3 className="text-2xl font-semibold mb-4 text-neon-blue">Become a Sponsor</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl">
              Join us in supporting the next generation of innovators. Partner with Nepathon 
              to showcase your brand to talented developers and tech enthusiasts.
            </p>
            <a 
              href="mailto:sponsors@nepathon.com" 
              className="text-neon-green hover:text-neon-green/80 font-semibold text-lg"
            >
              Contact Us for Partnership Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;