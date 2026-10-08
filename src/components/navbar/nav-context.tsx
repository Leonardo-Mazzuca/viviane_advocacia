import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useLocation } from "react-router-dom"

type NavContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
}

const NavContext = createContext<NavContextValue | null>(null)

export function NavProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return <NavContext.Provider value={{ open, setOpen }}>{children}</NavContext.Provider>
}

export function useNav() {
  const context = useContext(NavContext)
  if (!context) throw new Error("useNav deve ser usado dentro de NavProvider")
  return context
}
