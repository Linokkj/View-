import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Menu({ user, onLogout, busca, setBusca }) {
  const navigate = useNavigate();
  const [mostrarBusca, setMostrarBusca] = useState(false);


  const irParaSecao = (id) => {
    navigate('/');
    setTimeout(() => {
      const elemento = document.getElementById(id);
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="Menu">
      <div className="btn">
        <button onClick={() => navigate('/')} className="nav-link">Início</button>
        <button onClick={() => irParaSecao('filmes')} className="nav-link">Filmes</button>
        <button onClick={() => irParaSecao('series')} className="nav-link">Séries</button>
      </div>

      <div className="nav-right">
        {mostrarBusca && (
          <input 
            type="text" placeholder="Busca..." value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="menu-inline-search" autoFocus
          />
        )}
        
        <div className={`span ${mostrarBusca ? 'lupa-ativa' : ''}`} onClick={() => setMostrarBusca(!mostrarBusca)}>
          <img className="imagem" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><circle cx='11' cy='11' r='8'></circle><line x1='21' y1='21' x2='16.65' y2='16.65'></line></svg>" alt="Pesquisa" />
        </div>

        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Link to="/dashboard" className="nav-link">Minha Conta</Link>
            <button onClick={onLogout} style={{ background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer' }}>Sair</button>
          </div>
        ) : (
          <Link to="/login" className="nav-link">Assinaturas</Link>
        )}
      </div>
    </nav>
  );
}