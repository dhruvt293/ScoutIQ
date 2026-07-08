"use client"

import { motion } from "motion/react"
import { Quote } from "lucide-react"
import { Reveal } from "@/components/motion-primitives"
import { testimonials } from "@/lib/data"

export function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary">Customers</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Trusted by the people making the calls
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full rounded-2xl border border-border bg-card/50 p-6"
              >
                <Quote className="size-6 text-primary/60" />
                <p className="mt-4 text-pretty leading-relaxed text-foreground/90">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-primary/12 font-mono text-sm text-primary">
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
