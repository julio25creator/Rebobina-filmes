import { useState } from 'react'
import { moeda } from '../data/filmes'

const CHAVE_USUARIO = 'rebobinaUsuario'
const CHAVE_COMPRAS = 'rebobinaCompras'
const midias = ['Fita K-7', 'DVD', 'Fita VHS']

const ler = (chave) => {
  try {
    return JSON.parse(localStorage.getItem(chave))
  } catch {
    return null
  }
}

export default function CompraModal({ filme, onClose }) {
  const [usuario, setUsuario] = useState(ler(CHAVE_USUARIO))
  const [midia, setMidia] = useState('')
  const [concluido, setConcluido] = useState(false)

  function cadastrar(e) {
    e.preventDefault()
    const dados = Object.fromEntries(new FormData(e.target))
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(dados))
    setUsuario(dados)
  }

  function confirmar(e) {
    e.preventDefault()
    const compras = ler(CHAVE_COMPRAS) ?? []
    const nova = { titulo: filme.titulo, preco: filme.preco, midia }
    localStorage.setItem(CHAVE_COMPRAS, JSON.stringify([...compras, nova]))
    setConcluido(true)
  }

  return (
    <div
      className="modal d-block"
      style={{ background: 'rgba(0, 0, 0, 0.6)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-modal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {concluido ? (
            <div className="modal-body text-center p-4">
              <div className="display-1">📼</div>
              <h2 className="h5 fw-bold mt-2" id="titulo-modal">
                Compra realizada!
              </h2>
              <p className="text-muted">
                {filme.titulo} - {midia}
              </p>
              <button
                type="button"
                className="btn btn-dark rounded-pill px-4"
                onClick={onClose}
              >
                Fechar
              </button>
            </div>
          ) : (
            <form onSubmit={usuario ? confirmar : cadastrar}>
              <div className="modal-header">
                <h2 className="modal-title h5" id="titulo-modal">
                  {usuario ? 'Confirmar compra' : 'Cadastro'}
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Fechar"
                  onClick={onClose}
                ></button>
              </div>

              <div className="modal-body">
                {usuario ? (
                  <>
                    <p>Olá, {usuario.nome}!</p>
                    <strong>
                      {filme.titulo} - {moeda(filme.preco)}
                    </strong>
                    <hr />
                    <p className="fw-bold mb-2">Qual mídia gostaria de comprar?</p>
                    {midias.map((m, i) => (
                      <div className="form-check mb-2" key={m}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="midia"
                          id={`midia-${i}`}
                          value={m}
                          checked={midia === m}
                          onChange={() => setMidia(m)}
                          required
                        />
                        <label className="form-check-label" htmlFor={`midia-${i}`}>
                          {m}
                        </label>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <p>Para comprar "{filme.titulo}", faça seu cadastro.</p>
                    <input className="form-control mb-3" name="nome" type="text" placeholder="Nome" required />
                    <input className="form-control mb-3" name="email" type="email" placeholder="E-mail" required />
                    <input className="form-control mb-3" name="telefone" type="tel" placeholder="Telefone" required />
                  </>
                )}
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-dark">
                  {usuario ? 'Confirmar' : 'Cadastrar'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
