  import { useState } from 'react';
  import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
  import Menu from './pages/Menu';
  import Login from './pages/Login';
  import Dashboard from './Dashboard';
  import Slide from './components/Slide';
  import Header from './pages/Header';
  import Footer from './components/Footer';
  import Filme from './components/Filme'; 
  import Series from './components/Serie';

  function App() {
    {/*verificar se ja existe usuario*/}
    const [user, setUser] = useState(() => {
      const usuarioSalvo = localStorage.getItem('usuario_logado');
      return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
    });

    const [busca, setBusca] = useState('');

    const handleLogin = (dadosDoUsuario) => {
      setUser(dadosDoUsuario);
      localStorage.setItem('usuario_logado', JSON.stringify(dadosDoUsuario));
    };

    const handleLogout = () => {
      setUser(null);
      localStorage.removeItem('usuario_logado');
    };

    return (
      <Router>
        <Routes>
          <Route path="/" element={
            <div className="prime-wrapper">
              <Menu user={user} onLogout={handleLogout} busca={busca} setBusca={setBusca} />
              <Slide />
              <Header busca={busca}/> 
              <Footer />
            </div>
          } />
          
          <Route path="/filme/:id" element={
            <div className="prime-wrapper">
              <Menu user={user} onLogout={handleLogout} busca={busca} setBusca={setBusca} />
              <Filme />
              
            </div>
          } />

          <Route path="/series/:id" element={
            <div className="prime-wrapper">
              <Menu user={user} onLogout={handleLogout} busca={busca} setBusca={setBusca} />
              <Series />
            </div>
          } />

          <Route path="/login" element={<Login onLogin={handleLogin} user={user} />} />
          
          <Route path="/dashboard" element={
            user ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
          } />
        </Routes>
      </Router>
    );
  }

  export default App;
