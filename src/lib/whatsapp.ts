import { contact } from "@/data/site"

export const whatsappMessage =
  "Olá, Viviane! Encontrei seu site e gostaria de conversar sobre uma questão jurídica relacionada ao meu patrimônio."

export const whatsappUrl = `https://wa.me/${contact.phoneE164}?text=${encodeURIComponent(whatsappMessage)}`
