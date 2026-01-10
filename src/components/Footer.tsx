import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-8">
          <h4 className="text-sm uppercase tracking-wide mb-6 font-medium">
            Quick Links
          </h4>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <Link
              to="/about"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              About Hakim Group
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
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-primary-foreground/50 text-center">
            © {new Date().getFullYear()} Hakim Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;