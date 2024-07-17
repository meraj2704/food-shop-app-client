"use client"
import { ThemeProvider } from 'next-themes';
import React, { ReactNode, useEffect, useState } from 'react';
interface ProviderProps {
    children: ReactNode; 
}
const Provider = ({children}:ProviderProps) => {
    const [mounted,setMounted] = useState(false)
    useEffect(()=> {
        setMounted(true)
    },[])
    if(!mounted){
        return <>{children}</>
    }
    return (
       <ThemeProvider attribute='class'>{children} </ThemeProvider>
    );
};

export default Provider;