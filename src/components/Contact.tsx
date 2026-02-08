import { useState } from "react";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) {
        throw new Error(error.message || "Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-12 text-center animate-fade-in">
          Get In Touch
        </h2>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-heading font-semibold text-primary-foreground mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-hover transition-smooth"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info & Resume */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-primary-foreground mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth justify-start"
                  onClick={() => window.open('https://www.linkedin.com/in/malehu-johanna-segoapa-801481390', '_blank')}
                >
                  <Linkedin className="mr-3" size={20} />
                  LinkedIn Profile
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth justify-start"
                  onClick={() => window.open('https://github.com/Johanna3web', '_blank')}
                >
                  <Github className="mr-3" size={20} />
                  GitHub Profile
                </Button>
              </div>
            </div>

            {/* Resume Download */}
            <div>
              <h3 className="text-2xl font-heading font-semibold text-primary-foreground mb-6">
                Download Résumé
              </h3>
              <Button 
                size="lg"
                className="w-full bg-accent hover:bg-hover transition-smooth shadow-soft"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Malehu_Johanna_Segoapa_Resume.pdf';
                  link.click();
                }}
              >
                <Download className="mr-3" size={20} />
                Download My Résumé
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
