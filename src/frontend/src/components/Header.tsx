import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About Us", path: "/about" },
  { label: "Board", path: "/board" },
  { label: "Careers", path: "/jobs" },
  { label: "Contact", path: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-card border-b border-border shadow-xs"
      data-ocid="header"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" aria-label="Royal Treasure Holding'S — Home">
            <img
              src="/assets/images/rths-logo.jpeg"
              alt="Royal Treasure Holding'S"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
            data-ocid="nav-desktop"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={[
                  "px-4 py-2 text-sm font-medium tracking-wide rounded-md transition-colors duration-200",
                  isActive(link.path)
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                ].join(" ")}
                aria-current={isActive(link.path) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200"
              data-ocid="nav-cta"
            >
              Get in Touch
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              data-ocid="nav-mobile-toggle"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          className="lg:hidden bg-card border-t border-border"
          data-ocid="nav-mobile"
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={[
                  "px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200",
                  isActive(link.path)
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 px-4 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-md text-center hover:bg-primary/90 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
