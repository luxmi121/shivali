"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Phone, Sparkles, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { generateWhatsAppLink, generatePhoneLink } from "@/lib/utils"

interface HeroSectionProps {
  name: string
  tagline: string
  phone?: string
  whatsappNumber?: string
  email?: string
  whatsappMessage: string
  address: string
  hero: {
    subtitle: string
    description: string
    detailedDescription: string
    features: Array<{
      icon: string
      title: string
      description: string
    }>
  }
}

export function HeroSection({ name, tagline, phone, whatsappNumber, email, whatsappMessage, address, hero }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Function to get icon component by name
  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: any } = {
      MapPin,
      Clock,
      Sparkles,
      MessageCircle,
      Phone
    }
    return icons[iconName] || Sparkles
  }

  const heroImages = [
    "/beautiful-woman-getting-facial-treatment-at-spa.jpg",
    "/woman-getting-hair-treatment-at-salon.jpg",
    "/beautiful-indian-bride-getting-makeup.jpg",
    "/beautiful-nail-art-and-manicure.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section className="relative min-h-[90vh] pt-10 flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt="Beauty service"
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-padding w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">{hero?.subtitle}</span>
              </div>

              <h1 className=" text-4xl font-bold leading-tight text-balance">
                <span className="gradient-text">{name}</span>
                <br />
                <span className="text-foreground">{tagline}</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg text-pretty">
                {hero?.description}
              </p>

              <p className="text-base text-muted-foreground leading-relaxed max-w-lg text-pretty">
                {hero?.detailedDescription}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {whatsappNumber && (
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 lg:px-8">
                  <Link href={generateWhatsAppLink(whatsappNumber, whatsappMessage)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book via WhatsApp
                  </Link>
                </Button>
              )}

              {phone && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:bg-primary/5 px-6 lg:px-8 bg-transparent"
                >
                  <Link href={generatePhoneLink(phone)} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Link>
                </Button>
              )}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 lg:pt-8">
              {hero?.features.map((feature, index) => {
                const IconComponent = getIconComponent(feature.icon)
                return (
                  <Card key={index} className="p-4 glass-effect border-primary/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm">{feature.title}</h3>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Right side - Image indicators */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="flex flex-col space-y-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
