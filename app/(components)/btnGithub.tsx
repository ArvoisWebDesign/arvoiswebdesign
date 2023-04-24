import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export default function BtnGithub() {
    return (
        <Link href="https://github.com/ArvoisWebDesign" 
            target="_blank"
            className="font-bold flex flex-row 
                w-fit px-2 py-1 items-center align-middle
                rounded-lg border-2 border-aw-greyblue shadow-aw-dark-8
                bg-aw-greyblue bg-opacity-10 hover:bg-opacity-100"
            title="GitHub">
            <FaGithub />
            <span className="pl-2">
                GitHub
            </span>
        </Link>
    )
}