import SectionLabel from './SectionLabel';

export default function ProblemSection() {
  return <section className="problem-section site-container">
    <div className="page-intro"><span className="eyebrow">01 / The challenge</span><h1 className="display-title">The service gap.</h1></div>
    <div className="problem-overview">
      <div><SectionLabel>problem</SectionLabel><p className="problem-lead" data-testid="text-problem-intro">Operators focus on revenue, yet costs limit human VIP team scaling. Without adequate support 50% - 90% of VIP customers industry-wide get ignored or mishandled</p></div>
      <figure className="coverage-figure" aria-label="Illustration of the stated industry range: 10 to 50 percent effectively engaged, 50 to 90 percent ignored or mishandled.">
        <figcaption className="diagram-caption"><span>VIP PLAYERBASE</span><span>100%</span></figcaption>
        <div className="coverage-grid" aria-hidden="true">{Array.from({length:100},(_,i)=><span key={i} data-coverage={i<10?'covered':i<50?'range':'gap'} />)}</div>
        <div className="coverage-legend"><span><i />10% – 50%<small>effectively engaged</small></span><span><i />50% – 90%<small>ignored or mishandled</small></span></div>
        <p className="figure-note">Illustration of the industry range described below.</p>
      </figure>
    </div>
    <div className="editorial-rows">
      <article><span className="row-number">01</span><h2>Coverage</h2><p data-testid="card-problem-1">The average iGaming operator optimizes and effectively engages only 10% - 50% of their VIP player base due to the commercial infeasibility of scaling up human VIP management teams to cover this segment of users. Hiring more people adds too much cost, and existing teams routinely face issues with lack of operational skill and execution.</p></article>
      <article><span className="row-number">02</span><h2>Retention</h2><p data-testid="card-problem-2">Retention strategies remain unexecuted, player wants are overlooked, and VIPs go inactive or leave. This is a universal occurrence across igaming operators, and its happening to the most valuable player segment operators have. The one which determines whether they are profitable or not.</p></article>
      <article><span className="row-number">03</span><h2>Execution</h2><p data-testid="card-problem-3">In lieu of 100% VIP player segment coverage, scaling activations and retention efforts often end up in automated outreach and offer strategies to lower-value player segments - the igaming equivalent of robo-calling and email spam. These strategies often generate little in terms of return and worse yet, ignore the fundamental issue at hand:</p></article>
    </div>
    <div className="gold-callout"><span className="eyebrow">The opportunity</span><p data-testid="card-ai-callout">AI adoption must happen within this service gap to generate immediate increases in revenue</p><span className="callout-arrow" aria-hidden="true">↗</span></div>
  </section>;
}
