"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Settings, Copy, ExternalLink, Play } from "lucide-react"

export function SetupInstructions() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const sqlScript = `-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  timezone TEXT DEFAULT 'America/New_York',
  status TEXT DEFAULT 'confirmed',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create availability table
CREATE TABLE availability (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  day_of_week INTEGER NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create blocked_dates table
CREATE TABLE blocked_dates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  blocked_date DATE NOT NULL,
  reason TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default availability (Monday-Friday, 9 AM - 5 PM)
INSERT INTO availability (day_of_week, start_time, end_time) VALUES
(1, '09:00', '17:00'),
(2, '09:00', '17:00'),
(3, '09:00', '17:00'),
(4, '09:00', '17:00'),
(5, '09:00', '17:00');

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE blocked_dates ENABLE ROW LEVEL SECURITY;

-- Create policies for public access
CREATE POLICY "Allow public read access on bookings" ON bookings FOR SELECT USING (true);
CREATE POLICY "Allow public insert on bookings" ON bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on bookings" ON bookings FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on bookings" ON bookings FOR DELETE USING (true);

CREATE POLICY "Allow public read access on availability" ON availability FOR SELECT USING (true);
CREATE POLICY "Allow public update on availability" ON availability FOR UPDATE USING (true);

CREATE POLICY "Allow public read access on blocked_dates" ON blocked_dates FOR SELECT USING (true);
CREATE POLICY "Allow public insert on blocked_dates" ON blocked_dates FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public delete on blocked_dates" ON blocked_dates FOR DELETE USING (true);`

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Current Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Current Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50">
            <div className="flex items-center gap-3">
              <Play className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-blue-900">Demo Mode Active</p>
                <p className="text-sm text-blue-700">Using mock data for testing - fully functional!</p>
              </div>
            </div>
            <Badge className="bg-blue-100 text-blue-800">
              <CheckCircle className="h-3 w-3 mr-1" />
              Working
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Setup Options */}
      <Tabs defaultValue="manual" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="manual">Manual Setup</TabsTrigger>
          <TabsTrigger value="demo">Demo Mode</TabsTrigger>
        </TabsList>

        {/* Manual Setup */}
        <TabsContent value="manual">
          <Card>
            <CardHeader>
              <CardTitle>Manual Supabase Setup</CardTitle>
              <p className="text-sm text-slate-600">Set up your own Supabase project for production use</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <h3 className="font-semibold">Create Supabase Project</h3>
                </div>
                <div className="ml-8 space-y-2">
                  <p className="text-sm text-slate-600">
                    Go to{" "}
                    <a
                      href="https://supabase.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-1"
                    >
                      supabase.com <ExternalLink className="h-3 w-3" />
                    </a>{" "}
                    and create a new project
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer">
                      Open Supabase Dashboard
                    </a>
                  </Button>
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <h3 className="font-semibold">Get Project Credentials</h3>
                </div>
                <div className="ml-8 space-y-3">
                  <p className="text-sm text-slate-600">From your Supabase project settings, copy these values:</p>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <Label htmlFor="supabase-url">Project URL</Label>
                      <Input
                        id="supabase-url"
                        placeholder="https://your-project.supabase.co"
                        className="font-mono text-sm"
                      />
                    </div>
                    <div>
                      <Label htmlFor="supabase-key">Anon Public Key</Label>
                      <Input
                        id="supabase-key"
                        placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                        className="font-mono text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <h3 className="font-semibold">Add Environment Variables</h3>
                </div>
                <div className="ml-8 space-y-3">
                  <p className="text-sm text-slate-600">Add these to your project's environment variables:</p>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg relative">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 text-slate-400 hover:text-white"
                      onClick={() =>
                        copyToClipboard(
                          `NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here`,
                          "env",
                        )
                      }
                    >
                      {copied === "env" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                    <pre className="text-sm">
                      {`NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <h3 className="font-semibold">Run Database Setup</h3>
                </div>
                <div className="ml-8 space-y-3">
                  <p className="text-sm text-slate-600">Copy and run this SQL script in your Supabase SQL editor:</p>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg relative max-h-96 overflow-y-auto">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 text-slate-400 hover:text-white"
                      onClick={() => copyToClipboard(sqlScript, "sql")}
                    >
                      {copied === "sql" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                    <pre className="text-xs pr-12">{sqlScript}</pre>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://supabase.com/dashboard/project/_/sql" target="_blank" rel="noopener noreferrer">
                      Open SQL Editor
                    </a>
                  </Button>
                </div>
              </div>

              {/* Step 5 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    5
                  </div>
                  <h3 className="font-semibold">Test Your Setup</h3>
                </div>
                <div className="ml-8 space-y-2">
                  <p className="text-sm text-slate-600">
                    Once configured, refresh this page and test the booking system
                  </p>
                  <Button onClick={() => window.location.reload()}>Refresh Page</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Demo Mode */}
        <TabsContent value="demo">
          <Card>
            <CardHeader>
              <CardTitle>Demo Mode</CardTitle>
              <p className="text-sm text-slate-600">
                Your booking system is already working with mock data for testing
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">✅ Fully Functional!</h3>
                <p className="text-sm text-green-700 mb-3">
                  The system is running in demo mode with realistic sample data. You can:
                </p>
                <ul className="text-sm text-green-700 space-y-1 mb-4">
                  <li>• View the admin dashboard with sample bookings</li>
                  <li>• Test the booking form (submissions will be logged)</li>
                  <li>• Manage availability and blocked dates</li>
                  <li>• See all features working as intended</li>
                </ul>
                <div className="flex gap-2">
                  <Button asChild size="sm">
                    <a href="/admin">View Admin Dashboard</a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href="/schedule">Test Booking Form</a>
                  </Button>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Demo Features</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Sample bookings from different companies</li>
                  <li>• Realistic availability schedule (Mon-Fri, 9 AM - 5 PM)</li>
                  <li>• Example blocked dates for holidays</li>
                  <li>• All CRUD operations work (logged to console)</li>
                  <li>• Perfect for testing and demonstrations</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Production Ready</h3>
                <p className="text-sm text-yellow-700">
                  When you're ready for production, simply follow the manual setup steps above to connect a real
                  Supabase database. All your data will be persisted and the system will work exactly the same way.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
