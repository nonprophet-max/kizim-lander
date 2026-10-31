import { ArrowDown, ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Solution() {
  return <section className="solution-page site-container">
    <div className="page-intro"><span className="eyebrow">02 / The approach</span><h1 className="display-title">Every player.<br /><span>A personal approach.</span></h1></div>
    <Tabs defaultValue="solution" className="solution-tabs">
      <TabsList aria-label="Explore the solution" data-testid="tab-navigation">
        <TabsTrigger value="solution" data-testid="tab-solution">// the solution //</TabsTrigger>
        <TabsTrigger value="result" data-testid="tab-result">// the result //</TabsTrigger>
      </TabsList>
      <TabsContent value="solution" data-testid="content-solution">
        <div className="solution-intro"><SectionLabel>the solution</SectionLabel><div><p className="lead-copy" data-testid="text-solution-intro">Agentic VIP dashboards & handlers that optimize and execute retention strategies, value segmentation work & player support functions.</p><h2 className="solution-tagline" data-testid="text-solution-tagline">Every VIP gets treated like a VIP</h2></div></div>
        <figure className="solution-flow" aria-label="Conceptual workflow from business intelligence to VIP models to player management.">
          <figcaption className="eyebrow">The relationship layer / Conceptual workflow</figcaption>
          <div className="flow-steps"><div><span>01 / INPUT</span><strong>Business<br />Intelligence</strong></div><ArrowRight aria-hidden="true" /><div><span>02 / INTELLIGENCE</span><strong>VIP Prediction<br />Models</strong></div><ArrowRight aria-hidden="true" /><div><span>03 / RELATIONSHIPS</span><strong>Player<br />Management</strong></div></div>
        </figure>
        <div className="editorial-rows solution-rows">
          <article><span className="row-number">01</span><h3>Understand</h3><p data-testid="card-solution-1">Will work either from existing Business Intelligence data (segmentations, lifecycles, game tendencies, bonus offer/ redemption dynamics) or start from the ground up via pre-programmed VIP segmentation and data assumptions.</p></article>
          <article><span className="row-number">02</span><h3>Identify</h3><p data-testid="card-solution-2">Will create VIP Prediction Models, Identification Reports; execute Player Evaluation and Monitoring and VIP Client Portfolio Management with 24/7-on performance.</p></article>
          <article><span className="row-number">03</span><h3>Manage</h3><p data-testid="card-solution-3">Will offer a 360 degree client monitoring and management service which will go beyond simple automated dashboards, data analysis & engagement recommendation. In future phases across 2026+ it will execute offers, player outreach actions and VIP handling tasks autonomously.</p></article>
        </div>
        <div className="solution-conclusion"><ArrowDown aria-hidden="true" /><p data-testid="text-solution-conclusion">No player forgotten, No additional VIP<br />management team headcount needed.</p></div>
      </TabsContent>
      <TabsContent value="result" data-testid="content-result">
        <div className="results-intro"><SectionLabel>the result</SectionLabel><p className="figure-note">Illustration of the outcomes described in the original proposal.</p></div>
        <div className="results-grid">
          <article className="result-card"><div className="result-figure" aria-hidden="true">100<span>%</span></div><h2 data-testid="text-result-1">Increase in adequate<br />coverage of VIP<br />playerbase from<br />10% - 50% to 100%.</h2><div className="result-bars" aria-hidden="true"><span>10% – 50%</span><div><i /></div><ArrowDown /><span>100%</span><div /></div></article>
          <article className="result-card result-card-gold"><div className="result-figure" aria-hidden="true">10<span>×</span></div><h2 data-testid="text-result-2">Decrease overhead<br />to do so by 10X</h2><div className="overhead-visual" aria-hidden="true">{Array.from({length:10},(_,i)=><span key={i} />)}</div></article>
        </div>
      </TabsContent>
    </Tabs>
  </section>;
}
