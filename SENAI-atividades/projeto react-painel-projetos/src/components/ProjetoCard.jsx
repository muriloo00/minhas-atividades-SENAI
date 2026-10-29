import StatusBadge from './StatusBadge'
import TecnologiaTag from './TecnologiaTag'
import './ProjetoCard.css'

function ProjetoCard({
  titulo,
  descricao,
  responsavel,
  status,
  tecnologias,
  destaque,
}) {
  return (
    <article
      className={`projeto-card${destaque ? ' projeto-card--destaque' : ''}`}
    >
      <header className="projeto-card__header">
        <h2>{titulo}</h2>
        <StatusBadge status={status} />
      </header>
      <p>{descricao}</p>
      <p className="projeto-card__responsavel">
        Responsável: {responsavel}
      </p>
      <div className="projeto-card__tecnologias" aria-label="Tecnologias">
        {tecnologias.map((tecnologia) => (
          <TecnologiaTag key={tecnologia} nome={tecnologia} />
        ))}
      </div>
      {destaque && (
        <strong className="projeto-card__destaque">Projeto em destaque</strong>
      )}
    </article>
  )
}

export default ProjetoCard