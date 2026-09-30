import SectionLabel from './SectionLabel';

export default function ResultSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-48 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-1/2 h-1/2 opacity-30">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          <g stroke="currentColor" strokeWidth="2" fill="none" className="text-primary">
            <path d="M 50 250 L 100 200 L 150 220 L 200 150 L 250 180 L 300 100 L 350 120" />
            <circle cx="100" cy="200" r="4" fill="currentColor" />
            <circle cx="150" cy="220" r="4" fill="currentColor" />
            <circle cx="200" cy="150" r="4" fill="currentColor" />
            <circle cx="250" cy="180" r="4" fill="currentColor" />
            <circle cx="300" cy="100" r="4" fill="currentColor" />
            <circle cx="350" cy="120" r="4" fill="currentColor" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionLabel>the result</SectionLabel>
        
        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8" data-testid="text-result-1">
          Increase in adequate<br/>
          coverage of VIP<br/>
          playerbase from<br/>
          10% - 50% to 100%.
        </h2>

        <h2 className="text-4xl md:text-5xl font-bold text-secondary" data-testid="text-result-2">
          Decrease overhead<br/>
          to do so by 10X
        </h2>
      </div>
    </section>
  );
}
