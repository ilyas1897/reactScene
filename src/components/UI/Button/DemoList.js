import React, { useMemo } from 'react';

const DemoList = (props) => {
  const sortedList = useMemo(() => {
    return props.items.sort((a, b) => a - b);
  }, [props.items]);

  return (
    <>
      <h1>{props.title}</h1>
      <ul>
        {sortedList.map((item) => (
          <li key={item.key}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(DemoList);
