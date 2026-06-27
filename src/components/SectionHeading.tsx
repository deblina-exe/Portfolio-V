import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
    eyebrow: string;
    title: ReactNode;
    subtitle?: string;
}

/** Consistent, animated heading block used across sections. */
function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
    return (
        <motion.div
            className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <span className="glass mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-brand-200 uppercase">
                {eyebrow}
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-base leading-relaxed text-ink-400 sm:text-lg">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}

export default SectionHeading;
