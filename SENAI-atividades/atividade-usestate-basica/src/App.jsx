import { useState } from "react";
import "./App.css";

function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador((valorAtual) => valorAtual + 1);
  }

  return (
    <section className="exercise-card">
      <span className="card-number">01</span>
      <h2>Contador</h2>
      <p className="card-description">Atualize um valor com o estado do React.</p>
      <p className="counter-value" aria-live="polite">
        {contador}
      </p>
      <button className="button button-primary" onClick={aumentar}>
        Aumentar
      </button>
    </section>
  );
}

function App() {
  const [visivel, setVisivel] = useState(false);
  const [nome, setNome] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(true);

  return (
    <main className="app">
      <header className="app-header">
        <span className="eyebrow">Prática de React</span>
        <h1>Aprendendo useState</h1>
        <p>
          Interaja com os exemplos e veja o estado atualizar a interface.
        </p>
      </header>

      <div className="exercise-grid">
        <Contador />

        <section className="exercise-card">
          <span className="card-number">02</span>
          <h2>Exibir aviso</h2>
          <p className="card-description">
            Controle a exibição de uma mensagem.
          </p>
          <button
            className="button button-secondary"
            onClick={() => setVisivel((estadoAtual) => !estadoAtual)}
            aria-expanded={visivel}
          >
            {visivel ? "Ocultar aviso" : "Alternar aviso"}
          </button>
          {visivel && (
            <p className="notice" role="status">
              O aviso está visível.
            </p>
          )}
        </section>

        <section className="exercise-card greeting-card">
          <span className="card-number">03</span>
          <h2>Saudação</h2>
          <p className="card-description">
            Digite seu nome e personalize a saudação.
          </p>
          <label className="name-label" htmlFor="nome">
            Seu nome
          </label>
          <input
            id="nome"
            className="name-input"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Digite seu nome"
          />
          <button
            className="button button-secondary"
            onClick={() =>
              setMostrarSaudacao((estadoAtual) => !estadoAtual)
            }
            aria-pressed={mostrarSaudacao}
          >
            {mostrarSaudacao ? "Ocultar saudação" : "Mostrar saudação"}
          </button>
          {mostrarSaudacao && (
            <p className="greeting" aria-live="polite">
              Olá, {nome.trim() || "visitante"}!
            </p>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
