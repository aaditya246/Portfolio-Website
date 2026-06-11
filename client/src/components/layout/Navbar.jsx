import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { personalInfo } from "../../data/personalInfo";
import ThemeToggle from "../ui/ThemeToggle";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavClick = (href) => {
        setIsMobileOpen(false);

        const el = document.querySelector(href);

        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-emerald-200 dark:border-border"
                    : "bg-transparent"
                }`}
        >
            <nav className="container-content flex items-center justify-between px-6 sm:px-10 lg:px-20 py-4">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />

                    <a
                        href="#hero"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("#hero");
                        }}
                        className="font-display text-xl font-bold text-slate-900 dark:text-white tracking-tight"
                    >
                        {personalInfo.name}
                    </a>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                className="font-body text-sm text-slate-800 dark:text-white hover:text-emerald-500 transition-colors duration-200 relative group"
                            >
                                {link.label}

                                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("#contact");
                        }}
                        className="
text-sm py-2.5 px-5
rounded-xl
border border-emerald-500
text-emerald-500
hover:bg-emerald-500
hover:text-white
hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]
transition-all duration-300
"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileOpen((prev) => !prev)}
                    className="md:hidden text-slate-900 dark:text-white text-2xl p-2"
                    aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileOpen}
                >
                    {isMobileOpen ? <HiX /> : <HiMenu />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-white dark:bg-slate-900 backdrop-blur-xl border-b border-emerald-200 dark:border-border"
                    >
                        <ul className="flex flex-col px-6 py-4 gap-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(link.href);
                                        }}
                                        className="block py-3 font-body text-base text-slate-800 dark:text-white hover:text-emerald-500 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}

                            <li className="pt-4">
                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick("#contact");
                                    }}
                                    className="btn-primary w-full text-center block"
                                >
                                    Let's Talk
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
