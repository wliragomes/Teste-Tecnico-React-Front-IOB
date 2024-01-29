import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../../../context/TaskContext';
import TaskItem from '../taskItem/Item';
import TaskForm from '../taskForm/TaskForm';
import './TaskList.css';
 
const TaskList = () => {

  const navigate = useNavigate();

  const { tasks, removeTask, setEditingTask, editingTask } = useContext(TaskContext);

  const handleRemove = id => {
    removeTask(id);
  };

  const handleEdit = task => {
    setEditingTask(task);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  useEffect(() => {
    if (editingTask) {
      handleCancelEdit()
    }
  }, [])

  return (
    <div className='main'>
      <h2>Lista de Tarefas</h2>
      <table>
        <thead>
          <tr>
            <th>Nome da tarefa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task.title} onRemove={handleRemove} data={task} onEdit={handleEdit} />
          ))}
        </tbody>
      </table>
      {editingTask && (
        <div>
          <h2>Editar Tarefa</h2>
          <TaskForm onCancelEdit={handleCancelEdit} />
        </div>
      )}
    </div>
  );
};

export default TaskList;
