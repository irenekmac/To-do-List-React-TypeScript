import React, { FC } from 'react'; //FC import typeScript flag
import './App.css';

// 'FC' = functional component
const App: FC = () => {
  return (
      <div className="App">
      <div className="header">
      <input type="text" placeholder="Task..." />
      <input type="number" placeholder="Deadline (days)" />
      </div>
      <div className="todoList"></div>
      </div>);

}

export default App;
