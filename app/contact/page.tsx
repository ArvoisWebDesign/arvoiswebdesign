import Mail from "./(components)/mail"

export default function Contact() {
    return (
        <>
            <h1 className="mb-8 font-black text-3xl">Contact</h1>
            
            <div className="rounded-2xl h-fit p-4 text-center bg-aw-dark bg-opacity-50 shadow-aw-dark-8">
                <Mail />
            </div>
        </>
    )
}