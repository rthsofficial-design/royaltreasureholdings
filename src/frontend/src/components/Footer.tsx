import { Link } from "@tanstack/react-router";

const footerLinks = [
  { label: "Portfolio", path: "/portfolio" },
  { label: "About Us", path: "/about" },
  { label: "Board", path: "/board" },
  { label: "Careers", path: "/jobs" },
  { label: "Contact", path: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground" data-ocid="footer">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/rths-logo.jpeg"
                alt="RTHS"
                className="w-8 h-8 rounded-sm object-cover"
              />
              <span className="font-display text-lg tracking-wide text-primary-foreground">
                Royal Treasure Holding&apos;S
              </span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Building enduring value through disciplined investment and
              operational excellence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-5">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>Mumbai, Maharashtra, India</p>
              <p className="pt-2">
                <a
                  href="mailto:info@royaltreasureholdings.com"
                  className="hover:text-primary-foreground transition-colors duration-200"
                >
                  info@royaltreasureholdings.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/40">
            © {year} Royal Treasure Holding&apos;S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
