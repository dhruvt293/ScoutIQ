"use client"

import { PageHeader } from "@/components/dashboard/page-header"
import { FileText, Download, Eye, Clock } from "lucide-react"

export default function ReportsPage() {
  const reports = [
    { id: "REP-2024-001", player: "Lallianzuala Chhangte", date: "Today, 10:42 AM", type: "Full Tactical Scout", status: "Ready" },
    { id: "REP-2024-002", player: "Akash Mishra", date: "Yesterday, 14:15 PM", type: "Defensive Profile", status: "Ready" },
    { id: "REP-2024-003", player: "Greg Stewart", date: "Oct 12, 09:30 AM", type: "Playmaking Impact", status: "Ready" },
    { id: "REP-2024-004", player: "Anwar Ali", date: "Oct 10, 16:45 PM", type: "Injury Risk Assessment", status: "Ready" },
    { id: "REP-2024-005", player: "Liston Colaco", date: "Oct 08, 11:20 AM", type: "Full Tactical Scout", status: "Archived" },
  ]

  return (
    <div className="space-y-8 pb-10">
      <PageHeader
        eyebrow="Intelligence"
        title="AI Scout Reports"
        description="Generated natural language reports based on data analysis and semantic search across your club's knowledge base."
      />

      <div className="rounded-2xl border border-border bg-card overflow-hidden mt-6">
        <div className="p-4 border-b border-border bg-muted/30 flex justify-between items-center">
          <h3 className="font-semibold">Recent Reports</h3>
          <button className="text-sm text-primary hover:underline">Generate New Report</button>
        </div>
        <div className="divide-y divide-border">
          {reports.map((report) => (
            <div key={report.id} className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-muted/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0">
                  <FileText className="size-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-base">{report.player}</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <span className="bg-muted px-2 py-0.5 rounded-md font-mono">{report.id}</span>
                    <span>•</span>
                    <span>{report.type}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="size-3.5" /> {report.date}
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors" title="View Report">
                    <Eye className="size-4" />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors" title="Download PDF">
                    <Download className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
