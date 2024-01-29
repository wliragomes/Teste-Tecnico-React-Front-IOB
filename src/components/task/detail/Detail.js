import React, { useContext, useEffect } from 'react';
import { TaskContext } from '../../../context/TaskContext'; // Substitua pelo caminho correto
import './Detail.css'
const Detalhe = () => {
  const { selectedTaskDescription, handleSelectedTaskDescription } = useContext(TaskContext);

  useEffect(() => {
    // Chamada para atualizar a descrição selecionada no contexto
    handleSelectedTaskDescription();
  }, [handleSelectedTaskDescription]);

  return (
    <div>
      <h2>Detalhes da Tarefa</h2>
      <div className='div-description'>
        <p className='description'>Descrição:</p>
        <p>{selectedTaskDescription}</p>
      </div>
    </div>
  );
};

export default Detalhe;
