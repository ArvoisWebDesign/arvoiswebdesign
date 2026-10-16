import Link from "next/link"
import { FiDownload } from "react-icons/fi"

export default function BtnDownloadCv() {
    return (
        <Link href="/CV_Lucas_Arvois_developpeur_fullstack.pdf" 
            download 
            target="_blank"
            className="font-bold flex flex-row 
                w-fit px-2 py-1 items-center align-middle
                rounded-lg border-2 border-aw-greyblue drop-shadow-aw-dark-4
                bg-aw-greyblue/25 hover:bg-aw-greyblue"
            title="Télécharger le CV">
            <FiDownload />
            <span className="pl-2">
                Télécharger le&nbsp;CV
            </span>
        </Link>
    )
}