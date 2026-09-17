import "./App.css"
import Header from "./components/Header";

export default function App() {
const qtdPosts = 16;
const possuiAssinatura = false;

  return (
    <main id="container">
      <Header 
      habilitado={possuiAssinatura} 
      quantidadedePosts={qtdPosts} />
      <section>
        <h1>Nossos últimos posts</h1>
        <article>
          <h1>Santos 7 x 1 Atlético Mineiro</h1>
          <p>Nos 45 do segundo tempo a lenda Rony mata o jogo</p>
        </article>
        <article>
          <h1>Santos 7 x 1 Atlético Mineiro</h1>
          <p>Nos 45 do segundo tempo a lenda Thaciano mata o jogo</p>
        </article>
        <article>
          <h1>Santos 7 x 1 Atlético Mineiro</h1>
          <p>Nos 45 do segundo tempo a lenda Neymar </p>
        </article>
        <article>
          <h1>Santos 7 x 1 Atlético Mineiro</h1>
          <p>Nos 45 do segundo tempo a lenda toma um gol</p>
        </article>
        <article>
          <h1>Santos 7 x 1 Atlético Mineiro</h1>
          <p>Nos 45 do segundo tempo a lenda brazão faz um gol de falta</p>
        </article>
        <article>
          <h1>Santos 7 x 1 Atlético Mineiro</h1>
          <p>Nos 45 do segundo tempo a lenda gabigol faz um gol de bicicleta</p>
        </article>
        <article>
          <h1>Santos 7 x 1 Atlético Mineiro</h1>
          <p>Nos 45 do segundo tempo a lenda arthur faz um gol de cavadinha</p>
        </article>
        <article>
          <h1>Santos 7 x 1 Atlético Mineiro</h1>
          <p>Nos 45 do segundo tempo a lenda rodilindo faz um gol de meio de campo</p>
        </article>
        <article>
          <h1>Santos 7 x 1 Atlético Mineiro</h1>
          <p>Nos 45 do segundo tempo a lenda Rony mata o jogo</p>
        </article>
        <article>
          <h1>Santos 7 x 1 Atlético Mineiro</h1>
          <p>Nos 45 do segundo tempo a lenda Thaciano mata o jogo</p>
        </article>
        <article>
          <h1>Santos 7 x 1 Atlético Mineiro</h1>
          <p>Nos 45 do segundo tempo a lenda Neymar </p>
        </article>
        <article>
          <h1>Santos 7 x 1 Atlético Mineiro</h1>
          <p>Nos 45 do segundo tempo a lenda toma um gol</p>
        </article>
        <article>
          <h1>Santos 7 x 1 Atlético Mineiro</h1>
          <p>Nos 45 do segundo tempo a lenda brazão faz um gol de falta</p>
        </article>
        <article>
          <h1>Santos 7 x 1 Atlético Mineiro</h1>
          <p>Nos 45 do segundo tempo a lenda gabigol faz um gol de bicicleta</p>
        </article>
        <article>
          <h1>Santos 7 x 1 Atlético Mineiro</h1>
          <p>Nos 45 do segundo tempo a lenda arthur faz um gol de cavadinha</p>
        </article>
        <article>
          <h1>Santos 7 x 1 Atlético Mineiro</h1>
          <p>Nos 45 do segundo tempo a lenda rodilindo faz um gol de meio de campo</p>
        </article>
      </section>
    </main>
  )
}