"use client";
import Image from "next/image";
import Link from "next/link";           
import { usePathname } from "next/navigation";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import useUser from "@/hooks/useUser";
import Logout from "./Logout";

export default function Navbar() {
  const user = useUser();
    const pathname = usePathname();
  return (
    <header className="flex justify-between items-center p-4 sticky top-0 bg-background z-50 border-b border-border">
        <div>
            <Image src="/next.svg" alt="logo" width={110} height={38} />
        </div>
        <nav className="flex gap-4 ">
            <Link href="/" className={pathname === "/" ? "text-primary font-bold" : ""} >Home</Link>
            <Link href="/crud" className={pathname === "/crud" ? "text-primary font-bold" : ""}>CRUD</Link>
            <Link href="/contact" className={pathname === "/contact" ? "text-primary font-bold" : ""}>Contact</Link>
        </nav>  
        {/* <LocaleSwitcher /> */}
       {
        user ? (
          <div className="flex items-center gap-2">
            <img src={`https://placehold.co/100?text=${user.name}`} alt={user.name} width={30} height={30} className="rounded-full" />
            <Link href="/dashboard" className="text-primary font-bold">{user.name}</Link>
          </div>
        ) : (
            <Link href="/signup-form" className="text-primary font-bold">
                Signup / Login
            </Link>
        )
       }
    </header>
  )
}
