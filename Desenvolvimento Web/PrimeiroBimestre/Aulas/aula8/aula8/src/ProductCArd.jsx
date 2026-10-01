export default function ProductCard({ produto }) {
    return (
        <div key={produto.id}>
            <p>Nome: {produto.nome} </p>
            <p>Preço: {produto.valor} </p>
          </div>
    )
}