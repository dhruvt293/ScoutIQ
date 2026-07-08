"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { PlayerCard } from "@/components/dashboard/player-card"
import { players, type Sport } from "@/lib/data"

const filters: { label: string; value: Sport | "all" }[] = [
  { label: "All Sports", value: "all" },
  { label: "Football", value: "football" },
  { label: "Cricket", value: "cricket" },
]

const sorts = [
  { label: "Rating", value: "rating" },
  { label: "Potential", value: "potential" },
  { label: "Form", value: "form" },
  { label: "Age", value: "age" },
] as const

export function PlayersExplorer() {
  const [query, setQuery] = useState("")
  const [sport, setSport] = useState<Sport | "all">("all")
  const [sort, setSort] = useState<(typeof sorts)[number]["value"]>("rating")

  const results = useMemo(() => {
    return players
      .filter((p) => (sport === "all" ? true : p.sport === sport))
      .filter((p) => {
        const q = query.toLowerCase()
        return (
          p.name.toLowerCase().includes(q) ||
          p.club.toLowerCase().includes(q) ||
          p.position.toLowerCase().includes(q) ||
          p.league.toLowerCase().includes(q)
        )
      })
      .sort((a, b) => (b[sort] as number) - (a[sort] as number))
  }, [query, sport, sort])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search players, clubs, positions..."
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex rounded-lg border border-border p-1">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setSport(f.value)}
                className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                  sport === f.value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5">
            <span className="text-xs text-muted-foreground">Sort</span>
            {sorts.map((s) => (
              <button
                key={s.value}
                onClick={() => setSort(s.value)}
                className={`text-sm transition-colors ${
                  sort === s.value ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        {results.length} player{results.length !== 1 ? "s" : ""} found
      </p>

      {results.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {results.map((p, i) => (
            <PlayerCard key={p.id} player={p} index={i} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border py-20 text-center text-muted-foreground">
          No players match your search.
        </div>
      )}
    </div>
  )
}
