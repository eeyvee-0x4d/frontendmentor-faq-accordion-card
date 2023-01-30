let accordions = document.querySelectorAll(".question__accordion")

accordions.forEach((accordion, index) => {
    accordion.addEventListener("click", () => {
        accordion.style.fontWeight = "400"
        accordion.classList.toggle("active")

         if(accordion.nextElementSibling.style.maxHeight) {
            accordion.nextElementSibling.style.maxHeight = null       
        }
        else {
            accordions.forEach((accordion, index) => {
                accordion.style.fontWeight = "400"
                accordion.nextElementSibling.style.maxHeight = null
            })
            accordion.style.fontWeight = "700"
            accordion.nextElementSibling.style.maxHeight = accordion.nextElementSibling.scrollHeight + "px"
        }
        
        
    })
})