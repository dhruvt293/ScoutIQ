"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const axisStyle = { fontSize: 11, fill: "var(--muted-foreground)" }

function ChartTip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="glass rounded-lg border border-border px-3 py-2 text-xs shadow-xl">
      {label != null && <div className="mb-1 font-medium text-foreground">{label}</div>}
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2 text-muted-foreground">
          <span className="size-2 rounded-full" style={{ background: p.color || p.stroke || p.fill }} />
          <span className="capitalize">{p.name}:</span>
          <span className="font-mono text-foreground">{p.value}</span>
        </div>
      ))}
    </div>
  )
}

export function PerformanceArea({ data }: { data: { month: string; rating: number; form: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
        <defs>
          <linearGradient id="gRating" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.45} />
            <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gForm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--chart-2)" stopOpacity={0.35} />
            <stop offset="100%" stopColor="var(--chart-2)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="var(--border)" />
        <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisStyle} axisLine={false} tickLine={false} domain={[60, 100]} />
        <Tooltip content={<ChartTip />} />
        <Area
          type="monotone"
          dataKey="rating"
          stroke="var(--chart-1)"
          strokeWidth={2}
          fill="url(#gRating)"
        />
        <Area type="monotone" dataKey="form" stroke="var(--chart-2)" strokeWidth={2} fill="url(#gForm)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function PlayerRadar({
  series,
}: {
  series: { name: string; color: string; data: { label: string; value: number }[] }[]
}) {
  const merged = series[0].data.map((d, i) => {
    const row: Record<string, number | string> = { label: d.label }
    series.forEach((s) => {
      row[s.name] = s.data[i].value
    })
    return row
  })
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={merged} outerRadius="72%">
        <PolarGrid stroke="var(--border)" />
        <PolarAngleAxis dataKey="label" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} />
        <Tooltip content={<ChartTip />} />
        {series.map((s) => (
          <Radar
            key={s.name}
            name={s.name}
            dataKey={s.name}
            stroke={s.color}
            fill={s.color}
            fillOpacity={0.18}
            strokeWidth={2}
          />
        ))}
      </RadarChart>
    </ResponsiveContainer>
  )
}

export function SeasonBars({ data }: { data: { metric: string; current: number; previous: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="var(--border)" />
        <XAxis dataKey="metric" tick={axisStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
        <Tooltip content={<ChartTip />} cursor={{ fill: "var(--accent)", opacity: 0.4 }} />
        <Bar dataKey="previous" name="Previous" fill="var(--chart-5)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="current" name="Current" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function TimelineLine({ data }: { data: { season: string; rating: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="var(--border)" />
        <XAxis dataKey="season" tick={axisStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisStyle} axisLine={false} tickLine={false} domain={[60, 100]} />
        <Tooltip content={<ChartTip />} />
        <Line
          type="monotone"
          dataKey="rating"
          stroke="var(--chart-1)"
          strokeWidth={2.5}
          dot={{ r: 3, fill: "var(--chart-1)" }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export function FeatureBars({ data }: { data: { feature: string; weight: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ top: 4, right: 16, left: 8, bottom: 4 }}>
        <XAxis type="number" domain={[0, 1]} hide />
        <YAxis
          type="category"
          dataKey="feature"
          tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
          axisLine={false}
          tickLine={false}
          width={110}
        />
        <Tooltip content={<ChartTip />} cursor={{ fill: "var(--accent)", opacity: 0.4 }} />
        <Bar dataKey="weight" radius={[0, 4, 4, 0]}>
          {data.map((_, i) => (
            <Cell key={i} fill={i === 0 ? "var(--chart-1)" : "var(--chart-2)"} fillOpacity={1 - i * 0.1} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
