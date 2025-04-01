import { createContext, useState, useEffect } from "react";

export const DropdownContext = createContext()

export function DropdownContextProvider({ children }) {
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight })
    useEffect(() => {
        const resize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight })
        }
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])
    return (
        <DropdownContext.Provider value={{
            windowSize
        }}>
            {children}
        </DropdownContext.Provider>
    )
}