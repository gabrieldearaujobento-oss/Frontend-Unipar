function adicionar(evento) {
    evento.preventDefault()

    if (evento.target[0].value === "") {
        aler("Vacilo! Informe o nome do produto!")
        return;
    }

    if (evento.target[1].value === "") {
        aler("Vacilo! Informe a quantidade!")
        return;
    }

    const produto = "Produto: " + evento.target[0].value;
    const quantidade = "Quantidade: " + evento.target[1].value;

    const li = document.createElement("li");
    li.textContent = produto + " - " + quantidade;

    li.addEventListener('click', () => remover(li))

    const ul = document.querySelector(".container")

    ul.appendChild(li);

    evento.target[0].value = "";
    evento.target[1].value = "";
}

function remover(elemento) {
    elemento.remove();
}
