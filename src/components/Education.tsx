import { GraduationCap, ExternalLink, ChevronDown } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import n4Cert from "@/assets/certificates/n4-business-management.png";
import n5Cert from "@/assets/certificates/n5-business-management.png";
import n6Cert from "@/assets/certificates/n6-business-management.png";
import fnbCert from "@/assets/certificates/fnb-full-stack-development.png";
import aiForEveryone from "@/assets/certificates/ai-for-everyone.png";
import supervisedML from "@/assets/certificates/supervised-machine-learning.png";
import googleAI from "@/assets/certificates/google-intro-to-ai.png";
import ibmAI from "@/assets/certificates/ibm-intro-to-ai.png";
import intelAI from "@/assets/certificates/intel-ai-essentials.png";
import asuAI from "@/assets/certificates/asu-ai-prompt-engineering.png";
import ibmPython from "@/assets/certificates/ibm-python-data-science.png";
import advancedLearning from "@/assets/certificates/advanced-learning-algorithms.png";
import unsupervisedLearning from "@/assets/certificates/unsupervised-learning.png";
import googleResponsibleAI from "@/assets/certificates/google-responsible-ai.png";
import jhTrustworthyAI from "@/assets/certificates/johns-hopkins-trustworthy-ai.png";
import generativeLLMs from "@/assets/certificates/generative-ai-with-llms.png";

const educationData = [
  {
    degree: "N4–N6 Certificates in Business Management",
    institution: "Educational Institution",
    year: "2023",
    description: "Comprehensive business management training covering core principles, operations, and strategic planning."
  },
  {
    degree: "Full Stack Development Certificate",
    institution: "FNB Academy",
    year: "2024",
    description: "Comprehensive full-stack development training covering HTML, CSS, JavaScript, React, Node.js, and modern web development practices.",
    highlight: true
  }
];

const courseraData = [
  { name: "Generative AI with Large Language Models (AWS x DeepLearning.AI)", image: generativeLLMs, category: "Coursera" },
  { name: "AI For Everyone", image: aiForEveryone, category: "Coursera" },
  { name: "Introduction to AI (Google)", image: googleAI, category: "Coursera" },
  { name: "Introduction to AI (IBM)", image: ibmAI, category: "Coursera" },
  { name: "AI Essentials (Intel)", image: intelAI, category: "Coursera" },
  { name: "AI Prompt Engineering (ASU)", image: asuAI, category: "Coursera" },
  { name: "Python for Data Science, AI & Development", image: ibmPython, category: "Coursera" },
  { name: "Advanced Learning Algorithms", image: advancedLearning, category: "Coursera" },
  { name: "Unsupervised Learning, Recommenders, Reinforcement Learning", image: unsupervisedLearning, category: "Coursera" },
  { name: "Introduction to Responsible AI", image: googleResponsibleAI, category: "Coursera" },
  { name: "Trustworthy AI: Managing Bias, Ethics, and Accountability", image: jhTrustworthyAI, category: "Coursera" },
];

const businessData = [
  { name: "N4 Business Management", image: n4Cert, category: "Business Management" },
  { name: "N5 Business Management", image: n5Cert, category: "Business Management" },
  { name: "N6 Business Management", image: n6Cert, category: "Business Management" },
];

const fnbData = [
  { name: "Full Stack Development", image: fnbCert, category: "FNB Academy" },
];

const Education = () => {

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12 text-center animate-fade-in">
          Education & Certifications
        </h2>
        
        {/* Formal Education */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {educationData.map((item, index) => (
            <Card 
              key={index}
              className={`p-8 border-border hover-lift bg-card shadow-soft animate-slide-in ${
                item.highlight ? "border-accent border-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-full ${
                  item.highlight ? "bg-accent/30" : "bg-primary/20"
                }`}>
                  <GraduationCap className={item.highlight ? "text-accent" : "text-primary"} size={32} />
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

        {/* Certificates Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {/* Coursera Certificates */}
            <AccordionItem value="coursera" className="border border-border rounded-lg px-6 bg-card shadow-soft">
              <AccordionTrigger className="text-2xl font-heading font-semibold text-primary hover:text-accent">
                Coursera Certificates ({courseraData.length})
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  {courseraData.map((cert, index) => (
                    <Card 
                      key={index}
                      className="group overflow-hidden border-border hover-lift bg-card shadow-soft cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                      onClick={() => window.open(cert.image, '_blank')}
                    >
                      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                        <img 
                          src={cert.image} 
                          alt={cert.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full">
                            <ExternalLink className="text-accent mb-2" size={24} />
                            <p className="text-sm text-foreground/90">Click to view full certificate</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <Badge variant="secondary" className="mb-2">{cert.category}</Badge>
                        <h4 className="font-heading font-semibold text-primary text-sm">{cert.name}</h4>
                      </div>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Business Management Certificates */}
            <AccordionItem value="business" className="border border-border rounded-lg px-6 bg-card shadow-soft">
              <AccordionTrigger className="text-2xl font-heading font-semibold text-primary hover:text-accent">
                N4–N6 Business Management Certificates ({businessData.length})
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                  {businessData.map((cert, index) => (
                    <Card 
                      key={index}
                      className="group overflow-hidden border-border hover-lift bg-card shadow-soft cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                      onClick={() => window.open(cert.image, '_blank')}
                    >
                      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                        <img 
                          src={cert.image} 
                          alt={cert.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full">
                            <ExternalLink className="text-accent mb-2" size={24} />
                            <p className="text-sm text-foreground/90">Click to view full certificate</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <Badge variant="secondary" className="mb-2">{cert.category}</Badge>
                        <h4 className="font-heading font-semibold text-primary text-sm">{cert.name}</h4>
                      </div>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* FNB Academy Certificate */}
            <AccordionItem value="fnb" className="border border-border rounded-lg px-6 bg-card shadow-soft">
              <AccordionTrigger className="text-2xl font-heading font-semibold text-primary hover:text-accent">
                Full Stack Development Certificate ({fnbData.length})
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                  {fnbData.map((cert, index) => (
                    <Card 
                      key={index}
                      className="group overflow-hidden border-border hover-lift bg-card shadow-soft cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                      onClick={() => window.open(cert.image, '_blank')}
                    >
                      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                        <img 
                          src={cert.image} 
                          alt={cert.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full">
                            <ExternalLink className="text-accent mb-2" size={24} />
                            <p className="text-sm text-foreground/90">Click to view full certificate</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <Badge variant="secondary" className="mb-2">{cert.category}</Badge>
                        <h4 className="font-heading font-semibold text-primary text-sm">{cert.name}</h4>
                      </div>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Education;
