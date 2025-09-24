import { Trophy, Award, Star, Heart, Palette } from "lucide-react";

const prizes = [
  {
    icon: Trophy,
    title: "1st Place",
    amount: "NPR 1 Lakh",
    color: "neon-green",
    description: "The ultimate champions"
  },
  {
    icon: Award,
    title: "1st Runner-up",
    amount: "NPR 50,000",
    color: "neon-blue",
    description: "Excellence in innovation"
  },
  {
    icon: Star,
    title: "2nd Runner-up",
    amount: "NPR 30,000",
    color: "neon-pink",
    description: "Outstanding achievement"
  },
  {
    icon: Heart,
    title: "Best Social Innovation",
    amount: "NPR 10,000",
    color: "neon-purple",
    description: "Making a difference"
  },
  {
    icon: Palette,
    title: "Best UI/UX",
    amount: "NPR 10,000",
    color: "neon-green",
    description: "Design excellence"
  }
];

const PrizeSection = () => {
  return (
    <section className="py-20 relative bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-yellow-500">
            Prizes & Awards
          </h2>
          <div className="mb-8">
            <p className="text-3xl font-bold text-yellow-500 mb-2">
              Total Prize Pool: NPR 2 Lakhs
            </p>
            <p className="text-xl text-gray-300">
              Compete for amazing prizes and recognition in the tech community
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prizes.map((prize, index) => {
            const Icon = prize.icon;
            return (
              <div 
                key={prize.title}
                className="bg-gray-800/30 p-8 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group cursor-pointer text-center"
              >
                <Icon className="h-16 w-16 text-yellow-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-2 text-yellow-500">
                  {prize.title}
                </h3>
                <p className="text-3xl font-bold mb-2 text-gray-300">
                  {prize.amount}
                </p>
                <p className="text-gray-300">
                  {prize.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block p-6 bg-gray-800/30 rounded-lg">
            <p className="text-lg text-gray-300">
              All winners will receive certificates and exclusive Nepathon merchandise. 
              <br />
              <span className="text-yellow-500 font-semibold">Network with industry leaders and get mentorship opportunities!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;