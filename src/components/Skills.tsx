import { Card } from "./ui/card";
import { Monitor, Zap, Users, TrendingUp } from "lucide-react";

const skillsData = [
  {
    icon: Monitor,
    title: "Digital Proficiency",
    skills: ["Microsoft Office Suite", "Google Workspace", "Project Management Tools"]
  },
  {
    icon: Zap,
    title: "Technical Skills",
    skills: ["Data Analysis", "Digital Marketing", "Content Creation"]
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Communication", "Leadership", "Team Collaboration"]
  },
  {
    icon: TrendingUp,
    title: "Professional Skills",
    skills: ["Strategic Planning", "Problem Solving", "Time Management"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12 text-center animate-fade-in">
          Digital Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 border-border hover-lift bg-card shadow-soft text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2 text-foreground/70">
                  {category.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
