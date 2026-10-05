import { useState } from 'react'
import { filmes, moeda } from '../data/filmes'

export default function Sorteio() {
  const [girando, setGirando] = useState(false)
  const [filme, setFilme] = useState(null)

  function sortear() {
    setGirando(true)
    setTimeout(() => {
      setFilme(filmes[Math.floor(Math.random() * filmes.length)])
      setGirando(false)
    }, 2500)
  }

  return (
    <section id="sorteio" className="escolha py-5">
      <div className="container py-5 text-center">
        <span className="badge rounded-pill text-bg-dark px-4 py-2">
          🎲 NÃO SABE O QUE ESCOLHER?
        </span>

        <h2 className="display-5 fw-bold mt-3">Deixa a Rebobina decidir!</h2>

        <p className="lead text-muted">
          Aperte o botão e descubra qual filme combina com você hoje.
        </p>

        <button
          type="button"
          className="btn btn-dark btn-lg rounded-pill px-5 mt-3"
          onClick={sortear}
          disabled={girando}
        >
          🎲 Escolha por mim!
        </button>

        <div
          className={`resultado-escolha mt-5 ${girando ? 'ativo' : ''}`}
          aria-live="polite"
        >
          {girando && (
            <>
              <div className="icone-escolha rebobinando">📼</div>
              <h3>REBOBINANDO...</h3>
              <p>Procurando a fita perfeita para você...</p>
              <div className="barra-rebobinando">
                <div className="progresso-rebobinando"></div>
              </div>
              <small className="texto-rebobinando">◀◀◀ AGUARDE...</small>
            </>
          )}

          {!girando && filme && (
            <>
              <img
                src={`/img/filmes/${filme.imagem}`}
                alt={`Capa do filme ${filme.titulo}`}
                className="resultado-icone rounded-3 mb-3"
                style={{ maxWidth: 220, width: '100%' }}
              />
              <span className="badge rounded-pill text-bg-dark px-3 py-2">
                📼 FITA ENCONTRADA
              </span>
              <h3 className="mt-3">{filme.titulo}</h3>
              <p>
                {filme.genero} • {moeda(filme.preco)}
              </p>
              <a href="#filmes" className="btn btn-dark rounded-pill px-4 botao-categoria">
                🎬 Ver filmes
              </a>
            </>
          )}

          {!girando && !filme && (
            <>
              <div className="icone-escolha">📼</div>
              <h3>Sua próxima sessão está esperando...</h3>
              <p>Clique no botão para descobrir!</p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
