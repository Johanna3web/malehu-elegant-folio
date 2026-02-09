import { Card } from "./ui/card";
import { Code, Database, Target, Brain, Users, Heart } from "lucide-react";

const skillsData = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["HTML5, CSS3, JavaScript", "React", "Responsive Design"]
  },
  {
    icon: Database,
    title: "Data Engineering",
    skills: ["SQL & NoSQL", "ETL & Pipelines", "Cloud Platforms (AWS/GCP)", "Big Data (Spark/Kafka)", "Data Warehousing"]
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["Python (Pandas/NumPy)", "Machine Learning", "Statistical Modeling", "Experimentation (A/B Testing)"]
  },
  {
    icon: Target,
    title: "Data Analytics & BI",
    skills: ["Data Visualization", "Business Intelligence (BI)", "SQL Querying", "A/B Testing", "Data Storytelling"]
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Communication (Verbal, Written, Active Listening)", "Teamwork & Collaboration", "Problem-Solving & Critical Thinking", "Adaptability & Flexibility", "Emotional Intelligence"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center animate-fade-in">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-4 border-border hover-lift bg-card shadow-soft text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="text-primary" size={22} />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-1.5 text-sm text-foreground/70">
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
