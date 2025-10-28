import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-warm opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-primary">
          Malehu Johanna Segoapa
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Professional Excellence in Education & Development
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-hover transition-smooth shadow-soft"
            onClick={() => scrollToSection("about")}
          >
            Learn More
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </div>
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-accent" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
