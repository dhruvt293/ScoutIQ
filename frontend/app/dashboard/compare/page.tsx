"use client"

import { useState } from "react"
import { PageHeader } from "@/components/dashboard/page-header"
import { players } from "@/lib/data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ComparePage() {
  const [player1Id, setPlayer1Id] = useState<string>(players[0].id)
  const [player2Id, setPlayer2Id] = useState<string>(players[1].id)

  const p1 = players.find((p) => p.id === player1Id)!
  const p2 = players.find((p) => p.id === player2Id)!

  return (
    <div className="space-y-8 pb-10">
      <PageHeader
        eyebrow="Compare Tool"
        title="Head-to-Head Analysis"
        description="Select any two players to compare their attributes, strengths, and market value side-by-side."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {/* Player 1 Selection */}
        <div className="space-y-4">
          <Select value={player1Id} onValueChange={setPlayer1Id}>
            <SelectTrigger className="w-full h-14 text-lg bg-card border-border">
              <SelectValue placeholder="Select first player" />
            </SelectTrigger>
            <SelectContent>
              {players.map((p) => (
                <SelectItem key={p.id} value={p.id}>
                  {p.name} ({p.club})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <PlayerCompareCard player={p1} />
        </div>

        {/* Player 2 Selection */}
        <div className="space-y-4">
          <Select value={player2Id} onValueChange={setPlayer2Id}>
            <SelectTrigger className="w-full h-14 text-lg bg-card border-border">
              <SelectValue placeholder="Select second player" />
            </SelectTrigger>
            <SelectContent>
              {players.map((p) => (
                <SelectItem key={p.id} value={p.id}>
                  {p.name} ({p.club})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <PlayerCompareCard player={p2} />
        </div>
      </div>

      {/* Head to head table */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden mt-8">
        <div className="p-4 bg-muted/30 border-b border-border text-center font-semibold text-lg">
          Attribute Comparison
        </div>
        <div className="divide-y divide-border">
          {p1.attributes.map((attr, idx) => {
            const p2Attr = p2.attributes.find((a) => a.label === attr.label)?.value || 0
            const diff = attr.value - p2Attr
            return (
              <div key={attr.label} className="grid grid-cols-3 p-4 items-center text-sm">
                <div className={`text-center font-mono ${diff > 0 ? "text-primary font-bold" : ""}`}>{attr.value}</div>
                <div className="text-center font-medium text-muted-foreground uppercase tracking-wider">{attr.label}</div>
                <div className={`text-center font-mono ${diff < 0 ? "text-primary font-bold" : ""}`}>{p2Attr}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function PlayerCompareCard({ player }: { player: typeof players[0] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 flex flex-col items-center text-center">
      <Avatar className="size-32 rounded-2xl mb-4 border-4 border-muted shadow-lg">
        <AvatarImage src={player.photoUrl} alt={player.name} className="object-cover" />
        <AvatarFallback className="rounded-2xl text-2xl">{player.initials}</AvatarFallback>
      </Avatar>
      <h2 className="text-2xl font-bold">{player.name}</h2>
      <p className="text-muted-foreground">{player.position} · {player.club}</p>
      
      <div className="grid grid-cols-3 gap-4 w-full mt-6 border-t border-border pt-6">
        <div>
          <div className="font-mono text-2xl font-semibold">{player.rating}</div>
          <div className="text-[10px] uppercase tracking-wide text-muted-foreground mt-1">Rating</div>
        </div>
        <div>
          <div className="font-mono text-2xl font-semibold text-primary">{player.potential}</div>
          <div className="text-[10px] uppercase tracking-wide text-muted-foreground mt-1">Potential</div>
        </div>
        <div>
          <div className="font-mono text-lg font-semibold">{player.value}</div>
          <div className="text-[10px] uppercase tracking-wide text-muted-foreground mt-1">Value</div>
        </div>
      </div>

      <div className="w-full mt-6 space-y-4 text-left border-t border-border pt-6">
        <div>
          <span className="text-xs font-semibold uppercase text-primary tracking-wider">Strengths</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {player.strengths.map(s => (
              <span key={s} className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase text-destructive tracking-wider">Weaknesses</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {player.weaknesses.map(s => (
              <span key={s} className="px-2 py-1 rounded-md bg-destructive/10 text-destructive text-xs">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
