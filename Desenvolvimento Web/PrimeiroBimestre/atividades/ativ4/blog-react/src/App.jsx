import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {

  const post = {
    titulo: 'Santos FC: do nascimento de um clube à lenda do futebol brasileiro',
    autor: 'Redação Bola na Rede',
    data: '5 de setembro de 2026',
    conteudo:
      'O Santos Futebol Clube nasceu em 14 de abril de 1912, por iniciativa de um grupo de jovens esportistas da cidade de Santos, no litoral paulista. A ideia surgiu de uma reunião realizada na sede de outro clube local, onde foi decidido criar uma nova agremiação dedicada à prática do futebol.\n\n' +
      'Logo em sua estreia oficial, o clube já demonstrava a força que teria dali em diante, e no ano seguinte conquistou seu primeiro título de forma invicta, consolidando-se como uma das principais equipes da cidade.\n\n' +
      'Nenhuma história do Santos estaria completa sem falar da chamada Era Pelé. Foi com o Rei do Futebol em campo que o clube viveu sua fase mais gloriosa, conquistando títulos nacionais, sul-americanos e mundiais, e se tornando o primeiro clube brasileiro campeão mundial de clubes.\n\n' +
      'Décadas depois, o Santos viveu outra fase de grande sucesso com a chegada de Neymar ao time profissional, em 2009. Ao lado de outros jovens talentos, o atacante conduziu o clube a uma sequência impressionante de conquistas entre 2010 e 2013, somando seis títulos em apenas cinco temporadas antes de sua transferência para o futebol europeu.',
  }

  return (
    <div className="pagina">
      <Header titulo="Blog Bola na Rede" />
      <Navigation />
      <main className="conteudo-principal">
        <Article
          titulo={post.titulo}
          autor={post.autor}
          data={post.data}
          conteudo={post.conteudo}
        />
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}

export default App
