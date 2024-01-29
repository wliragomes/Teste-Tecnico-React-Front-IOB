import React, { useState, useEffect, useContext } from 'react';
import { TaskContext } from '../../../context/TaskContext';
import { useNavigate, useLocation  } from 'react-router-dom';
import './TaskForm.css';

const TaskForm = ({ onCancelEdit }) => {
  const location = useLocation();
  const tipo = new URLSearchParams(location.search).get('tipo');

  const navigate = useNavigate();
  const { addTask, editTask, editingTask, setEditingTask } = useContext(TaskContext);
  const [newTask, setNewTask] = useState('');
  const [description, setDescription] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Verifica se os campos estão preenchidos
    if (!newTask.trim() || !description.trim()) {
      setFormError('*Por favor, preencha todos os campos.');
      return;
    }

    // Limpa o erro se estiver preenchido
    setFormError('');

    if (editingTask) {
      editTask(editingTask.id, newTask, description);
    } else {
      addTask(newTask, description);
    }

    // Limpar o estado de edição
    setNewTask('');
    setDescription('');
    setEditingTask(null);
    navigate('/');
  };

  useEffect(() => {
    if (editingTask) {
      setNewTask(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  useEffect(() => {
    if (!editingTask) {
      setNewTask('');
      setDescription('');
    }
  }, []);

  useEffect(() => {
    if (tipo === 'adicionar') {
      setNewTask('');
      setDescription('');
    }
  }, [tipo]);

  return (
    <div className='main'>
      <h2>{editingTask ? 'Editar Tarefa' : 'Adicionar Tarefa'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nova Tarefa"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        {formError && <p className="error-message">{formError}</p>}
        <button type="submit">{editingTask ? 'Editar' : 'Adicionar'}</button>
        {editingTask && <button type="button" onClick={() => navigate('/')}>Cancelar Edição</button>}
      </form>
    </div>
  );
};

export default TaskForm;
