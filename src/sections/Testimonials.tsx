import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { testimonials } from "../data/content";

/** Social-proof section with frosted testimonial cards. */
function Testimonials() {
    return (
        <section id="testimonials" className="relative px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Testimonials"
                    title={
                        <>
                            What Students &amp; <span className="text-gradient">Parents Say</span>
                        </>
                    }
                    subtitle="Real words from the learners and families who've grown with personalized mentoring."
                />

                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <motion.figure
                            key={`${t.name}-${i}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="glass flex h-full flex-col rounded-2xl p-6 sm:p-7"
                        >
                            <FaQuoteLeft className="h-7 w-7 text-accent-400/70" />
                            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-200 sm:text-base">
                                "{t.quote}"
                            </blockquote>
                            <div className="mt-5 flex items-center gap-1 text-accent-400">
                                {Array.from({ length: 5 }).map((_, s) => (
                                    <FaStar key={s} className="h-4 w-4" />
                                ))}
                            </div>
                            <figcaption className="mt-4 border-t border-white/10 pt-4">
                                <p className="font-display font-semibold text-white">{t.name}</p>
                                <p className="text-sm text-brand-200">{t.role}</p>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
