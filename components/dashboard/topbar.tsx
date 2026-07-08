"use client"

import { useState } from "react"
import { Menu, Search, Bell, Command } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Topbar({ onMenu }: { onMenu: () => void }) {
  const [focused, setFocused] = useState(false)

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-xl md:px-6">
      <button className="lg:hidden" onClick={onMenu} aria-label="Open menu">
        <Menu className="size-5" />
      </button>

      <div
        className={`flex h-10 flex-1 items-center gap-2.5 rounded-xl border px-3 transition-colors md:max-w-md ${
          focused ? "border-primary/50 bg-card" : "border-border bg-card/50"
        }`}
      >
        <Search className="size-4 text-muted-foreground" />
        <input
          placeholder="Search players, clubs, reports…"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
        <span className="hidden items-center gap-1 rounded-md border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground sm:flex">
          <Command className="size-3" />K
        </span>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button className="relative grid size-10 place-items-center rounded-xl border border-border bg-card/50 transition-colors hover:bg-accent">
          <Bell className="size-4.5" />
          <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-primary ring-2 ring-background" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2.5 rounded-xl border border-border bg-card/50 py-1.5 pl-1.5 pr-3 transition-colors hover:bg-accent">
              <Avatar className="size-7">
                <AvatarFallback className="bg-primary/15 text-xs text-primary">DF</AvatarFallback>
              </Avatar>
              <span className="hidden text-sm font-medium sm:block">Diego F.</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="text-sm">Diego Fuentes</span>
                <span className="text-xs font-normal text-muted-foreground">Technical Director</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Team &amp; billing</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
