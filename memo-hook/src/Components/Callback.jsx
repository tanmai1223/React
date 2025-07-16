import React, { useState, useCallback } from 'react';
import CallbackChild from './CallbackChild';

function Callback() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // ❌ Without useCallback: this function is recreated on every render
  //const increment = () => setCount((c) => c + 1);

  // ✅ With useCallback: this function is memoized
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  

  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <div style={theme}>
      <h2>Count: {count}</h2>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <CallbackChild onClick={increment} />
    </div>
  );
}

export default Callback;
