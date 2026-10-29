import './Resumo.css'

function Resumo({ total, concluidos, emDesenvolvimento }) {
  return (
    <div className="resumo">
      <article className="resumo__item">
        <h3>Total de projetos</h3>
        <p>{total}</p>
      </article>
      <article className="resumo__item">
        <h3>Projetos concluídos</h3>
        <p>{concluidos}</p>
      </article>
      <article className="resumo__item">
        <h3>Projetos em desenvolvimento</h3>
        <p>{emDesenvolvimento}</p>
      </article>
    </div>
  )
}

export default Resumo