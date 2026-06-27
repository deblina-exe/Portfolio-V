import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { tutor } from "../data/content";

/** Contact section with quick-action buttons and an accessible enquiry form. */
function Contact() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Demo handler — wire up to an email service or backend as needed.
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        e.currentTarget.reset();
    };

    const actions = [
        {
            icon: FaWhatsapp,
            label: "WhatsApp",
            value: "Chat instantly",
            href: `https://wa.me/${tutor.whatsapp}`,
            external: true,
            accent: "from-brand-600 to-brand-400",
        },
        {
            icon: FaPhone,
            label: "Call",
            value: tutor.phone,
            href: `tel:${tutor.phone}`,
            external: false,
            accent: "from-brand-500 to-brand-400",
        },
        {
            icon: FaEnvelope,
            label: "Email",
            value: tutor.email,
            href: `mailto:${tutor.email}`,
            external: false,
            accent: "from-accent-500 to-accent-400",
        },
    ];

    return (
        <section id="contact" className="relative px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Contact"
                    title={
                        <>
                            Let's Learn Together &amp;{" "}
                            <span className="text-gradient">Achieve Greatness</span>
                        </>
                    }
                    subtitle="Book a free demo or ask a question — reach out through whichever channel suits you."
                />

                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    {/* Quick actions */}
                    <div className="space-y-4">
                        {actions.map((a, i) => (
                            <motion.a
                                key={a.label}
                                href={a.href}
                                target={a.external ? "_blank" : undefined}
                                rel={a.external ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="focus-ring glass flex items-center gap-4 rounded-2xl p-5 transition-colors hover:bg-white/10"
                            >
                                <span
                                    className={`flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br ${a.accent} text-white`}
                                >
                                    <a.icon className="h-5 w-5" />
                                </span>
                                <div>
                                    <p className="text-xs tracking-wide text-ink-400 uppercase">
                                        {a.label}
                                    </p>
                                    <p className="font-medium text-white">{a.value}</p>
                                </div>
                            </motion.a>
                        ))}

                        <div className="glass-strong rounded-2xl p-6">
                            <p className="font-display text-lg font-semibold text-white">
                                Free demo session
                            </p>
                            <p className="mt-1 text-sm text-ink-400">
                                Experience the teaching style risk-free before you commit.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-strong rounded-3xl p-6 sm:p-8"
                    >
                        <div className="grid gap-5 sm:grid-cols-2">
                            <Field id="name" label="Full name" type="text" placeholder="Your name" />
                            <Field id="phone" label="Phone" type="tel" placeholder="Your number" />
                        </div>
                        <div className="mt-5">
                            <Field
                                id="subject"
                                label="Class / Subject of interest"
                                type="text"
                                placeholder="e.g. Class 10 Computer Science"
                            />
                        </div>
                        <div className="mt-5">
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium text-ink-200"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                placeholder="Tell me a little about your goals…"
                                className="focus-ring w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-ink-600 focus:border-accent-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="focus-ring group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 to-accent-400 px-6 py-3.5 text-sm font-bold text-brand-700 shadow-lg shadow-accent-500/30 transition-transform hover:scale-[1.02] sm:text-base"
                        >
                            {sent ? (
                                <>
                                    <FiCheckCircle className="h-5 w-5" />
                                    Message sent!
                                </>
                            ) : (
                                <>
                                    Send message
                                    <FiSend className="transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

interface FieldProps {
    id: string;
    label: string;
    type: string;
    placeholder: string;
}

/** Reusable labelled input field. */
function Field({ id, label, type, placeholder }: FieldProps) {
    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink-200">
                {label}
            </label>
            <input
                id={id}
                name={id}
                type={type}
                required
                placeholder={placeholder}
                className="focus-ring w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-ink-600 focus:border-accent-400"
            />
        </div>
    );
}

export default Contact;
