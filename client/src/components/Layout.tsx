import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowUpRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import BrandMark from './BrandMark';
import { navigation } from './Header';

export default function Layout({children}: {children:React.ReactNode}) {
  const [location] = useLocation();
  const main = useRef<HTMLElement>(null);
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    window.scrollTo({top:0, behavior:'instant'});
    main.current?.focus({preventScroll:true});
  }, [location]);
  return <>
    <main id="main-content" ref={main} tabIndex={-1}>{children}</main>
    <footer className="site-footer">
      <div className="site-container">
        <Link href="/team" className="footer-invitation"><span>Let's build together.</span><ArrowUpRight aria-hidden="true" /></Link>
        <Separator />
        <div className="footer-bottom">
          <Link href="/" className="footer-brand"><BrandMark /> Kizim AI</Link>
          <span className="footer-tagline">Agentic Solutions for iGaming</span>
          <nav aria-label="Footer navigation">{navigation.map(item => <Link key={item.path} href={item.path}>{item.label}</Link>)}</nav>
        </div>
      </div>
    </footer>
  </>;
}
