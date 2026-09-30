export default function IntroSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -left-12 top-0 bottom-0 w-2 bg-primary" style={{ clipPath: 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)' }}></div>
            <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-6" data-testid="text-intro-title">
              Kizim<br/>AI
            </h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-foreground" data-testid="text-intro-feature-1">
              Unlock user potential with 24/7-on AI VIP agents
            </p>
            <p className="text-lg text-foreground" data-testid="text-intro-feature-2">
              Segment down to and service individual high-value players
            </p>
            <p className="text-lg text-foreground" data-testid="text-intro-feature-3">
              Offer automated 'next best action' handling support
            </p>
            <p className="text-lg text-foreground" data-testid="text-intro-feature-4">
              Optimize player engagement & retention without scaling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
