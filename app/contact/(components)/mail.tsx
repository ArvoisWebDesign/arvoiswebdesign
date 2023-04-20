"use client"

const mail : string = "arvoiswebdesign@gmail.com"

function handleShowMail() {
    let domMail = document.getElementById("mail")
    let domButtonMail = document.getElementById("btnMail")
    if(domMail != null && domButtonMail != null) {
        domMail.textContent = mail
        domButtonMail.classList.add("hidden")
    }
}

export default function Mail() {
    return (
        <>
            <button onClick={handleShowMail} id="btnMail"
                className="font-bold px-2 py-1
                    rounded-lg border-2 border-aw-greyblue 
                    bg-aw-greyblue bg-opacity-10 hover:bg-opacity-100">
                Afficher adresse mail
            </button>
            <p id="mail"></p>
        </>
    )
}