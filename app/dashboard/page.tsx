import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { StatCards } from "@/components/dashboard/stat-cards"
import { PlayerCard } from "@/components/dashboard/player-card"
import { PerformanceArea, FeatureBars } from "@/components/charts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { players, performanceTimeline, featureImportance } from "@/lib/data"

export const metadata: Metadata = {
  title: "Overview · ScoutIQ",
}

export default function DashboardPage() {
  const watchlist = players.slice(0, 3)

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Dashboard"
        title="Scouting Overview"
        description="A real-time snapshot of your intelligence pipeline across football and cricket."
      />

      <StatCards />

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Squad Performance Index</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">Aggregate rating & expected goals trend</p>
            </div>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
              8 months
            </span>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <PerformanceArea data={performanceTimeline} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Model Feature Weights</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">Top drivers of valuation</p>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <FeatureBars data={featureImportance} />
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium">Priority Watchlist</h2>
            <p className="text-sm text-muted-foreground">Players flagged by the recommendation engine</p>
          </div>
          <Button asChild variant="ghost" size="sm" className="gap-1 text-primary">
            <Link href="/dashboard/players">
              View all
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {watchlist.map((player, i) => (
            <PlayerCard key={player.id} player={player} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
