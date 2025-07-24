import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/arcanis-hero.jpg";

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
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle */}
          <div className="mb-6">
            <span className="text-primary font-orbitron text-sm tracking-[0.3em] uppercase">
              YOUR STORY IS THE HORIZON
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl mt-[10rem] md:text-6xl lg:text-7xl font-orbitron font-black mb-6 leading-tight">
            <span className="text-foreground">CITIZEN OF </span>
            <span className="text-primary glitch-text">ARCANIS</span>
          </h1>

          {/* Watch Trailer Button */}
          <div className="mb-12">
            <Button variant="cyberpunk" size="lg" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:text-primary-foreground transition-colors" />
              WATCH TRAILER
            </Button>
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-orbitron font-bold mb-4 text-foreground">
              A PERSISTENT, LIVING WORLD SHAPED BY ITS PLAYERS
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-mono max-w-3xl mx-auto leading-relaxed">
              Arcanis is a post-apocalyptic city where every action matters: a
              single player can spark wars, shift markets, or permanently change
              the balance of factions. No resets, no safe routes—every decision
              leaves permanent scars.
            </p>
          </div>
        </div>
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
