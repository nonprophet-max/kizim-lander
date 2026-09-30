import SectionLabel from './SectionLabel';

export default function TeamSection() {
  const team = [
    {
      name: 'Luke\nSkyrme',
      description: 'Veteran executive with 11 years of experience in the iGaming space servicing EU & APAC markets including 4+ years as a multi-market C-Suite operator as COO and later CEO of Infinizia Ltd.'
    },
    {
      name: 'Miheer\nWalavalkar',
      description: 'Co-founder & CEO, LiveLike. Sports Business Journal/ Leaders 40 under 40 lists inductee. 17 years of experience as engineer and founder in IT infrastructure, Finance & data/ gamification platforms.'
    },
    {
      name: 'Max\nRabinovitch',
      description: 'CSO, The Chiliz Group & web3/ on-chain iGaming investor/ advisor. 7+ years experience leading strategy for Chiliz (L1 EVM protocol and token w/ $400m+ market cap) and the Socios.com platform.'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-48 bg-background relative">
      <div className="container mx-auto max-w-6xl">
        <SectionLabel>founding team</SectionLabel>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {team.map((member, index) => (
            <div key={index} className="space-y-4" data-testid={`team-member-${index}`}>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="text-2xl font-semibold text-primary whitespace-pre-line" data-testid={`text-name-${index}`}>
                  {member.name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-bio-${index}`}>
                {member.description}
              </p>
            </div>
          ))}
        </div>

        <div className="p-6 border-2 border-secondary rounded-lg" data-testid="card-livelike">
          <p className="text-secondary font-medium mb-4 italic" data-testid="text-powered-by">
            Powered by LiveLike Technology
          </p>
          <p className="text-muted-foreground italic leading-relaxed" data-testid="text-livelike-description">
            LiveLike is a technology company dedicated to empowering digital experiences, leveraging AI & industry leading 
            IT and data infrastructure to develop custom user retention, monetization and engagement solutions. The firm 
            services clients including La Liga, NASCAR, Madison Square Garden Group and Canal+ among many others.
          </p>
        </div>
      </div>
    </section>
  );
}
