const rightButton = document.querySelector(".right-scroll")
const leftButton = document.querySelector(".left-scroll")
const portfolioCont = document.getElementById("portfolio-cont")
let rightCount = 0;
let leftCount = 0;



rightButton.addEventListener("click", function(){

    portfolioCont.classList.remove("move-left")
    portfolioCont.classList.add("move-right")

    if(rightButton.classList.contains("button-visibility")){
        rightButton.classList.remove("button-visbility")
    } else {
        rightButton.classList.add("button-visibility")
    }

    if(leftButton.classList.contains("button-visibility")){
        leftButton.classList.remove("button-visibility")
    }

})

leftButton.addEventListener("click", function(){
    
    portfolioCont.classList.remove("move-right")
    portfolioCont.classList.add("move-left")

    if(leftButton.classList.contains("button-visibility")){
        leftButton.classList.remove("button-visbility")
    } else {
        leftButton.classList.add("button-visibility")
    }

    if(rightButton.classList.contains("button-visibility")){
        rightButton.classList.remove("button-visibility")
    }

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