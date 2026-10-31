import { Link } from 'wouter';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function ProblemStatement() {
  return <section className="problem-statement site-container">
    <p className="lead-copy" data-testid="text-problem-statement">Operators are unable to effectively service<br />the playerbase that keep them in business.</p>
    <div className="statement-bottom"><h2 data-testid="text-solution-headline">Our Agentic AI<br />VIP Managers can.</h2><Button asChild variant="outline" size="lg"><Link href="/solution">The solution<ArrowUpRight data-icon="inline-end" aria-hidden="true" /></Link></Button></div>
  </section>;
}
