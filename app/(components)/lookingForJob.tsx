import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"

export default function LookingForJob() {
    return (
        <div className="rounded-2xl p-4 flex flex-col gap-4
            bg-aw-dark bg-opacity-50 shadow-aw-dark-8">
            <h2 className="font-bold text-2xl text-center">Vous êtes recruteur?</h2>
            
            <div>
                <p className="font-bold text-center">Actuellement en recherche sur Strasbourg!</p>
                <ul className="text-muted-foreground list-disc list-inside">
                    <li>Autour de 30k€ brut par an</li>
                    <li>Disponible ASAP</li>
                    <li>Peu importe votre stack technique</li>
                    <li>Le télétravail est un plus</li>
                    <li>Perso je bois pas de café!</li>
                </ul>
            </div>

            <Link 
                href="https://www.linkedin.com/in/lucas-arvois/"
                target="_blank"
                className="font-bold text-center flex flex-row 
                    w-fit mx-auto px-2 py-1 items-center align-middle
                    rounded-lg border-2 border-aw-greyblue drop-shadow-aw-dark-4
                    bg-aw-greyblue bg-opacity-25 hover:bg-opacity-100">
                <FaLinkedin />&nbsp;Linkedin
            </Link>
        </div>
    )
}