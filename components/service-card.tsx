"use client"

import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Phone, Clock, IndianRupee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPrice, generateWhatsAppLink, generatePhoneLink } from "@/lib/utils"

interface ServiceCardProps {
  service: any
}

export function ServiceCard({ service }: ServiceCardProps) {
  const phoneNumber = service?.phone
  const whatsappMessage = `Hello! I'm interested in booking the ${service?.title} service for ${formatPrice(service?.price)}. Could you please provide me with more details about availability and booking process?`
  


  return (
    <Card className="bg-card border border-border rounded-lg overflow-hidden card-hover group py-0">
      <CardHeader className="p-0 ">
        <div className="relative h-32 overflow-hidden">
          <Image
            src={service?.image || "/placeholder.svg"}
            alt={service?.title}
            fill
            className="object-cover image-hover"
          />
          {/* <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-background/90 text-foreground">
              <Clock className="w-3 h-3 mr-1" />
              {service?.duration}
            </Badge>
          </div> */}
        </div>
      </CardHeader>

      <CardContent className="px-3 space-y-2 -my-2 ">
          <h3 className="font-semibold text-base text-balance line-clamp-1">{service?.title}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed text-pretty line-clamp-2">{service?.description}</p>

        <div className="flex items-center space-x-1 text-primary font-bold text-lg">
          <IndianRupee className="w-4 h-4" />
          <span>{service?.price.toLocaleString("en-IN")}</span>
        </div>
      </CardContent>

      <CardFooter className="p-3 pt-0 flex gap-2">
        <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-xs">
          <Link href={generateWhatsAppLink(phoneNumber, whatsappMessage)} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-3 h-3 mr-1" />
            Chat
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          size="sm"
          className="flex-1 border-primary/20 hover:bg-primary/5 bg-transparent text-xs"
        >
          <Link href={generatePhoneLink(phoneNumber)} target="_blank" rel="noopener noreferrer">
            <Phone className="w-3 h-3 mr-1" />
            Call
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
