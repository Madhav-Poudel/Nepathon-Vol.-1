import React, { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Crown, Star, Shield, Users, Heart } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${name || "Visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:contact@nepathon.org?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div>
        <label className="text-sm text-gray-200 block mb-1">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 rounded bg-background border" />
      </div>
      <div>
        <label className="text-sm text-gray-200 block mb-1">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full px-3 py-2 rounded bg-background border" />
      </div>
      <div>
        <label className="text-sm text-gray-200 block mb-1">Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-3 py-2 rounded bg-background border" rows={4} />
      </div>
      <div className="text-right -mt-2">
        <button type="submit" className="px-4 py-2 bg-yellow-400 text-black rounded font-semibold">Send</button>
      </div>
    </form>
  );
}

// Helper: create a filename slug from a person's name
function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// TeamAvatar: uses an explicit src if provided, otherwise derives /team/<slug>.jpg
const TeamAvatar: React.FC<{ src?: string; alt: string; initials: string; sizeClass?: string }> = ({ src, alt, initials, sizeClass = "w-24 h-24" }) => {
  const initialSrc = src || `/team/${slugify(alt)}.jpg`;
  const [imgSrc, setImgSrc] = useState<string | null>(initialSrc);
  const triedPng = useRef(false);

  // outer container controls size
  return (
    <div className={`${sizeClass} mx-auto mb-4 flex items-center justify-center`}>
      {/* inner circle with shadow (no ring) */}
      <div className="rounded-full bg-gray-900 overflow-hidden h-full w-full flex items-center justify-center shadow-2xl">
        <Avatar className="w-full h-full">
          {imgSrc ? (
            <AvatarImage
              src={imgSrc}
              alt={alt}
              className="w-full h-full object-cover"
              onError={() => {
                if (!triedPng.current) {
                  triedPng.current = true;
                  const next = imgSrc.replace(/\.jpg$/i, ".png");
                  if (next === imgSrc) {
                    setImgSrc(imgSrc + ".png");
                  } else {
                    setImgSrc(next);
                  }
                } else {
                  setImgSrc(null);
                }
              }}
            />
          ) : null}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const leaders = [
    {
      name: "Madhav Poudel",
      position: "Event Lead",
      initials: "MP",
      bio: "",
      gradient: "from-yellow-400 via-yellow-500 to-neon-green",
      icon: Crown,
      photo: "/team/president.jpg"
    },

    {
      name: "Aayam Regmi",
      position: "Event Lead",
      initials: "AR",
      bio: "",
      gradient: "from-neon-blue via-neon-purple to-neon-pink",
      icon: Star,
      photo: "/team/Aayam.png"
    },
  ];

  const coreTeam = [
    { name: "Ayush Aryal", position: "Director", initials: "AA", skill: "Strategy", color: "bg-blue-500", photo: "/team/Ayush.png" },
  { name: "Aakash Jung Rayamajhi", position: "Advisory & Supervision Coordinator", initials: "AJR", skill: "Strategy", color: "bg-purple-500", photo: "/team/Aakash.png" },
    { name: "Amrit Bhattarai", position: "Documentation Lead", initials: "AB", skill: "Technical Writing", color: "bg-green-500", photo: "/team/amrit-bhattarai.jpg" },
    { name: "Prajwal GC", position: "Sponsor & Finance Head", initials: "PGC", skill: "Finance", color: "bg-pink-500", photo: "/team/prajwal-gc.jpg" },
    
  { name: "Prajal Basnet", position: "Logistics Lead", initials: "PB", skill: "Operations", color: "bg-indigo-500", photo: "/team/Prajal.png" },
    { name: "Arun Bhandari", position: "Technical Assessment Lead", initials: "AB", skill: "Technical", color: "bg-cyan-500", photo: "/team/arun-bhandari.jpg" },
    { name: "Nirmal Pandey", position: "HR Manager", initials: "NP", skill: "Human Resources", color: "bg-teal-500", photo: "/team/nirmal-pandey.jpg" },
  ];

  // First row: Director, Advisor, HR Manager (in that order). Second row: the remaining members.
  const director = coreTeam.find((m) => m.position === "Director");
  const advisor = coreTeam.find((m) => /advisor|advisory/i.test(m.position || ""));
  const hr = coreTeam.find((m) => m.position && m.position.toLowerCase().includes("hr"));
  const coreFirstRow = [director, advisor, hr].filter(Boolean) as typeof coreTeam;
  const coreSecondRow = coreTeam.filter((m) => !coreFirstRow.some((f) => f.name === m.name));

  const supportingMembers = [
  { name: "Rosis", position: "Content Lead", initials: "R", photo: "/team/rosis.jpg" },
    { name: "Roshni Neupane", position: "Volunteer", initials: "RS", photo: "/team/Roshni.png" },
    { name: "Aakriti Parajuli", position: "Volunteer", initials: "AT", photo: "/team/Aakriti.png" },
    { name: "Bibek Rai", position: "Volunteer", initials: "BR", photo: "/team/bibek-rai.jpg" },
    { name: "Priya Lama", position: "Volunteer", initials: "PL", photo: "/team/priya-lama.jpg" },
    { name: "Sujan Gurung", position: "Volunteer", initials: "SG", photo: "/team/sujan-gurung.jpg" },
    { name: "Kriti Adhikari", position: "Volunteer", initials: "KA", photo: "/team/kriti-adhikari.jpg" },
    { name: "Nabin Joshi", position: "Volunteer", initials: "NJ", photo: "/team/nabin-joshi.jpg" },
    { name: "Sarita Pandey", position: "Volunteer", initials: "SP", photo: "/team/sarita-pandey.jpg" },
  ];
  // Profiles are intentionally non-interactive (no dialogs) to keep the section static

  // Normalize/shorten long position titles for display
  function formatPosition(pos?: string) {
    if (!pos) return pos;
    const map: Record<string, string> = {
      "Advisory & Supervision Coordinator": "Advisor & Supervisor",
      "Sponsor & Finance Head": "Sponsor & Finance",
      "Technical Assessment Lead": "Technical Lead",
      "Documentation Lead": "Docs Lead",
      "HR Manager": "HR Manager",
      "Director": "Director",
      "Advisor": "Advisor",
    };
    // exact match first
    if (map[pos]) return map[pos];
    // fallback: shorten common patterns
    return pos
      .replace("Coordinator", "Coord.")
      .replace("Lead", "Lead")
      .replace("&", "&")
      .slice(0, 36);
  }

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-yellow-500/5 to-yellow-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-500/5 to-yellow-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8 shadow-lg">
            <Users className="w-10 h-10 text-black" />
          </div>
          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Meet the incredible minds behind <span className="text-yellow-400 font-bold">Nepathon Vol.1</span> -
            a diverse team of innovators, creators, and problem-solvers united by passion.
          </p>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
        {/* Contact moved to its own section file */}

        {/* Leadership Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500/20 to-neon-green/20 px-6 py-3 rounded-full border border-yellow-500/30 mb-6">
              <Crown className="w-6 h-6 text-yellow-400" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-neon-green bg-clip-text text-transparent">
                Leadership
              </h3>
              <Crown className="w-6 h-6 text-yellow-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leaders.map((leader) => (
              <Card
                key={leader.name}
                className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-xl border-2 border-yellow-500/30 overflow-hidden transform transition-transform"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                tabIndex={-1}
                aria-disabled="true"
              >
                <div className="relative p-8 text-center pointer-events-none">
                  <div className="flex flex-col items-center">
                    <TeamAvatar src={leader.photo} alt={leader.name} initials={leader.initials} sizeClass="w-32 h-32" />

                    <h4 className="text-2xl font-black text-white mb-2 drop-shadow-lg">{leader.name}</h4>
                    <p className="text-yellow-200 text-sm font-semibold mb-2">{leader.position}</p>
                    {leader.bio && (
                      <p className="text-gray-300 text-sm max-w-xs">{leader.bio}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Team Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 px-6 py-3 rounded-full border border-yellow-500/30 mb-6">
              <Shield className="w-6 h-6 text-yellow-400" />
              <h3 className="text-3xl font-bold text-yellow-400">
                Core Team
              </h3>
              <Shield className="w-6 h-6 text-yellow-400" />
            </div>
          </div>

          {/* Render first row with 3 cards, second row with remaining 4 cards. Cards keep the same fixed width on large screens */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-6">
              {coreFirstRow.map((member) => (
                <Card
                  key={member.name}
                  className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-xl border-2 border-yellow-500/30 overflow-hidden transform transition flex-shrink-0 w-full sm:w-72 lg:w-72"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  <div className="relative p-6 text-center pointer-events-none">
                    <TeamAvatar src={member.photo} alt={member.name} initials={member.initials} sizeClass="w-24 h-24" />

                    <h4 className="text-xl font-black text-yellow-300 mb-2 drop-shadow-lg truncate">{member.name}</h4>
                    {member.position && (
                      <p className="text-yellow-200 text-sm font-semibold mb-2 truncate">{formatPosition(member.position)}</p>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {coreSecondRow.map((member) => (
                <Card
                  key={member.name}
                  className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-xl border-2 border-yellow-500/30 overflow-hidden transform transition flex-shrink-0 w-full sm:w-56 lg:w-72"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  <div className="relative p-6 text-center pointer-events-none">
                    <TeamAvatar src={member.photo} alt={member.name} initials={member.initials} sizeClass="w-24 h-24" />

                    <h4 className="text-xl font-black text-yellow-300 mb-2 drop-shadow-lg truncate">{member.name}</h4>
                    {member.position && (
                      <p className="text-yellow-200 text-sm font-semibold mb-2 truncate">{member.position}</p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Operations members merged into Core Team above */}

        {/* Supporting Members */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 px-6 py-3 rounded-full border border-yellow-500/30 mb-6">
              <Heart className="w-6 h-6 text-yellow-400" />
              <h3 className="text-3xl font-bold text-yellow-400">
                Supporting Members
              </h3>
              <Heart className="w-6 h-6 text-yellow-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {supportingMembers.map((member) => (
              <Card
                key={member.name}
                className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border-2 border-yellow-500/30 overflow-hidden transform transition"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                tabIndex={-1}
                aria-disabled="true"
              >
                <div className="relative p-4 text-center pointer-events-none">
                  <TeamAvatar src={member.photo} alt={member.name} initials={member.initials} sizeClass="w-20 h-20" />

                  <h4 className="text-sm font-black text-yellow-300 mb-1 truncate">{member.name}</h4>
                  {member.position && (
                    <p className="text-yellow-200 text-xs font-semibold truncate">{formatPosition(member.position)}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
