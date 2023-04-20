import Image from "next/image"
import Link from "next/link"
import { productions } from "./(data)/productions"

export default function Productions() {
    return (
        <>
            <h1 className="mb-8 font-black text-3xl">Réalisations</h1>
            
            {/*cards container*/}
            <div className="flex flex-row flex-wrap overflow-visible gap-8">
                {productions.map((production) => {
                    {/*card*/}
                    return (
                        <div key={production.key} 
                            className="w-fit rounded-2xl flex flex-col bg-aw-dark bg-opacity-50 shadow-aw-dark-8">
                            <div className="p-4 mb-auto">
                                <Image 
                                    src={production.previewImg.src} 
                                    alt={production.previewImg.alt}
                                    width={480}
                                    height={272}
                                    className="mb-4 rounded-lg shadow-aw-dark-8" />

                                <div className="max-w-[480px]">
                                    {/*tags*/}
                                    <div className="flex flex-row flex-wrap gap-2 mb-4">
                                        {production.tags.map((tag) => {
                                            return (
                                                <span className="rounded-full text-aw-purple text-sm font-bold
                                                    bg-aw-purple bg-opacity-10 px-2 py-1 shadow-aw-dark-4" 
                                                    key={tag.key}>
                                                    {tag.name}
                                                </span>
                                            )
                                        })}
                                    </div>
                                    
                                    {/*card content*/}
                                    <h2 className="font-bold text-lg">{production.name}</h2>
                                    <p>{production.description}</p>
                                </div>
                            </div>
                            
                            {/*card footer with buttons*/}
                            <div className="border-t border-aw-greyblue border-opacity-25
                                divide-x divide-aw-greyblue divide-opacity-25
                                grid grid-cols-2 items-center text-center">
                                {production.href != "" && 
                                    <Link href={production.href} target="_blank"
                                        className="p-4 font-bold text-lg hover:bg-aw-greyblue hover:bg-opacity-50">
                                        Site
                                    </Link>
                                }
                                {production.github != "" && 
                                    <Link href={production.github} target="_blank"
                                        className="p-4 font-bold text-lg hover:bg-aw-greyblue hover:bg-opacity-50">
                                        GitHub repository
                                    </Link>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}