import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-[--color-primary] text-white py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-main">
          Empowering Developers to Build and Scale
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted mb-8 max-w-3xl mx-auto">
          Join DevHunt today and unlock your potential to build world-class
          applications, scale your projects, and elevate your career.
        </p>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="px-8 py-4 bg-accent text-main font-semibold text-lg rounded-lg hover:bg-primary transition duration-300 ease-in-out"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
