import heroImage from "@/assets/background.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 space-y-4">
        <p className="text-primary font-orbitron text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug">
          "WILL YOU BE A LEGEND OR JUST <br />A NAME BURIED IN THE DUST?"
        </p>
        <p className="text-muted-foreground font-mono text-base sm:text-lg max-w-2xl">
          Everything you do will be permanently recorded. In Arcanis, you’re not
          just an avatar—you are living history.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-primary neon-glow hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-accent hidden lg:block" />
      <div className="absolute top-1/2 left-10 w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent hidden lg:block" />
      <div className="absolute top-1/2 right-10 w-px h-16 bg-gradient-to-b from-transparent via-accent to-transparent hidden lg:block" />
    </section>
  );
};

export default HeroSection;
