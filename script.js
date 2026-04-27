const hamburger = document.querySelector(".hamburguer")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const projetos = [
    {
        projectName: "notelab",
        projectImg: " ",
        projectDesc:"Projeto relizado com java Spring web"
    },
    {
        projectName: "Organo",
        projectImg: " ",
        projectDesc:"Projeto relizado com java Spring web"
    },
    {
        projectName: "atividade Java",
        projectImg: " ",
        projectDesc:"Projeto relizado com java Spring web"
    },
    {
        projectName: "notelab",
        projectImg: " ",
        projectDesc:"Projeto relizado com java Spring web"
    },
    // criar função para incluir os projetos no css

]