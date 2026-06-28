import { useState, useEffect } from 'react';
import api from '../services/api';

export default function Tasks({ onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const response = await api.get('/tasks');
    setTasks(response.data);
  }

  async function handleCreate(e) {
    e.preventDefault();
    await api.post('/tasks', { title, description });
    setTitle('');
    setDescription('');
    loadTasks();
  }

  async function handleToggle(id) {
    await api.patch(`/tasks/${id}/toggle`);
    loadTasks();
  }

  async function handleDelete(id) {
    await api.delete(`/tasks/${id}`);
    loadTasks();
  }

  function handleLogout() {
    localStorage.removeItem('token');
    onLogout();
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Minhas Tarefas</h1>
        <button className="logout" onClick={handleLogout}>Sair</button>
      </div>

      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição (opcional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <div className="task-info">
              <span className="task-title">{task.title}</span>
              {task.description && <span className="task-desc">{task.description}</span>}
            </div>
            <div className="task-actions">
              <button onClick={() => handleToggle(task.id)}>
                {task.completed ? '↩ Desfazer' : '✓ Concluir'}
              </button>
              <button className="delete" onClick={() => handleDelete(task.id)}>🗑</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}