"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { MapPin, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Player } from "@/lib/data"

export function PlayerCard({ player, index = 0 }: { player: Player; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/dashboard/players/${player.id}`}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="size-12 rounded-xl">
                <AvatarImage src={player.photoUrl} alt={player.name} className="object-cover" />
                <AvatarFallback className="rounded-xl font-mono text-sm font-semibold" style={{ background: `color-mix(in oklch, ${player.accent} 18%, transparent)`, color: player.accent }}>
                  {player.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium leading-tight">{player.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {player.position} · {player.age}y
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="capitalize">
              {player.sport}
            </Badge>
          </div>

          <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="size-3.5" />
            {player.club} · {player.league}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
            <Metric label="Rating" value={player.rating} />
            <Metric label="Potential" value={player.potential} accent />
            <div>
              <div className="flex items-center gap-1 font-mono text-lg font-semibold text-primary">
                <TrendingUp className="size-3.5" />
                {player.form}
              </div>
              <div className="mt-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">Form</div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Est. value</span>
            <span className="font-mono text-sm font-medium">{player.value}</span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

function Metric({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div>
      <div className={`font-mono text-lg font-semibold ${accent ? "text-primary" : ""}`}>{value}</div>
      <div className="mt-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">{label}</div>
    </div>
  )
}
