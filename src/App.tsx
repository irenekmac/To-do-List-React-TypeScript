import React, { FC } from 'react'; //FC import typeScript flag
import './App.css';

// 'FC' = functional component
const App: FC = () => {
  return (
      <div className="App">
      <div className="header">
      <div className="inputContainer">
        <input type="text" placeholder="Task..." />
        <input type="number" placeholder="Deadline (days)" />
      </div>
      <button>Add Task</button>
      </div>
      <div className="todoList"></div>
      </div>);

}

export default App;
