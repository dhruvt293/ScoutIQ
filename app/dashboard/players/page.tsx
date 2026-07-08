import type { Metadata } from "next"
import { PageHeader } from "@/components/dashboard/page-header"
import { PlayersExplorer } from "@/components/dashboard/players-explorer"

export const metadata: Metadata = {
  title: "Players · ScoutIQ",
}

export default function PlayersPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Database"
        title="Player Intelligence"
        description="Search and filter across 12,000+ scouted players with AI-ranked recommendations."
      />
      <PlayersExplorer />
    </div>
  )
}
