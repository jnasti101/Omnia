"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Calendar,
  Clock,
  Plus,
  Edit,
  Trash2,
  Mail,
  Phone,
  Building,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react"
import { supabase } from "@/lib/supabase"
import type { Booking, Availability, BlockedDate } from "@/lib/supabase"
import { isSupabaseConfigured } from "@/lib/supabase"

export function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [availability, setAvailability] = useState<Availability[]>([])
  const [blockedDates, setBlockedDates] = useState<BlockedDate[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalBookings: 0,
    confirmedBookings: 0,
    pendingBookings: 0,
    cancelledBookings: 0,
  })

  const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    try {
      // Load bookings
      const { data: bookingsData } = await supabase
        .from("bookings")
        .select("*")
        .order("booking_date", { ascending: false })

      // Load availability
      const { data: availabilityData } = await supabase.from("availability").select("*").order("day_of_week")

      // Load blocked dates
      const { data: blockedDatesData } = await supabase
        .from("blocked_dates")
        .select("*")
        .order("blocked_date", { ascending: false })

      if (bookingsData) {
        setBookings(bookingsData)

        // Calculate stats
        const total = bookingsData.length
        const confirmed = bookingsData.filter((b) => b.status === "confirmed").length
        const cancelled = bookingsData.filter((b) => b.status === "cancelled").length
        const completed = bookingsData.filter((b) => b.status === "completed").length

        setStats({
          totalBookings: total,
          confirmedBookings: confirmed,
          pendingBookings: 0, // We don't have pending status in current schema
          cancelledBookings: cancelled,
        })
      }

      if (availabilityData) setAvailability(availabilityData)
      if (blockedDatesData) setBlockedDates(blockedDatesData)
    } catch (error) {
      console.error("Error loading data:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateBookingStatus = async (bookingId: string, status: string) => {
    try {
      const { error } = await supabase
        .from("bookings")
        .update({ status, updated_at: new Date().toISOString() })
        .eq("id", bookingId)

      if (!error) {
        loadData() // Reload data
      }
    } catch (error) {
      console.error("Error updating booking:", error)
    }
  }

  const deleteBooking = async (bookingId: string) => {
    try {
      const { error } = await supabase.from("bookings").delete().eq("id", bookingId)

      if (!error) {
        loadData() // Reload data
      }
    } catch (error) {
      console.error("Error deleting booking:", error)
    }
  }

  const addBlockedDate = async (date: string, reason: string) => {
    try {
      const { error } = await supabase.from("blocked_dates").insert({ blocked_date: date, reason })

      if (!error) {
        loadData() // Reload data
      }
    } catch (error) {
      console.error("Error adding blocked date:", error)
    }
  }

  const removeBlockedDate = async (id: string) => {
    try {
      const { error } = await supabase.from("blocked_dates").delete().eq("id", id)

      if (!error) {
        loadData() // Reload data
      }
    } catch (error) {
      console.error("Error removing blocked date:", error)
    }
  }

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":")
    const hour = Number.parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
    return `${displayHour}:${minutes} ${ampm}`
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-100 text-green-800">Confirmed</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>
      case "completed":
        return <Badge className="bg-blue-100 text-blue-800">Completed</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>
    }
  }

  if (!isSupabaseConfigured) {
    return (
      <div className="p-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-600">
              <AlertCircle className="h-6 w-6" />
              Supabase Configuration Required
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              The admin dashboard requires Supabase to be configured. Please follow these steps:
            </p>

            <div className="bg-slate-50 p-4 rounded-lg space-y-3">
              <h3 className="font-semibold">Setup Instructions:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Add the Supabase integration to your project</li>
                <li>The system will automatically create a Supabase project for you</li>
                <li>Environment variables will be configured automatically</li>
                <li>Run the database setup script to create the required tables</li>
                <li>Refresh this page to access the admin dashboard</li>
              </ol>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">What you'll get:</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• PostgreSQL database in the cloud</li>
                <li>• Real-time booking management</li>
                <li>• Automatic API generation</li>
                <li>• Secure data storage</li>
                <li>• Admin dashboard functionality</li>
              </ul>
            </div>

            <Button onClick={() => window.location.reload()} className="w-full">
              Refresh Page After Setup
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-slate-200 rounded w-1/4"></div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 bg-slate-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-600">Manage bookings and availability</p>
        </div>
        <Button onClick={loadData} variant="outline">
          Refresh Data
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-slate-600">Total Bookings</p>
                <p className="text-2xl font-bold text-slate-900">{stats.totalBookings}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-slate-600">Confirmed</p>
                <p className="text-2xl font-bold text-slate-900">{stats.confirmedBookings}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="text-sm font-medium text-slate-600">Pending</p>
                <p className="text-2xl font-bold text-slate-900">{stats.pendingBookings}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <XCircle className="h-5 w-5 text-red-600" />
              <div>
                <p className="text-sm font-medium text-slate-600">Cancelled</p>
                <p className="text-2xl font-bold text-slate-900">{stats.cancelledBookings}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="bookings" className="space-y-6">
        <TabsList>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="availability">Availability</TabsTrigger>
          <TabsTrigger value="blocked-dates">Blocked Dates</TabsTrigger>
        </TabsList>

        {/* Bookings Tab */}
        <TabsContent value="bookings">
          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{booking.name}</p>
                          {booking.company && (
                            <p className="text-sm text-slate-600 flex items-center gap-1">
                              <Building className="h-3 w-3" />
                              {booking.company}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <p className="text-sm flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {booking.email}
                          </p>
                          {booking.phone && (
                            <p className="text-sm flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {booking.phone}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{new Date(booking.booking_date).toLocaleDateString()}</p>
                          <p className="text-sm text-slate-600">{formatTime(booking.booking_time)}</p>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(booking.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {booking.status === "confirmed" && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateBookingStatus(booking.id, "completed")}
                            >
                              Mark Complete
                            </Button>
                          )}
                          {booking.status === "confirmed" && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateBookingStatus(booking.id, "cancelled")}
                            >
                              Cancel
                            </Button>
                          )}
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button size="sm" variant="outline" className="text-red-600 bg-transparent">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Delete Booking</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to delete this booking? This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => deleteBooking(booking.id)}
                                  className="bg-red-600 hover:bg-red-700"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Availability Tab */}
        <TabsContent value="availability">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {DAYS_OF_WEEK.map((day, index) => {
                  const dayAvailability = availability.find((a) => a.day_of_week === index)
                  return (
                    <div key={day} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-24">
                          <p className="font-medium">{day}</p>
                        </div>
                        {dayAvailability ? (
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-slate-600" />
                            <span>
                              {formatTime(dayAvailability.start_time)} - {formatTime(dayAvailability.end_time)}
                            </span>
                            <Badge
                              className={
                                dayAvailability.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }
                            >
                              {dayAvailability.is_active ? "Active" : "Inactive"}
                            </Badge>
                          </div>
                        ) : (
                          <span className="text-slate-500">Not available</span>
                        )}
                      </div>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Blocked Dates Tab */}
        <TabsContent value="blocked-dates">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Blocked Dates</CardTitle>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Blocked Date
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Block Date</DialogTitle>
                    <DialogDescription>Block a specific date from booking availability</DialogDescription>
                  </DialogHeader>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      const formData = new FormData(e.currentTarget)
                      const date = formData.get("date") as string
                      const reason = formData.get("reason") as string
                      addBlockedDate(date, reason)
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" name="date" type="date" required min={new Date().toISOString().split("T")[0]} />
                    </div>
                    <div>
                      <Label htmlFor="reason">Reason (optional)</Label>
                      <Input id="reason" name="reason" placeholder="Holiday, vacation, etc." />
                    </div>
                    <Button type="submit" className="w-full">
                      Block Date
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {blockedDates.map((blockedDate) => (
                  <div key={blockedDate.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{new Date(blockedDate.blocked_date).toLocaleDateString()}</p>
                      {blockedDate.reason && <p className="text-sm text-slate-600">{blockedDate.reason}</p>}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => removeBlockedDate(blockedDate.id)}
                      className="text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                {blockedDates.length === 0 && <p className="text-slate-500 text-center py-8">No blocked dates</p>}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
