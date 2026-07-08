"use client"

import { PageHeader } from "@/components/dashboard/page-header"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bell, Lock, User, Globe, Mail } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-8 pb-10">
      <PageHeader
        eyebrow="Preferences"
        title="Settings"
        description="Manage your account, notification preferences, and team permissions."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Sidebar Nav (Visual only for now) */}
        <div className="flex flex-col gap-1">
          <button className="flex items-center gap-3 px-4 py-2.5 bg-sidebar-accent text-sidebar-accent-foreground rounded-lg text-sm font-medium transition-colors text-left">
            <User className="size-4" /> Account
          </button>
          <button className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted/50 text-muted-foreground hover:text-foreground rounded-lg text-sm font-medium transition-colors text-left">
            <Bell className="size-4" /> Notifications
          </button>
          <button className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted/50 text-muted-foreground hover:text-foreground rounded-lg text-sm font-medium transition-colors text-left">
            <Lock className="size-4" /> Security
          </button>
          <button className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted/50 text-muted-foreground hover:text-foreground rounded-lg text-sm font-medium transition-colors text-left">
            <Globe className="size-4" /> Integration API
          </button>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold mb-1">Profile Information</h3>
            <p className="text-sm text-muted-foreground mb-6">Update your personal details and public profile.</p>
            
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input defaultValue="Scout" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input defaultValue="Manager" className="bg-background" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address <Mail className="inline size-3 ml-1 text-muted-foreground" /></label>
                <Input defaultValue="manager@club.com" type="email" className="bg-background" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Club / Organization</label>
                <Input defaultValue="Indian National Team" className="bg-background" />
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold mb-1">Email Notifications</h3>
            <p className="text-sm text-muted-foreground mb-6">Choose what updates you want to receive.</p>
            
            <div className="space-y-4 divide-y divide-border">
              <div className="flex items-center justify-between pb-4">
                <div>
                  <div className="font-medium">Scouting Alerts</div>
                  <div className="text-sm text-muted-foreground">Receive emails when players on your watchlist hit performance milestones.</div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between py-4">
                <div>
                  <div className="font-medium">Weekly Digest</div>
                  <div className="text-sm text-muted-foreground">A summary of AI-predicted market value movers.</div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between pt-4">
                <div>
                  <div className="font-medium">New Feature Announcements</div>
                  <div className="text-sm text-muted-foreground">Updates on ScoutIQ's ML models and capabilities.</div>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
