"use client"

import { PageHeader } from "@/components/dashboard/page-header"
import { BarChart3, TrendingUp, Users, Activity } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 pb-10">
      <PageHeader
        eyebrow="Statistics"
        title="League Analytics"
        description="Macro-level performance trends across the Indian Super League and I-League."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Goals (ISL)" value="246" trend="+12%" icon={Activity} />
        <StatCard title="Avg xG per match" value="2.84" trend="+0.4" icon={TrendingUp} />
        <StatCard title="Active U-23 Players" value="142" trend="+15" icon={Users} />
        <StatCard title="Passing Accuracy" value="81.2%" trend="-1.1%" icon={BarChart3} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2 mt-6">
        <div className="rounded-2xl border border-border bg-card p-6 h-[400px] flex flex-col">
          <h3 className="font-semibold mb-4">Goal Distributions by Phase</h3>
          <div className="flex-1 flex items-end gap-2 mt-4 border-b border-border pb-2">
            {/* Dummy Bar Chart */}
            <div className="w-1/6 bg-primary/20 rounded-t-md relative h-[30%]"><span className="absolute -bottom-6 text-xs w-full text-center text-muted-foreground">0-15</span></div>
            <div className="w-1/6 bg-primary/40 rounded-t-md relative h-[45%]"><span className="absolute -bottom-6 text-xs w-full text-center text-muted-foreground">16-30</span></div>
            <div className="w-1/6 bg-primary/60 rounded-t-md relative h-[60%]"><span className="absolute -bottom-6 text-xs w-full text-center text-muted-foreground">31-45</span></div>
            <div className="w-1/6 bg-primary/40 rounded-t-md relative h-[50%]"><span className="absolute -bottom-6 text-xs w-full text-center text-muted-foreground">46-60</span></div>
            <div className="w-1/6 bg-primary/60 rounded-t-md relative h-[70%]"><span className="absolute -bottom-6 text-xs w-full text-center text-muted-foreground">61-75</span></div>
            <div className="w-1/6 bg-primary rounded-t-md relative h-[100%]"><span className="absolute -bottom-6 text-xs w-full text-center text-muted-foreground">76-90+</span></div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 h-[400px]">
          <h3 className="font-semibold mb-4">Top Goalscorers</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-border/50">
              <span className="font-medium">Sunil Chhetri</span>
              <span className="font-mono bg-muted px-2 py-1 rounded">14 Goals</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border/50">
              <span className="font-medium">Jamie Maclaren</span>
              <span className="font-mono bg-muted px-2 py-1 rounded">12 Goals</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border/50">
              <span className="font-medium">Lallianzuala Chhangte</span>
              <span className="font-mono bg-muted px-2 py-1 rounded">10 Goals</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border/50">
              <span className="font-medium">Manvir Singh</span>
              <span className="font-mono bg-muted px-2 py-1 rounded">9 Goals</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border/50">
              <span className="font-medium">Roy Krishna</span>
              <span className="font-mono bg-muted px-2 py-1 rounded">9 Goals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, trend, icon: Icon }: any) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-sm font-medium text-muted-foreground">{title}</h4>
        <div className="p-2 bg-primary/10 text-primary rounded-lg"><Icon className="size-4" /></div>
      </div>
      <div className="text-3xl font-bold font-mono">{value}</div>
      <div className="text-sm text-primary mt-2">{trend} vs last month</div>
    </div>
  )
}
