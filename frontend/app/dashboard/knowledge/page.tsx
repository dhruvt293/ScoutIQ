"use client"

import { PageHeader } from "@/components/dashboard/page-header"
import { knowledgeNodes, knowledgeLinks } from "@/lib/data"
import { Search, Network } from "lucide-react"

export default function KnowledgePage() {
  return (
    <div className="space-y-8 pb-10 h-full flex flex-col">
      <PageHeader
        eyebrow="Database"
        title="Knowledge Graph"
        description="Visualize the semantic relationships between players, clubs, leagues, and tactical styles in our vector database."
      />

      <div className="rounded-2xl border border-border bg-card flex-1 min-h-[500px] flex flex-col overflow-hidden relative">
        <div className="p-4 border-b border-border bg-muted/30 flex gap-4 items-center">
          <Network className="size-5 text-muted-foreground" />
          <div className="text-sm font-medium">Entity Visualization Network</div>
          <div className="ml-auto relative w-64">
             <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
             <input type="text" placeholder="Search entities..." className="w-full bg-background border border-border rounded-lg pl-9 pr-3 py-1.5 text-sm" />
          </div>
        </div>

        {/* CSS Mock Graph */}
        <div className="flex-1 relative bg-[url('/grid.svg')] bg-center bg-repeat p-8 overflow-hidden flex items-center justify-center">
           <div className="relative w-full max-w-3xl aspect-video mx-auto">
             {/* Lines */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-border stroke-2">
               {knowledgeLinks.map((link, i) => {
                 const source = knowledgeNodes.find(n => n.id === link[0])
                 const target = knowledgeNodes.find(n => n.id === link[1])
                 if(!source || !target) return null;
                 return <line key={i} x1={`${source.x}%`} y1={`${source.y}%`} x2={`${target.x}%`} y2={`${target.y}%`} />
               })}
             </svg>
             
             {/* Nodes */}
             {knowledgeNodes.map((node) => (
               <div 
                 key={node.id} 
                 className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-110 hover:z-10
                    ${node.type === 'player' ? 'bg-primary text-primary-foreground' : 
                      node.type === 'club' ? 'bg-orange-500 text-white' : 
                      node.type === 'league' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`}
                 style={{ left: `${node.x}%`, top: `${node.y}%`, width: node.r * 2, height: node.r * 2 }}
                 title={`${node.type.toUpperCase()}: ${node.label}`}
               >
                 <span className="text-[10px] font-bold text-center leading-none px-1 break-words">{node.label}</span>
               </div>
             ))}
           </div>
           
           <div className="absolute bottom-4 left-4 bg-card/80 backdrop-blur border border-border p-3 rounded-lg text-xs space-y-2">
             <div className="font-semibold mb-2">Legend</div>
             <div className="flex items-center gap-2"><span className="size-3 rounded-full bg-primary" /> Player</div>
             <div className="flex items-center gap-2"><span className="size-3 rounded-full bg-orange-500" /> Club</div>
             <div className="flex items-center gap-2"><span className="size-3 rounded-full bg-blue-500" /> League</div>
             <div className="flex items-center gap-2"><span className="size-3 rounded-full bg-green-500" /> Position</div>
           </div>
        </div>
      </div>
    </div>
  )
}
