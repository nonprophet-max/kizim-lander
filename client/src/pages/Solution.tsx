import { useState } from 'react';
import SectionLabel from '@/components/SectionLabel';

export default function Solution() {
  const [activeTab, setActiveTab] = useState<'solution' | 'result'>('solution');

  return (
    <div className="min-h-screen py-20 px-6 md:px-12 lg:px-48 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Tab Navigation */}
        <div className="flex gap-2 md:gap-4 mb-8 md:mb-12" data-testid="tab-navigation">
          <button
            onClick={() => setActiveTab('solution')}
            className={`px-4 md:px-6 py-3 rounded-md text-sm md:text-lg font-medium transition-all hover-elevate active-elevate-2 min-h-[44px] ${
              activeTab === 'solution'
                ? 'bg-primary/20 text-primary border-b-2 border-primary'
                : 'text-foreground'
            }`}
            data-testid="tab-solution"
          >
            // the solution //
          </button>
          <button
            onClick={() => setActiveTab('result')}
            className={`px-4 md:px-6 py-3 rounded-md text-sm md:text-lg font-medium transition-all hover-elevate active-elevate-2 min-h-[44px] ${
              activeTab === 'result'
                ? 'bg-primary/20 text-primary border-b-2 border-primary'
                : 'text-foreground'
            }`}
            data-testid="tab-result"
          >
            // the result //
          </button>
        </div>

        {/* Solution Content */}
        {activeTab === 'solution' && (
          <div className="animate-in fade-in duration-300" data-testid="content-solution">
            <SectionLabel>the solution</SectionLabel>
            <p className="text-lg text-foreground mb-4 ml-8" data-testid="text-solution-intro">
              Agentic VIP dashboards & handlers that optimize and execute retention 
              strategies, value segmentation work & player support functions.
            </p>
            <h3 className="text-3xl font-semibold text-secondary mb-8 ml-8" data-testid="text-solution-tagline">
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

            <p className="text-2xl text-secondary mt-12 ml-8 font-medium" data-testid="text-solution-conclusion">
              No player forgotten, No additional VIP<br/>
              management team headcount needed.
            </p>
          </div>
        )}

        {/* Result Content */}
        {activeTab === 'result' && (
          <div className="animate-in fade-in duration-300 relative" data-testid="content-result">
            <SectionLabel>the result</SectionLabel>
            
            <div className="absolute right-0 top-1/4 w-1/2 h-1/2 opacity-30 pointer-events-none">
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

            <div className="relative z-10 ml-8">
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
          </div>
        )}
      </div>
    </div>
  );
}
