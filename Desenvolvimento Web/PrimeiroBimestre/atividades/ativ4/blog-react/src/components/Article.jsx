function Article({ titulo, autor, data, conteudo }) {
  return (
    <article className="post">
      <h2>{titulo}</h2>
      <p className="meta">
        Por {autor} · <time>{data}</time>
      </p>
      <p className="texto-post">{conteudo}</p>
    </article>
  )
}

export default Article
