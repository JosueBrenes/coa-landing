import React from "react";

interface Feature {
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    title: "PERSISTENT WORLD",
    description:
      "Every action leaves permanent scars. No resets, no safe paths.",
    image: "/img/features/1.jpg",
  },
  {
    title: "LIVING ECONOMY",
    description:
      "Global markets and clandestine black markets controlled by factions.",
    image: "/img/features/2.png",
  },
  {
    title: "EMERGENT STORIES",
    description: "Global events where players can become real-world leaders.",
    image: "/img/features/3.jpg",
  },
  {
    title: "SECURED LEGACY",
    description: "Your name and actions remain in the world forever.",
    image: "/img/features/4.jpg",
  },
  {
    title: "COMMUNITY ARCADES",
    description:
      "Mini-games created by the community that expand the universe.",
    image: "/img/features/5.jpg",
  },
  {
    title: "EPIC BETRAYALS",
    description: "Switch factions freely and become a public enemy.",
    image: "/img/features/6.jpg",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-black text-foreground mb-4 tracking-tight">
            A METAVERSE OF EMERGENT STORIES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="space-y-16 md:space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-auto max-w-xs mx-auto flex justify-center items-center overflow-hidden rounded-xl border border-cyan-600 shadow-lg shadow-cyan-500/20">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="max-w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-8 lg:p-10 bg-card rounded-xl shadow-md border border-border">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-cyan-400 mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-mono leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
