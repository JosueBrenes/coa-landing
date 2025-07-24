import { Button } from "@/components/ui/button";

const GameModeSection = () => {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Three Factions Header */}
        <div className="text-center mb-16">
          <div className="bg-secondary border border-gaming-border p-4 inline-block mb-8">
            <h2 className="text-2xl md:text-3xl font-orbitron font-black text-primary tracking-wider">
              THREE FACTIONS, ONE UNCERTAIN FATE
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Game Video Area */}
          <div className="relative">
            <div className="aspect-video bg-secondary border-2 border-gaming-border relative overflow-hidden">
              {/* Embedded Video */}
              <video
                className="w-full h-full object-cover"
                src="/videos/COA.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Chaos Mercenaries */}
            <div>
              <h3 className="text-xl font-orbitron font-bold text-primary mb-4">
                CHAOS MERCENARIES
              </h3>
              <h4 className="text-lg font-orbitron font-bold text-foreground mb-4">
                FULL CONTROL OF THE BLACK MARKET
              </h4>
              <p className="text-muted-foreground font-mono leading-relaxed mb-6">
                Low prices, unstable items, and exclusive access to underground
                markets. Chaos Mercenaries dominate special zones where only
                they can trade. High risk, but the rewards are tempting.
              </p>
            </div>

            {/* Supreme Law */}
            <div>
              <h3 className="text-xl font-orbitron font-bold text-accent mb-4">
                SUPREME LAW
              </h3>
              <h4 className="text-lg font-orbitron font-bold text-foreground mb-4">
                SECURE TRADE AND TERRITORIAL CONTROL
              </h4>
              <p className="text-muted-foreground font-mono leading-relaxed mb-6">
                High prices, but total guarantees. Supreme Law offers stability
                and protection—but at the cost of freedom. Their territories are
                safe, but their rules are unyielding.
              </p>
            </div>

            {/* Rebel Technomancers */}
            <div>
              <h3 className="text-xl font-orbitron font-bold text-primary mb-4">
                REBEL TECHNOMANCERS
              </h3>
              <h4 className="text-lg font-orbitron font-bold text-foreground mb-4">
                EXPERIMENTAL WEAPONS AND ARCANE TECHNOLOGY
              </h4>
              <p className="text-muted-foreground font-mono leading-relaxed">
                Rare weapons that can change the game—or fail spectacularly.
                Technomancers fuse magic and technology, crafting unique gear
                with unpredictable yet devastating powers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameModeSection;
