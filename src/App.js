import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import CreateNewTask from './CreateNewTask/CreateNewTask';

export const TodoTaskContext = React.createContext({})

function App() {

  const [taskList, setTaskList] = useState([])
  return (
    <TodoTaskContext.Provider value={{
      taskList: taskList,
      updateTaskList: setTaskList
    }}>
      <div className='App'>
        <CreateNewTask/>
      </div>
    </TodoTaskContext.Provider>
  )
  
}

export default App;
