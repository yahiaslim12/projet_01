'use client'
import { SessionProvider } from "next-auth/react"
import Header from "./Header"
import Footer from "./Footer"
import { useSession } from "next-auth/react"
import {AuthProvider} from "./AuthProvider"
export default function Provider({children}) {
  
  return (
    <SessionProvider>
        <AuthProvider>
            <Header/>
            {children}
            <Footer/>
        </AuthProvider>
    </SessionProvider>
  )
}
