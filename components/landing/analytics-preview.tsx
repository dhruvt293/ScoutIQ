"use client"

import { motion } from "motion/react"
import { Activity, Radar as RadarIcon, Flame } from "lucide-react"
import { Reveal } from "@/components/motion-primitives"
import { PerformanceArea, PlayerRadar } from "@/components/charts"
import { performanceTimeline, players } from "@/lib/data"

export function AnalyticsPreview() {
  const radarSeries = [
    { name: players[0].name, color: "var(--chart-1)", data: players[0].attributes },
  ]

  return (
    <section id="analytics" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary">Analytics</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Visual intelligence that reads like a scout thinks
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Interactive radar profiles, performance timelines, heatmaps and expected-goals models rendered in a
              workspace built for decisions.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-2" delay={0.05}>
            <div className="h-full rounded-2xl border border-border bg-card/50 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="size-4 text-primary" />
                  <span className="text-sm font-medium">Performance Timeline</span>
                </div>
                <span className="rounded-full bg-primary/12 px-2.5 py-1 text-xs text-primary">Season 24/25</span>
              </div>
              <div className="h-64">
                <PerformanceArea data={performanceTimeline} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-card/50 p-5">
              <div className="mb-4 flex items-center gap-2">
                <RadarIcon className="size-4 text-primary" />
                <span className="text-sm font-medium">Attribute Radar</span>
              </div>
              <div className="h-64">
                <PlayerRadar series={radarSeries} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card/50 p-5">
              <div className="mb-4 flex items-center gap-2">
                <Flame className="size-4 text-primary" />
                <span className="text-sm font-medium">Positional Heatmap</span>
              </div>
              <Heatmap />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Heatmap() {
  const cols = 16
  const rows = 6
  const cells = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols
    const row = Math.floor(i / cols)
    const cx = col / cols
    const cy = row / rows
    // concentrate heat in attacking right-central zone
    const d = Math.hypot(cx - 0.72, cy - 0.5)
    const intensity = Math.max(0, 1 - d * 2.1) + Math.random() * 0.15
    return Math.min(1, intensity)
  })
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-background/60">
      <div className="grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {cells.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i % cols) * 0.01 }}
            className="aspect-square"
            style={{ background: `color-mix(in oklch, var(--primary) ${Math.round(v * 85)}%, transparent)` }}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 grid grid-cols-2">
        <div className="border-r border-border/60" />
        <div />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/60" />
    </div>
  )
}
