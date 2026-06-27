import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { FiArrowRight, FiAward } from "react-icons/fi";
import {
    FaLaptopCode,
    FaAtom,
    FaFlask,
    FaCalculator,
    FaGraduationCap,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { tutor } from "../data/content";
import dpImage from "../assets/dp.jpeg";

/** Floating decorative education icon. */
function FloatingIcon({
    children,
    className,
    delay = 0,
    duration = 5,
}: {
    children: ReactNode;
    className: string;
    delay?: number;
    duration?: number;
}) {
    return (
        <motion.span
            aria-hidden="true"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
            className={`glass absolute hidden items-center justify-center rounded-2xl text-accent-400 shadow-lg sm:flex ${className}`}
        >
            {children}
        </motion.span>
    );
}

/** Full-screen hero with animated background, badges and CTAs. */
function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center px-5 pt-28 pb-16 sm:px-8 sm:pt-32"
        >
            <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                {/* Left: copy */}
                <div className="text-center lg:text-left">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-ink-200 sm:text-sm"
                    >
                        <HiSparkles className="h-4 w-4 text-accent-500" />
                        {tutor.subheading}
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="font-display text-5xl leading-[1.05] font-extrabold tracking-tight text-ink-900 sm:text-6xl lg:text-7xl"
                    >
                        <span className="text-gradient animate-gradient-pan">
                            {tutor.name.toUpperCase()}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 font-display text-2xl font-semibold text-ink-900 sm:text-3xl"
                    >
                        {tutor.tagline}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.16 }}
                        className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-400 sm:text-lg lg:mx-0"
                    >
                        {tutor.description}
                    </motion.p>

                    {/* Experience badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.22 }}
                        className="mt-7 flex justify-center lg:justify-start"
                    >
                        <span className="glass-strong inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold text-ink-900">
                            <FiAward className="h-5 w-5 text-accent-500" />
                            {tutor.experience}
                        </span>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
                    >
                        <a
                            href="#contact"
                            className="focus-ring group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent-500/30 transition-transform hover:scale-[1.03] sm:w-auto sm:text-base"
                        >
                            Book a Free Demo
                            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#qualifications"
                            className="focus-ring glass inline-flex w-full items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-brand-700/5 sm:w-auto sm:text-base"
                        >
                            View Qualifications
                        </a>
                    </motion.div>
                </div>

                {/* Right: profile placeholder with floating icons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                    className="relative mx-auto w-full max-w-sm"
                >
                    {/* Glow */}
                    <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-400/40 to-brand-300/30 blur-2xl" />

                    <div className="glass-strong rounded-[2rem] p-6 sm:p-8">
                        {/* Profile photo */}
                        <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700">
                            <img
                                src={dpImage}
                                alt={`${tutor.name} — ${tutor.title}`}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/85 via-ink-900/35 to-transparent p-4 pt-10 text-center">
                                <p className="font-display text-lg font-bold text-white">
                                    {tutor.name}
                                </p>
                                <p className="text-sm text-accent-300">{tutor.title}</p>
                            </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between rounded-xl bg-brand-700/5 px-4 py-3">
                            <span className="text-sm text-ink-400">Now accepting</span>
                            <span className="flex items-center gap-2 text-sm font-semibold text-accent-600">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-500" />
                                </span>
                                New students
                            </span>
                        </div>
                    </div>

                    {/* Floating education icons */}
                    <FloatingIcon className="-top-5 -left-5 h-12 w-12 text-xl" delay={0}>
                        <FaLaptopCode />
                    </FloatingIcon>
                    <FloatingIcon
                        className="top-1/4 -right-6 h-12 w-12 text-xl"
                        delay={0.6}
                        duration={6}
                    >
                        <FaAtom />
                    </FloatingIcon>
                    <FloatingIcon
                        className="-bottom-4 -left-6 h-12 w-12 text-xl"
                        delay={1}
                        duration={4.5}
                    >
                        <FaCalculator />
                    </FloatingIcon>
                    <FloatingIcon
                        className="-right-5 -bottom-5 h-12 w-12 text-xl"
                        delay={0.3}
                        duration={5.5}
                    >
                        <FaFlask />
                    </FloatingIcon>
                    <FloatingIcon
                        className="-top-6 right-1/4 h-12 w-12 text-xl"
                        delay={1.2}
                        duration={5}
                    >
                        <FaGraduationCap />
                    </FloatingIcon>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
