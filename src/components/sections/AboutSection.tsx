import { Users, Trophy } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-yellow-400">
            About Nepathon Vol.1
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-justify">
            Nepathon is the national-level hackathon organized by FusionStack (a student team of Nepathya College) powered by Nepathya College. It is a 48-hour coding marathon designed for students who aspire to build innovative and impactful real-world solutions. Nepathon is not just a coding competition — it’s a platform for creativity, collaboration, and innovation. Over three days, participants will brainstorm, design, and code non-stop, pushing their limits to transform bold ideas into working prototypes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700">
            <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">Who Can Participate?</h3>
            <ul className="space-y-4 text-gray-300">
              <li>Open to Bachelor (currently studying), +2, and school-level students.</li>
              <li className="text-red-400">Bachelor passed-out students are not eligible.</li>
              <li>Participation is team-based only (no individual entries).</li>
              <li>Teams must consist of 2 to 4 members.</li>
              <li>Members can be from the same or different colleges/schools.</li>
            </ul>
          </div>

          <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700">
            <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">Why Participate?</h3>
            <ul className="space-y-4 text-gray-300">
              <li><span className="font-semibold text-yellow-500">Showcase Your Talent:</span> Display coding, design, and problem-solving skills.</li>
              <li><span className="font-semibold text-yellow-500">Innovate for Real Impact:</span> Work on meaningful problems.</li>
              <li><span className="font-semibold text-yellow-500">Build Networks:</span> Connect with peers, mentors, and professionals.</li>
              <li><span className="font-semibold text-yellow-500">Win Recognition & Prizes:</span> Exciting rewards and certificates.</li>
              <li><span className="font-semibold text-yellow-500">Unforgettable Experience:</span> Three days of learning, fun, and growth.</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-yellow-400">Event Highlights</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-2">
              48 Hours of Intense Coding, Meals & Refreshments, Midnight Fun Games, Collaborative Teamwork, and Prizes & Certificates for all.
            </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;