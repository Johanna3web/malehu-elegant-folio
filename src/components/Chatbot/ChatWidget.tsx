import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import LeadCaptureForm from "./LeadCaptureForm";
import FAQMode from "./FAQMode";

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [isFAQMode, setIsFAQMode] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Load conversation history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('chatbot-history');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMessages(parsed.map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp)
        })));
      } catch (e) {
        console.error('Failed to load chat history:', e);
      }
    }
  }, []);

  // Save conversation history to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatbot-history', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Check if user is asking about contact
    if (input.toLowerCase().includes('contact') || input.toLowerCase().includes('email') || input.toLowerCase().includes('reach')) {
      setShowLeadCapture(true);
    }

    try {
      // Keep only last 6 messages for context
      const contextMessages = [...messages, userMessage].slice(-6).map(m => ({
        role: m.role,
        content: m.content
      }));

      const { data, error } = await supabase.functions.invoke('chatbot', {
        body: { messages: contextMessages }
      });

      if (error) throw error;

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.reply || data.fallback || "I'm having trouble responding right now. Please try again.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      
      const fallbackMessage: Message = {
        role: 'assistant',
        content: "I'm having trouble connecting right now. You can reach out via the contact form, email at johannasegoapa06@gmail.com, or connect on LinkedIn.",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, fallbackMessage]);
      
      toast({
        title: "Connection Error",
        description: "Unable to reach the chatbot. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearHistory = () => {
    setMessages([]);
    localStorage.removeItem('chatbot-history');
    toast({
      title: "Chat Cleared",
      description: "Conversation history has been cleared."
    });
  };

  const toggleMode = () => {
    setIsFAQMode(!isFAQMode);
  };

  return (
    <>
      {/* Chat Widget Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-elegant hover:scale-110 transition-smooth z-50 ${isOpen ? 'hidden' : ''}`}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[380px] h-[600px] bg-card border border-border rounded-lg shadow-elegant flex flex-col z-50 animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <div>
                <h3 className="font-semibold">Portfolio Assistant</h3>
                <p className="text-xs opacity-90">Ask me anything!</p>
              </div>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary-foreground/10"
            >
              <X size={20} />
            </Button>
          </div>

          {/* Privacy Note */}
          <div className="px-4 py-2 bg-muted/30 text-xs text-muted-foreground border-b border-border">
            💡 Conversations stored locally on your device only
          </div>

          {/* Mode Toggle */}
          <div className="px-4 py-2 border-b border-border flex gap-2">
            <Button
              size="sm"
              variant={!isFAQMode ? "default" : "outline"}
              onClick={() => setIsFAQMode(false)}
              className="flex-1"
            >
              Chat
            </Button>
            <Button
              size="sm"
              variant={isFAQMode ? "default" : "outline"}
              onClick={toggleMode}
              className="flex-1"
            >
              FAQ
            </Button>
          </div>

          {/* Content Area */}
          {isFAQMode ? (
            <FAQMode onQuestionSelect={(question) => {
              setIsFAQMode(false);
              setInput(question);
            }} />
          ) : (
            <>
              {/* Messages */}
              <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                {messages.length === 0 && (
                  <div className="text-center text-muted-foreground py-8">
                    <MessageCircle size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="text-sm">Hi! I'm here to help you learn about Johanna's skills, projects, and experience.</p>
                    <p className="text-xs mt-2">Try asking "What projects has she worked on?"</p>
                  </div>
                )}
                
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
                  >
                    <div
                      className={`inline-block max-w-[80%] px-4 py-2 rounded-lg ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader2 className="animate-spin" size={16} />
                    <span className="text-sm">Thinking...</span>
                  </div>
                )}
              </ScrollArea>

              {/* Lead Capture */}
              {showLeadCapture && (
                <div className="px-4 pb-2">
                  <LeadCaptureForm onClose={() => setShowLeadCapture(false)} />
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2 mb-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    disabled={isLoading}
                    className="flex-1"
                    aria-label="Chat message input"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    size="icon"
                    aria-label="Send message"
                  >
                    <Send size={18} />
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={clearHistory}
                    className="text-xs"
                  >
                    Clear History
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowLeadCapture(!showLeadCapture)}
                    className="text-xs"
                  >
                    <Mail size={14} className="mr-1" />
                    Contact Form
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatWidget;
