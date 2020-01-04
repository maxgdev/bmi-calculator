import React from 'react';
import GetHeader from './components/getHeader';
import GetInput from './components/getInput';
import OutputBMI from './components/outputBMI';
import './App.css';

function App() {
  return (
    <div className="App">
      <GetHeader />
      <GetInput />
      <OutputBMI />
    </div>
  );
}

export default App;
