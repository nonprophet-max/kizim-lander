export default function ProblemStatement() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-48 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20">
        <div className="h-full flex justify-end items-center gap-8">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="h-full w-24 bg-primary" 
              style={{ clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 80%)' }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <p className="text-lg text-foreground mb-12" data-testid="text-problem-statement">
          Operators are unable to effectively service<br/>
          the playerbase that keep them in business.
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-secondary" data-testid="text-solution-headline">
          Our Agentic AI<br/>VIP Managers can.
        </h2>
      </div>
    </section>
  );
}
