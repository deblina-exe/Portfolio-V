import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { processSteps } from "../data/content";

/** "How learning works" — an animated, connected timeline of the journey. */
function Approach() {
    return (
        <section id="approach" className="relative px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-4xl">
                <SectionHeading
                    eyebrow="The Approach"
                    title={
                        <>
                            How Learning <span className="text-gradient">Works</span>
                        </>
                    }
                    subtitle="A simple, proven journey that turns confusion into confidence — one clear step at a time."
                />

                <div className="relative">
                    {/* Animated vertical spine */}
                    <motion.span
                        aria-hidden="true"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                        className="absolute top-2 bottom-2 left-[27px] w-0.5 origin-top bg-gradient-to-b from-accent-400 via-accent-500 to-brand-400 sm:left-1/2 sm:-ml-px"
                    />

                    <div className="space-y-6 sm:space-y-10">
                        {processSteps.map((s, i) => {
                            const left = i % 2 === 0;
                            return (
                                <motion.div
                                    key={s.step}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.55, delay: i * 0.08 }}
                                    className={`relative flex items-start gap-5 sm:w-1/2 ${left
                                            ? "sm:ml-0 sm:pr-12 sm:text-right"
                                            : "sm:ml-auto sm:flex-row-reverse sm:pl-12 sm:text-left"
                                        }`}
                                >
                                    {/* Node */}
                                    <span className="relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/30">
                                        <s.icon className="h-6 w-6" />
                                        <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-bold text-accent-600 shadow">
                                            {s.step}
                                        </span>
                                    </span>

                                    <div className="glass flex-1 rounded-2xl p-5 sm:p-6">
                                        <h3 className="font-display text-lg font-semibold text-ink-900">
                                            {s.title}
                                        </h3>
                                        <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                                            {s.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Approach;
