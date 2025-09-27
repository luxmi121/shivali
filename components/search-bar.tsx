"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
  className?: string
}

export function SearchBar({ onSearch, placeholder = "Search services...", className = "" }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    onSearch(value) // Trigger search on every keystroke
  }

  const handleClear = () => {
    setSearchQuery("")
    onSearch("")
  }

  return (
    <div className={`relative w-full max-w-2xl mx-auto ${className}`}>
      <div className="relative flex items-center">
        {/* Search Input */}
        <div className="relative flex-1 px-2">
          <Input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="w-full p-6 text-lg  placeholder:text-center  text-center rounded-full border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background/95 backdrop-blur-sm"
          />
          
          {/* Clear Button */}
          {searchQuery && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={handleClear}
              className="absolute right-14 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full hover:bg-muted/50"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

      
      </div>

    </div>
  )
}
