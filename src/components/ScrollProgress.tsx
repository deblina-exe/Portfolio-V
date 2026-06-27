import { motion, useScroll, useSpring } from "framer-motion";

/** Slim gradient progress bar that tracks page scroll. */
function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        mass: 0.3,
    });

    return (
        <motion.div
            aria-hidden="true"
            style={{ scaleX }}
            className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-accent-400 via-accent-500 to-accent-600"
        />
    );
}

export default ScrollProgress;
