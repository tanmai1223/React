import React, { useContext } from 'react';
import { Data } from '../Context/Context';

function GrandChild() {
  const context = useContext(Data);

  return (
    <div>
      <h1>GrandChild</h1>
      {context.map((item) => (
        <div >
          <h2>Name: {item.name}</h2>
          <h3>Age: {item.age}</h3>
        </div>
      ))}
    </div>
  );
}

export default GrandChild;
