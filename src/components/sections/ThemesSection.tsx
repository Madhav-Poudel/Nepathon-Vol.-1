import { BookOpen, Heart, MapPin, Building, CreditCard, Leaf, Link, Lightbulb } from "lucide-react";

const themes = [
  {
    icon: BookOpen,
    title: "Ed-tech",
    description: "Create solutions that revolutionize learning and education technology.",
    color: "neon-green"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Develop applications that improve health outcomes and promote wellness.",
    color: "neon-blue"
  },
  {
    icon: MapPin,
    title: "Tourism",
    description: "Build innovative solutions to enhance travel experiences and tourism services.",
    color: "neon-pink"
  },
  {
    icon: Building,
    title: "E-Governance",
    description: "Create platforms that improve government services and citizen engagement.",
    color: "neon-purple"
  },
  {
    icon: CreditCard,
    title: "Fin-Tech",
    description: "Develop innovative financial technology solutions and services.",
    color: "neon-green"
  },
  {
    icon: Leaf,
    title: "Agri-Tech",
    description: "Build solutions that address agricultural challenges and improve farming.",
    color: "neon-blue"
  },
  {
    icon: Link,
    title: "Blockchain",
    description: "Create decentralized applications and blockchain-based solutions.",
    color: "neon-pink"
  },
  {
    icon: Lightbulb,
    title: "Open Innovation",
    description: "Build anything that solves real-world problems.",
    color: "neon-purple"
  }
];

const ThemesSection = () => {
  return (
    <section className="py-20 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-yellow-500">
            Themes of Innovation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your path and build solutions that matter. Each theme offers unique 
            opportunities to create impactful technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <div 
                key={theme.title}
                className="bg-gray-800/30 p-8 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group cursor-pointer text-center"
              >
                <Icon className="h-16 w-16 text-yellow-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-4 text-yellow-500">
                  {theme.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {theme.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-400">
            Can't decide? You can explore multiple themes and choose the one that inspires you most!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;