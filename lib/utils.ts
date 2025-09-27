import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price)
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

export const generateWhatsAppLink = (phone: string, message?: string): string => {
  const baseUrl = "https://wa.me/"
  const formattedPhone = phone?.replace(/[^\d]/g, "")
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : ""
  return `${baseUrl}${formattedPhone}${encodedMessage}`
}

export const generatePhoneLink = (phone: string): string => {
  return `tel:${phone?.replace(/[^\d]/g, "")}`
}
