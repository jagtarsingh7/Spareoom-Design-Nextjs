'use client'
import MyContext from "./MyContext"
import {useState} from 'react';

export default function ContextComponent({
    children,
}: {
    children: React.ReactNode;
}) 
{
    const[subHead,setSubHead]=useState<number>(0)

    return (
        <MyContext.Provider value={{subHead,setSubHead}}>
            {children}
        </MyContext.Provider>
   )
}

