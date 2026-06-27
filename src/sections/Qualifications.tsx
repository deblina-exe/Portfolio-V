import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import SpotlightCard from "../components/SpotlightCard";
import { qualifications } from "../data/content";

/** Qualifications section: glassmorphism credential cards with timeline reveal. */
function Qualifications() {
    return (
        <section id="qualifications" className="relative px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-5xl">
                <SectionHeading
                    eyebrow="Credentials"
                    title={
                        <>
                            <span className="text-gradient">Qualifications</span>
                        </>
                    }
                    subtitle="Backed by advanced academic qualifications in computing."
                />

                <div className="grid gap-6 md:grid-cols-2">
                    {qualifications.map((q, i) => (
                        <Reveal key={q.short} delay={i * 0.12} className="h-full">
                            <SpotlightCard className="glass-strong group relative h-full overflow-hidden rounded-3xl p-7 sm:p-8">
                                <span className="absolute top-0 right-0 -mt-10 -mr-10 h-28 w-28 rounded-full bg-gradient-to-br from-accent-500/30 to-brand-500/30 blur-2xl" />

                                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    <q.icon className="h-7 w-7" />
                                </span>

                                <p className="mt-5 font-display text-3xl font-extrabold text-silver">
                                    {q.short}
                                </p>
                                <h3 className="mt-1 font-display text-lg font-semibold text-ink-900">
                                    {q.degree}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-ink-400">
                                    {q.note}
                                </p>
                            </SpotlightCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Qualifications;
