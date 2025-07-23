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
            SOME GAMES HAVE ENDINGS. OURS HAS EPOCHS.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-[#d9d9d9] text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Citizen of Arcanis: The first game where "Game Over" is just another player choice.
          </motion.p>

          <motion.div variants={fadeInUp} className="pt-4">
            <Button className="bg-[#9747ff] hover:bg-[#f0a0f6] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold">
              JOIN THE CONSENSUS
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Web3 Native Campaign Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={factionsInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#f0a0f6] to-[#9747ff] bg-clip-text text-transparent">
              BE THE BLOCKCHAIN YOU WANT TO SEE IN THE WORLD
            </span>
          </h2>
          <p className="text-[#d9d9d9] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Citizen of Arcanis transforma a los jugadores de usuarios a arquitectos. No juegas en nuestra caja de arena: ¡estás programando la arena misma! Cada jugador es una actualización de protocolo. Cada batalla, un mecanismo de consenso. Cada ítem, un smart contract esperando evolucionar.
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={factionsInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <div className="col-span-1 flex flex-col items-center bg-gradient-to-br from-[#100425]/90 to-[#1a0a3a]/90 rounded-3xl p-8 border border-[#f0a0f6]/30">
            <h3 className="text-2xl font-bold mb-2">The Compiler Class</h3>
            <p className="text-[#d9d9d9] text-sm mb-4">Nueva clase de personaje que literalmente escribe contratos Cairo en combate. Hechizos son funciones, maná es gas, bugs son features. Jefes tipo "Debug the Dragon" requieren optimización de código para vencerlos.</p>
          </div>
          <div className="col-span-1 flex flex-col items-center bg-gradient-to-br from-[#100425]/90 to-[#1a0a3a]/90 rounded-3xl p-8 border border-[#f0a0f6]/30">
            <h3 className="text-2xl font-bold mb-2">The Merge IRL</h3>
            <p className="text-[#d9d9d9] text-sm mb-4">Instalación física donde las acciones de 100 jugadores se fusionan en un contrato Cairo gigante. Billboard en tiempo real mostrando decisiones de gobernanza on-chain. "Proof of Play" valida transacciones mediante gameplay.</p>
          </div>
          <div className="col-span-1 flex flex-col items-center bg-gradient-to-br from-[#100425]/90 to-[#1a0a3a]/90 rounded-3xl p-8 border border-[#f0a0f6]/30">
            <h3 className="text-2xl font-bold mb-2">Fork Yourself</h3>
            <p className="text-[#d9d9d9] text-sm mb-4">Eventos semanales donde la comunidad puede forkar regiones enteras del juego. Universos paralelos con reglas distintas. "Canon Wars": realidades compiten por adopción en mainnet.</p>
          </div>
          <div className="col-span-1 flex flex-col items-center bg-gradient-to-br from-[#100425]/90 to-[#1a0a3a]/90 rounded-3xl p-8 border border-[#f0a0f6]/30">
            <h3 className="text-2xl font-bold mb-2">The Nakamoto Chronicles</h3>
            <p className="text-[#d9d9d9] text-sm mb-4">Serie documental de jugadores que alteraron mecánicas para siempre. "Rompí la economía del juego y así lo logré". Salón de la fama de smart contracts elegantes.</p>
          </div>
          <div className="col-span-1 flex flex-col items-center bg-gradient-to-br from-[#100425]/90 to-[#1a0a3a]/90 rounded-3xl p-8 border border-[#f0a0f6]/30">
            <h3 className="text-2xl font-bold mb-2">Modular Mythology</h3>
            <p className="text-[#d9d9d9] text-sm mb-4">Cada arma/armadura es un smart contract composable. Los jugadores pueden forkar, mergear y desplegar ítems híbridos. Marketplace tipo Github para gear.</p>
          </div>
        </motion.div>
      </section>

      {/* Mainstream Gamer Campaign Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={gameplayInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#f0a0f6] to-[#9747ff] bg-clip-text text-transparent">
              THE LAST GAME YOU'LL EVER LOSE
            </span>
          </h2>
          <p className="text-[#d9d9d9] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Citizen of Arcanis no es solo permanente: es póstumo. El primer juego con una capa de persistencia real, donde tu personaje sobrevive a ti, a los devs y quizá a la civilización. Bienvenido al juego que ni la muerte puede borrar.
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={gameplayInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <div className="col-span-1 flex flex-col items-center bg-gradient-to-br from-[#100425]/90 to-[#1a0a3a]/90 rounded-3xl p-8 border border-[#f0a0f6]/30">
            <h3 className="text-2xl font-bold mb-2">Digital DNA System</h3>
            <p className="text-[#d9d9d9] text-sm mb-4">Tus personajes tienen código genético que pasa a nuevos jugadores. Evolución multigeneracional. "La espada de mi abuelo" es ahora una mecánica real.</p>
          </div>
          <div className="col-span-1 flex flex-col items-center bg-gradient-to-br from-[#100425]/90 to-[#1a0a3a]/90 rounded-3xl p-8 border border-[#f0a0f6]/30">
            <h3 className="text-2xl font-bold mb-2">The Shutdown Shelter</h3>
            <p className="text-[#d9d9d9] text-sm mb-4">Experiencia pop-up en convenciones: "refugio de jugadores" para migrantes de MMOs caídos. Importa el nombre y stats de tu personaje muerto.</p>
          </div>
          <div className="col-span-1 flex flex-col items-center bg-gradient-to-br from-[#100425]/90 to-[#1a0a3a]/90 rounded-3xl p-8 border border-[#f0a0f6]/30">
            <h3 className="text-2xl font-bold mb-2">Eternal Speedrun</h3>
            <p className="text-[#d9d9d9] text-sm mb-4">Categoría: "Haz historia en 24 horas". Monumentos permanentes para primeros logros. NFTs cápsula del tiempo que se desbloquean en 2074.</p>
          </div>
          <div className="col-span-1 flex flex-col items-center bg-gradient-to-br from-[#100425]/90 to-[#1a0a3a]/90 rounded-3xl p-8 border border-[#f0a0f6]/30">
            <h3 className="text-2xl font-bold mb-2">The Testament Update</h3>
            <p className="text-[#d9d9d9] text-sm mb-4">Testamentos y herencias in-game. "Dynasty Mode" para juego multigeneracional. Mentores fantasma entrenados por IA de jugadores fallecidos.</p>
          </div>
          <div className="col-span-1 flex flex-col items-center bg-gradient-to-br from-[#100425]/90 to-[#1a0a3a]/90 rounded-3xl p-8 border border-[#f0a0f6]/30">
            <h3 className="text-2xl font-bold mb-2">Stories That Can't Die</h3>
            <p className="text-[#d9d9d9] text-sm mb-4">Modo arqueología digital: explora civilizaciones de jugadores de hace 10 años. Serie documental: "Los Inmortales de Arcanis".</p>
          </div>
        </motion.div>
      </section>

      {/* Manifesto Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={demoInView ? "visible" : "hidden"}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#f0a0f6] to-[#9747ff] bg-clip-text text-transparent">
              The Citizen's Creed
            </span>
          </h2>
          <ul className="text-xl sm:text-2xl font-mono text-[#f0a0f6] space-y-2">
            <li>In Code We Trust</li>
            <li>In Cairo We Build</li>
            <li>In Consensus We Thrive</li>
            <li>In Perpetuity We Play</li>
          </ul>
          <p className="text-[#d9d9d9] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mt-6">
            Citizen of Arcanis: The first game where "Game Over" is just another player choice.
          </p>
        </motion.div>
      </section>

      {/* Results & Awards Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={waitlistInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#f0a0f6] to-[#9747ff] bg-clip-text text-transparent">
              Results & Awards
            </span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#f0a0f6]">Resultados</h3>
            <ul className="text-[#d9d9d9] text-base space-y-2 text-left">
              <li>10,000% increase in Cairo learning platform enrollment</li>
              <li>First game where "nerf" requires a governance vote</li>
              <li>$420M in player-created economic systems</li>
              <li>StarkNet transaction volume up 6,900%</li>
              <li>Coined new term: "Proof of Fun" consensus</li>
              <li>5M players migrated from sunset MMOs</li>
              <li>First game featured in the Smithsonian's permanent collection</li>
              <li>97% player retention (3% tried to quit but couldn't figure out how)</li>
              <li>TIME Magazine: "The Game That Solved Gaming Mortality"</li>
              <li>Speedrun category "Any% Immortality" trending on Twitch</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#f0a0f6]">Premios</h3>
            <ul className="text-[#d9d9d9] text-base space-y-2 text-left">
              <li>Gaming Innovation Grand Prix</li>
              <li>Creative Technology Lion</li>
              <li>Digital Craft: Technical Achievement</li>
              <li>Entertainment Lion: Gaming</li>
              <li>Direct Lion: Community Building</li>
            </ul>
          </div>
        </div>
        <p className="text-[#d9d9d9] text-base text-center mt-10 max-w-2xl mx-auto">
          Porque cuando construyes en StarkNet, no solo haces un juego: haces historia inmutable.
        </p>
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
