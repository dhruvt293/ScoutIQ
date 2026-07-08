"use client"

import { motion } from "motion/react"
import { shotMap } from "@/lib/data"

export function ShotMap() {
  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-border bg-background/40">
      {/* pitch markings */}
      <svg viewBox="0 0 120 80" className="absolute inset-0 size-full" preserveAspectRatio="none" aria-hidden="true">
        <g fill="none" stroke="var(--border)" strokeWidth="0.4">
          <rect x="1" y="1" width="118" height="78" />
          <line x1="60" y1="1" x2="60" y2="79" />
          <circle cx="60" cy="40" r="9" />
          <rect x="1" y="22" width="20" height="36" />
          <rect x="99" y="22" width="20" height="36" />
          <rect x="1" y="30" width="7" height="20" />
          <rect x="112" y="30" width="7" height="20" />
        </g>
      </svg>
      {shotMap.map((s, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, type: "spring", stiffness: 260, damping: 18 }}
          className="group absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
        >
          <span
            className={`block rounded-full ring-2 ${
              s.goal ? "bg-primary ring-primary/30" : "bg-transparent ring-muted-foreground/50"
            }`}
            style={{ width: `${8 + s.xg * 18}px`, height: `${8 + s.xg * 18}px` }}
          />
        </motion.div>
      ))}
      <div className="absolute bottom-3 right-3 flex items-center gap-4 rounded-lg border border-border bg-card/70 px-3 py-1.5 text-xs backdrop-blur">
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-primary" /> Goal
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full ring-2 ring-muted-foreground/50" /> Attempt
        </span>
      </div>
    </div>
  )
}
