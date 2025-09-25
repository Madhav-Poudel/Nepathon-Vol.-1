import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamSection = () => {
  const leaders = [
    { name: "Ram Shrestha", position: "Event Lead", initials: "RS" },
    { name: "Sita Gurung", position: "Co-Lead", initials: "SG" },
  ];

  const organizingGroup1 = [
    { name: "Hari Thapa", position: "Developer", initials: "HT" },
    { name: "Gita Lama", position: "Designer", initials: "GL" },
    { name: "Bikash Rai", position: "Project Manager", initials: "BR" },
    { name: "Anita Sharma", position: "Marketing Lead", initials: "AS" },
  ];

  const organizingGroup2 = [
    { name: "Kiran Bhattarai", position: "Logistics", initials: "KB" },
    { name: "Puja Adhikari", position: "Tech Support", initials: "PA" },
    { name: "Nabin Joshi", position: "Content Creator", initials: "NJ" },
    { name: "Rina Pandey", position: "Social Media", initials: "RP" },
  ];

  const supportingMembers = [
    { name: "Suman Karki", position: "Volunteer", initials: "SK" },
    { name: "Maya Tamang", position: "Support", initials: "MT" },
    { name: "Dipak Magar", position: "Coordinator", initials: "DM" },
    { name: "Lila Rai", position: "Assistant", initials: "LR" },
    { name: "Arjun Gurung", position: "Helper", initials: "AG" },
    { name: "Sarita Thapa", position: "Guide", initials: "ST" },
    { name: "Rajesh Lama", position: "Facilitator", initials: "RL" },
    { name: "Priya Shrestha", position: "Organizer", initials: "PS" },
  ];

  return (
    <section id="team" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-yellow-400">Organizing Team (FusionStack)</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated team behind Nepathon Vol.1, working tirelessly to make this event a success.
          </p>
        </div>

        {/* Leaders */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-yellow-400 text-center">Leadership</h3>
          <div className="flex justify-center space-x-8">
            {leaders.map((leader) => (
              <div key={leader.name} className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="" alt={leader.name} />
                  <AvatarFallback className="text-black bg-yellow-500 text-xl font-bold">
                    {leader.initials}
                  </AvatarFallback>
                </Avatar>
                <h4 className="text-xl font-semibold text-yellow-400">{leader.name}</h4>
                <p className="text-gray-300">{leader.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Organizing Group 1 */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-yellow-400 text-center">Core Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizingGroup1.map((member) => (
              <div key={member.name} className="text-center bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="" alt={member.name} />
                  <AvatarFallback className="text-black bg-yellow-500 text-lg font-bold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h4 className="text-lg font-semibold text-yellow-400">{member.name}</h4>
                <p className="text-gray-300">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Organizing Group 2 */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-yellow-400 text-center">Operations Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizingGroup2.map((member) => (
              <div key={member.name} className="text-center bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="" alt={member.name} />
                  <AvatarFallback className="text-black bg-yellow-500 text-lg font-bold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h4 className="text-lg font-semibold text-yellow-400">{member.name}</h4>
                <p className="text-gray-300">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Members */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-yellow-400 text-center">Supporting Members</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportingMembers.map((member) => (
              <div key={member.name} className="text-center bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="" alt={member.name} />
                  <AvatarFallback className="text-black bg-yellow-500 text-lg font-bold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h4 className="text-lg font-semibold text-yellow-400">{member.name}</h4>
                <p className="text-gray-300">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
