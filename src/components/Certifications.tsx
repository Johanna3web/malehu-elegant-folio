import { Award } from "lucide-react";
import { Card } from "./ui/card";

const certificationsData = [
  {
    name: "Professional Certification",
    issuer: "Certifying Organization",
    year: "2023"
  },
  {
    name: "Specialized Training",
    issuer: "Training Institute",
    year: "2022"
  },
  {
    name: "Industry Credential",
    issuer: "Professional Body",
    year: "2021"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12 text-center animate-fade-in">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificationsData.map((cert, index) => (
            <Card 
              key={index}
              className="p-6 border-border hover-lift bg-card shadow-soft animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  {cert.name}
                </h3>
                <p className="text-secondary mb-1">{cert.issuer}</p>
                <p className="text-muted-foreground">{cert.year}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
