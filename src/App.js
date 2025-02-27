import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [data, setData] = useState(null)
  const [localStorageKey, setLocalStorageKey] = useState('')
  const [localStorageValue, setLocalStorageValue] = useState('')
  const {setLocalStorage, getLocalStorage, removeLocalStorage} = useLocalStorage()

  const onGetData = () => {
    const data = getLocalStorage(localStorageKey)
    setData(data)
    console.log(`Данные получены из localStorage по ключу "${localStorageKey}":`, data)
  }

  const onSetData = () => {
    setLocalStorage(localStorageKey, localStorageValue)
    console.log(`Данные записаны в localStorage по ключу "${localStorageKey}":`, localStorageValue)
  }

  const onRemoveData = () => {
    removeLocalStorage(localStorageKey)
    console.log(`Данные удалены из localStorage по ключу "${localStorageKey}"`)
  }
  return (
    <div className="App">
      <h1>Пример кастомного хука 2</h1>
      <form>
        {data && <div>Данные из localStorage: {data}</div>}
        <input
          type='text'
          name='key'
          value={localStorageKey}
          onChange={(e) => setLocalStorageKey(e.target.value)}
          placeholder='localStorage key'
        />
        <br/>
        <br/>
        <input
          type='text'
          name='value'
          value={localStorageValue}
          onChange={(e) => setLocalStorageValue(e.target.value)}
          placeholder='localStorage value'
        />
        <br/>
        <br/>
        <div onClick={onSetData}>Записать данные</div>
        <div onClick={onGetData}>Получить данные</div>
        <div onClick={onRemoveData}>Удалить данные</div>
      </form>
      
    </div>
  );
}

export default App;
