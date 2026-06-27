import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { tutor } from "../data/content";

/** Contact section with quick-action buttons and a WhatsApp enquiry form. */
function Contact() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = String(data.get("name") ?? "").trim();
        const phone = String(data.get("phone") ?? "").trim();
        const subject = String(data.get("subject") ?? "").trim();
        const message = String(data.get("message") ?? "").trim();

        // Build a clean, structured WhatsApp message.
        const text = [
            `*New Enquiry for ${tutor.name}*`,
            "",
            `\u{1F464} *Name:* ${name}`,
            `\u{1F4DE} *Phone:* ${phone}`,
            `\u{1F4DA} *Class / Subject:* ${subject}`,
            "",
            "\u{1F4DD} *Message:*",
            message,
        ].join("\n");

        window.open(
            `https://wa.me/${tutor.whatsapp}?text=${encodeURIComponent(text)}`,
            "_blank",
            "noopener,noreferrer",
        );

        setSent(true);
        setTimeout(() => setSent(false), 4000);
        form.reset();
    };

    const actions = [
        {
            icon: FaWhatsapp,
            label: "WhatsApp",
            value: "Chat instantly",
            href: `https://wa.me/${tutor.whatsapp}`,
            external: true,
            accent: "from-[#25D366] to-[#1aa856]",
        },
        {
            icon: FaPhone,
            label: "Call",
            value: tutor.phone,
            href: `tel:${tutor.phone}`,
            external: false,
            accent: "from-accent-500 to-accent-600",
        },
        {
            icon: FaEnvelope,
            label: "Email",
            value: tutor.email,
            href: `mailto:${tutor.email}`,
            external: false,
            accent: "from-brand-500 to-brand-600",
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
                    subtitle="Book a free demo or ask a question — fill the form and it opens WhatsApp with your details ready to send."
                />

                <div className="grid items-stretch gap-6 lg:grid-cols-2">
                    {/* Quick actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-strong flex h-full flex-col rounded-3xl p-6 sm:p-8"
                    >
                        <h3 className="font-display text-lg font-semibold text-ink-900">
                            Reach out directly
                        </h3>
                        <p className="mt-1 text-sm text-ink-400">
                            Prefer a quick chat? Pick whatever's easiest for you.
                        </p>

                        <div className="mt-6 space-y-3">
                            {actions.map((a) => (
                                <a
                                    key={a.label}
                                    href={a.href}
                                    target={a.external ? "_blank" : undefined}
                                    rel={a.external ? "noopener noreferrer" : undefined}
                                    className="focus-ring group flex items-center gap-4 rounded-2xl border border-brand-700/10 bg-white/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 hover:bg-white/80 hover:shadow-lg hover:shadow-accent-500/10"
                                >
                                    <span
                                        className={`flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br ${a.accent} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                                    >
                                        <a.icon className="h-5 w-5" />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="text-xs tracking-wide text-ink-400 uppercase">
                                            {a.label}
                                        </p>
                                        <p className="truncate font-medium text-ink-900">{a.value}</p>
                                    </div>
                                    <FiArrowUpRight className="ml-auto h-5 w-5 flex-none -translate-x-1 text-accent-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                                </a>
                            ))}
                        </div>

                        {/* Free demo highlight */}
                        <div className="relative mt-auto overflow-hidden rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 p-6 text-white shadow-lg shadow-accent-500/30">
                            <span className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-white/15 blur-xl" />
                            <p className="relative font-display text-lg font-semibold">
                                Free demo session
                            </p>
                            <p className="relative mt-1 text-sm text-white/85">
                                Experience the teaching style risk-free before you commit.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-strong rounded-3xl p-6 sm:p-8"
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-[#25D366] to-[#1aa856] text-white shadow-lg shadow-[#25D366]/30">
                                <FaWhatsapp className="h-6 w-6" />
                            </span>
                            <div>
                                <h3 className="font-display text-lg font-semibold text-ink-900">
                                    Send a quick enquiry
                                </h3>
                                <p className="text-sm text-ink-400">
                                    We'll open WhatsApp with your details pre-filled.
                                </p>
                            </div>
                        </div>

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
                                className="focus-ring w-full resize-none rounded-xl border border-brand-700/15 bg-white/70 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-600 focus:border-accent-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="focus-ring group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1aa856] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-[1.02] sm:text-base"
                        >
                            {sent ? (
                                <>
                                    <FiCheckCircle className="h-5 w-5" />
                                    Opening WhatsApp…
                                </>
                            ) : (
                                <>
                                    <FaWhatsapp className="h-5 w-5" />
                                    Send on WhatsApp
                                </>
                            )}
                        </button>

                        <p className="mt-3 text-center text-xs text-ink-400">
                            Opens WhatsApp with a ready-to-send message — just press send.
                        </p>
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
                className="focus-ring w-full rounded-xl border border-brand-700/15 bg-white/70 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-600 focus:border-accent-500"
            />
        </div>
    );
}

export default Contact;
