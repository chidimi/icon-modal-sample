import React from 'react';
import './App.css';
import ModalButton from './components/ModalButton';
import './index.css';

function App() : JSX.Element {
  return (
    <div className="App">
      <h1 className="m-10 text-5xl">Modal Sample</h1>
      <ModalButton />
    </div>
  );
}

export default App;
