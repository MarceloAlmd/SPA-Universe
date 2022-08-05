export default function changeBackground ({
    exploration,
    universe,
    home
}) {
    exploration.addEventListener('click', () => {
        document.querySelector("body").setAttribute("class", "background-exploration")
    })
    universe.addEventListener('click', () => {
        document.querySelector("body").setAttribute("class", "background-universe")
    })
    
    home.addEventListener('click', () => {
        document.querySelector("body").setAttribute("class", "background-home")
    })

    document.querySelector("body").setAttribute("class", "background-home")
    return {
        changeBackground
    }

}

