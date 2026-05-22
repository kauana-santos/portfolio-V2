const hamburger = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const cardsContainer = document.querySelector(".cards-container");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const projects = [
    {
        name: "notelab",
        img: " ",
        link:"",
        desc:"Projeto relizado com java Spring web"
    },
    {
        name: "Organo",
        img: " ",
        link:"",
        desc:"Projeto relizado com java Spring web"
    },
    {
        name: "atividade Java",
        img: " ",
        link:"",
        desc:"Projeto relizado com java Spring web"
    },
    {
        
        name: "galeria",
        img: " ",
        link:"",
        desc:"Projeto relizado com java Spring web"
    },
]

cardsContainer.innerHTML = "";

const cardsHTML = projects.map(project => {
    return `
        <div class="cards">
            <a href="${project.link}" target="_blank">
                <img src="${project.img}" 
                     alt="${project.name}" 
                     class="projeto-foto">
            </a>

            <div class="projeto-descricao">
                <h3>${project.name}</h3>
                <p class="p-projetos">
                    ${project.desc}
                </p>
            </div>
        </div>
    `;
}).join("");

cardsContainer.innerHTML = cardsHTML;
