"use client"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ServiceCard } from "@/components/service-card"

interface CategorySectionProps {
  category: any
  isExpanded: boolean
  onToggle: () => void
}

export function CategorySection({ category, isExpanded, onToggle }: CategorySectionProps) {
  return (
    <Card className="overflow-hidden break-inside-avoid  border-primary/10">
      <CardHeader className="cursor-pointer  transition-colors p-0" onClick={onToggle}>
        <div className="flex sm:flex-row flex-col sm:items-center items-start gap-6 px-6">
          <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 sm:block hidden">
            <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold text-balance">{category.title}</h2>
            <p className="text-muted-foreground mt-1 text-pretty">{category.description}</p>

            <div className="flex w-full items-center  justify-between gap-2">
              <p className="text-sm text-primary mt-2 font-medium">{category.items.length} services available</p>
              <Button variant="ghost" size="icon" className="flex-shrink-0 sm:hidden flex mt-4">
                {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          <Button variant="ghost" size="icon" className="flex-shrink-0 sm:flex hidden">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </Button>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className={`px-6 pt-0 ${isExpanded ? "lg:max-h-[370px] overflow-y-auto" : ""}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3  gap-4">
            {category.items.map((service: any) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  )
}
