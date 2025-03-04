import React, {useState} from 'react';
import { useGetTodoList } from './hooks/useGetTodoList';
import './App.css';

function App() {
  
  const [completed, setCompleted] = useState(false)
  const {tasks, loading} = useGetTodoList(completed)

  const onChangeCompleted = () => {
    setCompleted(!completed)
  }
  return (
    <div className="App">
      <h1>Выполненные задачи</h1>
      <button onClick={onChangeCompleted}>
        {completed ? "Показать все задачи" : "Показать выполненные задачи"}
      </button>
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
