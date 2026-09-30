import logoImage from "@assets/hero-logo.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(251, 215, 142, 0.35) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(201, 124, 75, 0.30) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(143, 168, 138, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(118, 88, 13, 0.25) 0%, transparent 60%),
            #1C1E21
          `,
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-48 py-20 text-center">
        <div 
          className="mb-8 md:mb-12 flex justify-center"
          data-testid="hero-logo"
        >
          <div
            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80"
            style={{
              WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
              maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
            }}
          >
            <img 
              src={logoImage} 
              alt="Kizim AI" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <h1 
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary mb-6 md:mb-8"
          data-testid="text-brand-title"
        >
          KIZIM AI
        </h1>

        <p 
          className="text-lg sm:text-xl md:text-3xl leading-relaxed mb-6 md:mb-8 px-4"
          data-testid="text-hero-message"
        >
          <span className="text-white">KIZIM is the </span>
          <span className="text-primary">360 degree relationship</span>
          <br />
          <span className="text-white">layer between players</span>
          <br />
          <span className="text-white">and your platform.</span>
        </p>

        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-8 md:mt-12" data-testid="text-cta">
          Let's build together.
        </p>
      </div>
    </section>
  );
}
