import { createContext } from "react"
import type { HeadPayload } from "@/lib/head"

export const HeadContext = createContext<{ current: HeadPayload | null } | null>(null)
