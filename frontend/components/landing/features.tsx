"use client"

import { motion } from "motion/react"
import { Brain, Radar, LineChart, Users, FileText, Network, Search, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/motion-primitives"

const features = [
  {
    icon: Brain,
    title: "AI Player Intelligence",
    desc: "Unified profiles enriched with feature-engineered metrics that go far beyond raw event data.",
  },
  {
    icon: Search,
    title: "Similarity Search",
    desc: "Find stylistic matches across leagues in seconds using our vector-based player embeddings.",
  },
  {
    icon: Radar,
    title: "Advanced Analytics",
    desc: "Radar profiles, heatmaps, passing networks, shot maps and xG — all in one workspace.",
  },
  {
    icon: LineChart,
    title: "Predictive Modeling",
    desc: "Forecast performance, market value and injury risk with transparent confidence intervals.",
  },
  {
    icon: FileText,
    title: "AI Scouting Reports",
    desc: "Generate professional, club-ready reports with strengths, weaknesses and role suitability.",
  },
  {
    icon: Network,
    title: "Knowledge Graph",
    desc: "Explore relationships between players, clubs, leagues and positions on one living canvas.",
  },
  {
    icon: Users,
    title: "Comparison Engine",
    desc: "Side-by-side attribute breakdowns with an AI verdict on the better fit for your system.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed Data",
    desc: "Built on official league event and tracking data, secured with enterprise-grade governance.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary">Platform</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Everything a modern scouting department needs
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              One intelligence layer that turns raw match data into recruitment decisions your entire organization can
              trust.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-medium">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
