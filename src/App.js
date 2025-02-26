import React from 'react';
import { useGetTodoList } from './hooks/useGetTodoList';
import './App.css';

function App() {
  const completed = true
  const {tasks, loading} = useGetTodoList(completed)
  return (
    <div className="App">
      <h1>Выполненные задачи</h1>
      {
        loading && <div>Loading...</div>
      }
      {
      !loading && tasks.map(task => <div key={task.id}>{task.title}</div>)
      }
    </div>
  );
}

export default App;
