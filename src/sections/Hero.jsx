export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start">
            <span className="badge rounded-pill text-bg-light px-4 py-2 mb-3">
              📼 LOJA RETRÔ
            </span>

            <h1 className="display-1 fw-bold">REBOBINA</h1>

            <h2 className="display-6 fw-semibold">
              A nostalgia nunca sai de moda.
            </h2>

            <p className="lead mt-4">
              Filmes, séries, músicas e jogos para você voltar no tempo sem
              sair do sofá.
            </p>

            <div className="mt-4 d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-lg-start">
              <a href="#filmes" className="btn btn-dark btn-lg rounded-pill px-5">
                🎬 Explorar catálogo
              </a>
              <a
                href="#categorias"
                className="btn btn-outline-dark btn-lg rounded-pill px-5"
              >
                📼 Categorias
              </a>
            </div>
          </div>

          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <div className="vhs-card" aria-hidden="true">
              <div className="vhs-label">
                <span>REBOBINA</span>
                <small>LOJA • 1990</small>
              </div>
              <div className="vhs-reels">
                <div className="reel"></div>
                <div className="reel"></div>
              </div>
              <div className="vhs-line"></div>
              <div className="vhs-bottom">
                <span>PLAY</span>
                <span>▶</span>
                <span>REW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
