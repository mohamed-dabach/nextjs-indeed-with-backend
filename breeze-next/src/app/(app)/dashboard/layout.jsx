'use client'
import Footer from '@/componets/footer'
import Nav from '@/componets/nav'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
export default function Dashboard({ children }) {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    )
}
