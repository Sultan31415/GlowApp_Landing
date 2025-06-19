"use client"

import React, { useState, useCallback } from "react"
import { cn } from "../../lib/utils"

interface SliderProps {
  value: number[]
  onValueChange: (value: number[]) => void
  max?: number
  min?: number
  step?: number
  className?: string
}

const Slider: React.FC<SliderProps> = ({ value, onValueChange, max = 100, min = 0, step = 1, className }) => {
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    updateValue(e)
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        updateValue(e)
      }
    },
    [isDragging],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const updateValue = (e: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const percentage = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    const newValue = Math.round((percentage * (max - min) + min) / step) * step
    onValueChange([newValue])
  }

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  const percentage = ((value[0] - min) / (max - min)) * 100

  return (
    <div
      className={cn("relative flex w-full touch-none select-none items-center", className)}
      onMouseDown={handleMouseDown}
    >
      <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
        <div
          className="absolute h-full bg-gradient-to-r from-purple-500 to-pink-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div
        className="block h-5 w-5 rounded-full border-2 border-purple-500 bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 absolute"
        style={{ left: `calc(${percentage}% - 10px)` }}
      />
    </div>
  )
}

export { Slider }
