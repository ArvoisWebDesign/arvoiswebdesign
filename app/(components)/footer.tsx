import Link from "next/link"
import BtnLinkedin from "./btnLinkedin"
import BtnGithub from "./btnGithub"

export default function Footer() {
    return (
        <footer className="text-sm text-center p-4
            bg-aw-dark bg-opacity-50 shadow-aw-dark-8
            grid grid-cols-2 animate-opacity">
            <div>
                <p className="font-bold">Liens</p>
                <ul>
                    <li className="m-1"><span className="inline-block mx-auto"><BtnLinkedin /></span></li>
                    <li className="m-1"><span className="inline-block mx-auto"><BtnGithub /></span></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="font-bold">Tech stack du site</li>
                    <li>NextJS 13.3.1</li>
                    <li>TailwindCSS</li>
                    <li>Typescript</li>
                    <li>
                        <Link 
                            href={"https://github.com/ArvoisWebDesign/arvoiswebdesign"}
                            target="_blank"
                            className="inline-block font-bold px-2 py-1 rounded-lg
                                border-2 border-aw-greyblue bg-aw-greyblue bg-opacity-25
                                hover:bg-opacity-100 drop-shadow-aw-dark-4">
                            Code open source 💗
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}