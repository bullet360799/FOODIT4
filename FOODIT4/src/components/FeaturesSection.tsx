import { useState } from "react";
import { Zap, Palette, Shield, Globe, Code, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized performance that delivers blazing-fast load times and smooth interactions.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description:
      "Stunning templates and components crafted by world-class designers.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security to keep your data safe and your mind at ease.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Deploy worldwide with our distributed network of edge servers.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Code,
    title: "Developer First",
    description:
      "Clean APIs and comprehensive documentation for seamless integration.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Layers,
    title: "Flexible Stack",
    description:
      "Works with your favorite frameworks and tools out of the box.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-sm font-semibold text-primary uppercase tracking-wider">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Powerful features designed to help you create, launch, and scale
            your digital presence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl gradient-card border border-border transition-all duration-500 cursor-pointer ${
                  isHovered ? "shadow-medium -translate-y-2" : "shadow-soft"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${
                    feature.bgColor
                  } mb-6 transition-transform duration-300 ${
                    isHovered ? "scale-110" : ""
                  }`}
                >
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 gradient-hero rounded-b-2xl transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
