import { FaLinkedin } from "react-icons/fa"
import Mail from "./(components)/mail"
import Link from "next/link"

export default function Contact() {
    return (
        <>
            <h1 className="mb-8 font-black text-3xl">Contact</h1>
            
            <div className="flex flex-row flex-wrap gap-8">
                <div className="rounded-2xl w-fit p-4 bg-aw-dark bg-opacity-50 shadow-aw-dark-8">
                    <h2 className="font-bold text-2xl mb-4">Un projet de site web?</h2>
                    <Mail />
                </div>

                <div className="rounded-2xl w-fit p-4 bg-aw-dark bg-opacity-50 shadow-aw-dark-8">
                    <h2 className="font-bold text-2xl mb-4">Une offre d'emploi?</h2>
                    <Link 
                        href="https://www.linkedin.com/in/lucas-arvois/"
                        target="_blank"
                        className="font-bold flex flex-row 
                            w-fit px-2 py-1 items-center align-middle
                            rounded-lg border-2 border-aw-greyblue drop-shadow-aw-dark-4
                            bg-aw-greyblue bg-opacity-25 hover:bg-opacity-100">
                        <FaLinkedin />&nbsp;Linkedin
                    </Link>
                </div>
            </div>
        </>
    )
}