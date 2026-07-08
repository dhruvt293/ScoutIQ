"use client"

import { useState } from "react"
import { PageHeader } from "@/components/dashboard/page-header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, Bot, User, Sparkles } from "lucide-react"

export default function AssistantPage() {
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    {
      role: "ai",
      text: "Hello! I am ScoutIQ's AI Assistant. I can help you analyze player data, compare stats, or find similar players. What would you like to know?",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const predefinedPrompts = [
    "Find an Under-23 Indian winger similar to Chhangte.",
    "Compare Sandesh Jhingan's aerial duel success rate with Anwar Ali.",
    "Which ISL forward has the highest xG per 90?",
    "Predict Sunil Chhetri's goal involvement for next season.",
  ]

  const handleSend = (text: string) => {
    if (!text.trim()) return
    setMessages((prev) => [...prev, { role: "user", text }])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: `Here is the analysis based on our latest database models regarding: "${text}". According to the metrics, the performance indicators strongly suggest a positive upward trend in this specific tactical context.`,
        },
      ])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <PageHeader
        eyebrow="AI Assistant"
        title="ScoutIQ Chatbot"
        description="Ask questions in plain English to query the database, find players, and generate insights."
      />

      {/* Chat window */}
      <div className="flex-1 flex flex-col bg-card border border-border rounded-2xl overflow-hidden mt-6 shadow-sm">
        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
              <div
                className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${
                  msg.role === "ai" ? "bg-primary/20 text-primary" : "bg-muted text-foreground"
                }`}
              >
                {msg.role === "ai" ? <Bot className="size-5" /> : <User className="size-5" />}
              </div>
              <div
                className={`max-w-[75%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed ${
                  msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <Bot className="size-5" />
              </div>
              <div className="max-w-[75%] rounded-2xl px-5 py-3.5 bg-muted text-foreground flex items-center gap-2">
                <span className="size-2 bg-primary/40 rounded-full animate-pulse" />
                <span className="size-2 bg-primary/60 rounded-full animate-pulse delay-75" />
                <span className="size-2 bg-primary/80 rounded-full animate-pulse delay-150" />
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="p-4 border-t border-border bg-card/50">
          <div className="mb-4 flex flex-wrap gap-2">
            {predefinedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-primary transition-colors hover:bg-primary/15"
              >
                <Sparkles className="size-3" />
                {prompt}
              </button>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend(input)
            }}
            className="relative"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="h-14 w-full rounded-xl bg-background pr-14 text-base shadow-sm"
              disabled={isTyping}
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isTyping}
              className="absolute right-2 top-2 size-10 rounded-lg bg-primary hover:bg-primary/90"
            >
              <Send className="size-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
