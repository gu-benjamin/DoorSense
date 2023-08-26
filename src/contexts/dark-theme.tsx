import { ReactNode, createContext, useState } from "react"


interface DarkThemeProviderProps {
    children: ReactNode
}

const DarkThemeContext = createContext({})

export default DarkThemeContext;

export function DarkThemeProvider({children} : DarkThemeProviderProps){

    const [theme, setTheme] = useState(false)
    
    return(
        <DarkThemeContext.Provider value={''}>
            {children}
        </DarkThemeContext.Provider>
    )
}