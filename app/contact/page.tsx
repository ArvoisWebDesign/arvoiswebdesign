import Mail from "./(components)/mail"
import LookingForJob from "app/(components)/lookingForJob"

export default function Contact() {
    return (
        <>
            <h1 className="mb-8 font-black text-3xl">Contact</h1>
            
            <div className="flex flex-row flex-wrap gap-8 justify-center">
                <LookingForJob />

                <div className="rounded-2xl h-fit p-4 text-center bg-aw-dark bg-opacity-50 shadow-aw-dark-8">
                    <h2 className="font-bold text-2xl mb-4">Un projet de site web?</h2>
                    <Mail />
                </div>
            </div>
        </>
    )
}