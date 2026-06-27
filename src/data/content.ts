/**
 * Central content store for the portfolio.
 * Keeping copy in one place makes the site easy to maintain and update.
 */
import {
    FaLaptopCode,
    FaAtom,
    FaFlask,
    FaDna,
    FaCalculator,
    FaUserGraduate,
    FaUsers,
    FaLaptop,
    FaLightbulb,
    FaUserCheck,
    FaClipboardCheck,
    FaChartLine,
    FaGraduationCap,
    FaAward,
} from "react-icons/fa";
import { FiClock, FiUsers, FiTrendingUp, FiHeart } from "react-icons/fi";
import type { IconType } from "react-icons";

export const tutor = {
    name: "Varun Sir",
    title: "Computer Science Educator",
    tagline: "Learn Today. Lead Tomorrow.",
    subheading: "Dedicated. Experienced. Trusted.",
    description:
        "Helping students build strong concepts, gain confidence, and achieve academic excellence through personalized learning.",
    experience: "7–8+ Years of Teaching Experience",
    email: "sinhavarun204@gmail.com",
    phone: "9748371096",
    // Digits only, international format for WhatsApp deep links.
    whatsapp: "919748371096",
};

export interface NavLink {
    label: string;
    href: string;
}

export const navLinks: NavLink[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Qualifications", href: "#qualifications" },
    { label: "Subjects", href: "#subjects" },
    { label: "Teaching", href: "#teaching" },
    { label: "Results", href: "#results" },
    { label: "Contact", href: "#contact" },
];

/* ----------------------------- Proven results ---------------------------- */
export interface Stat {
    icon: IconType;
    value: string;
    label: string;
}

export const stats: Stat[] = [
    { icon: FiClock, value: "7+", label: "Years Experience" },
    { icon: FiUsers, value: "100s", label: "Students Guided" },
    { icon: FiTrendingUp, value: "Strong", label: "Academic Results" },
    { icon: FiHeart, value: "1-on-1", label: "Personalized Mentorship" },
];

/* ----------------------------- Qualifications ---------------------------- */
export interface Qualification {
    icon: IconType;
    degree: string;
    short: string;
    note: string;
}

export const qualifications: Qualification[] = [
    {
        icon: FaGraduationCap,
        degree: "Master's in Computer Application",
        short: "MCA",
        note: "Advanced study of software development, systems and applied computing.",
    },
    {
        icon: FaAward,
        degree: "Bachelor of Science in Computer Science",
        short: "B.Sc. (Hons.)",
        note: "Honours degree with strong grounding in programming and core CS theory.",
    },
];

/* ------------------------------- Subjects -------------------------------- */
export interface Subject {
    icon: IconType;
    title: string;
}

export interface SubjectGroup {
    level: string;
    caption: string;
    subjects: Subject[];
}

export const subjectGroups: SubjectGroup[] = [
    {
        level: "Class 5 – 10",
        caption: "Building strong fundamentals across core subjects.",
        subjects: [
            { icon: FaLaptopCode, title: "Computer Science" },
            { icon: FaAtom, title: "Physics" },
            { icon: FaFlask, title: "Chemistry" },
            { icon: FaDna, title: "Biology" },
            { icon: FaCalculator, title: "Mathematics" },
        ],
    },
    {
        level: "Class 11 Onwards",
        caption: "Specialised guidance across all boards & curriculum.",
        subjects: [
            { icon: FaLaptopCode, title: "Computer Science" },
            { icon: FaGraduationCap, title: "All Boards & Curriculum" },
        ],
    },
];

/* ----------------------------- Teaching modes ---------------------------- */
export interface TeachingMode {
    icon: IconType;
    title: string;
    description: string;
}

export const teachingModes: TeachingMode[] = [
    {
        icon: FaUserGraduate,
        title: "Offline One-to-One",
        description: "Personalized one-on-one attention tailored to each student.",
    },
    {
        icon: FaUsers,
        title: "Offline Small Batches",
        description: "Focused learning in small, interactive groups.",
    },
    {
        icon: FaLaptop,
        title: "Online Classes",
        description: "Interactive and effective learning from anywhere.",
    },
];

/* --------------------------- Why students choose -------------------------- */
export interface Feature {
    icon: IconType;
    title: string;
}

export const features: Feature[] = [
    { icon: FaLightbulb, title: "Concept Clarity & Strong Fundamentals" },
    { icon: FaUserCheck, title: "Personalized Learning" },
    { icon: FaClipboardCheck, title: "Regular Tests & Doubt Solving" },
    { icon: FaChartLine, title: "Continuous Progress Tracking" },
];

/* ------------------------------ Testimonials ----------------------------- */
export interface Testimonial {
    quote: string;
    name: string;
    role: string;
}

export const testimonials: Testimonial[] = [
    {
        quote:
            "Varun Sir helped me understand Computer Science concepts clearly and improved my confidence significantly.",
        name: "Student",
        role: "Class 10",
    },
    {
        quote:
            "The personal attention and regular progress tracking made a huge difference.",
        name: "Parent",
        role: "Guardian",
    },
    {
        quote: "Excellent teaching style with strong focus on fundamentals.",
        name: "Student",
        role: "Class 12",
    },
];
