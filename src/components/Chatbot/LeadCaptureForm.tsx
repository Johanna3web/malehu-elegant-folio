import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, X } from "lucide-react";

interface LeadCaptureFormProps {
  onClose: () => void;
}

const LeadCaptureForm = ({ onClose }: LeadCaptureFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: { name, email, message }
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. Johanna will get back to you soon."
      });

      setName("");
      setEmail("");
      setMessage("");
      onClose();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-muted/50 rounded-lg p-4 border border-border">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-sm">Get in Touch</h4>
        <Button size="icon" variant="ghost" onClick={onClose} className="h-6 w-6">
          <X size={14} />
        </Button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isSubmitting}
          required
          className="text-sm"
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          required
          className="text-sm"
        />
        <Textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isSubmitting}
          required
          className="text-sm min-h-[80px]"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full"
          size="sm"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
