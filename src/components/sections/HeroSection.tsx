import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/public/bg image.png"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-500 mb-4 animate-fade-in-up animate-bounce">
          Nepathon Vol. 1: Code, Create, Compete.
        </h1>
        <p className="text-lg md:text-xl text-yellow-300 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 animate-pulse">
          Join the ultimate 48-hour coding journey where young innovators transform ideas into reality.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-400 animate-slide-in">
          <Button
            size="lg"
            className="bg-yellow-500 text-black hover:bg-yellow-400 px-10 py-6 text-lg font-bold shadow-lg rounded-full transition-transform transform hover:scale-105 animate-pulse"
          >
            Register Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToNext}
            className="border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-900 hover:border-yellow-400 px-10 py-6 text-lg font-bold rounded-full transition-all animate-pulse"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;