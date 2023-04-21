import Link from "next/link"
import { skills } from "./(data)/skills"
import { FiDownload } from "react-icons/fi"
import { BsFillSquareFill } from "react-icons/bs"
import { FaQuestionCircle, FaGreaterThan, FaLinkedin } from "react-icons/fa"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"

export default function Cv() {
    return (
        <>
            <div className="flex flex-row mb-8">
                <h1 className="font-black text-3xl">Curriculum Vitae</h1>

                <div className="w-fit flex flex-row flex-wrap gap-4 ml-auto">
                    <Link href="/cv.pdf" download target="_blank"
                        className="font-bold flex flex-row 
                        w-fit ml-auto px-2 py-1 items-center align-middle
                        rounded-lg border-2 border-aw-greyblue drop-shadow-aw-dark-4
                        bg-aw-greyblue bg-opacity-25 hover:bg-opacity-100"
                        title="Télécharger le CV">
                        <FiDownload /><span className="hidden md:inline">&nbsp;Télécharger le CV</span>
                    </Link>

                    <Link href="https://www.linkedin.com/in/lucas-arvois/"
                        target="_blank"
                        className="font-bold flex flex-row 
                        w-fit ml-auto px-2 py-1 items-center align-middle
                        rounded-lg border-2 border-aw-greyblue drop-shadow-aw-dark-4
                        bg-aw-greyblue bg-opacity-25 hover:bg-opacity-100"
                        title="Linkedin">
                        <FaLinkedin /><span className="hidden md:inline">&nbsp;Linkedin</span>
                    </Link>
                </div>
            </div>
            
            <div className="grid grid-flow-row lg:grid-flow-col grid-cols-auto gap-8">
                <div className="flex flex-col gap-8">
                    <div className="p-4 rounded-2xl flex flex-col 
                        bg-aw-dark bg-opacity-50 shadow-aw-dark-8">
                        <h2 className="font-bold text-2xl mb-4">
                            Experiences professionnelles
                        </h2>
                        <div>
                            <h3 className="font-bold">2 ans - Développeur fullstack</h3>
                            <ul className="text-muted-foreground">
                                <li>Axon Cable</li>
                                <li>Développement de modules pour l'ERP sous ASP.NET</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-4 rounded-2xl flex flex-col 
                        bg-aw-dark bg-opacity-50 shadow-aw-dark-8">
                        <h2 className="font-bold text-2xl mb-4">
                            Formations
                        </h2>
                        <div className="mb-4">
                            <h3 className="font-bold">Baccalauréat scientifique</h3>
                            <ul className="text-muted-foreground">
                                <li>Lycée de la Fontaine du Vé - Sézanne</li>
                                <li>Obtenu avec mention en 2017</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-bold">Titre RNCP NiveauV (Eq. BAC+2) - Développeur web / Web mobile</h3>
                            <ul className="text-muted-foreground">
                                <li>Saint-Jean-Batiste de LaSalle - Reims</li>
                                <li>Obtenu en 2021</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 p-4
                    rounded-2xl bg-aw-dark bg-opacity-50 shadow-aw-dark-8">
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

                    <div className="flex flex-row flex-wrap gap-2">
                        {skills.map((skill) => {
                            return (
                                <span key={skill.key}
                                    className={"rounded-full text-sm font-bold " 
                                        + skill.cssClass
                                        + " bg-opacity-10 px-2 py-1 drop-shadow-aw-dark-4"}>
                                    {skill.name}
                                </span>
                            )
                        })}
                    </div>

                    <div>
                        <h3 className="font-bold">2 ans de méthode AGILE</h3>
                        <ul className="text-muted-foreground">
                            <li>Revues de sprint, comités de pilotage, recettes...</li>
                            <li>Habitué à communiquer avec le product owner et les futurs utilisateurs</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold">6 mois de legacy code</h3>
                        <ul className="text-muted-foreground">
                            <li>Optimisation d'execution (rapidité des requêtes, données plus légères,
                                modules asynchrones, refactorisation du code...)</li>
                            <li>Amélioration de l'UX/UI, respect de la charte graphique</li>
                        </ul>
                        
                    </div>

                    <div>
                        <h3 className="font-bold">Rédaction de documentations techniques et utilisateurs</h3>
                    </div>
                </div>
            </div>
        </>
    )
}