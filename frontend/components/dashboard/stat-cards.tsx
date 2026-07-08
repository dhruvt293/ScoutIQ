"use client"

import { motion } from "motion/react"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { AnimatedCounter } from "@/components/motion-primitives"
import { dashboardStats } from "@/lib/data"

const sparkPaths = [
  "M0 20 L10 16 L20 18 L30 10 L40 12 L50 6 L60 4",
  "M0 18 L10 14 L20 15 L30 11 L40 8 L50 9 L60 5",
  "M0 22 L10 18 L20 14 L30 15 L40 9 L50 7 L60 3",
  "M0 16 L10 17 L20 13 L30 14 L40 11 L50 8 L60 7",
  "M0 19 L10 15 L20 16 L30 12 L40 10 L50 6 L60 5",
]

export function StatCards() {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-5">
      {dashboardStats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="group rounded-2xl border border-border bg-card/50 p-4 transition-colors hover:border-primary/40"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{s.label}</span>
            <span
              className={`flex items-center gap-0.5 text-xs ${s.up ? "text-primary" : "text-destructive"}`}
            >
              {s.up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
              {s.delta}
            </span>
          </div>
          <div className="mt-3 font-mono text-2xl font-semibold tracking-tight md:text-3xl">
            <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.suffix === "%" ? 1 : 0} />
          </div>
          <svg viewBox="0 0 60 24" className="mt-3 h-6 w-full" preserveAspectRatio="none" aria-hidden="true">
            <path
              d={sparkPaths[i]}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-60 transition-opacity group-hover:opacity-100"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
