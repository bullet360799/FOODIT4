import { Check } from "lucide-react";

const benefits = [
  "Intuitive drag-and-drop interface",
  "Real-time collaboration tools",
  "Advanced analytics dashboard",
  "24/7 priority support",
  "Custom domain support",
  "SSL certificates included",
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 gradient-dark text-secondary-foreground relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="font-display text-sm font-semibold text-primary uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              We're Building the Future of{" "}
              <span className="text-primary">Web Creation</span>
            </h2>
            <p className="font-body text-secondary-foreground/80 text-lg mb-8 leading-relaxed">
              Our mission is to democratize web development by providing
              intuitive tools that empower anyone to create stunning digital
              experiences without writing a single line of code.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full gradient-hero flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-body text-secondary-foreground/90">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative">
            <div className="bg-card/10 backdrop-blur-sm rounded-3xl p-8 border border-secondary-foreground/10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "50M+", label: "Websites Created" },
                  { value: "190+", label: "Countries Served" },
                  { value: "4.9/5", label: "User Rating" },
                  { value: "98%", label: "Uptime SLA" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-secondary-foreground/5 hover:bg-secondary-foreground/10 transition-colors duration-300"
                  >
                    <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="font-body text-sm text-secondary-foreground/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full gradient-hero opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent/20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
