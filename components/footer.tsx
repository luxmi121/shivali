"use client"

import Link from "next/link"
import { MessageCircle, Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { generateWhatsAppLink, generatePhoneLink } from "@/lib/utils"
import Image from "next/image"

interface FooterProps {
  logo: string
  name: string
  tagline: string
  phone?: string
  whatsappNumber?: string
  email?: string
  address: string
  whatsappMessage: string
  socialMedia?: {
    instagram?: string
    facebook?: string
    twitter?: string
  } 
  services: any[]
}

export function Footer({ logo, name, tagline, phone, whatsappNumber, email, address, whatsappMessage, socialMedia, services }: FooterProps) {

  return (
    <footer className="bg-card border-t">
      <div className="container-padding">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image src={logo} alt={name} width={40} height={40} className="rounded-lg" />
                <div>
                  <h3 className="text-xl font-bold gradient-text">{name}</h3>
                  <p className="text-sm text-muted-foreground -mt-1">{tagline}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professional beauty services at your doorstep. Experience luxury treatments in the comfort of your home
                with our certified experts.
              </p>
              <div className="flex space-x-2">
                {socialMedia?.instagram && (
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <Link href={socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {socialMedia?.facebook && (
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <Link href={socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {socialMedia?.twitter && (
                  <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                    <Link href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Our Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {
                  services?.map((category: any, index: number) => (
                  <li key={index}>
                    <Link href="#" className="hover:text-primary transition-colors">
                      {category.categoryTitle}
                    </Link>
                  </li>))
                }
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contact Info</h4>
              <div className="space-y-3 text-sm">
                {phone && (
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary" />
                    <Link href={generatePhoneLink(phone)} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      {phone}
                    </Link>
                  </div>
                )}
                {email && (
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    <Link href={`mailto:${email}`} className="hover:text-primary transition-colors">
                      {email}
                    </Link>
                  </div>
                )}
                <div className="flex items-start space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <span>{address}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>9:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Book Now</h4>
              <div className="space-y-3">
                {whatsappNumber && (
                  <Button asChild className="w-full bg-primary hover:bg-primary/90" size="sm">
                    <Link href={generateWhatsAppLink(whatsappNumber, whatsappMessage)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Link>
                  </Button>
                )}
                {phone && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/20 hover:bg-primary/5 bg-transparent"
                    size="sm"
                  >
                    <Link href={generatePhoneLink(phone)} target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 {name} {tagline}.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-left">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
