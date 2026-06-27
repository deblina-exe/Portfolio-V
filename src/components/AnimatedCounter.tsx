import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
    /** Display string that may begin with an integer, e.g. "7+", "100s", "1-on-1". */
    value: string;
    className?: string;
}

/**
 * Counts up to the leading integer of `value` when scrolled into view.
 * Non-numeric values are rendered as-is.
 */
function AnimatedCounter({ value, className }: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const [display, setDisplay] = useState(() => deriveInitial(value));

    useEffect(() => {
        const match = value.match(/^(\d+)(.*)$/);
        if (!inView || !match) return;

        const target = Number(match[1]);
        const suffix = match[2];
        const duration = 1200;
        const start = performance.now();
        let frame = 0;

        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // Ease-out cubic for a premium feel.
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(`${Math.round(eased * target)}${suffix}`);
            if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, value]);

    return (
        <span ref={ref} className={className}>
            {display}
        </span>
    );
}

function deriveInitial(value: string) {
    const match = value.match(/^(\d+)(.*)$/);
    return match ? `0${match[2]}` : value;
}

export default AnimatedCounter;
