import { getPlayer } from "@/lib/data"
import { PageHeader } from "@/components/dashboard/page-header"
import { notFound } from "next/navigation"
import Image from "next/image"

export default async function PlayerProfilePage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const player = getPlayer(params.id)
  
  if (!player) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <div className="flex items-end gap-6 pb-6 border-b border-border">
        <div className="relative size-32 overflow-hidden rounded-2xl border-4 border-card shadow-xl">
          <Image src={player.photoUrl} alt={player.name} fill className="object-cover" />
        </div>
        <div className="flex-1 pb-2">
          <PageHeader
            eyebrow="Player Profile"
            title={player.name}
            description={`${player.club} · ${player.league} · ${player.nation}`}
          />
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="font-semibold text-lg mb-4">Overview</h3>
          <div className="space-y-3">
            <div className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">Rating</span><span className="font-mono font-medium">{player.rating}</span></div>
            <div className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">Potential</span><span className="font-mono text-primary font-medium">{player.potential}</span></div>
            <div className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">Value</span><span className="font-mono font-medium">{player.value}</span></div>
            <div className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">Age</span><span className="font-mono font-medium">{player.age}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Position</span><span className="font-medium">{player.position}</span></div>
          </div>
        </div>
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6">
          <h3 className="font-semibold text-lg mb-4">Scout Summary</h3>
          <p className="text-muted-foreground leading-relaxed">{player.summary}</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
               <h4 className="font-semibold mb-3 text-sm text-primary flex items-center gap-2">
                 <span className="size-2 rounded-full bg-primary" /> Key Strengths
               </h4>
               <ul className="list-disc pl-5 text-sm text-foreground/80 space-y-1.5">
                 {player.strengths.map(s => <li key={s}>{s}</li>)}
               </ul>
             </div>
             <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/10">
               <h4 className="font-semibold mb-3 text-sm text-destructive flex items-center gap-2">
                 <span className="size-2 rounded-full bg-destructive" /> Areas to Improve
               </h4>
               <ul className="list-disc pl-5 text-sm text-foreground/80 space-y-1.5">
                 {player.weaknesses.map(s => <li key={s}>{s}</li>)}
               </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
