import React from 'react';

const DemoOutput = (props) => {
  return <p>{props.show ? "Hi! I'm a new!" : ''}</p>;
};

export default React.memo(DemoOutput);
