import './App.css'
import ProjetoCard from './components/ProjetoCard'
import Resumo from './components/Resumo'
import Secao from './components/Secao'

const projetos = [
  {
    id: 1,
    titulo: 'Sistema de Estoque',
    descricao: 'Controle de produtos e movimentações.',
    responsavel: 'Ana',
    status: 'Concluído',
    tecnologias: ['React', 'Node.js', 'PostgreSQL', 'Vitest'],
    destaque: true,
  },
  {
    id: 2,
    titulo: 'Portal de Cursos',
    descricao: 'Plataforma para divulgação e inscrição em cursos.',
    responsavel: 'Bruno',
    status: 'Em andamento',
    tecnologias: ['React', 'JavaScript', 'CSS'],
    destaque: true,
  },
  {
    id: 3,
    titulo: 'Aplicativo de Tarefas',
    descricao: 'Organização de tarefas pessoais e profissionais.',
    responsavel: 'Carla',
    status: 'Em andamento',
    tecnologias: ['React Native', 'Expo', 'SQLite'],
    destaque: false,
  },
  {
    id: 4,
    titulo: 'Dashboard de Vendas',
    descricao: 'Painel para acompanhar indicadores e resultados de vendas.',
    responsavel: 'Diego',
    status: 'Planejamento',
    tecnologias: ['React', 'Chart.js', 'Node.js'],
    destaque: false,
  },
  {
    id: 5,
    titulo: 'Site Institucional',
    descricao: 'Página institucional responsiva para uma empresa local.',
    responsavel: 'Elisa',
    status: 'Concluído',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    destaque: true,
  },
  {
    id: 6,
    titulo: 'Sistema de Agendamentos',
    descricao: 'Agendamento online de horários e gerenciamento de clientes.',
    responsavel: 'Felipe',
    status: 'Em andamento',
    tecnologias: ['React', 'Express', 'MongoDB'],
    destaque: false,
  },
  {
    id: 7,
    titulo: 'Plataforma de Eventos',
    descricao: 'Divulgação de eventos e gerenciamento de inscrições.',
    responsavel: 'Gabriela',
    status: 'Em desenvolvimento',
    tecnologias: ['React', 'Vite', 'Firebase'],
    destaque: true,
  },
]

function App() {
  const total = projetos.length
  const concluidos = projetos.filter(
    (projeto) => projeto.status === 'Concluído',
  ).length
  const emDesenvolvimento = projetos.filter(
    (projeto) =>
      projeto.status === 'Em desenvolvimento' ||
      projeto.status === 'Em andamento',
  ).length

  return (
    <main className="projetos-page">
      <h1>Painel de projetos</h1>
      <Secao titulo="Resumo">
        <Resumo
          total={total}
          concluidos={concluidos}
          emDesenvolvimento={emDesenvolvimento}
        />
      </Secao>
      <Secao titulo="Projetos da turma">
        <div className="projetos-grid" aria-label="Lista de projetos">
          {projetos.map((projeto) => (
            <ProjetoCard
              key={projeto.id}
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              responsavel={projeto.responsavel}
              status={projeto.status}
              tecnologias={projeto.tecnologias}
              destaque={projeto.destaque}
            />
          ))}
        </div>
      </Secao>
    </main>
  )
}

export default App
