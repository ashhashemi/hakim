import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[calc(100vh-6rem)] flex items-center relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-hero leading-tight animate-fade-in">
                Where Scholarship
                <br />
                <span className="italic">Meets Strategy</span>
              </h1>
              <p className="mt-8 text-muted-foreground text-lg leading-relaxed animate-slide-up-delay">
                Bridging academic rigor with real world decision-making. We provide analytically-grounded solutions to complex political and institutional challenges.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-up-delay">
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-wide transition-all duration-300 hover:opacity-90"
                >
                  Our Services
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary text-sm uppercase tracking-wide transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative animate-fade-in-delay">
              <div className="aspect-[4/3] bg-muted/50 border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 border-2 border-dashed border-muted-foreground/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-muted-foreground/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Hero image placeholder
                  </p>
                  <p className="text-muted-foreground/60 text-xs mt-1">
                    Add your image later
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* Brief Intro Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Doctoral Level Decision Making
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Hakim Group, we provide decision-makers with clear, research-driven solutions to political, regulatory, and institutional challenges. We combine a deep contextual understanding with rigorous Oxford-level analysis to turn complexity into strategic clarity.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
