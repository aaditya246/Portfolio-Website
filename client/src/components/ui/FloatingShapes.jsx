/**
 * Decorative floating gradient orbs for ambient background depth.
 * Purely visual — pointer-events disabled, aria-hidden for accessibility.
 */
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Top-left large blue orb */}
      <div
        className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full
                   bg-accent/20 blur-[120px] animate-float-slow"
      />

      {/* Top-right medium orb */}
      <div
        className="absolute top-1/4 -right-24 w-80 h-80 rounded-full
                   bg-accent-glow/15 blur-[100px] animate-float"
      />

      {/* Bottom-left smaller orb */}
      <div
        className="absolute bottom-10 left-1/4 w-72 h-72 rounded-full
                   bg-accent-dark/20 blur-[100px] animate-float-delayed"
      />

      {/* Bottom-right faint orb */}
      <div
        className="absolute -bottom-20 right-1/3 w-96 h-96 rounded-full
                   bg-accent/10 blur-[140px] animate-float-slow"
      />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_40%,transparent_100%)]" />
    </div>
  )
}

export default FloatingShapes