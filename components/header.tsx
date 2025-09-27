import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { generateWhatsAppLink, generatePhoneLink } from "@/lib/utils"

interface HeaderProps {
  logo: string
  name: string
  tagline: string
  phone?: string
  whatsappNumber?: string
  email?: string
  whatsappMessage: string
}

export function Header({ logo, name, tagline, phone, whatsappNumber, email, whatsappMessage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b">
      <div className="container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
              <Image src={logo} alt={name} width={35} height={35} className="rounded-lg h-8 w-8" />
            <div className=" ml-1" >
              <h1 className="text-xl font-bold gradient-text">{name}</h1>
              <p className="text-xs text-muted-foreground -mt-1">{tagline}</p>
            </div>
          </Link>

          {/* Action Buttons - Same design for all screen sizes */}
          <div className="flex items-center space-x-2">
            {whatsappNumber && (
              <Button asChild variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5 bg-transparent">
                <Link href={generateWhatsAppLink(whatsappNumber, whatsappMessage)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Chat Now</span>
                </Link>
              </Button>
            )}

            {phone && (
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                <Link href={generatePhoneLink(phone)} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Call Now</span>
                </Link>
              </Button>
            )}

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
