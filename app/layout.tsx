import { Analytics } from "@vercel/analytics/react"

import "./globals.css"

import React from "react"

import { Metadata } from "next"
import { Montserrat } from "next/font/google"
import Header from "./(components)/header"
import Footer from "./(components)/footer"

const importedFont = Montserrat({
    subsets: ["latin"],
    display: "swap"
})

export const metadata:Metadata = {
    title: "Arvois Webdesign",
    description: "Développeur web fullstack",
    referrer: "origin-when-cross-origin",
    keywords: ["Freelance", "Webmaster", "Webdesigner", "Développeur", "Application", "ASP.NET", "NextJS", "dotnet"],
    authors: [{ name: "Arvois Webdesign", url: "https://github.com/ArvoisWebDesign" }],
    creator: "Arvois Webdesign",
    publisher: "Arvois Webdesign",
    icons: {
        icon: "./public/icon-32x32.png",
        shortcut: "./public/icon-128x128.png",
        apple: "./public/icon-128x128.png",
        other: [
            {
                rel: "apple-touch-icon-precomposed",
                url: "./public/icon-128x128.png"
            }
        ]
    },
    viewport: {
        width: "device-width",
        initialScale: 1
    },
    openGraph: {
        title: "Arvois Webdesign",
        description: "Développeur web fullstack",
        publishedTime: new Date().toDateString(),
        authors: ["Arvois Webdesign"]
    },
    twitter: {
        card: "summary_large_image",
        title: "Arvois Webdesign",
        description: "Développeur web fullstack",
        creator: "@slvv808",
        images: ["https://arvoiswebdesign.vercel.app/opengraph-image.png"]
    }
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <html lang="fr" className={importedFont.className}>
            <body className="bg-aw-background bg-cover bg-fixed bg-center text-aw-white text-lg
                grid grid-rows-[auto_min-content_repeat(999,_0px)] min-h-screen">
                <Header />
                
                <main className="p-8 mt-16 lg:w-fit lg:mx-auto">
                    {children}
                </main>
                
                <Footer />

                <Analytics />
            </body>
        </html>
    )
}