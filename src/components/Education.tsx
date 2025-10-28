import { GraduationCap } from "lucide-react";
import { Card } from "./ui/card";

const educationData = [
  {
    degree: "Bachelor's Degree",
    institution: "University Name",
    year: "2018 - 2022",
    description: "Major in relevant field with honors"
  },
  {
    degree: "High School Diploma",
    institution: "High School Name",
    year: "2014 - 2018",
    description: "Excellence in academics and extracurricular activities"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12 text-center animate-fade-in">
          Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((item, index) => (
            <Card 
              key={index}
              className="p-8 border-border hover-lift bg-card shadow-soft animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-accent/20 p-4 rounded-full">
                  <GraduationCap className="text-accent" size={32} />
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
      </div>
    </section>
  );
};

export default Education;
