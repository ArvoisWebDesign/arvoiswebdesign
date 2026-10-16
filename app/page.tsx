import Image from "next/image"

import { languages, frameworks, sgbd_orm, devops } from "./cv/(data)/skills"
import BtnDownloadCv from "./(components)/btnDownloadCv"
import BtnLinkedin from "./(components)/btnLinkedin"
import Mail from "./contact/(components)/mail"

export default function Home() {
    return (
        <div className="flex flex-col gap-8">
            <div className="text-center drop-shadow-aw-dark-8">
                <h2 className="font-black text-4xl md:text-5xl lg:text-6xl italic leading-8xl">ARVOIS WEBDESIGN</h2>
            </div>

            <div className="w-fit flex flex-row flex-wrap gap-4 mx-auto">
                <BtnDownloadCv />
                <BtnLinkedin />
                <Mail />
            </div>

            <div className="grid grid-flow-row lg:grid-flow-col grid-cols-auto gap-8 w-fit mx-auto">
                <div className="flex flex-col gap-4 p-4
                    rounded-2xl bg-aw-dark/50 shadow-aw-dark-8">
                    <h3 className="font-bold">Lucas ARVOIS</h3>
                    <Image 
                        src={"/photo_pro_lucas_arvois_apave_trsp.png"}
                        alt="Photo de Lucas ARVOIS, développeur fullstack"
                        width={240}
                        height={360}
                        className="rounded-lg" priority />
                </div>

                <div className="flex flex-col gap-4 p-4 w-fit
                    rounded-2xl bg-aw-dark/50 shadow-aw-dark-8">
                    <div>
                        <h3 className="font-bold">Développeur fullstack</h3>
                        <ul className="text-muted-foreground">
                            <li>+4 ans d&apos;expérience</li>
                            <li>Maîtrise du .NET (ASP / jQuery / C#) et SQL Server</li>
                            <li>Grande capacité d&apos;adaptation, habitué aux codebases legacy</li>
                            <li>Code avec/sans IA, en équipe ou en solo</li>
                            <li>Disponible ASAP sur Strasbourg et proximité</li>
                        </ul>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row flex-wrap gap-2">
                            {languages.map((skill) => {
                                if (skill.cssClass == "legendary" || skill.cssClass == "epic") return (
                                    <span key={skill.key}
                                        className={"rounded-full text-sm font-bold " 
                                            + skill.cssClass
                                            + " px-2 py-1 drop-shadow-aw-dark-4"}>
                                        {skill.name}
                                    </span>
                                )
                            })}
                        </div>
                        <div className="flex flex-row flex-wrap gap-2">
                            {frameworks.map((skill) => {
                                if (skill.cssClass == "legendary" || skill.cssClass == "epic") return (
                                    <span key={skill.key}
                                        className={"rounded-full text-sm font-bold " 
                                            + skill.cssClass
                                            + " px-2 py-1 drop-shadow-aw-dark-4"}>
                                        {skill.name}
                                    </span>
                                )
                            })}
                        </div>
                        <div className="flex flex-row flex-wrap gap-2">
                            {sgbd_orm.map((skill) => {
                                if (skill.cssClass == "legendary" || skill.cssClass == "epic") return (
                                    <span key={skill.key}
                                        className={"rounded-full text-sm font-bold " 
                                            + skill.cssClass
                                            + " px-2 py-1 drop-shadow-aw-dark-4"}>
                                        {skill.name}
                                    </span>
                                )
                            })}
                        </div>
                        <div className="flex flex-row flex-wrap gap-2">
                            {devops.map((skill) => {
                                if (skill.cssClass == "legendary" || skill.cssClass == "epic") return (
                                    <span key={skill.key}
                                        className={"rounded-full text-sm font-bold " 
                                            + skill.cssClass
                                            + " px-2 py-1 drop-shadow-aw-dark-4"}>
                                        {skill.name}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
