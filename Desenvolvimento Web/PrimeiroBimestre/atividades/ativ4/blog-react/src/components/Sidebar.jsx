function Sidebar() {
  const curiosidades = [
    'O Santos é reconhecido como um dos clubes que mais marcaram gols na história do futebol mundial.',
    'O clube joga suas partidas há décadas no tradicional estádio da Vila Belmiro.',
    'A torcida do Santos é carinhosamente chamada de "Peixe" — apelido que também é usado para o próprio clube.',
    'Assim como Pelé décadas antes, Neymar também foi revelado nas categorias de base do Santos antes de se tornar um dos melhores jogadores do mundo.',
  ]

  return (
    <aside className="lateral">
      <h2>Você sabia?</h2>
      <ul>
        {curiosidades.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
