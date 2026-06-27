import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { subjectGroups } from "../data/content";

/** Subjects taught, grouped by class level, as premium gradient-border cards. */
function Subjects() {
    return (
        <section id="subjects" className="relative px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Curriculum"
                    title={
                        <>
                            Subjects <span className="text-gradient">Taught</span>
                        </>
                    }
                    subtitle="Comprehensive coverage from building fundamentals to advanced, board-ready specialisation."
                />

                <div className="space-y-12">
                    {subjectGroups.map((group) => (
                        <div key={group.level}>
                            <div className="mb-6 flex flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
                                <div>
                                    <h3 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
                                        {group.level}
                                    </h3>
                                    <p className="mt-1 text-sm text-ink-400">{group.caption}</p>
                                </div>
                                <span className="mt-2 h-px w-24 bg-gradient-to-r from-brand-400 to-accent-400 sm:mt-0 sm:flex-1 sm:ml-6" />
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {group.subjects.map((subject, i) => (
                                    <motion.article
                                        key={`${group.level}-${subject.title}`}
                                        initial={{ opacity: 0, y: 28 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                                        whileHover={{ y: -6 }}
                                        className="group relative rounded-2xl bg-gradient-to-br from-brand-400/40 to-accent-400/40 p-px"
                                    >
                                        {/* Inner glass surface creates the gradient-border effect */}
                                        <div className="glass flex items-center gap-4 rounded-2xl p-5">
                                            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                                <subject.icon className="h-6 w-6" />
                                            </span>
                                            <h4 className="font-display text-base font-semibold text-ink-900">
                                                {subject.title}
                                            </h4>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Subjects;
