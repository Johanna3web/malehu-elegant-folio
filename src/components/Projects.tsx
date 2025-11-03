import { useState } from "react";
import { ExternalLink, Github, Award } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import resumeBuilderImg from "@/assets/projects/resume-builder.png";
import aiGeneratorHubImg from "@/assets/projects/ai-generator-hub.png";
import sentimentDashboardImg from "@/assets/projects/sentiment-dashboard.png";
import landbotChatbotImg from "@/assets/projects/landbot-chatbot.png";

interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  imageUrl?: string;
  links?: {
    github?: string;
    live?: string;
    certificate?: string;
  };
}

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: "1",
      title: "AI Generator Hub",
      description: "A comprehensive AI-powered platform featuring multiple AI generators for various creative and productivity tasks.",
      tools: ["React", "TypeScript", "Tailwind CSS", "AI Integration"],
      imageUrl: aiGeneratorHubImg,
      links: {
        live: "https://johanna-segoapa.vercel.app/",
      },
    },
    {
      id: "2",
      title: "Resume Builder",
      description: "An intuitive resume building application that helps users create professional resumes with ease.",
      tools: ["React", "TypeScript", "Tailwind CSS"],
      imageUrl: resumeBuilderImg,
      links: {
        live: "https://tempo-deployment-d1f34b8f-e90b-4515-ashy.vercel.app/",
      },
    },
    {
      id: "3",
      title: "Sentiment AI Dashboard",
      description: "A comprehensive analytics dashboard for tracking and visualizing sentiment analysis metrics with real-time insights.",
      tools: ["React", "TypeScript", "AI/ML", "Data Visualization"],
      imageUrl: sentimentDashboardImg,
      links: {
        live: "https://sentiment-ai-1682327a.base44.app/",
      },
    },
    {
      id: "4",
      title: "Landbot AI Chatbot",
      description: "An interactive conversational AI chatbot built with Landbot, featuring natural language processing and automated customer engagement.",
      tools: ["Landbot", "AI/ML", "NLP", "Conversational Design"],
      imageUrl: landbotChatbotImg,
      links: {
        live: "https://landbot.online/v3/H-3158721-8RT63U43IP36BDKN/index.html",
      },
    },
  ]);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12 text-center animate-fade-in">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden border-border hover-lift bg-card shadow-soft animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-muted/50 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-heading font-semibold text-primary">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tools/Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="bg-accent/20 text-accent-foreground"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                {project.links && (
                  <div className="flex gap-2 pt-2">
                    {project.links.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(project.links?.github, "_blank")}
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </Button>
                    )}
                    {project.links.live && (
                      <Button
                        size="sm"
                        className="bg-accent hover:bg-hover"
                        onClick={() => window.open(project.links?.live, "_blank")}
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </Button>
                    )}
                    {project.links.certificate && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-accent text-accent"
                        onClick={() => window.open(project.links?.certificate, "_blank")}
                      >
                        <Award size={16} className="mr-1" />
                        Certificate
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
