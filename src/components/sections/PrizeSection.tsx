import { Trophy, Award, Star, Heart, Palette } from "lucide-react";

const mainPrizes = [
  {
    icon: Trophy,
    title: "1st Place",
    amount: "NPR 1 Lakh",
    color: "gold",
    description: "The ultimate champions"
  },
  {
    icon: Award,
    title: "2nd Place",
    amount: "NPR 50,000",
    color: "silver",
    description: "Excellence in innovation"
  },
];

const otherPrizes = [
  {
    icon: Star,
    title: "3rd Place",
    amount: "NPR 30,000",
    color: "bronze",
    description: "Outstanding achievement"
  },
  {
    icon: Heart,
    title: "Open Innovation",
    amount: "NPR 15,000",
    color: "blue",
    description: "Making a difference"
  },
  {
    icon: Palette,
    title: "Best UI/UX Design",
    amount: "NPR 5,000",
    color: "blue",
    description: "Design excellence"
  }
];

const PrizeSection = () => {
  return (
    <section className="py-20 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-yellow-500">
            Prizes & Awards
          </h2>
          <div className="mb-8">
            <div className="inline-block p-8 bg-yellow-900/80 border-4 border-yellow-500 rounded-lg shadow-lg animate-pulse">
              <p className="text-4xl font-bold text-white mb-2">
                Total Prize Pool: NPR 2 Lakhs+
              </p>
              <p className="text-xl text-yellow-200">
                Compete for amazing prizes and recognition in the tech community
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {mainPrizes.map((prize, index) => {
            const Icon = prize.icon;
            const getColorClasses = (color: string) => {
              switch (color) {
                case 'gold':
                  return {
                    icon: 'text-yellow-500',
                    title: 'text-yellow-500',
                    amount: 'text-yellow-300',
                    bg: 'hover:bg-yellow-900/20'
                  };
                case 'silver':
                  return {
                    icon: 'text-gray-300',
                    title: 'text-gray-300',
                    amount: 'text-gray-200',
                    bg: 'hover:bg-gray-700/20'
                  };
                default:
                  return {
                    icon: 'text-yellow-500',
                    title: 'text-yellow-500',
                    amount: 'text-gray-300',
                    bg: 'hover:bg-gray-800/50'
                  };
              }
            };

            const colorClasses = getColorClasses(prize.color);

            return (
              <div
                key={prize.title}
                className={`bg-gray-800/30 p-8 rounded-lg ${colorClasses.bg} transition-all duration-300 group cursor-pointer text-center animate-fade-in-up ${prize.title === '1st Place' ? 'md:col-span-1' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Icon className={`h-16 w-16 ${colorClasses.icon} mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className={`text-2xl font-semibold mb-2 ${colorClasses.title}`}>
                  {prize.title}
                </h3>
                <p className={`text-3xl font-bold mb-2 ${colorClasses.amount}`}>
                  {prize.amount}
                </p>
                <p className="text-gray-300">
                  {prize.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {otherPrizes.map((prize, index) => {
            const Icon = prize.icon;
            const getColorClasses = (color: string) => {
              switch (color) {
                case 'bronze':
                  return {
                    icon: 'text-amber-600',
                    title: 'text-amber-600',
                    amount: 'text-amber-500',
                    bg: 'hover:bg-amber-900/20'
                  };
                case 'blue':
                  return {
                    icon: 'text-blue-400',
                    title: 'text-blue-400',
                    amount: 'text-blue-300',
                    bg: 'hover:bg-blue-900/20'
                  };
                default:
                  return {
                    icon: 'text-yellow-500',
                    title: 'text-yellow-500',
                    amount: 'text-gray-300',
                    bg: 'hover:bg-gray-800/50'
                  };
              }
            };

            const colorClasses = getColorClasses(prize.color);

            return (
              <div
                key={prize.title}
                className={`bg-gray-800/30 p-8 rounded-lg ${colorClasses.bg} transition-all duration-300 group cursor-pointer text-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Icon className={`h-16 w-16 ${colorClasses.icon} mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className={`text-2xl font-semibold mb-2 ${colorClasses.title}`}>
                  {prize.title}
                </h3>
                <p className={`text-3xl font-bold mb-2 ${colorClasses.amount}`}>
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