import { useState } from "react";
import { ExternalLink, Github, Award } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import ImageUpload from "./ImageUpload";

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
      links: {
        live: "https://johanna-segoapa.vercel.app/",
      },
    },
    {
      id: "2",
      title: "Resume Builder",
      description: "An intuitive resume building application that helps users create professional resumes with ease.",
      tools: ["React", "TypeScript", "Tailwind CSS"],
      links: {
        live: "https://tempo-deployment-d1f34b8f-e90b-4515-ashy.vercel.app/",
      },
    },
  ]);

  const [showUpload, setShowUpload] = useState<string | null>(null);

  const handleUploadComplete = (projectId: string, url: string) => {
    console.log(`Project ${projectId} image uploaded:`, url);
    setShowUpload(null);
  };

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
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {showUpload === project.id ? (
                      <div className="p-4 w-full">
                        <ImageUpload
                          bucket="project-images"
                          onUploadComplete={(url) => handleUploadComplete(project.id, url)}
                          label="Upload Project Image"
                        />
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        onClick={() => setShowUpload(project.id)}
                      >
                        Add Project Image
                      </Button>
                    )}
                  </div>
                )}
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
