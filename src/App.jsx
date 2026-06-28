import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Tasks from './pages/Tasks';

export default function App() {
  const [page, setPage] = useState(
    localStorage.getItem('token') ? 'tasks' : 'login'
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        {page === 'login' && (
          <>
            <Login onLogin={() => setPage('tasks')} />
            <p style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
              Não tem conta?{' '}
              <button className="link" style={{ color: '#00ff6a' }} onClick={() => setPage('register')}>
                Cadastre-se
              </button>
            </p>
          </>
        )}
        {page === 'register' && (
          <>
            <Register onRegister={() => setPage('tasks')} />
            <p style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
              Já tem conta?{' '}
              <button className="link" style={{ color: '#00ff6a' }} onClick={() => setPage('login')}>
                Entrar
              </button>
            </p>
          </>
        )}
        {page === 'tasks' && (
          <Tasks onLogout={() => setPage('login')} />
        )}
      </div>

      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        fontSize: '0.8rem',
        color: '#888'
      }}>
        © {new Date().getFullYear()} Gustavo Sales. Todos os direitos reservados.
      </footer>
    </div>
  );
}