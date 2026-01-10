import Layout from "@/components/Layout";

const GovernmentServices = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-hero leading-tight animate-fade-in mb-6">
              Public Sector
            </h1>
            <p className="text-hero/80 leading-relaxed text-lg">
              Our work combines doctoral-level analysis with deep contextual understanding to support informed reflection on policy, political dynamics, and institutional environments within the public sector.
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">

            <div className="space-y-8">
              <div className="p-8 bg-background border border-border transition-all duration-300 hover:border-foreground/20">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Analytical Briefings & Notes
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We produce analytical briefings and background papers that examine political developments, institutional dynamics, and historical context relevant to public-sector actors. Our work is intended to clarify constraints, identify trajectories, and support informed internal discussion.
                </p>
              </div>

              <div className="p-8 bg-background border border-border transition-all duration-300 hover:border-foreground/20">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Diplomatic & Host-Country Engagement
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We examine host-country political institutions, policy debates, and broader political dynamics to provide contextual understanding relevant to diplomatic missions operating in the United Kingdom. This work is analytical in nature, rather than lobbying.
                </p>
              </div>

              <div className="p-8 bg-background border border-border transition-all duration-300 hover:border-foreground/20">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Roundtables
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We convene informal, off-the-record discussions that bring together academic specialists and policy practitioners to explore regional and international political issues. These exchanges are exploratory and analytical, focused on mutual understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Want to work with us?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Get in touch at{" "}
              <a href="mailto:ashkan@hakim-global.com" className="text-foreground hover:underline">
                ashkan@hakim-global.com
              </a>{" "}
              or through{" "}
              <a href="/contact" className="text-foreground hover:underline">
                this form
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GovernmentServices;
