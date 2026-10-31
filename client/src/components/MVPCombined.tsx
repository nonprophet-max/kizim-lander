import { ArrowDown, ArrowRight, Check, CornerDownRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import './mvp.css';

export default function MVPCombined() {
  const dataPoints = [
    ['NRC', 'FTD', 'Deposits', 'Net Deposits', 'Withdrawls', 'NGR'],
    ['GGR', 'Turnover', 'Margin', 'Hold', 'ADPU', 'ARPU'],
    ['Account Balance', 'Bonus Balance', 'Bonus Money', 'Free Spins', 'Wager Requirements', "Bonus' Converted"],
    ['Cashback', 'Cash Drop', 'Wager Factor', 'Vertical', 'KYC/ SOW/ SOF', '+']
  ];

  return (
    <section className="mvp-page site-container" aria-labelledby="mvp-title">
      <header className="mvp-hero">
        <p className="eyebrow">03 / MVP</p>
        <h1 className="display-title mvp-title" id="mvp-title" data-testid="text-mvp-title">
          AI-powered VIP Dashboard with 'Next Best Action' Recommendation Engine
        </h1>
        <div className="mvp-hero-footer" aria-hidden="true">
          <span className="mvp-mono">DATA / DECISION / REVIEW</span>
          <ArrowDown size={24} strokeWidth={1.5} />
        </div>
      </header>

      <section className="mvp-segmentation" aria-labelledby="mvp-segmentation-title">
        <div className="mvp-section-heading">
          <span className="mvp-index" aria-hidden="true">01</span>
          <h2 className="mvp-section-title" id="mvp-segmentation-title" data-testid="text-mvp-subtitle">
            Full-scope dashboard showing all VIP players segmented by:
          </h2>
        </div>
        <ul className="mvp-segment-grid">
          <li className="mvp-segment" data-testid="text-segment-1">
            <div className="mvp-segment-mark" aria-hidden="true"><span /><span /><span /></div>
            <span className="mvp-segment-title">VIP Status</span>{' '}
            <span className="mvp-segment-copy">(via deposit segmentation & play behavior segmentation)</span>
          </li>
          <li className="mvp-segment" data-testid="text-segment-2">
            <div className="mvp-segment-mark mvp-segment-mark--lifecycle" aria-hidden="true"><span /><span /><span /></div>
            <span className="mvp-segment-title">Lifecycle Status</span>{' '}
            <span className="mvp-segment-copy">(via registration status, deposit frequency segmentation & activity vs. inactivity segmentation)</span>
          </li>
          <li className="mvp-segment" data-testid="text-segment-3">
            <div className="mvp-segment-mark mvp-segment-mark--gameplay" aria-hidden="true"><span /><span /><span /></div>
            <span className="mvp-segment-title">Gameplay Behavior</span>{' '}
            <span className="mvp-segment-copy">(via gametype segmentation & gameplay frequency + wager volume segmentation)</span>
          </li>
        </ul>
      </section>

      <section className="mvp-data" aria-labelledby="mvp-data-title">
        <div className="mvp-data-heading">
          <h2 className="mvp-data-title" id="mvp-data-title" data-testid="text-data-points-intro">
            Minimum data points our AI dashboard contemplates (open to variability and uncapped additions):
          </h2>
          <Badge variant="outline" className="mvp-badge">Data inputs</Badge>
        </div>
        <div className="mvp-data-mobile" data-testid="table-data-points-mobile">
          {dataPoints.flat().map((cell, index) => (
            <div key={index} className="mvp-data-cell" data-testid={`cell-mobile-${index}`}>
              {cell}
            </div>
          ))}
        </div>
        <div className="mvp-data-desktop" data-testid="table-data-points">
          {dataPoints.map((row, rowIndex) => (
            <div key={rowIndex} className="mvp-data-row">
              {row.map((cell, cellIndex) => (
                <div key={cellIndex} className="mvp-data-cell" data-testid={`cell-${rowIndex}-${cellIndex}`}>
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mvp-engine" aria-labelledby="mvp-engine-title">
        <div className="mvp-section-heading">
          <span className="mvp-index" aria-hidden="true">02</span>
          <h2 className="mvp-section-title" id="mvp-engine-title" data-testid="text-rec-alpha">
            Recommendation Engine | Alpha:
          </h2>
        </div>
        <div className="mvp-pipeline" role="img" aria-label="Conceptual flow: data informs recommendations, which are benchmarked through human review.">
          <span className="mvp-pipeline-label">Conceptual flow</span>
          <div className="mvp-pipeline-node"><span className="mvp-pipeline-icon" aria-hidden="true">01</span><span>Data</span></div>
          <ArrowRight className="mvp-pipeline-arrow" size={24} strokeWidth={1.5} aria-hidden="true" />
          <div className="mvp-pipeline-node mvp-pipeline-node--gold"><span className="mvp-pipeline-icon" aria-hidden="true">02</span><span>Recommendation</span></div>
          <ArrowRight className="mvp-pipeline-arrow" size={24} strokeWidth={1.5} aria-hidden="true" />
          <div className="mvp-pipeline-node"><span className="mvp-pipeline-icon" aria-hidden="true"><Check size={18} strokeWidth={1.5} /></span><span>Human review</span></div>
        </div>
        <div className="mvp-engine-grid">
          <div className="mvp-engine-column">
            <h3 className="mvp-subtitle" data-testid="text-batch-feed">Batch "next-best action" JSON feed</h3>
            <div className="mvp-detail">
              <CornerDownRight aria-hidden="true" size={20} strokeWidth={1.5} />
              <p data-testid="card-rec-1">A near-live feed which scores and ranks every single VIP player on your platform based on aforementioned metrics</p>
            </div>
            <div className="mvp-detail">
              <CornerDownRight aria-hidden="true" size={20} strokeWidth={1.5} />
              <p data-testid="card-rec-2">Real-time next-best action advice for human handlers (i.e. 'Give Player 1 X free spins on game Y', 'Offer Player 2 Bonus Money promotion with XYZ parameters', 'Feature game Z to player 3' etc.) taking the guesswork, manual inference & suboptimal segmentation/ activation out of the equation.</p>
            </div>
          </div>
          <div className="mvp-engine-column">
            <h3 className="mvp-subtitle" data-testid="text-validation">Validation report and Internal Review UI</h3>
            <div className="mvp-detail">
              <CornerDownRight aria-hidden="true" size={20} strokeWidth={1.5} />
              <p data-testid="card-validation-1">Automated documentation to compare Recommendation Engine advice against archive/ history of human VIP handler actions to effectively benchmark optimisations</p>
            </div>
            <div className="mvp-detail">
              <CornerDownRight aria-hidden="true" size={20} strokeWidth={1.5} />
              <p data-testid="card-validation-2">Backoffice for human workers to review and benchmark outcomes of AI dashboard recommended actions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mvp-compliance" aria-labelledby="mvp-compliance-title">
        <div className="mvp-section-heading">
          <span className="mvp-index" aria-hidden="true">03</span>
          <h2 className="mvp-section-title" id="mvp-compliance-title" data-testid="text-compliance-subtitle">Compliance and Analytics Console + Security:</h2>
        </div>
        <div className="mvp-console-grid">
          <div className="mvp-alert-panel">
            <div className="mvp-alert-symbol" aria-hidden="true"><span /><span /><span /></div>
            <h3 className="mvp-subtitle" data-testid="text-alert-engine">Live RG/AML Alert Engine</h3>
            <div className="mvp-detail">
              <CornerDownRight aria-hidden="true" size={20} strokeWidth={1.5} />
              <p data-testid="card-compliance-1">Near real-time continuous full platform compliance monitoring based on ingested data with less than 5 minute alert-latency</p>
            </div>
            <div className="mvp-detail">
              <CornerDownRight aria-hidden="true" size={20} strokeWidth={1.5} />
              <p data-testid="card-compliance-2">Audit Log exports via CSV/JSON</p>
            </div>
          </div>
          <div className="mvp-kpi-panel">
            <h3 className="mvp-subtitle" data-testid="text-kpi-dashboard">KPI Dashboard</h3>
            <div className="mvp-kpi-item"><span aria-hidden="true">01</span><p data-testid="card-kpi-1">Retention Statistics</p></div>
            <div className="mvp-kpi-item"><span aria-hidden="true">02</span><p data-testid="card-kpi-2">Segmented Average Net Gaming Revenue</p></div>
            <div className="mvp-kpi-item"><span aria-hidden="true">03</span><p data-testid="card-kpi-3">Risk Case Compilation over time across VIP segments</p></div>
            <div className="mvp-kpi-item"><span aria-hidden="true">04</span><p data-testid="card-kpi-4">Comp ROI for VIP segments over time</p></div>
          </div>
        </div>
      </section>
    </section>
  );
}
