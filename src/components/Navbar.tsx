import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { HiAcademicCap } from "react-icons/hi2";
import { navLinks, tutor } from "../data/content";

/** Sticky, glassmorphic navigation bar with a responsive hamburger menu. */
function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>("home");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Highlight the nav link for the section currently in view (scroll spy).
    useEffect(() => {
        const sections = navLinks
            .map((link) => document.getElementById(link.href.slice(1)))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible) setActiveId(visible.target.id);
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    // Lock body scroll while the mobile menu is open.
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2.5" : "py-4"
                }`}
        >
            <nav
                className={`mx-3 flex max-w-6xl items-center justify-between gap-3 rounded-2xl px-4 py-3 transition-all duration-300 sm:mx-6 sm:px-5 lg:mx-auto ${scrolled ? "glass-strong shadow-lg" : "glass"
                    }`}
                aria-label="Primary"
            >
                {/* Brand */}
                <a
                    href="#home"
                    className="focus-ring group flex flex-none items-center gap-2.5 rounded-lg"
                >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-400 text-white shadow-lg shadow-accent-500/30">
                        <HiAcademicCap className="h-5 w-5" />
                    </span>
                    <span className="font-display text-lg font-bold tracking-tight whitespace-nowrap text-ink-900">
                        {tutor.name.split(" ")[0]}
                        <span className="text-gradient"> Sir</span>
                    </span>
                </a>

                {/* Desktop links */}
                <ul className="hidden items-center gap-0.5 lg:flex">
                    {navLinks.map((link) => {
                        const isActive = activeId === link.href.slice(1);
                        return (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`focus-ring relative rounded-lg px-2.5 py-2 text-sm font-medium transition-colors ${isActive
                                        ? "text-accent-600"
                                        : "text-ink-200 hover:text-accent-600"
                                        }`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-active"
                                            className="absolute inset-0 -z-10 rounded-lg bg-accent-500/12"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop CTA */}
                <a
                    href="#contact"
                    className="focus-ring hidden flex-none rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 px-4 py-2.5 text-sm font-bold whitespace-nowrap text-white shadow-lg shadow-accent-500/30 transition-transform hover:scale-[1.03] lg:inline-block"
                >
                    Book a Free Demo
                </a>

                {/* Mobile toggle */}
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="focus-ring glass flex h-10 w-10 flex-none items-center justify-center rounded-xl text-ink-900 lg:hidden"
                >
                    {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="glass-strong mx-3 mt-2 overflow-hidden rounded-2xl p-2 sm:mx-6 lg:hidden"
                    >
                        <ul className="flex flex-col">
                            {navLinks.map((link) => {
                                const isActive = activeId === link.href.slice(1);
                                return (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            aria-current={isActive ? "page" : undefined}
                                            className={`focus-ring block rounded-xl px-4 py-3 text-base font-medium transition-colors ${isActive
                                                ? "bg-accent-500/12 text-accent-600"
                                                : "text-ink-200 hover:bg-brand-700/5 hover:text-accent-600"
                                                }`}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                );
                            })}
                            <li className="p-2">
                                <a
                                    href="#contact"
                                    onClick={() => setOpen(false)}
                                    className="focus-ring block rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 px-4 py-3 text-center text-base font-bold text-white"
                                >
                                    Book a Free Demo
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default Navbar;
