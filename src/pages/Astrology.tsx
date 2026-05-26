import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Send, Moon, Sun, Star, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What does my moon sign say about my emotional nature?",
  "Which temple should I visit during my Saturn return?",
  "Explain my current dasha period",
  "Remedies for Mangal dosha",
];

const Astrology = () => {
  const [birthDetails, setBirthDetails] = useState({ date: "", time: "", place: "" });
  const [showForm, setShowForm] = useState(true);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Msg = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const resp = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/astrology-chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: next, birthDetails }),
      });

      if (!resp.ok || !resp.body) {
        const err = await resp.json().catch(() => ({ error: "Network error" }));
        toast({ title: "Jyoti AI unavailable", description: err.error || "Please try again", variant: "destructive" });
        setLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let acc = "";
      setMessages((m) => [...m, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        let nl: number;
        while ((nl = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, nl);
          buf = buf.slice(nl + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const j = line.slice(6).trim();
          if (j === "[DONE]") break;
          try {
            const p = JSON.parse(j);
            const delta = p.choices?.[0]?.delta?.content;
            if (delta) {
              acc += delta;
              setMessages((m) => m.map((mm, i) => (i === m.length - 1 ? { ...mm, content: acc } : mm)));
            }
          } catch {
            buf = line + "\n" + buf;
            break;
          }
        }
      }
    } catch (e) {
      toast({ title: "Connection error", description: String(e), variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-spiritual-ivory via-spiritual-ivory to-spiritual-sandstone/20">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spiritual-saffron/10 border border-spiritual-saffron/20 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-spiritual-saffron" />
            <span className="text-xs font-medium tracking-wide text-spiritual-saffron uppercase">Powered by Vedic AI</span>
          </div>
          <h1 className="font-fraunces text-5xl md:text-6xl text-spiritual-maroon mb-4 tracking-tight">
            Jyoti AI
          </h1>
          <p className="text-spiritual-maroon/70 text-lg max-w-xl mx-auto leading-relaxed">
            A modern Vedic astrology companion. Ask about your chart, dashas, doshas, or which temple to visit during your transit.
          </p>
          <div className="flex justify-center gap-6 mt-6 text-spiritual-maroon/40">
            <Moon className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Sun className="w-5 h-5" />
          </div>
        </motion.div>

        {/* Birth details panel */}
        {showForm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Card className="p-6 mb-6 bg-white/70 backdrop-blur border-spiritual-sandstone/40">
              <h3 className="font-fraunces text-xl text-spiritual-maroon mb-1">Birth Details (optional)</h3>
              <p className="text-sm text-spiritual-maroon/60 mb-4">
                Share these for personalized readings. You can skip and just chat.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs text-spiritual-maroon/70 mb-1 block">Date of birth</label>
                  <Input type="date" value={birthDetails.date} onChange={(e) => setBirthDetails({ ...birthDetails, date: e.target.value })} />
                </div>
                <div>
                  <label className="text-xs text-spiritual-maroon/70 mb-1 block">Time of birth</label>
                  <Input type="time" value={birthDetails.time} onChange={(e) => setBirthDetails({ ...birthDetails, time: e.target.value })} />
                </div>
                <div>
                  <label className="text-xs text-spiritual-maroon/70 mb-1 block">Place of birth</label>
                  <Input placeholder="e.g. Varanasi, India" value={birthDetails.place} onChange={(e) => setBirthDetails({ ...birthDetails, place: e.target.value })} />
                </div>
              </div>
              <div className="flex justify-end mt-4 gap-2">
                <Button variant="ghost" onClick={() => setShowForm(false)} className="text-spiritual-maroon/70">
                  Skip for now
                </Button>
                <Button onClick={() => setShowForm(false)} className="bg-spiritual-saffron hover:bg-spiritual-saffron/90">
                  Start consultation
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Chat */}
        {!showForm && (
          <Card className="bg-white/80 backdrop-blur border-spiritual-sandstone/40 overflow-hidden">
            <div ref={scrollRef} className="h-[500px] overflow-y-auto p-6 space-y-5">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-spiritual-maroon/60 mb-6 font-fraunces text-lg">
                    Ask anything about your cosmic blueprint
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="text-left text-sm p-3 rounded-lg border border-spiritual-sandstone/50 hover:border-spiritual-saffron/50 hover:bg-spiritual-saffron/5 transition text-spiritual-maroon/80"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      m.role === "user"
                        ? "bg-spiritual-maroon text-spiritual-ivory"
                        : "bg-spiritual-sandstone/30 text-spiritual-maroon"
                    }`}
                  >
                    {m.role === "assistant" ? (
                      <div className="prose prose-sm max-w-none prose-p:my-2 prose-headings:font-fraunces prose-headings:text-spiritual-maroon prose-strong:text-spiritual-maroon">
                        <ReactMarkdown>{m.content || "…"}</ReactMarkdown>
                      </div>
                    ) : (
                      <p className="text-sm leading-relaxed">{m.content}</p>
                    )}
                  </div>
                </div>
              ))}
              {loading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="bg-spiritual-sandstone/30 rounded-2xl px-4 py-3 flex items-center gap-2 text-spiritual-maroon/60">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Consulting the stars…</span>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-spiritual-sandstone/40 p-4 bg-spiritual-ivory/50">
              <div className="flex gap-2 items-end">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                  placeholder="Ask about your dasha, rashi, or which temple to visit…"
                  className="resize-none min-h-[44px] max-h-32 bg-white border-spiritual-sandstone/50"
                  rows={1}
                  disabled={loading}
                />
                <Button
                  onClick={() => send(input)}
                  disabled={loading || !input.trim()}
                  className="bg-spiritual-saffron hover:bg-spiritual-saffron/90 h-11"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-[11px] text-spiritual-maroon/40 mt-2 text-center">
                Jyoti AI offers insights based on Vedic tradition, not absolute predictions.
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Astrology;
