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
                  The Hakim Group was founded at St Antony's College, University of Oxford, in response to a recurring failure of private and public institutions to adequately assess the political, institutional, and cultural landscape shaping their decisions. Through both regular exposure to business and financial news, combined with first-hand experience in the corporate strategy consulting sector, we saw companies entering complex political environments without adequately accounting for factors such as sanctions exposure, regulatory volatility, or the potential for state intervention – often treating political context as secondary to commercial considerations.
                </p>
                <p>
                  At the same time, we observed governments – particularly embassies and public institutions operating in the United Kingdom – frequently lacking clarity on how the UK policy environment functions in practice, including which institutions, actors, and stakeholders to engage, and how influence and decision-making operate across formal and informal settings.
                </p>
                <p>
                  Through early work with embassies in the United Kingdom, we provided analytical support that helped diplomatic missions clarify objectives, map relevant stakeholders, and navigate the UK policy environment more effectively. Building on this experience, the Hakim Group was founded to offer independent, research-driven advisory services to decision-makers across public and private sectors and has since expanded to include additional areas of work, such as facilitating political dialogue and conducting risk assessments for market entry.
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
