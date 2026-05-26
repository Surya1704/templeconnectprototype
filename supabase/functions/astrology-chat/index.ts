// Astrology AI edge function — streams responses from Lovable AI Gateway
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { messages, birthDetails } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY missing");

    const systemPrompt = `You are Jyoti AI — a warm, knowledgeable Vedic astrology guide for Faith Connect (an Indian temple discovery platform). You blend authentic Jyotish wisdom (nakshatras, dashas, grahas, rashis, doshas) with practical, grounded guidance.

Voice:
- Warm, calm, never preachy. Speak like a thoughtful Indian elder, not a fortune teller.
- Use Sanskrit terms naturally (with brief meanings in parentheses on first use).
- Be specific. Reference planets, houses, nakshatras when relevant.
- When a user asks a yes/no destiny question, gently reframe toward self-understanding.
- When relevant, suggest a temple or deity to visit from Faith Connect (Shiva for transformation, Hanuman for courage, Saraswati for clarity, etc.).
- Keep responses 2-4 short paragraphs. Use markdown for emphasis.

${birthDetails ? `User's birth details:
- Date: ${birthDetails.date || "not provided"}
- Time: ${birthDetails.time || "not provided"}
- Place: ${birthDetails.place || "not provided"}
Use these for personalized readings. If missing, ask for them gently when needed.` : "If a personalized reading is requested, ask the user to share birth date, time, and place."}

Never claim to predict exact future events. Frame insights as tendencies, not certainties.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [{ role: "system", content: systemPrompt }, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Too many requests, please slow down." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits in Workspace settings." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("Gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("astrology-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
