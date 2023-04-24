import BtnDownloadCv from "./btnDownloadCv"
import BtnGithub from "./btnGithub"
import BtnLinkedin from "./btnLinkedin"

export default function LookingForJob() {
    return (
        <div className="rounded-2xl p-4 flex flex-col gap-4
            bg-aw-dark bg-opacity-50 shadow-aw-dark-8">
            <h2 className="font-bold text-2xl text-center">Vous êtes recruteur?</h2>
            
            <p className="font-bold text-center">
                Actuellement en recherche d'un CDI en développement web&nbsp;!
            </p>
            
            <ul className="text-muted-foreground list-disc list-inside">
                <li>Strasbourg + périphérie : télétravail facultatif</li>
                <li>Reste de la France : télétravail total</li>
                <li>Disponible ASAP</li>
                <li>ASP.NET ou NextJS</li>
                <li>Mais en vrai peu importe votre stack technique</li>
                <li>Perso je bois pas de café !</li>
            </ul>

            <div className="w-fit flex flex-row flex-wrap gap-4">
                <BtnDownloadCv />

                <BtnLinkedin />

                <BtnGithub />
            </div>
        </div>
    )
}