const rightButton = document.querySelector(".right-scroll")
const leftButton = document.querySelector(".left-scroll")
const portfolioCont = document.getElementById("portfolio-cont")



rightButton.addEventListener("click", function(){

    portfolioCont.classList.remove("move-left")
    portfolioCont.classList.add("move-right")

})

leftButton.addEventListener("click", function(){
    
    portfolioCont.classList.remove("move-right")
    portfolioCont.classList.add("move-left")

})

const parentElement = document.querySelector(".models-display-cont")
const childCount = parentElement.children.length;

document.getElementById("props-anchor").addEventListener("click", function() {
    for(let i = 0; i < childCount; i++){
        const childElement = parentElement.children[i]

        if(childElement.classList.contains("props")){
            childElement.style.display = "flex"
        } else {
            childElement.style.display = "none"
        }
    }
})

document.getElementById("weapons-anchor").addEventListener("click", function() {
    for(let i = 0; i < childCount; i++){
        const childElement = parentElement.children[i]

        if(childElement.classList.contains("weapons")){
            childElement.style.display = "flex"
        } else {
            childElement.style.display = "none"
        }
    }
})

document.getElementById("characters-anchor").addEventListener("click", function() {
    for(let i = 0; i < childCount; i++){
        const childElement = parentElement.children[i]

        if(childElement.classList.contains("characters")){
            childElement.style.display = "flex"
        } else {
            childElement.style.display = "none"
        }
    }
})

document.getElementById("environments-anchor").addEventListener("click", function() {
    for(let i = 0; i < childCount; i++){
        const childElement = parentElement.children[i]

        if(childElement.classList.contains("environments")){
            childElement.style.display = "flex"
        } else {
            childElement.style.display = "none"
        }
    }
})

document.getElementById("all-anchor").addEventListener("click", function() {
    for(let i = 0; i < childCount; i++){
        const childElement = parentElement.children[i]

        childElement.style.display = "flex"
    }
})