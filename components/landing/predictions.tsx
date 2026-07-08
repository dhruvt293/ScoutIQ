"use client"

import { motion } from "motion/react"
import { TrendingUp, HeartPulse, CircleDollarSign } from "lucide-react"
import { Reveal, AnimatedCounter } from "@/components/motion-primitives"

const cards = [
  {
    icon: TrendingUp,
    title: "Future Performance",
    metric: 91,
    unit: "proj. rating",
    desc: "12-month projected rating with age-curve adjustment.",
    confidence: 92,
  },
  {
    icon: HeartPulse,
    title: "Injury Risk",
    metric: 14,
    unit: "% risk",
    desc: "Season injury probability from physical load modeling.",
    confidence: 87,
  },
  {
    icon: CircleDollarSign,
    title: "Market Value",
    metric: 96,
    unit: "€M peak",
    desc: "Predicted peak valuation across transfer windows.",
    confidence: 89,
  },
]

export function Predictions() {
  return (
    <section id="predictions" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary">Predictions</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              See the player before the market does
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Transparent models forecast performance, injury risk and valuation — each with a confidence meter and
              feature attribution you can defend in the boardroom.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card/50 p-6">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/12 text-primary">
                    <c.icon className="size-5" />
                  </span>
                  <span className="text-xs text-muted-foreground">{c.confidence}% confidence</span>
                </div>
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-mono text-4xl font-semibold tracking-tight">
                    <AnimatedCounter value={c.metric} />
                  </span>
                  <span className="text-sm text-muted-foreground">{c.unit}</span>
                </div>
                <h3 className="mt-1 font-medium">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${c.confidence}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
