"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, Database, Settings } from "lucide-react"
import { isSupabaseConfigured } from "@/lib/supabase"
import Link from "next/link"

export function SetupStatus() {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          System Setup Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <div className="flex items-center gap-3">
            <Database className="h-5 w-5 text-slate-600" />
            <div>
              <p className="font-medium">Supabase Database</p>
              <p className="text-sm text-slate-600">PostgreSQL database for bookings</p>
            </div>
          </div>
          {isSupabaseConfigured ? (
            <Badge className="bg-green-100 text-green-800">
              <CheckCircle className="h-3 w-3 mr-1" />
              Connected
            </Badge>
          ) : (
            <Badge className="bg-yellow-100 text-yellow-800">
              <AlertCircle className="h-3 w-3 mr-1" />
              Setup Required
            </Badge>
          )}
        </div>

        {isSupabaseConfigured ? (
          <div className="space-y-3">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">✅ Ready to Use!</h3>
              <p className="text-sm text-green-700 mb-3">Your Supabase database is connected and ready. You can now:</p>
              <ul className="text-sm text-green-700 space-y-1 mb-4">
                <li>• Accept booking requests from clients</li>
                <li>• Manage appointments through the admin dashboard</li>
                <li>• Set availability and block dates</li>
                <li>• Track booking analytics</li>
              </ul>
              <div className="flex gap-2">
                <Button asChild size="sm">
                  <Link href="/admin">Open Admin Dashboard</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/schedule">Test Booking Form</Link>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Setup Required</h3>
              <p className="text-sm text-yellow-700 mb-3">
                To enable the booking system, you need to add Supabase integration:
              </p>
              <ol className="text-sm text-yellow-700 space-y-1 mb-4 list-decimal list-inside">
                <li>Click "Add Integration" in your project settings</li>
                <li>Select "Supabase" from the available integrations</li>
                <li>The system will automatically create a database</li>
                <li>Run the provided SQL script to set up tables</li>
                <li>Refresh this page to see the updated status</li>
              </ol>
            </div>

            <Button onClick={() => window.location.reload()} variant="outline" className="w-full">
              Refresh Status
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
