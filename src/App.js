import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Adicionar from '../src/pages/edit'
import TaskLists from '../src/pages/list'
import Detail from '../src/pages/detail'
import './App.css'

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Ver Tarefas</Link>
              </li>
              <li>
                <Link to="/formulario?tipo=adicionar">Adicionar Tarefa</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<TaskLists />} />
            <Route path="/formulario" element={<Adicionar />} />
            <Route path="/detalhe" element={<Detail />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>
  );
};

export default App;
