"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function ContactNav() {
    const pathname = usePathname();
    return (
        <nav className="flex gap-10 justify-center py-10">
            <Link
                href="/contact"
                className={`text-lg font-semibold capitalize ${pathname === "/contact" ? "border-b-2 border-solid border-foreground" : ""}`}>
                Info
            </Link>
            <Link
                href="/contact/form"
                className={`text-lg font-semibold capitalize ${pathname === "/contact/form" ? "border-b-2 border-solid border-foreground" : ""}`}>
                Form
            </Link>
        </nav>
    )
}
