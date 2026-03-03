import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: "7",
      title: "SA Universities Quantitative Analysis",
      description: "Data analysis project exploring quantitative metrics across South African universities.",
      tools: ["Python", "Data Analysis", "Pandas", "Visualization"],
      links: { github: "https://github.com/Johanna3web/south-african-universities-quantitative-analysis/tree/main" },
    },
    {
      id: "8",
      title: "Data Management System",
      description: "A data management system for efficient data storage, retrieval, and organization.",
      tools: ["Python", "SQL", "Data Engineering", "ETL"],
      links: { github: "https://github.com/Johanna3web/data-management-system/tree/main" },
    },
    {
      id: "6",
      title: "EduManage",
      description: "Smart student management system for grading, attendance, and AI-powered performance analysis.",
      tools: ["React", "TypeScript", "AI Analytics", "Student Management"],
      links: { live: "https://emsms.netlify.app/" },
    },
    {
      id: "2",
      title: "Resume Builder",
      description: "Intuitive resume building app for creating professional resumes with ease.",
      tools: ["React", "TypeScript", "Tailwind CSS"],
      links: { live: "https://tempo-deployment-d1f34b8f-e90b-4515-ashy.vercel.app/" },
    },
    {
      id: "4",
      title: "AI Chatbot",
      description: "Interactive conversational AI chatbot with NLP and automated customer engagement.",
      tools: ["AI/ML", "NLP", "Conversational Design"],
      links: { live: "https://landbot.online/v3/H-3158721-8RT63U43IP36BDKN/index.html" },
    },
    {
      id: "1",
      title: "AI Generator Hub",
      description: "AI-powered platform with multiple generators for creative and productivity tasks.",
      tools: ["React", "TypeScript", "Tailwind CSS", "AI Integration"],
      links: { live: "https://johanna-segoapa.vercel.app/" },
    },
    {
      id: "3",
      title: "Sentiment AI Dashboard",
      description: "Analytics dashboard for tracking and visualizing sentiment analysis with real-time insights.",
      tools: ["React", "TypeScript", "AI/ML", "Data Visualization"],
      links: { live: "https://sentiment-ai-1682327a.base44.app/" },
    },
    {
      id: "5",
      title: "Fresh or Rotten AI Detector",
      description: "AI-powered prototype detecting fruit/vegetable freshness using image recognition.",
      tools: ["AI/ML", "Teachable Machine", "Image Recognition", "Figma"],
      links: { live: "https://www.figma.com/proto/JHN39GavsiQxhZcvp4OgKV/Youth-in-Power-Teachable-Machine?node-id=22-121&t=7uQalgkrmz0ywgOD-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4&show-proto-sidebar=1" },
    },
  ]);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center animate-fade-in">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden border-border hover-lift bg-card shadow-soft animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-heading font-semibold text-foreground leading-tight">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-xs leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="bg-accent/20 text-accent-foreground text-[10px] px-2 py-0.5"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>

                {project.links && (
                  <div className="flex gap-2 pt-1">
                    {project.links.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs h-8 px-3"
                        onClick={() => window.open(project.links?.github, "_blank")}
                      >
                        <Github size={14} className="mr-1" />
                        Code
                      </Button>
                    )}
                    {project.links.live && (
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-hover text-primary-foreground text-xs h-8 px-3"
                        onClick={() => window.open(project.links?.live, "_blank")}
                      >
                        <ExternalLink size={14} className="mr-1" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
