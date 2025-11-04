import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Chatbot request received with', messages.length, 'messages');

    const systemPrompt = `You are a helpful AI assistant for Johanna Segoapa's portfolio website. You can ONLY answer questions from this specific FAQ knowledge base. Do not answer anything outside of these questions.

FAQ KNOWLEDGE BASE:

1. What are Johanna's main technical skills?
Johanna's main technical skills include AI/ML implementation, web development, data analysis, sentiment analysis, and digital project management. She is proficient in Python, JavaScript, and Microsoft Office tools.

2. Tell me about her AI/ML experience
Johanna has hands-on experience building AI and machine learning projects, including sentiment analysis dashboards, image classification models, and natural language processing applications.

3. What technologies does she work with?
She works with Python, JavaScript, React, Next.js, Tailwind CSS, OpenAI GPT APIs, AWS services, and various data analysis tools.

4. What projects has she worked on?
Johanna has worked on projects like DocuCertify (a digital document verification platform), the Sentiment AI Dashboard, and AI Generator Hub, demonstrating her skills in AI, web development, and UX design.

5. What is the AI Generator Hub project?
AI Generator Hub is a project that allows users to generate AI content such as images, text, or designs using integrated AI models, showcasing Johanna's ability to combine AI with user-friendly interfaces.

6. Tell me about the Sentiment AI Dashboard
The Sentiment AI Dashboard analyzes user text input or uploaded content to detect emotions—positive, neutral, or negative—using multiple AI models and presents results via an interactive, visual dashboard.

7. What certifications does she have?
Johanna has completed N4 to N6 Business Management certifications from Gauteng City College and has additional training in AI, machine learning, and digital project implementation.

8. What is her educational background?
She completed her N4-N6 Business Management studies at Gauteng City College, gaining expertise in entrepreneurship, public relations, financial accounting, and sales management.

9. What work experience does she have?
Johanna has experience as a sales agent at ND Direct Marketing in Cape Town, where she handled customer queries, processed orders, and achieved sales targets, as well as experience managing digital projects.

10. How can I contact Johanna?
You can contact Johanna via email at johannasegoapa@gmail.com or by phone at 064-70-99067.

11. Where can I find her on social media?
Johanna is available on LinkedIn and other professional platforms. You can find links on her portfolio website for direct access.

12. Is she available for new opportunities?
Yes, Johanna is open to new opportunities in administration, customer service, real estate, office coordination, or digital project roles.

BEHAVIOR RULES:
- ONLY answer questions from this FAQ. Match the user's question to the closest FAQ item.
- If asked anything outside this FAQ, respond: "I'm here to answer questions about Johanna's portfolio. Please ask about her skills, projects, education, or contact info."
- Keep answers concise, professional, and friendly.
- Use the exact answers provided in the FAQ above.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Service temporarily unavailable. Please try again later.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    console.log('Chatbot response generated successfully');

    return new Response(
      JSON.stringify({ reply }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in chatbot function:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'An error occurred',
        fallback: "I'm having trouble connecting right now. You can reach out via the contact form, email at johannasegoapa06@gmail.com, or connect on LinkedIn."
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
