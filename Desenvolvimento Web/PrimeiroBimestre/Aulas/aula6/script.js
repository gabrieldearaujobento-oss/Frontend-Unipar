const divUm = document.querySelector(".container");

divUm.firstElementChild.textContent = "Alterado via JS!";

function ativar() {
    const containers = document.querySelectorAll(".container")

    containers.forEach(div => {
        div.firstElementChild.classList.toggle("ativo")
    })
}