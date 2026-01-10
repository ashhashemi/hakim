import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-4">Hakim Global</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Where Scholarship Meets Statecraft
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wide mb-4 font-medium">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-3">
              <Link
                to="/about"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                About Hakim
              </Link>
              <Link
                to="/government"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Public Sector
              </Link>
              <Link
                to="/political-risk"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Political Risk
              </Link>
              <Link
                to="/contact"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <p className="text-sm text-primary-foreground/50 text-center">
            © {new Date().getFullYear()} Hakim Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
