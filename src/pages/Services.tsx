import Layout from "@/components/Layout";

const services = [
  {
    title: "Strategic Advisory",
    description:
      "Comprehensive strategic guidance that combines market insights with academic frameworks to help organizations navigate complex challenges and seize opportunities.",
  },
  {
    title: "Research & Analysis",
    description:
      "Rigorous research methodologies applied to business problems. We provide deep analysis that informs decision-making and drives innovation.",
  },
  {
    title: "Organizational Development",
    description:
      "Transform your organization's capabilities through evidence-based interventions. We help build cultures of continuous learning and improvement.",
  },
  {
    title: "Executive Education",
    description:
      "Tailored learning programs that bring the latest academic thinking to your leadership team. Practical wisdom for today's complex business environment.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-hero leading-tight animate-fade-in">
              Our Services
            </h1>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed animate-slide-up-delay">
              We offer a range of consulting services designed to bring academic
              excellence to practical business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 lg:p-12 bg-background border border-border transition-all duration-300 hover:border-foreground/20"
              >
                <h3 className="font-serif text-2xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Let's discuss how Hakim Group can help your organization achieve
              its strategic objectives.
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

export default Services;
