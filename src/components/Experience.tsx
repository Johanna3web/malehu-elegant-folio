import { Briefcase } from "lucide-react";
import { Card } from "./ui/card";

const experienceData = [
  {
    role: "Data Engineering Associate",
    company: "Capaciti",
    period: "Current",
    description: "Supporting data engineering projects by designing, building, and maintaining data pipelines, transforming raw data into reliable datasets, and collaborating across teams to deliver accurate, scalable, and data-driven solutions.",
    current: true
  },
  {
    role: "Digital Associate",
    company: "Capaciti",
    period: "",
    description: "Supporting digital transformation projects, leveraging technology for business growth, and collaborating across teams to deliver innovative digital solutions.",
    current: false
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center animate-fade-in">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((item, index) => (
            <Card 
              key={index}
              className={`p-8 border-border hover-lift bg-card shadow-soft animate-slide-in ${
                item.current ? "border-primary border-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Briefcase className="text-primary" size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-heading font-semibold text-foreground">
                      {item.role}
                    </h3>
                    {item.current && (
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-primary mb-2">{item.company}</p>
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
