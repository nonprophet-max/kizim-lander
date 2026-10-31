import './team.css';

export default function TeamSection() {
  const team = [
    {
      name: 'Luke\nSkyrme',
      initials: 'LS',
      description: 'Veteran executive with 11 years of experience in the iGaming space servicing EU & APAC markets including 4+ years as a multi-market C-Suite operator as COO and later CEO of Infinizia Ltd.'
    },
    {
      name: 'Miheer\nWalavalkar',
      initials: 'MW',
      description: 'Co-founder & CEO, LiveLike. Sports Business Journal/ Leaders 40 under 40 lists inductee. 17 years of experience as engineer and founder in IT infrastructure, Finance & data/ gamification platforms.'
    },
    {
      name: 'Max\nRabinovitch',
      initials: 'MR',
      description: 'CSO, The Chiliz Group & web3/ on-chain iGaming investor/ advisor. 7+ years experience leading strategy for Chiliz (L1 EVM protocol and token w/ $400m+ market cap) and the Socios.com platform.'
    }
  ];

  return (
    <section className="team-section" aria-labelledby="team-heading">
      <div className="site-container">
        <header className="team-header">
          <p className="eyebrow">04 / founding team</p>
          <h1 className="display-title team-heading" id="team-heading">Founding team</h1>
        </header>

        <div className="team-grid">
          {team.map((member, index) => (
            <article
              className="team-member"
              key={member.name}
              aria-labelledby={`team-name-${index}`}
              data-testid={`team-member-${index}`}
            >
              <div className="team-portrait" aria-hidden="true">
                <span className="team-number">0{index + 1}</span>
                <span className="team-initials">{member.initials}</span>
                <span className="team-portrait-mark">+</span>
              </div>
              <h2 className="team-name" id={`team-name-${index}`} data-testid={`text-name-${index}`}>
                {member.name}
              </h2>
              <p className="team-bio" data-testid={`text-bio-${index}`}>
                {member.description}
              </p>
            </article>
          ))}
        </div>

        <aside className="team-technology" aria-labelledby="team-technology-heading" data-testid="card-livelike">
          <h2 className="team-technology-title" id="team-technology-heading" data-testid="text-powered-by">
            Powered by LiveLike Technology
          </h2>
          <p className="team-technology-copy" data-testid="text-livelike-description">
            LiveLike is a technology company dedicated to empowering digital experiences, leveraging AI & industry leading 
            IT and data infrastructure to develop custom user retention, monetization and engagement solutions. The firm 
            services clients including La Liga, NASCAR, Madison Square Garden Group and Canal+ among many others.
          </p>
        </aside>
      </div>
    </section>
  );
}
