import { Link, useLocation } from 'wouter';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import BrandMark from './BrandMark';

export const navigation = [
  { path: '/problem', label: 'Problem' },
  { path: '/solution', label: 'Solution' },
  { path: '/mvp', label: 'MVP' },
  { path: '/team', label: 'Founding Team' },
];
export default function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const navigating = useRef(false);
  useEffect(() => setOpen(false), [location]);
  return <header className="site-header">
    <a className="skip-link" href="#main-content" onClick={event => {
      event.preventDefault();
      const main = document.getElementById('main-content');
      main?.focus({preventScroll:true});
      main?.scrollIntoView({block:'start'});
    }}>Skip to content</a>
    <div className="site-container header-inner">
      <Link href="/" className="brand-link" data-testid="link-home" aria-label="Kizim AI home">
        <BrandMark className="brand-mark" /><span>Kizim AI<span className="brand-dot">.</span></span>
      </Link>
      <span className="header-tagline">Agentic Solutions<br />for iGaming</span>
      <nav aria-label="Main navigation" className="desktop-nav">
        {navigation.map(item => <Link key={item.path} href={item.path} aria-current={location === item.path ? 'page' : undefined}
          className={cn('nav-link', location === item.path && 'nav-current')}
          data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>{item.label}<ArrowUpRight aria-hidden="true" /></Link>)}
      </nav>
      <div className="mobile-nav">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild><Button variant="outline" size="icon" aria-label="Open navigation" data-testid="button-mobile-menu"><Menu /></Button></SheetTrigger>
          <SheetContent side="right" className="mobile-sheet" onCloseAutoFocus={event => {
            if (navigating.current) {
              event.preventDefault();
              document.getElementById('main-content')?.focus({preventScroll:true});
              navigating.current = false;
            }
          }}>
            <SheetTitle>Kizim AI</SheetTitle>
            <SheetDescription>Agentic Solutions for iGaming</SheetDescription>
            <nav aria-label="Mobile navigation" className="mobile-links">
              {[{path:'/',label:'Home'}, ...navigation].map((item,index) => <Link key={item.path} href={item.path}
                onClick={() => { navigating.current = item.path !== location; setOpen(false); }} aria-current={location === item.path ? 'page' : undefined}
                data-testid={`mobile-link-${item.label.toLowerCase().replace(/\s+/g,'-')}`}>
                <span className="nav-index">0{index}</span>{item.label}<ArrowUpRight aria-hidden="true" />
              </Link>)}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>;
}
