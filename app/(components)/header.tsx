"use client"

import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link"
import Nav from "./nav"

function handleToggleNav() {
    let domNav = document.getElementById("nav")
    if(domNav != null) {
        if(domNav.classList.contains("hidden"))
            domNav.classList.remove("hidden")
        else
            domNav.classList.add("hidden")
    }
}

export default function Header() {
    return (
        <header className="animate-opacity grid grid-cols-[1fr_auto_1fr]
            bg-aw-dark bg-opacity-50 shadow-aw-dark-8 backdrop-blur-lg
            fixed w-screen min-h-16">
            <button 
                className="lg:hidden w-fit p-4 text-aw-white hover:bg-aw-greyblue animate-opacity" 
                id="toggleNav" type="button" aria-label="navigation toggler for mobile users" onClick={handleToggleNav}>
                <GiHamburgerMenu />
            </button>

            <div className="lg:justify-start flex items-center justify-center text-3xl">
                <Link 
                    href="/" 
                    className="font-black px-8 h-auto">
                    AW
                </Link>
            </div>

            <span className="lg:hidden"></span>
            
            <Nav />
        </header>
    )
}