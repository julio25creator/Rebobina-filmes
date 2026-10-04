import { useEffect, useState } from 'react'
import { Collapse } from 'bootstrap'

const links = [
  { id: 'inicio', texto: 'Início' },
  { id: 'categorias', texto: 'Categorias' },
  { id: 'filmes', texto: 'Filmes' },
  { id: 'sorteio', texto: 'Sorteio' },
  { id: 'historia', texto: 'Nossa história' },
]

export default function Navbar() {
  const [ativo, setAtivo] = useState('inicio')

  // Marca no menu a seção que está na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) =>
        entradas.forEach((e) => e.isIntersecting && setAtivo(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach(({ id }) => {
      const secao = document.getElementById(id)
      if (secao) observer.observe(secao)
    })
    return () => observer.disconnect()
  }, [])

  // No celular, fecha o menu depois de clicar em um item
  function fecharMenu() {
    Collapse.getInstance(document.getElementById('menu'))?.hide()
  }

  return (
    <header className="sticky-top menu-topo">
      <nav
        className="navbar navbar-expand-lg bg-white rounded-5 shadow-sm mx-3 mt-3 px-3"
        aria-label="Navegação principal"
      >
        <a className="navbar-brand fw-bold" href="#inicio">
          📼 REBOBINA
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Abrir menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav nav-pills ms-auto gap-2">
            {links.map(({ id, texto }) => (
              <li className="nav-item" key={id}>
                <a
                  className={`nav-link rounded-5 ${ativo === id ? 'active' : ''}`}
                  href={`#${id}`}
                  onClick={fecharMenu}
                >
                  {texto}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
