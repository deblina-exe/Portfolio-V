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
import {
    FiClock,
    FiUsers,
    FiTrendingUp,
    FiHeart,
    FiSearch,
    FiMap,
    FiBookOpen,
    FiHelpCircle,
} from "react-icons/fi";
import type { IconType } from "react-icons";

export const tutor = {
    name: "Varun Sir",
    title: "Computer Science Educator",
    tagline: "Learn Today. Lead Tomorrow.",
    subheading: "Dedicated. Experienced. Trusted.",
    description:
        "I help students turn confusion into clarity — building strong concepts, exam-ready confidence and a genuine love for learning through patient, personalized teaching.",
    experience: "7–8+ Years of Teaching Experience",
    email: "sinhavarun204@gmail.com",
    phone: "9748371096",
    // Digits only, international format for WhatsApp deep links.
    whatsapp: "919748371096",
};

/** Quick trust chips shown in the hero. */
export const highlights: string[] = [
    "CBSE • ICSE • State Boards",
    "Class 5 – 12",
    "Online & Offline",
    "Free Demo Class",
];

/** Words that rotate in the hero headline. */
export const heroWords: string[] = [
    "Computer Science",
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology",
];

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
    { label: "Approach", href: "#approach" },
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
    { icon: FiClock, value: "7+", label: "Years of Teaching" },
    { icon: FiUsers, value: "100s", label: "Students Mentored" },
    { icon: FiTrendingUp, value: "Strong", label: "Board Results" },
    { icon: FiHeart, value: "1-on-1", label: "Personal Mentorship" },
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
        caption: "Building rock-solid fundamentals across every core subject.",
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
        caption: "Specialised, board-ready guidance for senior students.",
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
        description:
            "Undivided, personalized attention with a plan shaped entirely around one student.",
    },
    {
        icon: FaUsers,
        title: "Offline Small Batches",
        description:
            "Focused, interactive groups that keep learning collaborative yet personal.",
    },
    {
        icon: FaLaptop,
        title: "Online Classes",
        description:
            "Live, interactive sessions with screen-sharing and recordings — learn from anywhere.",
    },
];

/* --------------------------- Why students choose -------------------------- */
export interface Feature {
    icon: IconType;
    title: string;
    desc: string;
}

export const features: Feature[] = [
    {
        icon: FaLightbulb,
        title: "Concept Clarity & Strong Fundamentals",
        desc: "We build understanding from the ground up — no rote learning, just real 'aha' moments.",
    },
    {
        icon: FaUserCheck,
        title: "Truly Personalized Learning",
        desc: "Every lesson adapts to the student's pace, strengths and goals.",
    },
    {
        icon: FaClipboardCheck,
        title: "Regular Tests & Instant Doubt-Solving",
        desc: "Frequent practice and quick doubt clearing keep momentum high.",
    },
    {
        icon: FaChartLine,
        title: "Continuous Progress Tracking",
        desc: "Transparent updates so students and parents always see growth.",
    },
];

/* ---------------------------- Learning approach --------------------------- */
export interface ProcessStep {
    icon: IconType;
    step: string;
    title: string;
    description: string;
}

export const processSteps: ProcessStep[] = [
    {
        icon: FiSearch,
        step: "01",
        title: "Free Demo & Assessment",
        description:
            "We begin by understanding the student's goals, current level and learning style — no cost, no pressure.",
    },
    {
        icon: FiMap,
        step: "02",
        title: "A Personalized Roadmap",
        description:
            "A clear, tailored study plan built around strengths, gaps and exam targets.",
    },
    {
        icon: FiBookOpen,
        step: "03",
        title: "Concept-First Teaching",
        description:
            "Every topic is taught with clarity, real-world examples and the 'why' behind it.",
    },
    {
        icon: FiHelpCircle,
        step: "04",
        title: "Practice & Doubt-Solving",
        description:
            "Regular tests, assignments and instant doubt clearing turn understanding into confidence.",
    },
    {
        icon: FiTrendingUp,
        step: "05",
        title: "Track & Improve",
        description:
            "Continuous progress tracking with honest feedback for students and parents.",
    },
];

/* ------------------------------ Testimonials ----------------------------- */
export interface Testimonial {
    quote: string;
    name: string;
    role: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        quote:
            "Varun Sir made Computer Science finally click for me. The way he explains the 'why' behind every concept gave me real confidence before my boards.",
        name: "Aarav",
        role: "Class 10 • CBSE",
        rating: 5,
    },
    {
        quote:
            "The personal attention and regular progress updates made a huge difference. As a parent, I always knew exactly how my child was doing.",
        name: "Mrs. Sharma",
        role: "Parent of Class 8 student",
        rating: 5,
    },
    {
        quote:
            "Patient, friendly and incredibly clear. Doubts that confused me for weeks were solved in minutes. My grades jumped within a term.",
        name: "Ishita",
        role: "Class 12 • ICSE",
        rating: 5,
    },
    {
        quote:
            "He doesn't just teach the syllabus — he builds genuine interest. My son now enjoys studying Physics and Maths on his own.",
        name: "Mr. Banerjee",
        role: "Parent of Class 9 student",
        rating: 5,
    },
    {
        quote:
            "The small-batch classes are interactive and never boring. The regular tests kept me prepared without ever feeling stressed.",
        name: "Rohan",
        role: "Class 11 • State Board",
        rating: 5,
    },
    {
        quote:
            "Online classes felt just as personal as sitting in a classroom. Clear screen-sharing, instant doubt-solving and always encouraging.",
        name: "Sneha",
        role: "Class 10 • CBSE",
        rating: 5,
    },
];
