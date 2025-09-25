import React, { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Helper: create a filename slug from a person's name
function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// TeamAvatar
const TeamAvatar: React.FC<{
  src?: string;
  alt: string;
  initials: string;
  sizeClass?: string;
}> = ({ src, alt, initials, sizeClass = "w-24 h-24" }) => {
  const initialSrc = src || `/team/${slugify(alt)}.jpg`;
  const [imgSrc, setImgSrc] = useState<string | null>(initialSrc);
  const triedPng = useRef(false);

  return (
    <div
      className={`${sizeClass} mx-auto mb-4 flex items-center justify-center`}
    >
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
  const team = [
    {
      name: "Aayam Regmi",
      position: "Event Lead",
      initials: "AR",
      photo: "/team/Aayam.png",
    },
    {
      name: "Madhav Poudel",
      position: "Event Lead",
      initials: "MP",
      photo: "/team/president.jpg",
    },

    {
      name: "Ayush Aryal",
      position: "Director",
      initials: "AA",
      photo: "/team/Ayush.png",
    },
    {
      name: "Aakash Jung Rayamajhi",
      position: "Advisory & Supervision Coordinator",
      initials: "AJR",
      photo: "/team/Aakash.png",
    },
    {
      name: "Nirmal Pandey",
      position: "HR Manager",
      initials: "NP",
      photo: "/team/nirmal-pandey.jpg",
    },
    {
      name: "Arun Bhandari",
      position: "Technical Assessment Lead",
      initials: "AB",
      photo: "/team/arun-bhandari.jpg",
    },
    {
      name: "Prajwal GC",
      position: "Sponsor & Finance Head",
      initials: "PGC",
      photo: "/team/prajwal-gc.jpg",
    },
    {
      name: "Prajal Basnet",
      position: "Logistics Lead",
      initials: "PB",
      photo: "/team/Prajal.png",
    },
    {
      name: "Amrit Bhattarai",
      position: "Documentation Lead",
      initials: "AB",
      photo: "/team/amrit-bhattarai.jpg",
    },
  ];

  const supportingMembers = [
    {
      name: "Rosis",
      position: "Content Creation Lead",
      initials: "R",
      photo: "/team/rosis.jpg",
    },
    {
      name: "Roshni Neupane",
      position: "Volunteer",
      initials: "RS",
      photo: "/team/Roshni.png",
    },
    {
      name: "Aakriti Parajuli",
      position: "Volunteer",
      initials: "AT",
      photo: "/team/Aakriti.png",
    },
    {
      name: "Bibek Rai",
      position: "Volunteer",
      initials: "BR",
      photo: "/team/bibek-rai.jpg",
    },
    {
      name: "Priya Lama",
      position: "Volunteer",
      initials: "PL",
      photo: "/team/priya-lama.jpg",
    },
    {
      name: "Sujan Gurung",
      position: "Volunteer",
      initials: "SG",
      photo: "/team/sujan-gurung.jpg",
    },
    {
      name: "Kriti Adhikari",
      position: "Volunteer",
      initials: "KA",
      photo: "/team/kriti-adhikari.jpg",
    },
    {
      name: "Nabin Joshi",
      position: "Volunteer",
      initials: "NJ",
      photo: "/team/nabin-joshi.jpg",
    },
    {
      name: "Sarita Pandey",
      position: "Volunteer",
      initials: "SP",
      photo: "/team/sarita-pandey.jpg",
    },
  ];

  // Normalize/shorten long position titles for display
  function formatPosition(pos?: string) {
    if (!pos) return pos;
    const map: Record<string, string> = {
      "Advisory & Supervision Coordinator": "Advisor & Supervisor",
      "Sponsor & Finance Head": "Sponsor & Finance",
      "Technical Assessment Lead": "Technical Lead",
      "Documentation Lead": "Docs Lead",
    };
    if (map[pos]) return map[pos];
    return pos
      .replace("Coordinator", "Coord.")
      .replace("Lead", "Lead")
      .slice(0, 36);
  }

  return (
    <section
      id="team"
      className="py-16 bg-gray-800/30 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-yellow-400 mb-4">
            Organizers (Team FusionStack)
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the incredible minds behind{" "}
            <span className="text-yellow-400 font-bold">Nepathon Vol.1</span>{" "}
            <br /> A diverse team of dedicated innovators and problem-solvers.
          </p>
        </div>

        {/* Organizers Custom Grid */}
        <div className="flex flex-col items-center space-y-10 mb-20 max-w-7xl mx-auto">
          {/* Row 1: 2 members (Largest) */}
          <div className="grid grid-cols-2 gap-8 w-full">
            {team.slice(0, 2).map((member) => (
              <Card
                key={member.name}
                className="relative bg-gray-900/30 backdrop-blur-xl border-2 border-yellow-500/30 overflow-hidden transform transition-transform text-center"
              >
                <div className="relative p-6">
                  <TeamAvatar
                    src={member.photo}
                    alt={member.name}
                    initials={member.initials}
                    sizeClass="w-32 h-32"
                  />
                  <h4 className="text-3xl font-bold text-white mb-2 truncate">
                    {member.name}
                  </h4>
                  <p className="text-yellow-300 text-lg font-semibold truncate">
                    {formatPosition(member.position)}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Row 2: 3 members (Medium) */}
          <div className="grid grid-cols-3 gap-8 w-full">
            {team.slice(2, 5).map((member) => (
              <Card
                key={member.name}
                className="relative bg-gray-900/30 backdrop-blur-xl border-2 border-yellow-500/30 overflow-hidden transform transition-transform text-center"
              >
                <div className="relative p-6">
                  <TeamAvatar
                    src={member.photo}
                    alt={member.name}
                    initials={member.initials}
                    sizeClass="w-28 h-28"
                  />
                  <h4 className="text-2xl font-bold text-white mb-1 truncate">
                    {member.name}
                  </h4>
                  <p className="text-yellow-300 text-base font-semibold truncate">
                    {formatPosition(member.position)}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Row 3: 4 members (Smallest) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {team.slice(5).map((member) => (
              <Card
                key={member.name}
                className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-xl border-2 border-yellow-500/30 overflow-hidden transform transition-transform text-center"
              >
                <div className="relative p-6">
                  <TeamAvatar
                    src={member.photo}
                    alt={member.name}
                    initials={member.initials}
                    sizeClass="w-24 h-24"
                  />
                  <h4 className="text-xl font-bold text-white mb-1 truncate">
                    {member.name}
                  </h4>
                  <p className="text-yellow-300 text-sm font-semibold truncate">
                    {formatPosition(member.position)}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Supporting Members */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 px-20 py-3  mb-0">
              <h3 className="text-4xl font-bold text-yellow-400">
                Supporting Members
              </h3>
            </div>
          </div>

          {/* 3x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportingMembers.map((member) => (
              <Card
                key={member.name}
                className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-xl border-2 border-yellow-500/30 overflow-hidden transform transition-transform text-center"
              >
                <div className="relative p-6">
                  <TeamAvatar
                    src={member.photo}
                    alt={member.name}
                    initials={member.initials}
                    sizeClass="w-20 h-20"
                  />
                  <h4 className="text-xl font-bold text-white mt-2 truncate">
                    {member.name}
                  </h4>
                  <p className="text-yellow-300 text-sm font-semibold truncate">
                    {formatPosition(member.position)}
                  </p>
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
