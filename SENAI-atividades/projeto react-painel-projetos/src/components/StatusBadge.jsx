import './StatusBadge.css'

const classesPorStatus = {
  Concluído: 'status-badge--concluido',
  'Em desenvolvimento': 'status-badge--desenvolvimento',
  Planejamento: 'status-badge--planejamento',
}

function StatusBadge({ status }) {
  const classeStatus = classesPorStatus[status] ?? 'status-badge--outro'

  return (
    <span className={`status-badge ${classeStatus}`}>
      {status}
    </span>
  )
}

export default StatusBadge