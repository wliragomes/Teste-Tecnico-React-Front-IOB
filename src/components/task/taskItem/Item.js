import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../../../context/TaskContext'; // Substitua pelo caminho correto

const TaskItem = ({ task, onRemove, data, onEdit }) => {
  const navigate = useNavigate();
  const { descriptionInfo, handleSelectedTaskDescription } = useContext(TaskContext);

  const handleRemove = () => {
    onRemove(data.id);
  };

  const handleEdit = () => {
    onEdit(data);
  };

  const handleDescription = e => {
    e.preventDefault();

    descriptionInfo(data.description);
    handleSelectedTaskDescription(data.description); // Atualiza a descrição selecionada no contexto
    navigate('/detalhe');
  };

  return (
    <tr>
      <td>{task}</td>
      <td>
        <button onClick={handleDescription}>Detalhes</button>
        <Link to={`/formulario`}><button className="edit" onClick={handleEdit}>Editar</button></Link>
        <button className="remove" onClick={handleRemove}>Remover</button>
      </td>
    </tr>
  );
};


export default TaskItem;
