import { useState } from 'react'
import { filmes, moeda } from '../data/filmes'
import CompraModal from '../components/CompraModal'

export default function Filmes() {
  const [escolhido, setEscolhido] = useState(null)

  return (
    <section id="filmes" className="filmes py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="badge rounded-pill text-bg-dark px-4 py-2">
            🎬 FILMES
          </span>
          <h2 className="display-5 fw-bold mt-3">Catálogo de Filmes</h2>
        </div>

        <div className="row g-4">
          {filmes.map((f) => (
            <div className="col-md-6 col-lg-4" key={f.id}>
              <article className="filme-card h-100">
                <img
                  src={`/img/filmes/${f.imagem}`}
                  alt={`Capa do filme ${f.titulo}`}
                />
                <h3>{f.titulo}</h3>
                <p className="genero">{f.genero}</p>
                <p className="preco">{moeda(f.preco)}</p>
                <button
                  type="button"
                  className="btn btn-dark rounded-pill mt-3"
                  onClick={() => setEscolhido(f)}
                >
                  Comprar
                </button>
              </article>
            </div>
          ))}
        </div>
      </div>

      {escolhido && (
        <CompraModal filme={escolhido} onClose={() => setEscolhido(null)} />
      )}
    </section>
  )
}
