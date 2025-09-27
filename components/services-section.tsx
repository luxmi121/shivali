"use client"

import { useState, useEffect } from "react"
import { Loader2, AlertCircle, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CategorySection } from "@/components/category-section"
import { SearchBar } from "@/components/search-bar"
import { useSearch } from "@/hooks/use-search"

interface Service {
  id: string
  title: string
  description: string
  image: string
  items: Array<{
    id: string
    title: string
    description: string
    price: number
    image: string
  }>
}

interface ServicesSectionProps {
  services: Service[]
  servicesTitle?: string
  servicesDescription?: string
}

export function ServicesSection({ services, servicesTitle, servicesDescription }: ServicesSectionProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())
  const { searchQuery, setSearchQuery, filteredServices, searchResults } = useSearch(services as any)

  // Expand all categories by default when services load
  useEffect(() => {
    if (services?.length > 0 && expandedCategories.size === 0) {
      setExpandedCategories(new Set(services?.map(service => service.id)))
    }
  }, [services, expandedCategories.size])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId)
      } else {
        newSet.add(categoryId)
      }
      return newSet
    })
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <section className="section-spacing bg-accent/20">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            {servicesTitle || "Our Beauty Services"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
            {servicesDescription || "Discover our comprehensive range of professional beauty treatments, all delivered to your home with premium products and expert care."}
          </p>
          
          {/* Search Bar */}
          <SearchBar 
            onSearch={handleSearch}
            placeholder="Search services, treatments, or categories..."
            className="mb-8"
          />

          {/* Search Results Info */}
          {searchQuery && (
            <div className="mb-6">
              {searchResults.hasResults ? (
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Search className="w-4 h-4" />
                  <span>
                    Found {searchResults.totalCategories} categories with {searchResults.totalItems} services
                    {searchQuery && ` for "${searchQuery}"`}
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Search className="w-4 h-4" />
                  <span>No results found for "{searchQuery}"</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className=" grid lg:grid-cols-2 gap-4 ">
          {filteredServices?.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              isExpanded={expandedCategories.has(category.id)}
              onToggle={() => toggleCategory(category.id)}
            />
          ))}
        </div>

        {/* No Results Message */}
        {searchQuery && !searchResults.hasResults && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No services found</h3>
            <p className="text-muted-foreground mb-4">
              Try searching with different keywords or browse all our services
            </p>
            <Button 
              onClick={() =>{handleSearch(""); setSearchQuery("")}}
              variant="outline"
              className="rounded-full"
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
