import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { navLinks, tutor } from "../data/content";

const socials = [
    { icon: FaWhatsapp, href: `https://wa.me/${tutor.whatsapp}`, label: "WhatsApp" },
    { icon: FiMail, href: `mailto:${tutor.email}`, label: "Email" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaFacebookF, href: "#", label: "Facebook" },
];

/** Site footer with brand, quick links and socials. */
function Footer() {
    return (
        <footer className="relative px-5 pt-10 pb-8 sm:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="glass-strong rounded-3xl p-8 sm:p-10">
                    <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
                        {/* Brand */}
                        <div>
                            <a href="#home" className="focus-ring inline-flex items-center gap-2.5 rounded-lg">
                                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                                    <HiAcademicCap className="h-5 w-5" />
                                </span>
                                <span className="font-display text-lg font-bold text-white">
                                    {tutor.name}
                                </span>
                            </a>
                            <p className="mt-4 max-w-xs font-display text-base font-semibold text-gradient">
                                Better Concepts. Better Grades. Brighter Future.
                            </p>
                            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-400">
                                {tutor.title} — helping students learn today and
                                lead tomorrow.
                            </p>
                        </div>

                        {/* Quick links */}
                        <nav aria-label="Footer">
                            <h3 className="font-display text-sm font-semibold tracking-wide text-white uppercase">
                                Explore
                            </h3>
                            <ul className="mt-4 space-y-2.5">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="focus-ring rounded text-sm text-ink-400 transition-colors hover:text-white"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Connect */}
                        <div>
                            <h3 className="font-display text-sm font-semibold tracking-wide text-white uppercase">
                                Connect
                            </h3>
                            <div className="mt-4 flex gap-3">
                                {socials.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        aria-label={s.label}
                                        className="focus-ring glass flex h-10 w-10 items-center justify-center rounded-xl text-ink-200 transition-colors hover:text-white"
                                    >
                                        <s.icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
                        <p className="text-sm text-ink-400">
                            © {new Date().getFullYear()} {tutor.name}. All rights reserved.
                        </p>
                        <p className="text-sm text-ink-600">
                            Built with React, Tailwind &amp; Framer Motion.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
