"use client"

import { useState, useMemo } from "react"

interface Service {
  id: string
  title: string
  description: string
  image: string
  features: string[]
  items: Array<{
    id: string
    title: string
    description: string
    price: number
    image: string
    popular: boolean
  }>
}

export function useSearch(services: Service[]) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) {
      return services
    }

    const query = searchQuery?.toLowerCase().trim()

    return services?.map(service => {
      // Check if category matches
      const categoryMatches = 
        service?.title?.toLowerCase().includes(query) ||
        service?.description?.toLowerCase().includes(query) 

      // Filter items within the category
      const filteredItems = service?.items.filter(item =>
        item.title?.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query) 
      )

      // If category matches or has matching items, return the service
      if (categoryMatches || filteredItems.length > 0) {
        return {
          ...service,
          items: categoryMatches ? service?.items : filteredItems
        }
      }

      return null
    }).filter(Boolean) as Service[]
  }, [services, searchQuery])

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return {
        totalCategories: services?.length,
        totalItems: services?.reduce((sum, service) => sum + service?.items.length, 0),
        hasResults: true
      }
    }

    const totalCategories = filteredServices?.length
    const totalItems = filteredServices?.reduce((sum, service) => sum + service?.items.length, 0)

    return {
      totalCategories,
      totalItems,
      hasResults: totalCategories > 0
    }
  }, [filteredServices, searchQuery, services])

  return {
    searchQuery,
    setSearchQuery,
    filteredServices,
    searchResults
  }
}
