import { Briefcase } from "lucide-react";
import { Card } from "./ui/card";

const experienceData = [
  {
    role: "Professional Role",
    company: "Company Name",
    period: "2022 - Present",
    description: "Leading initiatives and driving results through strategic planning and execution."
  },
  {
    role: "Previous Position",
    company: "Previous Company",
    period: "2020 - 2022",
    description: "Contributed to key projects and developed essential professional skills."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12 text-center animate-fade-in">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((item, index) => (
            <Card 
              key={index}
              className="p-8 border-border hover-lift bg-card shadow-soft animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Briefcase className="text-primary" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
                    {item.role}
                  </h3>
                  <p className="text-lg text-accent mb-2">{item.company}</p>
                  <p className="text-muted-foreground mb-3">{item.period}</p>
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

export default Experience;
