import Link from "next/link"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const liensFooter = [
    {
        key: "github",
        href: "https://github.com/ArvoisWebDesign",
        reactIcon: <FaGithub />,
        name: "GitHub"
    },
    {
        key: "linkedin",
        href: "https://www.linkedin.com/in/lucas-arvois/",
        reactIcon: <FaLinkedin />,
        name: "Linkedin"
    }
]

export default function Footer() {
    return (
        <footer className="text-sm text-center p-4
            bg-aw-dark bg-opacity-50 shadow-aw-dark-8
            grid grid-cols-2 animate-opacity">
            <div>
                <p className="font-bold">Liens</p>
                <ul>
                    {liensFooter.map((lienFooter) => {
                        return (
                            <li key={lienFooter.key} className="p-1">
                                <Link 
                                    href={lienFooter.href}
                                    target="_blank"
                                    className="font-bold flex flex-row 
                                        w-fit mx-auto px-2 py-1 items-center align-middle
                                        rounded-lg border-2 border-aw-greyblue drop-shadow-aw-dark-4
                                        bg-aw-greyblue bg-opacity-25 hover:bg-opacity-100">
                                    {lienFooter.reactIcon}&nbsp;{lienFooter.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <ul>
                    <li className="font-bold">Tech stack du site</li>
                    <li>NextJS 13.X</li>
                    <li>TailwindCSS</li>
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