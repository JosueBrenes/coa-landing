"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Download, Menu } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Component() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  // Refs for scroll animations
  const heroRef = useRef(null)
  const factionsRef = useRef(null)
  const gameplayRef = useRef(null)
  const demoRef = useRef(null)
  const waitlistRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const factionsInView = useInView(factionsRef, { once: true, margin: "-100px" })
  const gameplayInView = useInView(gameplayRef, { once: true, margin: "-100px" })
  const demoInView = useInView(demoRef, { once: true, margin: "-100px" })
  const waitlistInView = useInView(waitlistRef, { once: true, margin: "-100px" })

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
        className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 min-h-[80vh] sm:min-h-screen flex items-center"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 w-full"
        >
          <motion.div variants={staggerItem} className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <motion.h1
              variants={fadeInLeft}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              Rewrite your destiny in{" "}
              <span className="bg-gradient-to-r from-[#f0a0f6] to-[#9747ff] bg-clip-text text-transparent">
                Arcanis
              </span>
            </motion.h1>
            <motion.p variants={fadeInLeft} className="text-[#d9d9d9] text-base sm:text-lg max-w-md mx-auto lg:mx-0">
              In a world fragmented by technology, only one path remains: rise, fight, and conquer.
            </motion.p>
            <motion.div variants={fadeInLeft}>
              <Button className="bg-[#9747ff] hover:bg-[#f0a0f6] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base">
                Start your story
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInRight} className="relative order-first lg:order-last">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f0a0f6] to-[#9747ff] rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-30"></div>
            <img
              src="/placeholder.svg?height=600&width=500"
              alt="Arcanis warrior"
              className="relative z-10 w-full h-auto rounded-2xl sm:rounded-3xl"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Factions Section */}
      <section ref={factionsRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={factionsInView ? "visible" : "hidden"}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Factions</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={factionsInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {[
            {
              name: "Chaos Mercenaries",
              description:
                "Lawless warriors who sell their services to the highest bidder. Masters of chaos, they operate in the shadows where morality is just a memory.",
              image: "chaos mercenaries cyberpunk",
            },
            {
              name: "Supreme Law",
              description:
                "Guardians of order and protectors of the last social structure. Their justice is relentless and their control, absolute.",
              image: "supreme law enforcement cyberpunk",
            },
            {
              name: "Rebel Technomancers",
              description:
                "Visionaries who merge technology and mysticism. They seek to transcend the limits of flesh toward a collective digital consciousness.",
              image: "technomancer rebels cyberpunk",
            },
          ].map((faction, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-[#100425] to-[#9747ff]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#9747ff]/30"
            >
              <img
                src={`/placeholder.svg?height=200&width=200&query=${faction.image}`}
                alt={faction.name}
                className="w-full h-32 sm:h-48 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{faction.name}</h3>
              <p className="text-[#d9d9d9] text-sm sm:text-base leading-relaxed">{faction.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Gameplay Section */}
      <section ref={gameplayRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={gameplayInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <motion.div variants={fadeInLeft} className="grid grid-cols-2 gap-3 sm:gap-4 order-last lg:order-first">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/placeholder.svg?height=200&width=200"
              alt="Narrative Decisions"
              className="rounded-xl sm:rounded-2xl"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/placeholder.svg?height=200&width=200"
              alt="Exploration"
              className="rounded-xl sm:rounded-2xl"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/placeholder.svg?height=200&width=200"
              alt="Resource Collection"
              className="rounded-xl sm:rounded-2xl"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/placeholder.svg?height=200&width=200"
              alt="Combat"
              className="rounded-xl sm:rounded-2xl"
            />
          </motion.div>

          <motion.div variants={fadeInRight} className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Gameplay</h2>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#f0a0f6]">Narrative Decisions</h3>
                <p className="text-[#d9d9d9] text-sm sm:text-base">
                  Every choice shapes your destiny and alters the balance of power in Arcanis.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#f0a0f6]">Exploration</h3>
                <p className="text-[#d9d9d9] text-sm sm:text-base">
                  Discover hidden secrets in the most dangerous corners of the dystopian city.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#f0a0f6]">Resource Collection</h3>
                <p className="text-[#d9d9d9] text-sm sm:text-base">
                  Gather resources and upgrade your abilities to survive in this hostile world.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#f0a0f6]">Combat</h3>
                <p className="text-[#d9d9d9] text-sm sm:text-base">
                  Face your enemies with a tactical and immersive combat system.
                </p>
              </div>
            </div>

            <Button className="bg-[#9747ff] hover:bg-[#f0a0f6] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Video Demo Section */}
      <section ref={demoRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={demoInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <motion.div variants={fadeInLeft} className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Video{" "}
              <span className="bg-gradient-to-r from-[#f0a0f6] to-[#9747ff] bg-clip-text text-transparent">Demo</span>
            </h2>
            <p className="text-[#d9d9d9] text-sm sm:text-base lg:text-lg">
              Experience the immersive world of Arcanis through our exclusive gameplay footage. Witness the power of
              choice, the intensity of combat, and the beauty of a world reborn.
            </p>
            <Button className="bg-[#9747ff] hover:bg-[#f0a0f6] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full">
              Watch Trailer
            </Button>
          </motion.div>
          <motion.div variants={fadeInRight} className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-[#9747ff]/20 to-[#f0a0f6]/20 rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-[#9747ff]/30"
            >
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Game Demo Video"
                className="rounded-lg sm:rounded-xl w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#9747ff] hover:bg-[#f0a0f6] transition-colors rounded-full p-3 sm:p-4">
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Waitlist Section */}
      <section ref={waitlistRef} className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={waitlistInView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-[#9747ff]/20 to-[#f0a0f6]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#9747ff]/50"
        >
          <div className="text-center space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold">Join the Waitlist</h3>
            <p className="text-[#d9d9d9] text-sm sm:text-base">
              Be the first to experience the world of Arcanis when it launches
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-4">
              <Input
                placeholder="Name"
                className="bg-transparent border-[#9747ff]/50 text-white placeholder:text-[#b0b0b0] flex-1"
              />
              <Input
                placeholder="Email Address"
                type="email"
                className="bg-transparent border-[#9747ff]/50 text-white placeholder:text-[#b0b0b0] flex-1"
              />
            </div>
            <Button className="bg-[#9747ff] hover:bg-[#f0a0f6] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full w-full sm:w-auto">
              Join Waitlist
            </Button>
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
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Citizen of Arcanis</h4>
            <p className="text-[#d9d9d9] text-sm">
              A dystopian world where technology and chaos converge to create a unique experience.
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
                <a key={link} href="#" className="block hover:text-[#f0a0f6] transition-colors">
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
                <a key={link} href="#" className="block hover:text-[#f0a0f6] transition-colors">
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
  )
}
