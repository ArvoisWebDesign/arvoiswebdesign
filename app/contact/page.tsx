import Mail from "./(components)/mail"

export default function Contact() {
    return (
        <>
            <div className="rounded-2xl h-fit w-fit p-4 bg-aw-dark/50 shadow-aw-dark-8">
                <h1 className="mb-8 font-black text-3xl">Contact</h1>

                <Mail />
            </div>
        </>
    )
}