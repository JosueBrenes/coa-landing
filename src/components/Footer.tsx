const Footer = () => {
  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-white font-mono text-xs text-center md:text-left space-y-4 md:space-y-0">
        {/* Left: Citizen Logo */}
        <img
          src="/img/c51f0770-7d44-4498-9bba-13a3ddca0721.png"
          alt="Citizen of Arcanis Logo"
          className="h-[20rem] w-auto"
        />

        {/* Center: Open Source Note */}
        <p className="text-2xl tracking-widest text-muted-foreground">
          OPEN SOURCE SOFTWARE
        </p>

        {/* Right: License Text */}
        <p className="text-2xl text-muted-foreground leading-snug max-w-xs">
          ©2025 Citizen of Arcanis. Released under the MIT License.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
