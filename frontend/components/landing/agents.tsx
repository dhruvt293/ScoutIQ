"use client"

import { motion } from "motion/react"
import { Bot, Send, Sparkles } from "lucide-react"
import { Reveal } from "@/components/motion-primitives"

const agents = [
  { name: "Talent Finder", task: "Scanning 12,480 profiles for left-footed wingers under 21…", done: true },
  { name: "Report Writer", task: "Drafting scouting report for Lucas Marqueta…", done: true },
  { name: "Risk Analyst", task: "Modeling injury probability across squad rotation…", done: false },
]

export function Agents() {
  return (
    <section className="relative py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="text-sm font-medium text-primary">AI Agents</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Autonomous agents that scout while you sleep
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Delegate recruitment tasks to specialized AI agents. Ask in plain language — they search, analyze and
              draft, then hand back decision-ready intelligence.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Natural-language talent discovery",
                "Automated report generation",
                "Continuous watchlist monitoring",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm">
                  <span className="grid size-5 place-items-center rounded-full bg-primary/15 text-primary">
                    <Sparkles className="size-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-card/50 p-5">
            <div className="mb-4 flex items-center gap-2 border-b border-border pb-4">
              <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Bot className="size-4" />
              </span>
              <span className="text-sm font-medium">ScoutIQ Agents</span>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                Running
              </span>
            </div>

            <div className="space-y-3">
              {agents.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background/50 p-3"
                >
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
                    <Bot className="size-3.5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{a.name}</span>
                      <span
                        className={`text-[10px] uppercase tracking-wide ${a.done ? "text-primary" : "text-muted-foreground"}`}
                      >
                        {a.done ? "Complete" : "Working"}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-xs text-muted-foreground">{a.task}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2.5">
              <input
                readOnly
                value="Find me a Marqueta alternative under €40M…"
                className="flex-1 bg-transparent text-xs text-muted-foreground outline-none"
              />
              <span className="grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Send className="size-3.5" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
