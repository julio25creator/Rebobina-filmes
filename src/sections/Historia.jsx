const integrantes = [
  {
    icone: '📼',
    capitulo: 'CAPÍTULO 02',
    nome: 'Nayara',
    texto:
      'Ficou responsável pela criação da página inicial. Foi quem ajudou a dar forma à identidade da Rebobina, apresentando o projeto e conectando o visitante com todas as categorias do site.',
    areas: ['🏠 Início'],
    frase: '"Toda boa história precisa de um começo."',
  },
  {
    icone: '💬',
    capitulo: 'CAPÍTULO 03',
    nome: 'Lucas',
    texto:
      'Ficou responsável pela comunicação com o público. Desenvolveu as áreas de Cadastro e Reclame Aqui, criando espaços para o usuário participar, avaliar e deixar sua opinião.',
    areas: ['📝 Cadastro', '💬 Reclame Aqui'],
    frase: '"Uma loja também precisa ouvir seus clientes."',
  },
  {
    icone: '🎬',
    capitulo: 'CAPÍTULO 04',
    nome: 'Júlio',
    texto:
      'Ficou responsável pelos filmes e pelas séries. Trouxe para a Rebobina títulos clássicos e personagens que marcaram diferentes gerações.',
    areas: ['🎬 Filmes', '📺 Séries'],
    frase: '"Toda sessão começa com uma boa escolha."',
  },
  {
    icone: '🕹️',
    capitulo: 'CAPÍTULO 05',
    nome: 'Samuel',
    texto:
      'Ficou responsável pelo universo dos jogos e das músicas. Trouxe para o projeto os clássicos dos videogames e os sons que fizeram parte de diferentes épocas.',
    areas: ['🕹️ Jogos', '🎵 Músicas'],
    frase: '"Algumas memórias a gente joga. Outras a gente escuta."',
  },
]

export default function Historia() {
  return (
    <section id="historia" className="historia py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="badge rounded-pill text-bg-dark px-4 py-2">
            📼 NOSSA HISTÓRIA
          </span>
          <h2 className="display-5 fw-bold mt-3">
            Quatro pessoas. Uma loja. Mil histórias.
          </h2>
          <p className="text-muted historia-intro">
            A Rebobina nasceu da vontade de transformar nostalgia em uma
            experiência digital.
          </p>
        </div>

        <div className="historia-abertura mb-5">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <div className="historia-fita" aria-hidden="true">
                <div className="fita-topo">
                  <span>VHS</span>
                  <span>REBOBINA</span>
                </div>
                <div className="fita-corpo">
                  <div className="fita-rolo"></div>
                  <div className="fita-rolo"></div>
                </div>
                <div className="fita-nome">PLAY • PAUSE • REWIND</div>
              </div>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">
              <span className="historia-numero">CAPÍTULO 01</span>
              <h3 className="fw-bold mt-2">Uma ideia que ganhou forma</h3>
              <p>
                Quatro integrantes, diferentes ideias e uma missão em comum:
                criar uma loja online com aquele gostinho das antigas.
              </p>
              <p>
                Assim surgiu a Rebobina, reunindo filmes, séries, músicas e
                jogos em um só lugar.
              </p>
              <div className="palavra-rebobina">"DÊ O PLAY NA NOSTALGIA."</div>
              <p>
                Cada parte do projeto ficou nas mãos de um integrante. Cada
                página ganhou sua própria identidade e, juntas, elas formaram a
                nossa loja.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {integrantes.map((p) => (
            <div className="col-md-6 col-lg-3" key={p.nome}>
              <div className="historia-card h-100">
                <div className="historia-icone">{p.icone}</div>
                <span className="capitulo">{p.capitulo}</span>
                <h3>{p.nome}</h3>
                <p>{p.texto}</p>
                <div className="responsabilidade">
                  <strong>Responsável por:</strong>
                  {p.areas.map((a) => (
                    <span className="d-block" key={a}>
                      {a}
                    </span>
                  ))}
                </div>
                <div className="frase-card">{p.frase}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="historia-final text-center mt-5">
          <span className="badge rounded-pill bg-dark px-4 py-2">
            📼 FINAL DA FITA
          </span>
          <h3 className="display-6 fw-bold mt-3">E assim nasceu a REBOBINA.</h3>
          <p className="lead">
            Cada integrante trouxe uma parte. Juntos, criamos uma experiência
            inteira.
          </p>
          <p className="text-muted">
            Filmes, séries, músicas, jogos, cadastro e a opinião de quem
            visita. Tudo reunido em uma única loja.
          </p>
          <a href="#filmes" className="btn btn-dark btn-lg rounded-pill px-5 mt-3">
            🎬 Começar a viagem
          </a>
        </div>
      </div>
    </section>
  )
}
