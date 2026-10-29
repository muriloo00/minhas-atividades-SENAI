import './Secao.css'

function Secao({ titulo, children }) {
  return (
    <section className="secao">
      <h2 className="secao__titulo">{titulo}</h2>
      <div className="secao__conteudo">{children}</div>
    </section>
  )
}

export default Secao