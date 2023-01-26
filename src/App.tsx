import './App.css';
import React from "react";
import Taskify from './taskify/Taskify';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Taskify/>
      </header>
    </div>
  );
}

export default App;
