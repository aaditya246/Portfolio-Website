import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
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

    return (
        <footer className="border-t border-emerald-200 dark:border-border">
            <div className="container-content px-6 sm:px-10 lg:px-20 py-12 flex flex-col gap-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

                    {/* Logo & Tagline */}
                    <div className="flex flex-col gap-3 max-w-sm">
                        <a
                            href="#hero"
                            onClick={(e) => handleNavClick(e, "#hero")}
                            className="font-display text-xl font-bold text-slate-900 dark:text-white tracking-tight"
                        >
                            {personalInfo.name}
                        </a>

                        <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">
                            {personalInfo.tagline}
                        </p>

                        {/* Resume Download */}
                        <a
                            href="/resume.pdf"
                            download="Aaditya_Resume.pdf"
                            className="mt-3 inline-flex items-center gap-2 w-fit px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300"
                        >
                            <FiDownload />
                            Download Resume
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-3">
                        <span className="font-mono text-xs text-slate-600 dark:text-gray-400 uppercase tracking-wider">
                            Quick Links
                        </span>

                        <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="relative group text-slate-700 dark:text-gray-300 hover:text-emerald-400 text-sm transition-all duration-300"
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col gap-3">
                        <span className="font-mono text-xs text-slate-600 dark:text-gray-400 uppercase tracking-wider">
                            Connect
                        </span>

                        <div className="flex items-center gap-3">
                            {socialLinks.map(({ label, icon: Icon, href }) => (
                                <a

                                    key={label}
                                    href={href}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    aria-label={label}
                                    className="
  w-10 h-10
  flex items-center justify-center
  rounded-lg
  border border-emerald-200 dark:border-border
  bg-white dark:bg-panel
  text-slate-700 dark:text-gray-300
  transition-all duration-300
  hover:text-emerald-400
  hover:border-emerald-500
  hover:ring-2
  hover:ring-emerald-400
  hover:ring-offset-2
  hover:ring-offset-white
  dark:hover:ring-offset-slate-900
  hover:shadow-[0_0_30px_rgba(16,185,129,0.8)]
  hover:-translate-y-1
"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-emerald-200 dark:border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-mono text-xs text-slate-600 dark:text-gray-400 text-center sm:text-left">
                        © {currentYear} {personalInfo.name}. All rights reserved.
                    </p>

                    <p className="font-mono text-xs text-slate-600 dark:text-gray-400">
                        Built with React, Tailwind CSS & Framer Motion
                    </p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;

