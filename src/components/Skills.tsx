import { Card } from "./ui/card";
import { Briefcase, Zap, Users, Target, TrendingUp, Brain } from "lucide-react";

const skillsData = [
  {
    icon: Briefcase,
    title: "Business Management",
    skills: ["Strategic Planning", "Project Management", "Business Analysis"]
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    skills: ["Process Optimization", "Digital Strategy", "Change Management"]
  },
  {
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    skills: ["AI Fundamentals", "Machine Learning Concepts", "Data Analytics"]
  },
  {
    icon: Users,
    title: "Communication & Team Collaboration",
    skills: ["Cross-functional Collaboration", "Stakeholder Engagement", "Presentation Skills"]
  },
  {
    icon: Target,
    title: "Problem Solving",
    skills: ["Critical Thinking", "Analytical Skills", "Solution Design"]
  },
  {
    icon: TrendingUp,
    title: "Adaptability & Continuous Learning",
    skills: ["Growth Mindset", "Technology Adoption", "Self-directed Learning"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12 text-center animate-fade-in">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
