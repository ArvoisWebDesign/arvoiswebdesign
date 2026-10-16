import { BsFillSquareFill } from "react-icons/bs"
import { FaQuestionCircle, FaGreaterThan } from "react-icons/fa"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"

import { languages, frameworks, sgbd_orm, devops } from "./(data)/skills"
import BtnDownloadCv from "../(components)/btnDownloadCv"
import BtnLinkedin from "../(components)/btnLinkedin"

export default function Cv() {
    return (
        <>
            <div className="flex flex-row flex-wrap mb-8 gap-8">
                <h1 className="font-black text-3xl">Curriculum Vitae</h1>

                <div className="w-fit flex flex-row flex-wrap gap-4 ml-auto">
                    <BtnDownloadCv />

                    <BtnLinkedin />
                </div>
            </div>
            
            <div className="grid grid-flow-row lg:grid-flow-col grid-cols-auto gap-8">
                <div className="flex flex-col gap-8">
                    <div className="p-4 rounded-2xl flex flex-col gap-4
                        bg-aw-dark/50 shadow-aw-dark-8">
                        <h2 className="font-bold text-2xl">
                            Experiences professionnelles
                        </h2>
                        <div>
                            <h3 className="font-bold">Davidson Consulting - Strasbourg (07/2023 à 12/2025)</h3>
                            <h4 className="font-bold">Consultant en développement de logiciels</h4>
                            <p>Mission de développement fullstack pour l&apos;Apave (2 ans à Mulhouse) :</p>
                            <ul className="list-disc text-muted-foreground">
                                <li>Webservices .NET 8 / C# et application web Delphi (XML / Pascal / jQuery) et SQL Server</li>
                                <li>Analyse de flux de données avec MongoDB et Azure (Log Analytics, Databricks, Datalake)</li>
                                <li>Méthodologie AGILE et gestion du projet sur Azure DevOps</li>
                            </ul>
                            <p>Mission de Support Applicatif pour Mainta (4 mois à Mulhouse) :</p>
                            <ul className="list-disc text-muted-foreground">
                                <li>Qualification et résolution de tickets (outil interne)</li>
                            </ul>
                            <p>Développement d&apos;une application CRM pour Davidson Consulting (2 mois à Strasbourg) :</p>
                            <ul className="list-disc text-muted-foreground">
                                <li>Application web VueJS / NestJS / Typescript</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">Axon Cable - Montmirail (09/2020 à 09/2022)</h3>
                            <h4 className="font-bold">Développeur .NET</h4>
                            <p>Développement d&apos;un ERP interne (2 ans) :</p>
                            <ul className="list-disc text-muted-foreground">
                                <li>Applications web ASP.NET (C# / jQuery / Razor) et SQL Server</li>
                                <li>Refactorisation de code legacy et développement fullstack de modules complets</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-4 rounded-2xl flex flex-col 
                        bg-aw-dark/50 shadow-aw-dark-8">
                        <h2 className="font-bold text-2xl mb-4">
                            Formations
                        </h2>
                        <div className="mb-4">
                            <h3 className="font-bold">Titre professionnel RNCP Niveau V (eq. Bac +2)</h3>
                            <p>Saint-Jean-Baptiste De La Salle - Reims (02/2020 à 09/2021)</p>
                            <p className="text-muted-foreground">Obtenu en septembre 2021. 8 mois de formation continue puis 1 an d&apos;alternance chez Axon Cable.</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-bold">Baccalauréat Scientifique</h3>
                            <p>Lycée de la Fontaine du Vé - Sézanne (2017)</p>
                            <p className="text-muted-foreground">Obtenu avec mention.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 p-4
                    rounded-2xl bg-aw-dark/50 shadow-aw-dark-8">
                    <h2 className="font-bold text-2xl">
                        Compétences&nbsp;
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><FaQuestionCircle /></TooltipTrigger>
                                <TooltipContent>
                                    <p>Comme le niveau de rareté dans les jeux</p>
                                    <p className="text-center">
                                        <BsFillSquareFill className="text-orange-500 inline"/>
                                        &nbsp;<FaGreaterThan className="inline" />&nbsp;
                                        <BsFillSquareFill className="text-purple-500 inline"/>
                                        &nbsp;<FaGreaterThan className="inline" />&nbsp;
                                        <BsFillSquareFill className="text-blue-500 inline"/>
                                        &nbsp;<FaGreaterThan className="inline" />&nbsp;
                                        <BsFillSquareFill className="text-green-500 inline"/>
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </h2>

                    <div>
                        <h3 className="font-bold">Langages :</h3>
                        <div className="flex flex-row flex-wrap gap-2">
                            {languages.map((skill) => {
                                return (
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
                    <div>
                        <h3 className="font-bold">Frameworks et librairies :</h3>
                        <div className="flex flex-row flex-wrap gap-2">
                            {frameworks.map((skill) => {
                                return (
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
                    <div>
                        <h3 className="font-bold">SGBD / ORM :</h3>
                        <div className="flex flex-row flex-wrap gap-2">
                            {sgbd_orm.map((skill) => {
                                return (
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
                    <div>
                        <h3 className="font-bold">DevOps :</h3>
                        <div className="flex flex-row flex-wrap gap-2">
                            {devops.map((skill) => {
                                return (
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

                    <div>
                        <h3 className="font-bold">Méthodologie AGILE :</h3>
                        <ul className="list-disc text-muted-foreground">
                            <li>Sprint plannings et daylies avec le chef de projet</li>
                            <li>Revues de sprint avec présentation des tickets terminées avec MOA / MOE. En présentiel ou à distance.</li>
                            <li>Suivi de projet et plannifications sur Azure DevOps</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold">Legacy Code :</h3>
                        <ul className="list-disc text-muted-foreground">
                            <li>Optimisation d&apos;execution (rapidité des requêtes, données plus légères,
                                modules asynchrones, refactorisation du code...)</li>
                            <li>Amélioration de l&apos;UX/UI et respect de la charte graphique</li>
                            <li>Les sombres fichiers, non commentés, sans documentation, de +20k lignes ne m&apos;effraient plus la nuit</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </>
    )
}