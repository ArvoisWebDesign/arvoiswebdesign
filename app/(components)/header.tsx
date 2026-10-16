"use client"

import { GiHamburgerMenu } from "react-icons/gi"
import { handleToggleNav } from "@/lib/scripts"
import Link from "next/link"
import Nav from "./nav"

export default function Header() {
    return (
        <header className="fixed z-50 min-h-16 p-8 w-full">
            <div className="backdrop-blur-xl animate-opacity grid grid-cols-[1fr_auto_1fr]
                bg-aw-dark/50 shadow-aw-dark-8
                lg:rounded-full rounded-2xl">
                <button 
                    className="lg:hidden w-fit p-4 text-aw-white hover:bg-aw-greyblue animate-opacity
                    lg:rounded-full rounded-2xl" 
                    id="toggleNav" type="button" onClick={handleToggleNav}
                    aria-label="navigation toggler for mobile users">
                    <GiHamburgerMenu />
                </button>

                <div className="lg:justify-start flex items-center justify-center text-3xl">
                    <Link href="/" 
                        className="font-black px-8 h-auto drop-shadow-aw-dark-8">
                        AW
                    </Link>
                </div>

                <span className="lg:hidden"></span>
                
                <Nav />
            </div>
            
        </header>
    )
}