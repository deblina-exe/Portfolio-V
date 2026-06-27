import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { teachingModes } from "../data/content";

/** Teaching modes presented as interactive glass cards. */
function TeachingModes() {
    return (
        <section id="teaching" className="relative px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Flexible Learning"
                    title={
                        <>
                            Teaching <span className="text-gradient">Modes</span>
                        </>
                    }
                    subtitle="Choose the format that fits you best — every option is built for real understanding."
                />

                <div className="grid gap-6 md:grid-cols-3">
                    {teachingModes.map((mode, i) => (
                        <motion.article
                            key={mode.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="glass group relative overflow-hidden rounded-2xl p-7 text-center"
                        >
                            {/* Hover sheen */}
                            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent-300/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                            <motion.span
                                whileHover={{ rotate: 6, scale: 1.08 }}
                                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/30"
                            >
                                <mode.icon className="h-8 w-8" />
                            </motion.span>

                            <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">
                                {mode.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-ink-400">
                                {mode.description}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeachingModes;
