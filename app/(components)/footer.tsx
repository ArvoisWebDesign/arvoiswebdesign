import Link from "next/link"

export default function Footer() {
    return (
        <footer className="text-sm text-center p-4
            bg-aw-dark bg-opacity-50 shadow-[0_0_3rem_-1rem_var(--aw-dark)]
            grid grid-cols-2 animate-opacity">
            <ul>
                <li className="font-bold">Liens</li>
                <li>
                    <Link 
                        href={"https://github.com/ArvoisWebDesign"}
                        target="_blank"
                        className="underline">
                        GitHub
                    </Link>
                </li>
                <li>
                    <Link 
                        href={"https://www.linkedin.com/in/lucas-arvois/"}
                        target="_blank"
                        className="underline">
                        Linkedin
                    </Link>
                </li>
            </ul>
            <ul>
                <li className="font-bold">Tech stack du site</li>
                <li>NextJS 13.X</li>
                <li>TailwindCSS</li>
                <li>
                    <Link 
                        href={"https://github.com/ArvoisWebDesign/arvoiswebdesign"}
                        target="_blank"
                        className="underline">
                        Open source code
                    </Link>
                </li>
            </ul>
        </footer>
    )
}