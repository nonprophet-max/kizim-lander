import SectionLabel from './SectionLabel';

export default function SolutionSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-48 bg-background relative">
      <div className="container mx-auto max-w-6xl">
        <SectionLabel>the solution</SectionLabel>
        
        <p className="text-lg text-foreground mb-4" data-testid="text-solution-intro">
          Agentic VIP dashboards & handlers that optimize and execute retention 
          strategies, value segmentation work & player support functions.
        </p>
        <h3 className="text-3xl font-semibold text-secondary mb-8" data-testid="text-solution-tagline">
          Every VIP gets treated like a VIP
        </h3>

        <div className="space-y-6 ml-8">
          <div className="border-l-4 border-primary pl-8 py-2" data-testid="card-solution-1">
            <p className="text-foreground leading-relaxed">
              Will work either from existing Business Intelligence data (segmentations, lifecycles, game tendencies, bonus offer/
              redemption dynamics) or start from the ground up via pre-programmed VIP segmentation and data assumptions.
            </p>
          </div>

          <div className="border-l-4 border-secondary pl-8 py-2" data-testid="card-solution-2">
            <p className="text-foreground leading-relaxed">
              Will create VIP Prediction Models, Identification Reports; execute Player Evaluation and Monitoring and VIP Client 
              Portfolio Management with 24/7-on performance.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-8 py-2" data-testid="card-solution-3">
            <p className="text-foreground leading-relaxed">
              Will offer a 360 degree client monitoring and management service which will go beyond simple automated 
              dashboards, data analysis & engagement recommendation. In future phases across 2026+ it will execute offers, 
              player outreach actions and VIP handling tasks autonomously.
            </p>
          </div>
        </div>

        <p className="text-2xl text-secondary mt-12 font-medium" data-testid="text-solution-conclusion">
          No player forgotten, No additional VIP<br/>
          management team headcount needed.
        </p>
      </div>
    </section>
  );
}
