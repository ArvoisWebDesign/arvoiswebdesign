export function handleToggleNav() {
    let domNav = document.getElementById("nav")
    if(domNav != null) {
        if(domNav.classList.contains("hidden"))
            domNav.classList.remove("hidden")
        else
            domNav.classList.add("hidden")
    }
}