import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/hakim-group-logo-horizontal.png";

const whatWeDoLinks = [
  { name: "Government & Public Sector", path: "/government" },
  { name: "Political Risk & Strategic Advisory", path: "/political-risk" },
];

const navLinks = [
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isWhatWeDoActive = whatWeDoLinks.some(link => location.pathname === link.path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Hakim Group"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {/* What We Do Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsWhatWeDoOpen(true)}
              onMouseLeave={() => setIsWhatWeDoOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm tracking-wide uppercase transition-colors duration-300 ${
                  isWhatWeDoActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                What We Do
                <ChevronDown size={14} className={`transition-transform duration-200 ${isWhatWeDoOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isWhatWeDoOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-background border border-border shadow-lg min-w-[280px]">
                    {whatWeDoLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-6 py-4 text-sm transition-colors duration-300 ${
                          isActive(link.path)
                            ? "text-foreground font-medium bg-muted/50"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide uppercase transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col space-y-6">
              {/* What We Do Section */}
              <div className="space-y-4">
                <span className="text-sm tracking-wide uppercase text-foreground font-medium">
                  What We Do
                </span>
                <div className="pl-4 space-y-4">
                  {whatWeDoLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-sm transition-colors duration-300 ${
                        isActive(link.path)
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm tracking-wide uppercase transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
