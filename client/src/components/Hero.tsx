import { Link } from 'wouter';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import BrandMark from './BrandMark';

function RelationshipVisual() {
  return <figure className="relationship-visual" aria-label="Conceptual diagram: Kizim is the 360 degree relationship layer between players and your platform.">
    <div className="diagram-caption"><span>THE RELATIONSHIP LAYER</span><span>FIG. 01</span></div>
    <svg className="relationship-svg" viewBox="0 0 500 390" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="relationship-gold" x1="104" y1="46" x2="396" y2="338" gradientUnits="userSpaceOnUse">
          <stop stopColor="color-mix(in srgb, hsl(var(--primary)), white 28%)" />
          <stop offset=".48" stopColor="hsl(var(--primary))" />
          <stop offset="1" stopColor="color-mix(in srgb, hsl(var(--primary)), hsl(var(--background)) 17%)" />
        </linearGradient>
        <linearGradient id="relationship-hub" x1="214" y1="156" x2="286" y2="228" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--muted))" />
          <stop offset="1" stopColor="hsl(var(--background))" />
        </linearGradient>
        <filter id="relationship-disc-shadow" x="-30%" y="-30%" width="160%" height="170%" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="hsl(var(--background))" floodOpacity=".22" />
        </filter>
        <filter id="relationship-hub-shadow" x="-40%" y="-40%" width="180%" height="200%" colorInterpolationFilters="sRGB">
          <feDropShadow dx="2" dy="6" stdDeviation="5" floodColor="hsl(var(--background))" floodOpacity=".3" />
        </filter>
      </defs>
      <path d="M20 192h460M250 18v348" stroke="currentColor" strokeOpacity=".15" strokeDasharray="3 5" />
      <circle cx="250" cy="192" r="146" fill="url(#relationship-gold)" filter="url(#relationship-disc-shadow)" />
      <circle cx="250" cy="192" r="146" stroke="hsl(var(--foreground))" strokeOpacity=".42" />
      <circle cx="250" cy="194" r="112" stroke="hsl(var(--background))" strokeOpacity=".13" strokeWidth="5" />
      <circle cx="250" cy="191" r="111" stroke="hsl(var(--foreground))" strokeOpacity=".4" />
      <circle cx="250" cy="192" r="78" fill="url(#relationship-gold)" filter="url(#relationship-hub-shadow)" />
      <circle cx="250" cy="192" r="78" stroke="currentColor" strokeOpacity=".6" />
      <path d="M104 192a146 146 0 0 1 146-146M396 192a146 146 0 0 1-146 146" stroke="currentColor" strokeWidth="3" />
      <g fill="hsl(var(--background))"><circle cx="104" cy="192" r="6"/><circle cx="396" cy="192" r="6"/><circle cx="250" cy="46" r="4"/><circle cx="250" cy="338" r="4"/></g>
      <g filter="url(#relationship-hub-shadow)">
        <rect x="214" y="160" width="72" height="72" fill="hsl(var(--background))" />
        <rect x="214" y="156" width="72" height="72" fill="url(#relationship-hub)" stroke="hsl(var(--foreground))" strokeOpacity=".15" />
        <path d="M235 172v40h9v-16l13 16h11l-18-20 18-20h-11l-13 16v-16h-9Z" fill="hsl(var(--primary))" />
      </g>
      <g fill="hsl(var(--background))" fontFamily="Red Hat Mono,monospace" fontSize="11"><text x="24" y="171">PLAYERS</text><text x="360" y="171">YOUR PLATFORM</text><text x="250" y="289" textAnchor="middle" fontSize="18">360°</text></g>
      <g stroke="currentColor" strokeOpacity=".55"><path d="M22 28h12m-6-6v12M466 356h12m-6-6v12"/></g>
    </svg>
    <figcaption className="diagram-caption"><span>PLAYER ↔ PLATFORM</span><span>KIZIM AI</span></figcaption>
  </figure>;
}
export default function Hero() {
  return <>
    <section className="hero site-container">
      <div className="hero-meta eyebrow"><span>00 / Kizim AI</span><span>Agentic Solutions for iGaming</span></div>
      <h1 className="hero-wordmark" data-testid="text-brand-title">KIZIM AI</h1>
      <Separator />
      <div className="hero-main">
        <div className="hero-copy">
          <p className="hero-message" data-testid="text-hero-message">KIZIM is the <span>360 degree relationship</span> layer between players and your platform.</p>
          <Button asChild size="lg"><Link href="/solution"><span data-testid="text-cta">Let's build together.</span><ArrowUpRight data-icon="inline-end" aria-hidden="true" /></Link></Button>
          <button type="button" className="hero-scroll" onClick={() => document.getElementById('explore')?.scrollIntoView({block:'start'})}><ArrowDown aria-hidden="true" /><span>Explore Kizim</span></button>
        </div>
        <RelationshipVisual />
      </div>
    </section>
    <section id="explore" className="home-explore site-container" aria-label="Explore Kizim">
      <div className="explore-header"><span className="eyebrow">A closer look</span><BrandMark /></div>
      <div className="explore-links">
        {[
          {path:'/problem',number:'01',title:'Problem',description:'Operators are unable to effectively service the playerbase that keep them in business.'},
          {path:'/solution',number:'02',title:'Solution',description:'Every VIP gets treated like a VIP'},
          {path:'/mvp',number:'03',title:'MVP',description:"AI-powered VIP Dashboard with 'Next Best Action' Recommendation Engine"},
          {path:'/team',number:'04',title:'Founding Team',description:'Powered by LiveLike Technology'},
        ].map(item => <Link className="explore-link" key={item.path} href={item.path}><span className="eyebrow">{item.number}</span><h2>{item.title}</h2><p>{item.description}</p><ArrowUpRight aria-hidden="true" /></Link>)}
      </div>
    </section>
  </>;
}
