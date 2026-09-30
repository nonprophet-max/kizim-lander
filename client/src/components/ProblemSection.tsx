import SectionLabel from './SectionLabel';

export default function ProblemSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-48 bg-background relative">
      <div className="container mx-auto max-w-6xl">
        <SectionLabel>problem</SectionLabel>
        
        <p className="text-lg text-foreground mb-4 ml-8" data-testid="text-problem-intro">
          Operators focus on revenue, yet costs limit human VIP team scaling. Without adequate 
          support 50% - 90% of VIP customers industry-wide get ignored or mishandled
        </p>

        <div className="space-y-6 ml-8">
          <div className="border-l-4 border-primary pl-8 py-2" data-testid="card-problem-1">
            <p className="text-muted-foreground leading-relaxed">
              The average iGaming operator optimizes and effectively engages only 10% - 50% of their VIP player base due to the 
              commercial infeasibility of scaling up human VIP management teams to cover this segment of users. Hiring more people 
              adds too much cost, and existing teams routinely face issues with lack of operational skill and execution.
            </p>
          </div>

          <div className="border-l-4 border-secondary pl-8 py-2" data-testid="card-problem-2">
            <p className="text-muted-foreground leading-relaxed">
              Retention strategies remain unexecuted, player wants are overlooked, and VIPs go inactive or leave. This is a universal 
              occurrence across igaming operators, and its happening to the most valuable player segment operators have. The one 
              which determines whether they are profitable or not.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-8 py-2" data-testid="card-problem-3">
            <p className="text-muted-foreground leading-relaxed">
              In lieu of 100% VIP player segment coverage, scaling activations and retention efforts often end up in automated 
              outreach and offer strategies to lower-value player segments - the igaming equivalent of robo-calling and email 
              spam. These strategies often generate little in terms of return and worse yet, ignore the fundamental issue at hand:
            </p>
          </div>
        </div>

        <div className="mt-6 ml-8 p-8 border-2 border-primary rounded-lg" data-testid="card-ai-callout">
          <p className="text-xl md:text-2xl text-secondary font-medium">
            AI adoption must happen within this service gap to generate immediate increases in revenue
          </p>
        </div>
      </div>
    </section>
  );
}
