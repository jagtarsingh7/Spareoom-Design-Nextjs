'use client'
import { createContext } from "react";
import { IMyContext } from "../Interface/Interfaces";

const MyContext =createContext<IMyContext>({} as IMyContext)

export default MyContext