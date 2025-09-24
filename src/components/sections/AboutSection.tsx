import { Card } from "@/components/ui/card";
import { Users, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-neon-green">
            About Nepathon
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            It is a National Level Hackathon Organized by FusionStack in collaboration with Nepathya college, 
            bringing together brilliant minds to create innovative solutions that matter. 
            This isn't just about code, it's about building a better future through technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-800/50 border-yellow-500/20 p-8 text-center hover:border-yellow-500/50 transition-all duration-300">
            <Target className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-yellow-500">Our Mission</h3>
            <p className="text-gray-300">
              Empowering developers to create meaningful solutions that address real-world challenges 
              and drive positive social impact.
            </p>
          </Card>

          <Card className="bg-gray-800/50 border-gray-300/20 p-8 text-center hover:border-gray-300/50 transition-all duration-300">
            <Lightbulb className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-gray-300">Innovation</h3>
            <p className="text-gray-300">
              Fostering creativity and innovation through cutting-edge technology themes 
              that shape the future of digital solutions.
            </p>
          </Card>

          <Card className="bg-gray-800/50 border-yellow-500/20 p-8 text-center hover:border-yellow-500/50 transition-all duration-300">
            <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-yellow-500">Community</h3>
            <p className="text-gray-300">
              Building a vibrant community of developers, designers, and innovators 
              who collaborate to make technology more inclusive.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;