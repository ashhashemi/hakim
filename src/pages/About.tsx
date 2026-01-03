import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-hero leading-tight animate-fade-in">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Hakim Global was founded at St Antony's College, University of Oxford, in response to the growing complexity of the political, institutional, and cultural environments shaping decisions in both the public and private sectors.
              </p>
              <p>
                In conversations between academics and diplomats, we observed how public institutions – particularly diplomatic missions – could benefit from academic insight, whether in structuring complex political questions or understanding how the UK policy landscape operates. At the same time, drawing on first-hand experience in corporate strategy consulting, we saw companies entering complex political environments without adequately accounting for factors such as sanctions exposure, regulatory volatility, or the potential for state intervention – often treating political context as secondary to commercial considerations.
              </p>
              <p>
                Through early work with UK-based embassies, we contributed analytical notes that helped diplomats navigate the UK policy environment, map relevant stakeholders, and situate contemporary policy questions within their broader context. Building on this experience, Hakim Global was founded to offer independent, research-driven analysis has since expanded to include political risk analyses for private companies.
              </p>
              <p>
                Hakim carries meaning in both Arabic and Persian. In Arabic, it denotes wisdom, judgment, and the ability to act with discernment; in Persian, it similarly evokes learned judgment grounded in knowledge, experience, and restraint. We chose the name Hakim to reflect our approach: careful analysis rather than assertion, clarity over noise, and research informed by deep context rather than surface-level signals.
              </p>
              <p>
                We bring regional expertise across the Middle East, South Asia, Latin America, and Europe, and conduct research and project work in eight languages. Our team consists of DPhil and MPhil graduates, each with deep, region-specific focus.
              </p>
            </div>
            </div>
            <div className="aspect-square bg-muted/50 border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-muted-foreground text-sm">
                  Team image placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default About;
