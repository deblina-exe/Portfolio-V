import { motion } from "framer-motion";
import { FiTarget, FiUser, FiAward, FiSmile } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const focusAreas = [
    { icon: FiTarget, title: "Concept Clarity", text: "Deep understanding over rote memorization." },
    { icon: FiUser, title: "Individual Attention", text: "Lessons tailored to each student's pace." },
    { icon: FiAward, title: "Academic Excellence", text: "Consistent, measurable improvement in results." },
    { icon: FiSmile, title: "Confidence Building", text: "Helping students believe in their abilities." },
];

/** About section with story + animated focus-area cards. */
function About() {
    return (
        <section id="about" className="relative px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="About"
                    title={
                        <>
                            About The <span className="text-gradient">Tutor</span>
                        </>
                    }
                    subtitle="A passionate Computer Science educator dedicated to helping students understand concepts deeply rather than relying on memorization."
                />

                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <Reveal>
                        <div className="glass-strong rounded-3xl p-7 sm:p-9">
                            <p className="text-base leading-relaxed text-ink-200 sm:text-lg">
                                Teaching is more than delivering a syllabus — it's about sparking
                                curiosity and building a foundation that lasts. With years of
                                hands-on experience, I focus on{" "}
                                <span className="text-accent-400">why</span> things work, not
                                just <span className="text-accent-400">what</span> to write.
                            </p>
                            <p className="mt-4 text-base leading-relaxed text-ink-400 sm:text-lg">
                                Every student learns differently, so every learning plan is
                                personal — patient, structured and designed to build genuine
                                confidence and strong fundamentals.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {focusAreas.map((f, i) => (
                            <Reveal key={f.title} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className="glass group h-full rounded-2xl p-6"
                                >
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg transition-transform group-hover:scale-110">
                                        <f.icon className="h-6 w-6" />
                                    </span>
                                    <h3 className="mt-4 font-display text-lg font-semibold text-white">
                                        {f.title}
                                    </h3>
                                    <p className="mt-1 text-sm leading-relaxed text-ink-400">
                                        {f.text}
                                    </p>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
