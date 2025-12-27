"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, Settings } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface VideoControlsMobileProps {
  isPlaying: boolean
  isMuted: boolean
  currentVideo: number
  videoOptions: Array<{
    id: string
    title: string
    description: string
  }>
  onTogglePlay: () => void
  onToggleMute: () => void
  onChangeVideo: (index: number) => void
}

export function VideoControlsMobile({
  isPlaying,
  isMuted,
  currentVideo,
  videoOptions,
  onTogglePlay,
  onToggleMute,
  onChangeVideo,
}: VideoControlsMobileProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden absolute bottom-6 right-6 flex items-center space-x-2">
      {/* Quick Controls */}
      <Button
        size="sm"
        variant="ghost"
        onClick={onTogglePlay}
        className="bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm"
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>

      <Button
        size="sm"
        variant="ghost"
        onClick={onToggleMute}
        className="bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm"
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </Button>

      {/* Settings Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button size="sm" variant="ghost" className="bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm">
            <Settings className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="bg-slate-900 border-slate-700">
          <SheetHeader>
            <SheetTitle className="text-white">Video Settings</SheetTitle>
            <SheetDescription className="text-slate-400">Choose your preferred background video</SheetDescription>
          </SheetHeader>
          <div className="grid gap-3 py-4">
            {videoOptions.map((option, index) => (
              <Button
                key={option.id}
                variant="ghost"
                onClick={() => {
                  onChangeVideo(index)
                  setIsOpen(false)
                }}
                className={`justify-start h-auto p-4 ${
                  currentVideo === index
                    ? "bg-blue-600/20 text-blue-400 border border-blue-600/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <div className="text-left">
                  <div className="font-medium">{option.title}</div>
                  <div className="text-sm opacity-70">{option.description}</div>
                </div>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
