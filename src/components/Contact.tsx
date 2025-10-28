import { Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 animate-fade-in">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/70 mb-12 animate-fade-in-up">
            I'm always open to discussing new opportunities, collaborations, or simply connecting 
            with fellow professionals. Feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up">
            <Button 
              size="lg"
              className="bg-primary hover:bg-hover transition-smooth shadow-soft"
              onClick={() => window.location.href = "mailto:contact@example.com"}
            >
              <Mail className="mr-2" size={20} />
              Email Me
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-primary-foreground transition-smooth"
              onClick={() => window.location.href = "tel:+1234567890"}
            >
              <Phone className="mr-2" size={20} />
              Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
