import React, { createContext, useState } from 'react';
import { mockTask } from '../mock/mock'

const TaskContext = createContext({});

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(mockTask);
  const [editingTask, setEditingTask] = useState(null);
  const [description, setDescription] = useState('');
  const [selectedTaskDescription, setSelectedTaskDescription] = useState(''); // Nova variável para armazenar a descrição selecionada

  const addTask = (title, description) => {
    const newTask = { id: tasks.length + 1, title, description };
    setTasks([...tasks, newTask ]);
    setEditingTask(null);
    return newTask; // Retorna a nova tarefa adicionada
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
    // Limpar a tarefa de edição se a tarefa removida estiver sendo editada
    if (editingTask && editingTask.id === id) {
      setEditingTask(null);
    }
  };

  const editTask = (id, newTitle, description) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, title: newTitle, description: description } : task))); // Edita a tarefa que foi solicitada
    setEditingTask(null); // Limpar o estado de edição após a edição
  };

  const descriptionInfo = newDescription => {
    setDescription(newDescription);
  };

  const handleSelectedTaskDescription = () => {
    // Atualiza a descrição selecionada no contexto
    setSelectedTaskDescription(description);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, editingTask, setEditingTask, editTask, descriptionInfo, description, selectedTaskDescription, handleSelectedTaskDescription }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider, TaskContext };
