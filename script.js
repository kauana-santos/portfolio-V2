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
        img: "./img/projetos/notelab.png",
        link:"https://km-keg2.onrender.com/",
        desc:"Desenvolvimento da parte do front-end utilizando html, css e javascript."
    },
    {
        name: "Organo",
        img: "./img/projetos/organo.png",
        link:"https://organo-three-ecru.vercel.app/",
        desc:"Projeto relizado com html, css e javascript."
    },
    {
        name: "Previsão do tempo",
        img: "./img/projetos/prev-temp.png",
        link:"https://kauana-santos.github.io/previsao-do-tempo/",
        desc:"Projeto relizado com html, css e javascript, utilizando a API da OpenWeather."
    },
    {
        
        name: "Galeria",
        img: "./img/projetos/galeria.png",
        link:"https://kauana-santos.github.io/Galeria-Sass/",
        desc:"Projeto relizado com html e sass."
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

            <div class="container-descricao">
                <div class="container-titulo">
                    <h3>${project.name}</h3>
                    <a href="${project.github}" target="_blank"> Github</a>
                </div>
                <div class="projeto-descricao">
                    <p class="p-projetos">${project.desc}</p>
                </div>
            </div>
        </div>
    `;
}).join("");

cardsContainer.innerHTML = cardsHTML;
