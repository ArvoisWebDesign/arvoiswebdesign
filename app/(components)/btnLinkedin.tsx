import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"

export default function BtnLinkedin() {
    return (
        <Link href="https://www.linkedin.com/in/lucas-arvois/"
            target="_blank"
            className="font-bold flex flex-row 
                w-fit px-2 py-1 items-center align-middle
                rounded-lg border-2 border-aw-greyblue drop-shadow-aw-dark-4
                bg-aw-greyblue bg-opacity-25 hover:bg-opacity-100"
            title="Linkedin">
            <FaLinkedin />
            <span className="pl-2">
                Linkedin
            </span>
        </Link>
    )
}