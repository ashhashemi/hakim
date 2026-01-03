import Layout from "@/components/Layout";

const PoliticalRiskServices = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-hero leading-tight animate-fade-in">
              Political Risk
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-muted-foreground leading-relaxed text-lg">
              We equip companies with research-driven political and economic analysis to assess political risk, guide market entry, and manage government relations.
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
                  Market Entry
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We support firms entering new markets through rigorous political and economic analysis of regulatory frameworks, state–market relations, and sources of political risk. Our work helps clients assess feasibility, anticipate constraints, and design informed entry strategies in complex environments.
                </p>
              </div>

              <div className="p-8 bg-background border border-border transition-all duration-300 hover:border-foreground/20">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Monitoring
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We monitor political, regulatory, and institutional developments that shape operating environments over time. Through ongoing analysis, we help firms identify emerging risks, anticipate policy shifts, and understand how changes in regulation and enforcement may affect their activities.
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
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Let's discuss how Hakim Group can support your organisation's objectives.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-wide transition-all duration-300 hover:opacity-90"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PoliticalRiskServices;
