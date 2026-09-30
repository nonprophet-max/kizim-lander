import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/problem", label: "Problem" },
    { path: "/solution", label: "Solution" },
    { path: "/mvp", label: "MVP" },
    { path: "/team", label: "Founding Team" },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-1 md:gap-2 hover-elevate active-elevate-2 px-2 md:px-3 py-2 rounded-md transition-colors cursor-pointer">
              <span className="text-base md:text-2xl font-bold text-primary">Kizim AI</span>
              <span className="text-base md:text-2xl text-muted-foreground mx-0.5 md:mx-1">|</span>
              <span className="text-sm md:text-2xl font-light text-foreground">Agentic Solutions for iGaming</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.slice(1).map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <div
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate active-elevate-2 cursor-pointer ${
                    location === item.path
                      ? "bg-primary/20 text-primary"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 rounded-md hover-elevate active-elevate-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border animate-in slide-in-from-top duration-200"
          data-testid="mobile-menu"
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col gap-2">
              {navItems.slice(1).map((item) => (
                <Link key={item.path} href={item.path} data-testid={`mobile-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div
                    onClick={closeMobileMenu}
                    className={`px-4 py-3 rounded-md text-base font-medium transition-colors hover-elevate active-elevate-2 cursor-pointer ${
                      location === item.path
                        ? "bg-primary/20 text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
