import { useState, useEffect } from "react";
import logoImg from "../assets/images/logo.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "features" },
        { name: "Plans", id: "pricing" },
        { name: "Trainers", id: "trainers" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                ? "bg-black/50 backdrop-blur-lg border-b border-white/10 shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

                {/* LOGO */}
                <img
                    src={logoImg}
                    alt="V2 Fitness"
                    className="h-6 md:h-8 object-contain"
                />

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-10 text-sm font-medium">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={`#${item.id}`}
                            className="relative group text-white/80 hover:text-[#D4AF37] transition-all duration-300"
                        >
                            {item.name}
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* DESKTOP CTA */}
                <div className="hidden md:block">
                    <a href="#contact">
                        <button className="px-6 py-2.5 rounded-xl font-semibold text-black bg-[#D4AF37] hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300">
                            Join Now
                        </button>
                    </a>
                </div>

                {/* MOBILE BUTTON */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-black/90 backdrop-blur-lg border-t border-white/10 px-6 py-6 space-y-5">

                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={`#${item.id}`}
                            onClick={() => setMenuOpen(false)}
                            className="block text-white/80 hover:text-[#D4AF37] text-lg transition"
                        >
                            {item.name}
                        </a>
                    ))}

                    {/* CTA */}
                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        <button className="w-full mt-4 px-6 py-3 rounded-xl font-semibold text-black bg-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300">
                            Join Now
                        </button>
                    </a>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;