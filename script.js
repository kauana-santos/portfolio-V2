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
        name: "NoteLab",
        img: "./img/notelab.png",
        link:"https://km-keg2.onrender.com/",
        desc:"Projeto relizado com java Spring web"
    },
    {
        name: "Organo",
        img: "./img/organo.png",
        link:"https://organo-three-ecru.vercel.app/",
        desc:"Projeto relizado com java Spring web"
    },
    {
        name: "Previsão do tempo",
        img: "./img/prev-temp.png",
        link:"https://kauana-santos.github.io/previsao-do-tempo/",
        desc:"Projeto relizado com java Spring web"
    },
    {
        
        name: "Galeria",
        img: "./img/galeria.png",
        link:"https://kauana-santos.github.io/Galeria-Sass/",
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
