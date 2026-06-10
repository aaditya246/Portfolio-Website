import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { personalInfo } from "../../data/personalInfo";

const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    { label: "GitHub", icon: FiGithub, href: personalInfo.socials.github },
    { label: "LinkedIn", icon: FiLinkedin, href: personalInfo.socials.linkedin },
    { label: "LeetCode", icon: SiLeetcode, href: personalInfo.socials.leetcode },
    { label: "Codeforces", icon: SiCodeforces, href: personalInfo.socials.codeforces },
    { label: "Email", icon: FiMail, href: `mailto:${personalInfo.contact.email}` },
];

const Footer = () => {
    const handleNavClick = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const currentYear = new Date().getFullYear();

    return (<footer className="border-t border-border"> <div className="container-content px-6 sm:px-10 lg:px-20 py-12 flex flex-col gap-10"> <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

        {/* Logo */}
        <div className="flex flex-col gap-3 max-w-sm">
            <a
                href="#hero"
                onClick={(e) => handleNavClick(e, "#hero")}
                className="font-display text-xl font-bold text-ink tracking-tight"
            >
                {personalInfo.name}
                <span className="text-accent"></span>
            </a>

            <p className="text-ink-muted text-sm leading-relaxed">
                {personalInfo.tagline}
            </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-ink-muted uppercase tracking-wider">
                Quick Links
            </span>

            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                {quickLinks.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-ink-faint hover:text-accent text-sm transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-ink-muted uppercase tracking-wider">
                Connect
            </span>

            <div className="flex items-center gap-3">
                {socialLinks.map(({ label, icon: Icon, href }) => (
                    <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                            href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                        }
                        aria-label={label}
                        className="w-10 h-10 flex items-center justify-center rounded-lg border border-border bg-panel/60 text-ink-muted hover:text-accent hover:border-border-hover transition-all duration-300"
                    >
                        <Icon />
                    </a>
                ))}
            </div>
        </div>

    </div>

        {/* Bottom Bar */}
        <div className="pt-2 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono text-xs text-ink-faint text-center sm:text-left">
                © {currentYear} {personalInfo.name}. All rights reserved.
            </p>

            <p className="font-mono text-xs text-ink-faint">
                {/* Built with React, Tailwind CSS & Framer Motion */}
            </p>
        </div>
    </div>
    </footer>

    );
};

export default Footer;
