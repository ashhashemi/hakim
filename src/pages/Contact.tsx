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

  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const wordCount = countWords(formData.message);
  const maxWords = 500;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (wordCount > maxWords) {
      toast({
        title: "Message too long",
        description: `Please limit your message to ${maxWords} words.`,
        variant: "destructive",
      });
      return;
    }

    const mailtoLink = `mailto:ashkan@hakim-global.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your email client should open with the message ready to send.",
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
              Contact
            </h1>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed animate-slide-up-delay">
              Get in touch via email at{" "}
              <a href="mailto:ashkan@hakim-global.com" className="text-foreground hover:underline">
                ashkan@hakim-global.com
              </a>{" "}
              or send a message using the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="font-serif text-2xl text-foreground mb-8">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Name, Email, Organization */}
                <div className="space-y-6">
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
                </div>

                {/* Right Column - Message */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <label
                      htmlFor="message"
                      className="block text-sm text-foreground"
                    >
                      Message
                    </label>
                    <span className={`text-xs ${wordCount > maxWords ? 'text-destructive' : 'text-muted-foreground'}`}>
                      {wordCount}/{maxWords} words
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={10}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-foreground transition-colors resize-none flex-1"
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-wide transition-all duration-300 hover:opacity-90"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
