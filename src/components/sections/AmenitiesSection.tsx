
import { Card } from "@/components/ui/card";
import { Bed, Utensils, HelpCircle, Users, ShieldCheck, Award, Star } from "lucide-react";

const amenities = [
  {
    icon: Bed,
    title: "Accommodations Available",
    description: "Comfortable overnight accommodation provided for all participants during the 3-day event. Rest and recharge between coding sessions.",
  },
  {
    icon: Utensils,
    title: "Free Meals & Refreshments",
    description: "All meals and refreshments provided throughout the event. Stay energized with breakfast, lunch, dinner, and snacks during coding sessions.",
  },
  {
    icon: HelpCircle,
    title: "24hrs Help Desk Support",
    description: "Round-the-clock technical and general support available. Our team is always ready to assist with any queries or issues.",
  },
  {
    icon: Users,
    title: "Guidance from Expert Mentors",
    description: "Learn from industry experts and experienced developers. Get valuable insights and guidance throughout the hackathon.",
  },
  {
    icon: ShieldCheck,
    title: "24hrs Security",
    description: "Complete security coverage throughout the event duration. Focus on coding while we ensure your safety and belongings.",
  },
  {
    icon: Award,
    title: "Certificates & Goodies",
    description: "All participants receive certificates of participation and exclusive Nepathon Vol. 1-themed merchandise and goodies.",
  },
];

const additionalBenefits = [
  "Networking opportunities with industry professionals",
  "Workshop sessions with expert developers",
  "Career guidance and mentorship sessions",
  "Potential incubation opportunities for top projects",
  "Access to exclusive community events",
  "Recognition in tech community across Nepal",
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-20 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-yellow-500">
            Amenities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity) => (
            <Card
              key={amenity.title}
              className="bg-gray-800/30 border-yellow-500/20 p-8 text-center hover:border-yellow-500/50 transition-all duration-300"
            >
              <amenity.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">{amenity.title}</h3>
              <p className="text-gray-300">{amenity.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6 text-yellow-500">Additional Benefits</h3>
          <ul className="space-y-2 max-w-2xl mx-auto">
            {additionalBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center justify-center">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-gray-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
