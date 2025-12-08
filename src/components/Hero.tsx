import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 gradient-warm opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-primary">
          Malehu Johanna Segoapa
        </h1>
        <p className="text-xl md:text-2xl text-accent mb-4 max-w-2xl mx-auto font-medium">
          Data Analyst | Digital Associate | Business Management Graduate | Lifelong Learner
        </p>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
          Driven by curiosity and a passion for technology, I combine business insight with digital innovation to create meaningful impact.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-hover transition-smooth shadow-soft"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>
        <button 
          onClick={() => scrollToSection("about")}
          className="mt-16 animate-bounce cursor-pointer hover:opacity-70 transition-opacity"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="mx-auto text-accent" size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
