"use client"

import clsx from "clsx"
import Link from "next/link"
import { useSelectedLayoutSegments } from "next/navigation"
import { handleToggleNav } from "@/lib/scripts"

type NavLink = {
    key:string;
    name:string;
    href:string;
}

const navLinks: NavLink[] = [
    {
        key: "home",
        name: "Accueil",
        href: "/"
    },
    {
        key: "productions",
        name: "Réalisations",
        href: "/productions"
    },
    {
        key: "cv",
        name: "Curriculum Vitae",
        href: "/cv"
    },
    {
        key: "contact",
        name: "Contact",
        href: "/contact"
    }
]

export default function Nav() {
    const activeHref = useSelectedLayoutSegments()

    return (
        <nav className="hidden lg:grid lg:grid-flow-col lg:auto-cols-fr 
            lg:col-span-1 col-span-3 text-center animate-opacity" id="nav">
            {navLinks.map((navLink) => {
                const isActive = navLink.href === "/" + activeHref
                
                return (
                    <Link
                        key={navLink.key}
                        href={navLink.href}
                        onClick={handleToggleNav}
                        className={clsx(
                            "block lg:inline-block font-bold text-lg m-2 px-4 py-2 ",
                            "rounded-full drop-shadow-aw-dark-4",
                            "hover:bg-aw-greyblue/50",
                            { "bg-aw-greyblue/50": isActive })}>
                        {navLink.name}
                    </Link>
                )
            })}
        </nav>
    )
}