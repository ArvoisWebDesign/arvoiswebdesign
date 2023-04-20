import Link from "next/link"
import { skills } from "./(data)/skills"
import { FiDownload } from "react-icons/fi"
import { BsFillSquareFill } from "react-icons/bs"
import { FaQuestionCircle, FaGreaterThan } from "react-icons/fa"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"

export default function Cv() {
    return (
        <div>
            <div className="flex flex-row gap-8 mb-8 overflow-visible">
                <h1 className="font-black text-3xl">CV</h1>

                <Link href="/cv.pdf" download target="_blank"
                    className="font-bold flex flex-row 
                    w-fit ml-auto px-2 py-1 
                    items-center align-middle
                    rounded-lg border-2 border-aw-greyblue shadow-aw-dark-8
                    bg-aw-greyblue bg-opacity-10 hover:bg-opacity-100">
                    <FiDownload />&nbsp;Télécharger le CV
                </Link>
            </div>
            
            <div className="flex flex-row flex-wrap gap-8">
                <div className="flex flex-col grow gap-8">
                    <div className="p-4 rounded-2xl flex flex-col bg-aw-dark bg-opacity-50 shadow-aw-dark-8">
                        <h2 className="font-bold text-xl mb-4">Experiences professionnelles</h2>
                        <div>
                            <h3 className="font-bold">2 ans - Développeur fullstack</h3>
                            <p>Axon Cable</p>
                            <p className="text-opacity-50">Développement de modules pour l'ERP sous ASP.NET</p>
                        </div>
                    </div>

                    <div className="flex-1 p-4 rounded-2xl flex flex-col bg-aw-dark bg-opacity-50 shadow-aw-dark-8">
                        <h2 className="font-bold text-xl mb-4">Formations</h2>
                        <div className="mb-4">
                            <h3 className="font-bold">Baccalauréat scientifique</h3>
                            <p>Lycée de la Fontaine du Vé - Sézanne</p>
                            <p className="text-opacity-50">Obtenu avec mention en 2017</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-bold">Titre RNCP NiveauV (Eq. BAC+2) - Développeur web / Web mobile</h3>
                            <p>Saint-Jean-Batiste de LaSalle - Reims</p>
                            <p className="text-opacity-50">Obtenu en 2021</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl flex flex-col gap-4 grow max-w-xl p-4
                    bg-aw-dark bg-opacity-50 shadow-aw-dark-8">
                    <h2 className="font-bold text-xl">
                        Compétences&nbsp;
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><FaQuestionCircle /></TooltipTrigger>
                                <TooltipContent>
                                    <p>Comme le niveau de rareté dans les jeux :</p>
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

                    <div className="flex flex-row flex-wrap gap-2">
                        {skills.map((skill) => {
                            return (
                                <span key={skill.key}
                                    className={"rounded-full text-sm font-bold " 
                                        + skill.cssClass
                                        + " bg-opacity-10 px-2 py-1 shadow-aw-dark-4"}>
                                    {skill.name}
                                </span>
                            )
                        })}
                    </div>

                    <div>
                        <h3 className="font-bold">2 ans de méthode AGILE</h3>
                        <p>Revues de sprint, comités de pilotage, recettes...</p>
                        <p>Habitué à communiquer avec le product owner et les futurs utilisateurs</p>
                    </div>

                    <div>
                        <h3 className="font-bold">6 mois de legacy code</h3>
                        <p>Optimisation d'execution (rapidité des requêtes, données plus légères,
                            modules asynchrones, refactorisation du code...)</p>
                        <p>Amélioration de l'UX/UI, respect de la charte graphique</p>
                    </div>

                    <div>
                        <h3 className="font-bold">Rédaction de documentations techniques et utilisateurs</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}