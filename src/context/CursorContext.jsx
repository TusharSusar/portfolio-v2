import { createContext, useContext, useMemo, useState } from 'react'

const CursorContext = createContext(null)

export function CursorProvider({ children }) {
  const [cursorVariant, setCursorVariant] = useState('default')

  const value = useMemo(
    () => ({
      cursorVariant,
      setCursorVariant,
    }),
    [cursorVariant],
  )

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
}

export function useCursor() {
  const context = useContext(CursorContext)

  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider')
  }

  return context
}
