/**
 * Decorative animated background: floating gradient blobs + subtle grid.
 * Purely presentational and hidden from assistive tech.
 */
function AnimatedBackground() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
            {/* Base radial wash */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(52,73,94,0.55),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(127,140,141,0.18),_transparent_55%)]" />

            {/* Floating blobs */}
            <div className="animate-float-slow absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl sm:h-96 sm:w-96" />
            <div className="animate-float-medium absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-brand-300/15 blur-3xl sm:h-[26rem] sm:w-[26rem]" />
            <div className="animate-float-slow absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-brand-600/40 blur-3xl sm:h-96 sm:w-96" />

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        </div>
    );
}

export default AnimatedBackground;
