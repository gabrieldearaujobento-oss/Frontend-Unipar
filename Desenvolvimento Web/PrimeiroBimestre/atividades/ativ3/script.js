const lista = document.querySelector("#lista");

function adicionar(event) {
  event.preventDefault();

  const input = document.querySelector("#tarefa");
  const texto = input.value.trim();

  if (texto === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);

  input.value = "";
  input.focus();
}

function remover(event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
}

lista.addEventListener("click", remover);