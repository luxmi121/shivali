"use client"
import { Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ServiceCard } from "@/components/service-card"

interface CategorySectionProps {
  category: any
}

export function CategorySection({ category }: CategorySectionProps) {
  return (
    <Card className="overflow-hidden break-inside-avoid border-primary/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300 bg-card">
      <CardHeader className="p-0">
        <div className="flex flex-col sm:flex-row sm:items-center items-start gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-6">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center flex-shrink-0 shadow-sm">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground text-balance">{category.categoryTitle}</h2>
            <p className="text-muted-foreground mt-1 text-pretty text-xs sm:text-sm lg:text-base">{category.description}</p>

            <div className="mt-3 sm:mt-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-xs sm:text-sm text-primary font-medium">
                {category.items.length} services available
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-4 sm:px-6 pt-0 pb-4 sm:pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {category.items.map((service: any, index: number) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
