const categorias = [
  {
    icone: '🎬',
    nome: 'Filmes',
    texto: 'Clássicos, comédias, terror, aventura e muito mais.',
    link: '#filmes',
  },
]

export default function Categorias() {
  return (
    <>
      <section className="py-5 bg-white text-center">
        <div className="container py-4">
          <p className="text-uppercase fw-bold text-secondary">
            📺 Aperte o play
          </p>
          <h2 className="display-6 fw-bold">
            "Algumas histórias merecem ser rebobinadas."
          </h2>
          <p className="text-muted mt-3">
            Escolha seu título, pegue sua fita e aproveite a sessão.
          </p>
        </div>
      </section>

      <section id="categorias" className="categorias py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="badge rounded-pill text-bg-dark px-4 py-2">
              NOSSO CATÁLOGO
            </span>
            <h2 className="display-5 fw-bold mt-3">
              Qual filme você quer assistir hoje?
            </h2>
            <p className="text-muted">Todos os gêneros para todo tipo de gosto.</p>
          </div>

          <div className="row g-4 justify-content-center">
            {categorias.map((c) => (
              <div className="col-md-6 col-lg-4" key={c.nome}>
                <div className="categoria-card h-100">
                  <div className="icone">{c.icone}</div>
                  <h3>{c.nome}</h3>
                  <p>{c.texto}</p>

                  {c.link ? (
                    <a href={c.link} className="btn btn-dark rounded-pill">
                      Ver {c.nome.toLowerCase()}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-dark rounded-pill"
                      disabled
                    >
                      Em breve
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
