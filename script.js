
const sections = document.querySelectorAll(".section")

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = 1
entry.target.style.transform = "translateY(0px)"

}

})

})

sections.forEach(section => {

section.style.opacity = 0
section.style.transform = "translateY(80px)"
section.style.transition = "all 1s"

observer.observe(section)

})

