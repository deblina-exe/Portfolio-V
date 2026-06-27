/**
 * Decorative animated background: morphing aurora blobs + subtle grid.
 * Purely presentational and hidden from assistive tech.
 */
function AnimatedBackground() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
            {/* Soft aurora blobs that drift + morph */}
            <div className="animate-aurora animate-blob absolute -top-32 -left-24 h-80 w-80 bg-accent-400/30 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
            <div
                className="animate-aurora animate-blob absolute top-1/4 -right-24 h-72 w-72 bg-brand-300/30 blur-3xl sm:h-[26rem] sm:w-[26rem]"
                style={{ animationDelay: "-6s, -3s" }}
            />
            <div
                className="animate-aurora animate-blob absolute -bottom-40 left-1/3 h-72 w-72 bg-accent-300/25 blur-3xl sm:h-[24rem] sm:w-[24rem]"
                style={{ animationDelay: "-10s, -7s" }}
            />

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(44,62,80,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,62,80,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        </div>
    );
}

export default AnimatedBackground;
