"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CategorySection } from "@/components/category-section"
import { SearchBar } from "@/components/search-bar"
import { useSearch } from "@/hooks/use-search"

interface Category {
  categoryTitle: string
  description: string
  items: Array<{
    serviceTitle: string
    description: string
    price: number
  }>
}

interface ServicesSectionProps {
  categories: Category[]
  sectionTitle?: string
  sectionDescription?: string
}

export function ServicesSection({ categories, sectionTitle, sectionDescription }: ServicesSectionProps) {
  const { searchQuery, setSearchQuery, filteredServices, searchResults } = useSearch(categories as any)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
            </div>
          </div> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {sectionTitle || "Our Beauty Services"}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {sectionDescription || "Discover our comprehensive range of professional beauty treatments, all delivered to your home with premium products and expert care."}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <SearchBar 
              onSearch={handleSearch}
              placeholder="Search services, treatments, or categories..."
              className="w-full"
            />
          </div>

          {/* Search Results Info */}
          {searchQuery && (
            <div className="mb-8">
              {searchResults.hasResults ? (
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Search className="w-5 h-5" />
                  <span className="text-lg">
                    Found {searchResults.totalCategories} categories with {searchResults.totalItems} services
                    {searchQuery && ` for "${searchQuery}"`}
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Search className="w-5 h-5" />
                  <span className="text-lg">No results found for "{searchQuery}"</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {filteredServices?.map((category, index) => (
            <CategorySection
              key={index}
              category={category}
            />
          ))}
        </div>

        {/* No Results Message */}
        {searchQuery && !searchResults.hasResults && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">No services found</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Try searching with different keywords or browse all our services
            </p>
            <Button 
              onClick={() =>{handleSearch(""); setSearchQuery("")}}
              variant="outline"
              className="rounded-full px-8 py-3 text-lg"
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
