import SectionLabel from './SectionLabel';

export default function MVPCombined() {
  const dataPoints = [
    ['NRC', 'FTD', 'Deposits', 'Net Deposits', 'Withdrawls', 'NGR'],
    ['GGR', 'Turnover', 'Margin', 'Hold', 'ADPU', 'ARPU'],
    ['Account Balance', 'Bonus Balance', 'Bonus Money', 'Free Spins', 'Wager Requirements', "Bonus' Converted"],
    ['Cashback', 'Cash Drop', 'Wager Factor', 'Vertical', 'KYC/ SOW/ SOF', '+']
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-48 bg-background relative">
      <div className="container mx-auto max-w-6xl">
        <SectionLabel>MVP</SectionLabel>
        
        <h3 className="text-2xl font-semibold text-foreground mb-8" data-testid="text-mvp-title">
          AI-powered VIP Dashboard with 'Next Best Action' Recommendation Engine
        </h3>

        <div className="mb-12 ml-8">
          <p className="text-lg text-secondary font-medium mb-4" data-testid="text-mvp-subtitle">
            Full-scope dashboard showing all VIP players segmented by:
          </p>
          <ul className="space-y-3 ml-8">
            <li className="text-foreground leading-relaxed" data-testid="text-segment-1">
              <span className="text-primary font-medium">VIP Status</span> (via deposit segmentation & play behavior segmentation)
            </li>
            <li className="text-foreground leading-relaxed" data-testid="text-segment-2">
              <span className="text-secondary font-medium">Lifecycle Status</span> (via registration status, deposit frequency segmentation & activity vs. inactivity segmentation)
            </li>
            <li className="text-foreground leading-relaxed" data-testid="text-segment-3">
              <span className="text-primary font-medium">Gameplay Behavior</span> (via gametype segmentation & gameplay frequency + wager volume segmentation)
            </li>
          </ul>
        </div>

        <div className="mb-12 ml-8">
          <p className="text-muted-foreground mb-4 leading-relaxed" data-testid="text-data-points-intro">
            Minimum data points our AI dashboard contemplates (open to variability and uncapped additions):
          </p>

          {/* Mobile: Flex wrap layout with badges */}
          <div className="md:hidden flex flex-wrap gap-2 p-4 border-2 border-primary rounded-lg bg-primary/10" data-testid="table-data-points-mobile">
            {dataPoints.flat().map((cell, index) => (
              <div 
                key={index} 
                className="px-3 py-2 bg-primary/20 border border-primary/40 rounded-md text-sm font-medium text-foreground whitespace-nowrap"
                data-testid={`cell-mobile-${index}`}
              >
                {cell}
              </div>
            ))}
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:block border-2 border-primary rounded-lg overflow-hidden" data-testid="table-data-points">
            {dataPoints.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-6 bg-primary/20">
                {row.map((cell, cellIndex) => (
                  <div 
                    key={cellIndex} 
                    className="p-4 text-center font-medium border border-primary/30 text-foreground text-sm lg:text-base"
                    data-testid={`cell-${rowIndex}-${cellIndex}`}
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 ml-8">
          <p className="text-xl text-secondary font-medium mb-6" data-testid="text-rec-alpha">
            Recommendation Engine | Alpha:
          </p>
          <p className="text-lg text-primary font-medium mb-4" data-testid="text-batch-feed">
            Batch "next-best action" JSON feed
          </p>

          <div className="space-y-6 mb-8 ml-8">
            <div className="border-l-4 border-primary pl-8 py-2" data-testid="card-rec-1">
              <p className="text-foreground leading-relaxed">
                A near-live feed which scores and ranks every single VIP player on your 
                platform based on aforementioned metrics
              </p>
            </div>

            <div className="border-l-4 border-primary pl-8 py-2" data-testid="card-rec-2">
              <p className="text-foreground leading-relaxed">
                Real-time next-best action advice for human handlers (i.e. 'Give Player 1 
                X free spins on game Y', 'Offer Player 2 Bonus Money promotion with XYZ 
                parameters', 'Feature game Z to player 3' etc.) taking the guesswork, manual 
                inference & suboptimal segmentation/ activation out of the equation.
              </p>
            </div>
          </div>

          <p className="text-lg text-primary font-medium mb-4 ml-8" data-testid="text-validation">
            Validation report and Internal Review UI
          </p>

          <div className="space-y-6 ml-8">
            <div className="border-l-4 border-primary pl-8 py-2" data-testid="card-validation-1">
              <p className="text-foreground leading-relaxed">
                Automated documentation to compare Recommendation Engine advice 
                against archive/ history of human VIP handler actions to effectively 
                benchmark optimisations
              </p>
            </div>

            <div className="border-l-4 border-primary pl-8 py-2" data-testid="card-validation-2">
              <p className="text-foreground leading-relaxed">
                Backoffice for human workers to review and benchmark outcomes of AI 
                dashboard recommended actions
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 ml-8">
          <p className="text-xl text-secondary font-medium mb-6" data-testid="text-compliance-subtitle">
            Compliance and Analytics Console + Security:
          </p>
          
          <p className="text-lg text-primary font-medium mb-4" data-testid="text-alert-engine">
            Live RG/AML Alert Engine
          </p>

          <div className="space-y-6 mb-8 ml-8">
            <div className="border-l-4 border-primary pl-8 py-2" data-testid="card-compliance-1">
              <p className="text-foreground leading-relaxed">
                Near real-time continuous full platform compliance monitoring 
                based on ingested data with less than 5 minute alert-latency
              </p>
            </div>

            <div className="border-l-4 border-primary pl-8 py-2" data-testid="card-compliance-2">
              <p className="text-foreground leading-relaxed">
                Audit Log exports via CSV/JSON
              </p>
            </div>
          </div>

          <p className="text-lg text-primary font-medium mb-4 ml-8" data-testid="text-kpi-dashboard">
            KPI Dashboard
          </p>

          <div className="space-y-4 ml-8">
            <div className="border-l-4 border-primary pl-8 py-2" data-testid="card-kpi-1">
              <p className="text-foreground leading-relaxed">Retention Statistics</p>
            </div>
            <div className="border-l-4 border-primary pl-8 py-2" data-testid="card-kpi-2">
              <p className="text-foreground leading-relaxed">Segmented Average Net Gaming Revenue</p>
            </div>
            <div className="border-l-4 border-primary pl-8 py-2" data-testid="card-kpi-3">
              <p className="text-foreground leading-relaxed">Risk Case Compilation over time across VIP segments</p>
            </div>
            <div className="border-l-4 border-primary pl-8 py-2" data-testid="card-kpi-4">
              <p className="text-foreground leading-relaxed">Comp ROI for VIP segments over time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
