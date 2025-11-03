import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FAQItem {
  question: string;
  category: string;
}

const faqData: FAQItem[] = [
  { question: "What are Johanna's main technical skills?", category: "Skills" },
  { question: "Tell me about her AI/ML experience", category: "Skills" },
  { question: "What projects has she worked on?", category: "Projects" },
  { question: "What is the AI Generator Hub project?", category: "Projects" },
  { question: "Tell me about the Sentiment AI Dashboard", category: "Projects" },
  { question: "What certifications does she have?", category: "Education" },
  { question: "What is her educational background?", category: "Education" },
  { question: "What work experience does she have?", category: "Experience" },
  { question: "How can I contact Johanna?", category: "Contact" },
  { question: "Where can I find her on social media?", category: "Contact" },
  { question: "What technologies does she work with?", category: "Skills" },
  { question: "Is she available for new opportunities?", category: "Contact" }
];

interface FAQModeProps {
  onQuestionSelect: (question: string) => void;
}

const FAQMode = ({ onQuestionSelect }: FAQModeProps) => {
  const categories = Array.from(new Set(faqData.map(faq => faq.category)));

  return (
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-4">
        <div className="text-center mb-6">
          <HelpCircle size={48} className="mx-auto mb-4 text-primary opacity-70" />
          <h3 className="font-semibold text-lg mb-2">Frequently Asked Questions</h3>
          <p className="text-sm text-muted-foreground">
            Click any question to get started
          </p>
        </div>

        {categories.map(category => (
          <div key={category} className="space-y-2">
            <h4 className="font-semibold text-sm text-primary mb-2">{category}</h4>
            {faqData
              .filter(faq => faq.category === category)
              .map((faq, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-primary hover:text-primary-foreground transition-smooth"
                  onClick={() => onQuestionSelect(faq.question)}
                >
                  <span className="text-sm">{faq.question}</span>
                </Button>
              ))
            }
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default FAQMode;
