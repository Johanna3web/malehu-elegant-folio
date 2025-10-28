import { GraduationCap, Award } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const educationData = [
  {
    degree: "N4–N6 Certificates in Business Management",
    institution: "Educational Institution",
    year: "Year Completed",
    description: "Comprehensive business management training covering core principles, operations, and strategic planning."
  },
  {
    degree: "FNB App Academy Certificate of Completion",
    institution: "FNB App Academy",
    year: "2025",
    description: "Intensive training in application development, digital innovation, and modern technology practices.",
    highlight: true
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12 text-center animate-fade-in">
          Education & Certifications
        </h2>
        
        {/* Formal Education */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {educationData.map((item, index) => (
            <Card 
              key={index}
              className={`p-8 border-border hover-lift bg-card shadow-soft animate-slide-in ${
                item.highlight ? "border-accent border-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-full ${
                  item.highlight ? "bg-accent/30" : "bg-primary/20"
                }`}>
                  <GraduationCap className={item.highlight ? "text-accent" : "text-primary"} size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-lg text-secondary mb-2">{item.institution}</p>
                  <p className="text-muted-foreground mb-3">{item.year}</p>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Professional Certifications */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Professional Certificates */}
            <Card className="p-8 bg-gradient-warm text-primary-foreground shadow-elegant">
              <div className="flex items-center gap-4 mb-6">
                <Award className="text-accent" size={40} />
                <div>
                  <h3 className="text-3xl font-heading font-bold">17</h3>
                  <p className="text-sm opacity-90">Professional Certificates</p>
                </div>
              </div>
              <p className="leading-relaxed opacity-90">
                Diverse range of professional certifications from Coursera covering business analytics, digital marketing, project management, and professional development.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge className="bg-accent text-accent-foreground">Business Analytics</Badge>
                <Badge className="bg-accent text-accent-foreground">Digital Marketing</Badge>
                <Badge className="bg-accent text-accent-foreground">Project Management</Badge>
              </div>
            </Card>

            {/* AI Certificates */}
            <Card className="p-8 bg-accent/20 border-accent border-2 shadow-elegant">
              <div className="flex items-center gap-4 mb-6">
                <Award className="text-accent" size={40} />
                <div>
                  <h3 className="text-3xl font-heading font-bold text-primary">12</h3>
                  <p className="text-sm text-foreground/70">Artificial Intelligence Certificates</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Specialized certifications in Artificial Intelligence and Machine Learning from Coursera, demonstrating expertise in emerging technologies and innovation.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary">Machine Learning</Badge>
                <Badge variant="secondary">Deep Learning</Badge>
                <Badge variant="secondary">AI Fundamentals</Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
