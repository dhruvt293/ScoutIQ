"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  GitCompare,
  BarChart3,
  TrendingUp,
  FileText,
  Network,
  Settings,
  Bot,
  X,
} from "lucide-react"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const nav = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Players", href: "/dashboard/players", icon: Users },
  { label: "Compare", href: "/dashboard/compare", icon: GitCompare },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Predictions", href: "/dashboard/predictions", icon: TrendingUp },
  { label: "AI Reports", href: "/dashboard/reports", icon: FileText },
  { label: "AI Assistant", href: "/dashboard/assistant", icon: Bot },
  { label: "Knowledge Base", href: "/dashboard/knowledge", icon: Network },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname()

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-sidebar transition-transform duration-300 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <Link href="/">
            <Logo />
          </Link>
          <button className="lg:hidden" onClick={onClose} aria-label="Close menu">
            <X className="size-5 text-muted-foreground" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground",
                )}
              >
                <item.icon
                  className={cn("size-4.5 transition-colors", active ? "text-primary" : "text-muted-foreground")}
                />
                {item.label}
                {active && <span className="ml-auto size-1.5 rounded-full bg-primary" />}
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-border p-3">
          <div className="rounded-xl bg-gradient-to-br from-primary/15 to-transparent p-4">
            <p className="text-sm font-medium">Upgrade to Club</p>
            <p className="mt-1 text-xs text-muted-foreground">Unlock unlimited AI reports and predictive modeling.</p>
            <Link
              href="/#pricing"
              className="mt-3 inline-flex rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground"
            >
              View plans
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}
