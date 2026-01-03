import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-oxford.jpeg";

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
                <span className="italic">Meets Statecraft</span>
              </h1>
              <p className="mt-8 text-muted-foreground text-lg leading-relaxed animate-slide-up-delay">
                Bridging academic rigor with applied political understanding.
                We offer analytically grounded insight into complex political and institutional environments.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-up-delay justify-center sm:justify-start">
                <a
                  href="/government"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-wide transition-all duration-300 hover:opacity-90 text-center"
                >
                  Public Sector
                </a>
                <a
                  href="/political-risk"
                  className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary text-sm uppercase tracking-wide transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-center"
                >
                  Political Risk
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in-delay">
              <div className="aspect-[4/3] overflow-hidden border border-border">
                <img 
                  src={heroImage} 
                  alt="Oxford library interior with ornate dome ceiling and bookshelves" 
                  className="w-full h-full object-cover"
                />
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
              At Hakim Global, we provide decision-makers with clear, research-driven solutions to political, regulatory, and institutional challenges. We combine a deep contextual understanding with rigorous Oxford-level analysis to turn complexity into strategic clarity.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
