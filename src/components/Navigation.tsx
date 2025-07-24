import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  FaDiscord,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialIcons = [
    { name: "Discord", icon: <FaDiscord /> },
    { name: "TikTok", icon: <FaTiktok /> },
    { name: "X", icon: <FaXTwitter /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-gaming-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <div className="flex items-center space-x-3 p-4">
            <img
              src="/img/c51f0770-7d44-4498-9bba-13a3ddca0721.png"
              alt="Citizen of Arcanis Logo"
              className="h-[12rem] w-auto"
            />
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2">
              {socialIcons.map(({ name, icon }) => (
                <div
                  key={name}
                  className="w-10 h-10 bg-secondary border border-gaming-border flex items-center justify-center hover:bg-gaming-border transition-colors cursor-pointer text-xl text-muted-foreground"
                  aria-label={name}
                >
                  {icon}
                </div>
              ))}
            </div>
            <Button variant="gaming" size="sm" className="ml-4">
              JOIN NOW ▼
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gaming-border bg-background/95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="pt-4">
                <Button variant="gaming" size="sm" className="w-full">
                  JOIN NOW
                </Button>
              </div>
              <div className="flex justify-center gap-2 pt-4">
                {socialIcons.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="w-10 h-10 bg-secondary border border-gaming-border flex items-center justify-center hover:bg-gaming-border transition-colors cursor-pointer text-xl text-muted-foreground"
                    aria-label={name}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
