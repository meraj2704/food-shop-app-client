import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react"

interface ProviderProps {
    children: ReactNode;
}

const Providers = ({children}:ProviderProps) => {
    const [mounted,setMounted] = useState(false);

    useEffect(()=> {
        setMounted(true);
    },[])

    if(!mounted){
        return <>{children}</>
    }
    return(
        <ThemeProvider>{children}</ThemeProvider>
    )
}

export default Providers;