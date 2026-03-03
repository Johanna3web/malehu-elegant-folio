import { Code, Database, Target, Brain, Users } from "lucide-react";

const skillsData = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["HTML5 / CSS3 / JavaScript", "React & TypeScript", "Responsive Design"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    skills: ["SQL & NoSQL Databases", "ETL & Data Pipelines", "Cloud (AWS / GCP)", "Big Data (Spark / Kafka)", "Data Warehousing"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["Python (Pandas / NumPy)", "ML & Statistical Modeling", "Experimentation & A/B Testing"],
  },
  {
    icon: Target,
    title: "Data Analytics & BI",
    skills: ["Data Visualization", "Business Intelligence", "SQL Querying", "Data Storytelling"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Communication & Active Listening", "Teamwork & Collaboration", "Problem-Solving & Critical Thinking", "Adaptability & Emotional Intelligence"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-14 text-center animate-fade-in">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={22} />
                </div>
                <h3 className="text-sm font-heading font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-1.5">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-xs text-foreground/65 leading-snug">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
