const hamburger = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const cardsMenu = document.querySelector(".cards-container");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const project = [
    {
        name: "notelab",
        img: " ",
        desc:"Projeto relizado com java Spring web"
    },
    {
        name: "Organo",
        img: " ",
        desc:"Projeto relizado com java Spring web"
    },
    {
        name: "atividade Java",
        img: " ",
        desc:"Projeto relizado com java Spring web"
    },
    {
        name: "notelab",
        img: " ",
        desc:"Projeto relizado com java Spring web"
    },
    // criar função para incluir os projetos no css
]

