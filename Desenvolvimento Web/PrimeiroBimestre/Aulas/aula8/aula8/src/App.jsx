import { useState } from "react";
import ProductCard from "./ProductCArd";

export default function App() {
  const [contador, setContador] = useState(0);
  const listaProdrutos = [
    { id: 1, nome: "Teclado Razer", valor: 452.90 },
    { id: 2, nome: "Mouse Razer", valor: 210.58 },
    { id: 3, nome: "PC Gamer", valor: 3300.00 },
    { id: 4, nome: "Teclado Multilaser", valor: 950.00 },
    { id: 5, nome: "PC da Positivo", valor: 1950.00 },
  ]

  function Incrementar() {
    //processamento e regras
    setContador(contador + 1);

    console.log(contador)
  }

  return (
    <div className="container">
      <h1>Contador</h1>
      <h3>{contador}</h3>
      <button onClick={Incrementar}>
        Incrementar
      </button>
      <hr />
      <section>
        <h4>Lista de Produtos</h4>
        {listaProdrutos.map(produto => <ProductCard key={produto.id} produto={produto} />)}
      </section>
    </div>
  )
}