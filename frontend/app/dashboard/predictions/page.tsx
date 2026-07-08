"use client"

import { PageHeader } from "@/components/dashboard/page-header"
import { players } from "@/lib/data"
import { TrendingUp, AlertTriangle, ShieldAlert } from "lucide-react"

export default function PredictionsPage() {
  const topProspects = players.filter(p => p.potential - p.rating >= 5).sort((a,b) => (b.potential - b.rating) - (a.potential - a.rating)).slice(0, 4)

  return (
    <div className="space-y-8 pb-10">
      <PageHeader
        eyebrow="Predictive Models"
        title="AI Predictions"
        description="Forecasted performance, market value growth, and injury risks based on historical ML models."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Market Value Growth */}
        <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="size-5 text-primary" />
            <h3 className="font-semibold text-lg">Top Projected Growth (Next 12 Months)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase text-muted-foreground border-b border-border">
                <tr>
                  <th className="py-3 px-4 font-medium">Player</th>
                  <th className="py-3 px-4 font-medium">Age</th>
                  <th className="py-3 px-4 font-medium">Current Value</th>
                  <th className="py-3 px-4 font-medium">Projected Value</th>
                  <th className="py-3 px-4 font-medium text-right">Growth</th>
                </tr>
              </thead>
              <tbody>
                {topProspects.map((p, idx) => {
                  const projectedVal = (parseFloat(p.value.replace(/[^0-9.]/g, '')) * (1 + (p.potential - p.rating) * 0.08)).toFixed(1)
                  return (
                  <tr key={p.id} className="border-b border-border/50 hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">{p.name}</td>
                    <td className="py-3 px-4 text-muted-foreground">{p.age}</td>
                    <td className="py-3 px-4">{p.value}</td>
                    <td className="py-3 px-4 font-mono font-medium">₹{projectedVal} Cr</td>
                    <td className="py-3 px-4 text-right text-primary font-medium">+{((p.potential - p.rating) * 8).toFixed(1)}%</td>
                  </tr>
                )})}
              </tbody>
            </table>
          </div>
        </div>

        {/* Injury Risk Analysis */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <ShieldAlert className="size-5 text-destructive" />
            <h3 className="font-semibold text-lg">High Injury Risk</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Based on workload, age, and historical data patterns.</p>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 rounded-lg border border-destructive/20 bg-destructive/5">
              <div className="font-medium text-sm">Brandon Fernandes</div>
              <div className="flex items-center gap-2 text-destructive text-sm font-bold">
                <AlertTriangle className="size-4" /> 78% Risk
              </div>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg border border-destructive/20 bg-destructive/5">
              <div className="font-medium text-sm">Roy Krishna</div>
              <div className="flex items-center gap-2 text-destructive text-sm font-bold">
                <AlertTriangle className="size-4" /> 65% Risk
              </div>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg border border-orange-500/20 bg-orange-500/5">
              <div className="font-medium text-sm">Sandesh Jhingan</div>
              <div className="flex items-center gap-2 text-orange-500 text-sm font-bold">
                <AlertTriangle className="size-4" /> 52% Risk
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* League Performance Predictor */}
      <div className="rounded-2xl border border-border bg-card p-6 mt-6">
          <h3 className="font-semibold text-lg mb-4">Tactical Fit Predictor</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">Select an ISL club's tactical style to see which domestic players in our database have the highest predicted success rate if transferred.</p>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-border">
              <div className="text-sm font-medium uppercase text-primary mb-1">High Press / Possession</div>
              <div className="text-xs text-muted-foreground mb-3">Best fits for Manolo Márquez style</div>
              <div className="space-y-2">
                <div className="text-sm font-medium flex justify-between">Sahal Abdul Samad <span className="text-primary">94%</span></div>
                <div className="text-sm font-medium flex justify-between">Anirudh Thapa <span className="text-primary">91%</span></div>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-border">
              <div className="text-sm font-medium uppercase text-primary mb-1">Counter Attacking</div>
              <div className="text-xs text-muted-foreground mb-3">Best fits for low block & transition</div>
              <div className="space-y-2">
                <div className="text-sm font-medium flex justify-between">Lallianzuala Chhangte <span className="text-primary">96%</span></div>
                <div className="text-sm font-medium flex justify-between">Liston Colaco <span className="text-primary">92%</span></div>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-border">
              <div className="text-sm font-medium uppercase text-primary mb-1">Direct / Aerial</div>
              <div className="text-xs text-muted-foreground mb-3">Best fits for crossing systems</div>
              <div className="space-y-2">
                <div className="text-sm font-medium flex justify-between">Manvir Singh <span className="text-primary">89%</span></div>
                <div className="text-sm font-medium flex justify-between">Mourtada Fall <span className="text-primary">88%</span></div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
