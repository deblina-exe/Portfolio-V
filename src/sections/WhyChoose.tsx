import { FiCheck } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import SpotlightCard from "../components/SpotlightCard";
import { features } from "../data/content";

/** "Why students choose me" — animated checkmark feature cards. */
function WhyChoose() {
    return (
        <section id="why" className="relative px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-5xl">
                <SectionHeading
                    eyebrow="The Difference"
                    title={
                        <>
                            Why Students <span className="text-gradient">Choose Me</span>
                        </>
                    }
                    subtitle="A teaching approach built around clarity, care and consistent progress."
                />

                <div className="grid gap-5 sm:grid-cols-2">
                    {features.map((feature, i) => (
                        <Reveal key={feature.title} delay={(i % 2) * 0.08} className="h-full">
                            <SpotlightCard className="glass group flex h-full items-start gap-4 rounded-2xl p-5 sm:p-6">
                                <span className="relative flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/30">
                                    <span className="absolute inset-0 rounded-full bg-accent-400/40 opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-100" />
                                    <FiCheck className="relative h-6 w-6" strokeWidth={3} />
                                </span>
                                <div>
                                    <div className="flex items-center gap-2.5">
                                        <feature.icon className="h-5 w-5 flex-none text-accent-600" />
                                        <h3 className="font-display text-base font-semibold text-ink-900 sm:text-lg">
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                                        {feature.desc}
                                    </p>
                                </div>
                            </SpotlightCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChoose;
