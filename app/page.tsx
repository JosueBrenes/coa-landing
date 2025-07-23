"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Download,
  Menu,
  Zap,
  Map,
  Package,
  Sword,
  Shield,
  Skull,
  Cpu,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Component() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Refs for scroll animations
  const heroRef = useRef(null);
  const factionsRef = useRef(null);
  const gameplayRef = useRef(null);
  const demoRef = useRef(null);
  const waitlistRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const factionsInView = useInView(factionsRef, {
    once: true,
    margin: "-100px",
  });
  const gameplayInView = useInView(gameplayRef, {
    once: true,
    margin: "-100px",
  });
  const demoInView = useInView(demoRef, { once: true, margin: "-100px" });
  const waitlistInView = useInView(waitlistRef, {
    once: true,
    margin: "-100px",
  });

  const handleJoinWaitlist = async () => {
    if (!name || !email) {
      setMessage("Please provide your name and email");
      return;
    }
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (res.ok) {
        setMessage("Successfully joined the waitlist!");
        setName("");
        setEmail("");
      } else {
        setMessage("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error submitting form");
    }
  };

  const gameplayFeatures = [
    {
      icon: Zap,
      title: "Narrative Decisions",
      description:
        "Every choice shapes your destiny and alters the balance of power in Arcanis.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Map,
      title: "Exploration",
      description:
        "Discover hidden secrets in the most dangerous corners of the dystopian city.",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      icon: Package,
      title: "Resource Collection",
      description:
        "Gather resources and upgrade your abilities to survive in this hostile world.",
      gradient: "from-green-400 to-teal-500",
    },
    {
      icon: Sword,
      title: "Combat",
      description:
        "Face your enemies with a tactical and immersive combat system.",
      gradient: "from-red-400 to-pink-500",
    },
  ];

  const factions = [
    {
      name: "Chaos Mercenaries",
      description:
        "Lawless warriors who sell their services to the highest bidder. Masters of chaos, they operate in the shadows where morality is just a memory.",
      icon: Skull,
      gradient: "from-red-500 to-orange-600",
      bgGradient: "from-red-500/20 to-orange-600/20",
      borderColor: "border-red-500/30",
      hoverBorder: "hover:border-red-400/60",
      stats: [
        { label: "Aggression", value: 95 },
        { label: "Stealth", value: 85 },
        { label: "Loyalty", value: 30 },
      ],
    },
    {
      name: "Supreme Law",
      description:
        "Guardians of order and protectors of the last social structure. Their justice is relentless and their control, absolute.",
      icon: Shield,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-500/20 to-cyan-600/20",
      borderColor: "border-blue-500/30",
      hoverBorder: "hover:border-blue-400/60",
      stats: [
        { label: "Order", value: 98 },
        { label: "Defense", value: 90 },
        { label: "Justice", value: 85 },
      ],
    },
    {
      name: "Rebel Technomancers",
      description:
        "Visionaries who merge technology and mysticism. They seek to transcend the limits of flesh toward a collective digital consciousness.",
      icon: Cpu,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/20 to-pink-600/20",
      borderColor: "border-purple-500/30",
      hoverBorder: "hover:border-purple-400/60",
      stats: [
        { label: "Technology", value: 100 },
        { label: "Innovation", value: 95 },
        { label: "Mysticism", value: 88 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#100425] text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between p-4 sm:p-6 max-w-7xl mx-auto relative z-50"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl font-bold"
        >
          CITIZEN OF ARCANIS
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden lg:flex items-center space-x-8"
        >
          {["Home", "Factions", "Gameplay", "Join"].map((item, index) => (
            <motion.a
              key={item}
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="hover:text-[#f0a0f6] transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button variant="ghost" size="sm">
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden sm:block"
        >
          <Button className="bg-[#9747ff] hover:bg-[#f0a0f6] text-white px-4 sm:px-6 text-sm sm:text-base">
            Get Started
          </Button>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 min-h-[80vh] sm:min-h-screen flex items-center justify-center"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0a0f6] to-[#9747ff] rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-20"></div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="text-center space-y-6 sm:space-y-8 max-w-5xl mx-auto relative z-10"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
          >
            Rewrite your destiny in{" "}
            <span className="bg-gradient-to-r from-[#f0a0f6] to-[#9747ff] bg-clip-text text-transparent">
              Arcanis
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-[#d9d9d9] text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            In a world fragmented by technology, only one path remains: rise,
            fight, and conquer.
          </motion.p>

          <motion.div variants={fadeInUp} className="pt-4">
            <Button className="bg-[#9747ff] hover:bg-[#f0a0f6] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold">
              Start your story
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Factions Section */}
      <section
        ref={factionsRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={factionsInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#f0a0f6] to-[#9747ff] bg-clip-text text-transparent">
              Factions
            </span>
          </h2>
          <p className="text-[#d9d9d9] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Choose your allegiance and shape the future of Arcanis through the
            power of your faction
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={factionsInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {factions.map((faction, index) => {
            const IconComponent = faction.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative"
              >
                <div
                  className={`relative bg-gradient-to-br from-[#100425]/90 to-[#1a0a3a]/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border ${faction.borderColor} ${faction.hoverBorder} transition-all duration-300 overflow-hidden h-full`}
                >
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${faction.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full"></div>

                  {/* Icon with gradient background */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${faction.gradient} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <div className="relative z-10 space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold group-hover:text-white transition-colors duration-300">
                      {faction.name}
                    </h3>

                    <p className="text-[#d9d9d9] text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {faction.description}
                    </p>

                    {/* Stats bars */}
                    <div className="space-y-3 pt-4">
                      {faction.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="space-y-1">
                          <div className="flex justify-between text-xs sm:text-sm">
                            <span className="text-[#d9d9d9] group-hover:text-white transition-colors duration-300">
                              {stat.label}
                            </span>
                            <span className="font-semibold">{stat.value}%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full bg-gradient-to-r ${faction.gradient}`}
                              initial={{ width: 0 }}
                              animate={
                                factionsInView
                                  ? { width: `${stat.value}%` }
                                  : {}
                              }
                              transition={{
                                duration: 1,
                                delay: 0.5 + statIndex * 0.2,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Join faction button */}
                    <div className="pt-4">
                      <Button
                        className={`w-full bg-gradient-to-r ${faction.gradient} hover:shadow-lg hover:shadow-current/25 text-white border-0 rounded-xl transition-all duration-300 group-hover:scale-105`}
                      >
                        Join Faction
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Gameplay Section */}
      <section
        ref={gameplayRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={gameplayInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="relative z-10 py-8 sm:py-12">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#f0a0f6] to-[#9747ff] bg-clip-text text-transparent">
                  Gameplay
                </span>
              </h2>
              <p className="text-[#d9d9d9] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                Immerse yourself in a world where every decision matters and
                every action has consequences
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
            >
              {gameplayFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    className="group relative"
                  >
                    <div className="relative bg-gradient-to-br from-[#100425]/80 to-[#1a0a3a]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#9747ff]/30 hover:border-[#f0a0f6]/50 transition-all duration-300 overflow-hidden">
                      {/* Animated background gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      ></div>

                      {/* Icon with gradient background */}
                      <div
                        className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-[#f0a0f6] transition-colors duration-300">
                        {feature.title}
                      </h3>

                      <p className="text-[#d9d9d9] text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                        {feature.description}
                      </p>

                      {/* Decorative corner element */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#9747ff]/20 to-transparent rounded-bl-3xl"></div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Video Demo Section */}
      <section
        ref={demoRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={demoInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <motion.div variants={fadeInLeft} className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Video{" "}
              <span className="bg-gradient-to-r from-[#f0a0f6] to-[#9747ff] bg-clip-text text-transparent">
                Demo
              </span>
            </h2>
            <p className="text-[#d9d9d9] text-sm sm:text-base lg:text-lg">
              Watch real gameplay footage showcasing the cyberpunk world of
              Arcanis. Experience the tactical combat system, inventory
              management, and immersive urban environments that await you in
              this dystopian adventure.
            </p>
            <Button className="bg-[#9747ff] hover:bg-[#f0a0f6] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full">
              Play Video
            </Button>
          </motion.div>
          <motion.div variants={fadeInRight} className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-[#9747ff]/20 to-[#f0a0f6]/20 rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-[#9747ff]/30 overflow-hidden"
            >
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg sm:rounded-xl"
                  src="https://www.youtube.com/embed/mRH9Z97SwHY?si=QkK4qp9HwxYkMBaG&autoplay=1&vq=hd1080"
                  title="Citizen of Arcanis - Gameplay Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#9747ff]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl sm:rounded-2xl" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Waitlist Section */}
      <section
        ref={waitlistRef}
        className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={waitlistInView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-[#9747ff]/20 to-[#f0a0f6]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#9747ff]/50"
        >
          <div className="text-center space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Join the Waitlist
            </h3>
            <p className="text-[#d9d9d9] text-sm sm:text-base">
              Be the first to experience the world of Arcanis when it launches
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-4">
              <Input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent border-[#9747ff]/50 text-white placeholder:text-[#b0b0b0] flex-1"
              />
              <Input
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-[#9747ff]/50 text-white placeholder:text-[#b0b0b0] flex-1"
              />
            </div>
            <Button
              onClick={handleJoinWaitlist}
              className="bg-[#9747ff] hover:bg-[#f0a0f6] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full w-full sm:w-auto"
            >
              Join Waitlist
            </Button>
            {message && <p className="text-sm text-center mt-2">{message}</p>}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 border-t border-[#9747ff]/30"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1 sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Citizen of Arcanis
            </h4>
            <p className="text-[#d9d9d9] text-sm">
              A dystopian world where technology and chaos converge to create a
              unique experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5 className="font-semibold mb-3 sm:mb-4">Links</h5>
            <div className="space-y-2 text-sm text-[#d9d9d9]">
              {["Home", "Factions", "Story", "Gameplay", "Join"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block hover:text-[#f0a0f6] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h5 className="font-semibold mb-3 sm:mb-4">Support</h5>
            <div className="space-y-2 text-sm text-[#d9d9d9]">
              {["FAQ", "Contact", "Privacy", "Terms of Use"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block hover:text-[#f0a0f6] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h5 className="font-semibold mb-3 sm:mb-4">Download</h5>
            <div className="space-y-3">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start border-[#9747ff]/50 text-white hover:bg-[#9747ff]/20 bg-transparent text-xs sm:text-sm"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                App Store
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start border-[#9747ff]/50 text-white hover:bg-[#9747ff]/20 bg-transparent text-xs sm:text-sm"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Google Play
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-[#9747ff]/30 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-[#d9d9d9]"
        >
          <p>&copy; 2025 Citizen of Arcanis. All rights reserved.</p>
        </motion.div>
      </motion.footer>
    </div>
  );
}
