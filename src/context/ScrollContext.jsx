import { createContext, useContext, useMemo, useState } from 'react'

const ScrollContext = createContext(null)

export function ScrollProvider({ children }) {
  const [scrollY, setScrollY] = useState(0)

  const value = useMemo(
    () => ({
      scrollY,
      setScrollY,
    }),
    [scrollY],
  )

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}

export function useScroll() {
  const context = useContext(ScrollContext)

  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }

  return context
}
