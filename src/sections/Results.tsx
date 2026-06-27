import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import AnimatedCounter from "../components/AnimatedCounter";
import { stats } from "../data/content";

/** Proven results: trophy-themed stats with animated counters. */
function Results() {
    return (
        <section id="results" className="relative px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Track Record"
                    title={
                        <>
                            Proven <span className="text-gradient">Results</span>
                        </>
                    }
                    subtitle="Years of dedication, reflected in confident students and consistent outcomes."
                />

                <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-10">
                    {/* Trophy watermark */}
                    <FaTrophy
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-6 -right-6 h-40 w-40 text-accent-500/10"
                    />

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-center"
                            >
                                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/30">
                                    <stat.icon className="h-7 w-7" />
                                </span>
                                <AnimatedCounter
                                    value={stat.value}
                                    className="mt-4 block font-display text-4xl font-extrabold text-silver sm:text-5xl"
                                />
                                <p className="mt-2 text-sm font-medium text-ink-200">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Results;
