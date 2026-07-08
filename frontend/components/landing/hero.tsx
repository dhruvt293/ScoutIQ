"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, Play, Sparkles, TrendingUp, Target, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/motion-primitives"

const floatingStats = [
  { icon: TrendingUp, label: "Potential Rating", value: 94, suffix: "", pos: "left-0 top-16", delay: 0.6 },
  { icon: Target, label: "xG per 90", value: 0.85, suffix: "", decimals: 2, pos: "right-0 top-28", delay: 0.8 },
  { icon: Activity, label: "Form Index", value: 8.7, suffix: "", decimals: 1, pos: "left-4 bottom-20", delay: 1 },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 lg:gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles className="size-3.5 text-primary" />
            AI Scouting Intelligence for Football
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-pretty text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            <span className="text-gradient">Scout Smarter</span>
            <br />
            with AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            AI-powered scouting, analytics, player intelligence and predictive performance for football.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="group h-12 px-6 text-sm">
              <Link href="/dashboard">
                Start Scouting
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 border-border bg-card/40 px-6 text-sm">
              <Play className="size-4" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex items-center gap-6"
          >
            {[
              { v: 12480, s: "+", l: "Players analysed" },
              { v: 94.2, s: "%", l: "Prediction accuracy", d: 1 },
              { v: 320, s: "+", l: "Clubs onboard" },
            ].map((stat) => (
              <div key={stat.l}>
                <div className="font-mono text-2xl font-semibold tracking-tight">
                  <AnimatedCounter value={stat.v} suffix={stat.s} decimals={stat.d ?? 0} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative size-full"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative size-full"
            >
              <Image
                src="/hero-athlete.png"
                alt="AI wireframe visualization of a footballer"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {floatingStats.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: s.delay }}
                className={`absolute ${s.pos}`}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: s.delay }}
                  className="glass flex items-center gap-3 rounded-xl border border-border px-3 py-2.5 shadow-xl shadow-black/30"
                >
                  <span className="grid size-8 place-items-center rounded-lg bg-primary/15 text-primary">
                    <s.icon className="size-4" />
                  </span>
                  <div>
                    <div className="font-mono text-sm font-semibold leading-none">
                      <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">{s.label}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <LogoMarquee />
    </section>
  )
}

function LogoMarquee() {
  const brands = ["Atlético Vera", "Northgate United", "Mumbai Titans", "Praha SK", "Lagos Athletic", "Cruzeiro Sul"]
  const doubled = [...brands, ...brands]
  return (
    <div className="relative mx-auto mt-20 max-w-6xl px-4">
      <p className="mb-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
        Trusted by elite recruitment teams
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-12">
          {doubled.map((b, i) => (
            <span key={i} className="whitespace-nowrap text-lg font-semibold tracking-tight text-muted-foreground/60">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
