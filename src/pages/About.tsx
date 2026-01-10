import Layout from "@/components/Layout";
import founderPhoto from "@/assets/founder-ashkan.jpeg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-hero leading-tight animate-fade-in">
              About Hakim
            </h1>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Founding
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Hakim Global was founded at St Antony's College, University of Oxford, in response to the growing complexity of the political, institutional, and cultural environments shaping decisions in both the public and private sectors.
              </p>
              <p>
                The group grew out of engagement at the intersection of academia, diplomacy, and corporate strategy. Through conversations with academics and diplomats, it became clear how public institutions—particularly diplomatic missions—could benefit from rigorous scholarly insight, whether in structuring complex political questions or navigating the UK policy landscape. At the same time, first-hand experience in corporate strategy consulting revealed how companies often enter politically complex environments without adequately accounting for sanctions exposure, regulatory volatility, or the likelihood of state intervention, frequently treating political context as secondary to commercial considerations.
              </p>
              <p>
                Early work with UK-based embassies involved the production of analytical notes to support policy teams in situating contemporary issues within their broader political and institutional context, mapping stakeholders, and navigating the UK policy environment. Building on this experience, Hakim Global was established as an independent platform for research-driven political analysis, and has since expanded to include political risk and monitoring work for private-sector clients.
              </p>
              <p>
                Hakim carries meaning in both Arabic and Persian. In Arabic, it denotes wisdom, judgment, and the ability to act with discernment; in Persian, it similarly evokes learned judgment grounded in knowledge, experience, and restraint. We chose the name Hakim to reflect our approach: careful analysis rather than assertion, clarity over noise, and research informed by deep context rather than surface-level signals.
              </p>
              <p>
                Hakim Global brings regional expertise across the Middle East, South Asia, Latin America, and Europe, and conducts research and project work in eight languages. Research teams consist of DPhil and MPhil graduates, each with deep, region-specific focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <img 
                src={founderPhoto} 
                alt="Ashkan Hashemipour, Founder of Hakim Global" 
                className="w-full max-w-xs mx-auto lg:mx-0 rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                Meet the Founder
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Ashkan Hashemipour is the founder of Hakim Global. He is a doctoral researcher at the University of Oxford, where his research focuses on the historical foundations of transnational political networks in the Middle East, particularly in relation to Iran. Prior to Oxford, he worked as a strategy consultant at Kaiser Associates in Washington, D.C., advising clients across financial services, healthcare, and industrial sectors. He has also conducted research at the University of Chicago, where he completed his undergraduate degree, and at Harvard and MIT as a research assistant. You can find him on LinkedIn{" "}
                  <a 
                    href="https://www.linkedin.com/in/ashton-hashemipour/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    here
                  </a>.
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
