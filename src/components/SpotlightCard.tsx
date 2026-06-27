import { useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

interface SpotlightCardProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    /** Max tilt in degrees. Set to 0 to disable the 3D tilt. */
    tilt?: number;
    /** Toggle the pointer-following glow overlay. */
    spotlight?: boolean;
}

/**
 * Interactive card that tilts in 3D and reveals a soft spotlight that
 * follows the pointer. Entrance animations should be handled by a parent
 * wrapper (e.g. <Reveal>) to avoid clashing with the live transform.
 */
function SpotlightCard({
    children,
    className = "",
    style,
    tilt = 6,
    spotlight = true,
}: SpotlightCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        el.style.setProperty("--mx", `${px * 100}%`);
        el.style.setProperty("--my", `${py * 100}%`);
        el.style.setProperty("--rx", `${(0.5 - py) * tilt * 2}deg`);
        el.style.setProperty("--ry", `${(px - 0.5) * tilt * 2}deg`);
    };

    const reset = () => {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            style={style}
            className={`spotlight-card ${className}`}
        >
            {spotlight && <span aria-hidden="true" className="spotlight-card__glow" />}
            <div className="spotlight-card__content">{children}</div>
        </div>
    );
}

export default SpotlightCard;
