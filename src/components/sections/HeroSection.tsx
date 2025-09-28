"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;
    const navbarHeight = document.querySelector('nav')?.clientHeight || 80;
    const top = aboutSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 8; // small padding
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen snap-start flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg imagee.png"
          alt="Background"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-2 text-center z-10">
        {/* Event Name */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-7xl font-extrabold text-yellow-400 uppercase drop-shadow-lg tracking-widest mt-10 md:mt-20"
        >
          Nepathon Vol.1
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-4 text-lg md:text-2xl text-white max-w-2xl mx-auto leading-relaxed"
        >
          Code. Create. Compete. <br />A 48-hour journey of innovation, teamwork
          & problem-solving.
        </motion.p>

        {/* Organized By / Powered By */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.6 }}
          className="mt-4 text-sm md:text-base text-gray-400 uppercase tracking-widest"
        >
          Organized by{" "}
          <span className="text-yellow-400 font-bold">FusionStack</span>{" "}
          &nbsp;|&nbsp; Powered by{" "}
          <span className="text-yellow-400 font-bold">Nepathya College</span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-yellow-500 text-black hover:bg-yellow-400 px-10 py-6 text-lg font-bold shadow-lg rounded-full transition-transform transform hover:scale-105"
            onClick={() => {
              const reg = document.getElementById("registration");
              if (!reg) return;
              const navbarHeight = document.querySelector('nav')?.clientHeight || 80;
              const top = reg.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 8;
              window.scrollTo({ top, behavior: 'smooth' });
            }}
          >
            Register Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToNext}
            className="border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-900 hover:border-yellow-400 px-10 py-6 text-lg font-bold rounded-full transition-all"
          >
            Learn More
          </Button>
        </motion.div>

        {/* Stats cards (Selected Teams, Days, Expected Registrations, Provinces) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 items-stretch"
        >
          {/* Card */}
          <div className="bg-black/60 backdrop-blur-sm border border-white/60 rounded-xl p-6 flex flex-col items-center justify-center min-h-[140px]">
            <div className="text-4xl md:text-5xl font-extrabold text-yellow-400">15</div>
            <div className="mt-2 text-sm md:text-base text-yellow-300 uppercase tracking-widest font-semibold">Selected Teams</div>
          </div>

          {/* Card */}
          <div className="bg-black/60 backdrop-blur-sm border border-white/60 rounded-xl p-6 flex flex-col items-center justify-center min-h-[140px]">
            <div className="text-4xl md:text-5xl font-extrabold text-yellow-400">3</div>
            <div className="mt-2 text-sm md:text-base text-yellow-300 uppercase tracking-widest font-semibold">Days of Hackathon</div>
          </div>

          {/* Card */}
          <div className="bg-black/60 backdrop-blur-sm border border-white/60 rounded-xl p-6 flex flex-col items-center justify-center min-h-[140px]">
            <div className="text-4xl md:text-5xl font-extrabold text-yellow-400">150+</div>
            <div className="mt-2 text-sm md:text-base text-yellow-300 uppercase tracking-widest font-semibold">Expected Team Registrations</div>
          </div>

          {/* Card */}
          <div className="bg-black/60 backdrop-blur-sm border border-white/60 rounded-xl p-6 flex flex-col items-center justify-center min-h-[140px]">
            <div className="text-4xl md:text-5xl font-extrabold text-yellow-400">7</div>
            <div className="mt-2 text-sm md:text-base text-yellow-300 uppercase tracking-widest font-semibold">Provinces Represented</div>
          </div>

          {/* Fee Card */}
          <div className="bg-black/60 backdrop-blur-sm border border-white/60 rounded-xl p-6 flex flex-col items-center justify-center min-h-[140px]">
            <div className="text-2xl md:text-3xl font-extrabold text-yellow-400">Rs. 3000</div>
            <div className="mt-2 text-sm md:text-base text-yellow-300 uppercase tracking-widest font-semibold">Per Team Registration</div>
          </div>
        </motion.div>
      </div>

      {/* intentionally no decorative SVG here to avoid overlap/gap issues */}
    </section>
  );
};

export default HeroSection;
