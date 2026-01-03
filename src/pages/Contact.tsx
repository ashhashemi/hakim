import { useState } from "react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll be in touch soon.",
    });
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-hero leading-tight animate-fade-in">
              Contact Us
            </h1>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed animate-slide-up-delay">
              Ready to transform your organization? Let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="max-w-lg">
              <h2 className="font-serif text-2xl text-foreground mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm text-foreground mb-2"
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-wide transition-all duration-300 hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12">
              <h2 className="font-serif text-2xl text-foreground mb-8">
                Get in Touch
              </h2>
              <div>
                  <h3 className="text-sm uppercase tracking-wide text-foreground mb-2">
                    Email
                  </h3>
                  <p className="text-muted-foreground">
                    contact@hakimglobal.com
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
