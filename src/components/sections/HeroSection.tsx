import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src="/public/bg image.png"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-7xl md:text-8xl font-bold text-yellow-500 mb-4">
          Nepathya Hackathon Vol 1
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Compete at the National Level and Win Exciting Prizes Worth NPR 2 Lakhs.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-4 text-lg font-semibold shadow-lg rounded-full"
          >
            Register Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToNext}
            className="border text-gray-300 px-8 py-4 text-lg font-semibold rounded-full hover:bg-transparent hover:text-gray-300 focus:ring-0 focus:outline-none"
          >
            Learn More
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;