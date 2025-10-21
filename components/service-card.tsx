"use client"

import { useState } from "react"
import Link from "next/link"
import { IndianRupee, MessageCircle, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { generateWhatsAppLink, generatePhoneLink } from "@/lib/utils"

interface ServiceCardProps {
  service: any
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const phoneNumber = "+91 9266711329"
  const whatsappMessage = `Hello! I'm interested in booking the ${service?.serviceTitle} service for ₹${service?.price.toLocaleString("en-IN")}. Could you please provide me with more details about availability and booking process?`

  return (
    <>
      <div 
        className="group p-4 rounded-lg border border-border bg-card hover:bg-accent/50 hover:border-primary/30 transition-all duration-200 cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="space-y-2">
          {/* Title */}
          <h3 className="font-semibold text-sm sm:text-base text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {service?.serviceTitle}
          </h3>
          
          {/* Description */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {service?.description}
          </p>
          
          {/* Price */}
          <div className="flex items-center space-x-1 text-primary font-bold text-sm sm:text-base">
            <IndianRupee className="w-4 h-4" />
            <span>{service?.price.toLocaleString("en-IN")}</span>
          </div>
        </div>
      </div>

      {/* Service Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <DialogTitle className="text-xl font-bold">{service?.serviceTitle}</DialogTitle>
            </div>
            <DialogDescription className="text-base leading-relaxed">
              {service?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Price Display */}
            <div className="flex items-center justify-center space-x-2 text-primary font-bold text-2xl py-4 bg-primary/5 rounded-lg">
              <IndianRupee className="w-6 h-6" />
              <span>{service?.price.toLocaleString("en-IN")}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                <Link href={generateWhatsAppLink(phoneNumber, whatsappMessage)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat Now
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="flex-1 border-primary/20 hover:bg-primary/5"
              >
                <Link href={generatePhoneLink(phoneNumber)} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Link>
              </Button>
            </div>

            {/* Additional Info */}
            <div className="text-center text-sm text-muted-foreground">
              <p>Ready to book? Contact us now for availability and scheduling!</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
