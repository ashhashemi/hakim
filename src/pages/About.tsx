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
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed animate-slide-up-delay">
              Founded on the belief that the best solutions emerge when academic
              rigor meets strategic thinking.
            </p>
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
                  Hakim Group was founded with a singular vision: to bridge the
                  gap between scholarly expertise and practical business
                  strategy. We recognized that too often, valuable academic
                  insights remained confined to journals and classrooms, while
                  businesses struggled with challenges that research had already
                  addressed.
                </p>
                <p>
                  Our team comprises experienced professionals who have walked
                  both paths—contributing to academic discourse while also
                  leading transformative initiatives in the corporate world.
                  This dual perspective allows us to translate complex theories
                  into actionable strategies.
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

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Intellectual Rigor",
                description:
                  "Every recommendation we make is grounded in thorough research and analysis. We believe in evidence-based decision making.",
              },
              {
                title: "Practical Impact",
                description:
                  "Theory without application is incomplete. We focus on delivering tangible results that drive real organizational change.",
              },
              {
                title: "Collaborative Partnership",
                description:
                  "We work alongside our clients, not above them. True transformation happens through genuine collaboration.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
