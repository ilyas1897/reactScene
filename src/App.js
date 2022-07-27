import React, { useCallback, useMemo, useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
// import DemoOutput from './components/Demo/DemoOutput';
import DemoList from './components/UI/Button/DemoList';

function App() {
  // const [showParagraph, setShowParagraph] = useState(false);
  console.log('render');
  // const [allowToggle, setAllowToggle] = useState(false);

  // const toggleParagraphHandler = useCallback(() => {
  //   if (allowToggle) {
  //     setShowParagraph((showParagraph) => !showParagraph);
  //   }
  // }, [allowToggle]);

  // const toggleAllowandler = () => {
  //   setAllowToggle(true);
  // };

  const [listTitle, setListTitle] = useState('My list');
  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title!');
  }, []);

  const listItems = useMemo(() => [5, 1, 3, 10, 8], []);

  return (
    <>
      <div className="app">
        {/* <h1>Hi there!</h1> */}
        <DemoList title={listTitle} items={listItems} />
        <Button onClick={changeTitleHandler}>Change Title</Button>
        {/* <DemoOutput show={showParagraph} /> */}
        {/* <Button onClick={toggleAllowandler}>Toggle allow</Button> */}
      </div>
    </>
  );
}

export default App;
