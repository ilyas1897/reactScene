import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((showParagraph) => !showParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
