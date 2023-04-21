import Image from "next/image"
import Link from "next/link"
import { productions } from "./(data)/productions"
import { FaGithub } from "react-icons/fa"
import { TbWorldWww } from "react-icons/tb"

export default function Productions() {
    return (
        <>
            <div className="flex flex-row mb-8">
                <h1 className="font-black text-3xl">Réalisations</h1>

                <Link href="https://github.com/ArvoisWebDesign" 
                    target="_blank"
                    className="font-bold flex flex-row 
                    w-fit ml-auto px-2 py-1 items-center align-middle
                    rounded-lg border-2 border-aw-greyblue shadow-aw-dark-8
                    bg-aw-greyblue bg-opacity-10 hover:bg-opacity-100"
                    title="GitHub">
                    <FaGithub /><span className="hidden sm:inline">&nbsp;GitHub</span>
                </Link>
            </div>
            
            {/*cards container*/}
            <div className="flex flex-row flex-wrap gap-8">
                {productions.map((production) => {
                    {/*card*/}
                    return (
                        <div key={production.key} 
                            className="max-w-xl rounded-2xl flex flex-col gap-4 p-4
                                bg-aw-dark bg-opacity-50 shadow-aw-dark-8">
                            <Image 
                                src={production.previewImg.src} 
                                alt={production.previewImg.alt}
                                width={720}
                                height={556}
                                className="rounded-lg shadow-aw-dark-8" priority />

                            {/*tags*/}
                            <div className="flex flex-row flex-wrap gap-2">
                                {production.tags.map((tag) => {
                                    return (
                                        <span className="rounded-full text-aw-purple text-sm font-bold
                                            bg-aw-purple bg-opacity-10 px-2 py-1 drop-shadow-aw-dark-4" 
                                            key={tag.key}>
                                            {tag.name}
                                        </span>
                                    )
                                })}
                            </div>
                            
                            {/*card content*/}
                            <div className="grow">
                                <h2 className="font-bold text-lg">{production.name}</h2>
                                <p className="text-muted-foreground">{production.description}</p>
                            </div>

                            {/*card footer with buttons*/}
                            <div className="flex flex-row gap-4">
                                {production.href != "" && 
                                    <Link href={production.href} target="_blank"
                                        className="px-2 py-1 font-bold text-lg text-center leading-8 grow
                                            flex flex-row justify-center items-center
                                            rounded-lg border-2 border-aw-greyblue drop-shadow-aw-dark-4
                                            bg-aw-greyblue bg-opacity-10 hover:bg-opacity-100">
                                        <TbWorldWww />&nbsp;Site
                                    </Link>
                                }
                                {production.github != "" && 
                                    <Link href={production.github} target="_blank"
                                        className="px-2 py-1 font-bold text-lg text-center leading-8 grow
                                            flex flex-row justify-center items-center
                                            rounded-lg border-2 border-aw-greyblue drop-shadow-aw-dark-4
                                            bg-aw-greyblue bg-opacity-10 hover:bg-opacity-100">
                                        <FaGithub />&nbsp;GitHub
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