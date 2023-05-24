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