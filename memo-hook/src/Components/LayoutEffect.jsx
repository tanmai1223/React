import React, { useState, useLayoutEffect, useRef } from 'react';

function LayoutEffect() {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useLayoutEffect(() => {
    console.log("DOM updated (layout effect):", countRef.current.innerText);
  }, [count]);

  return (
    <div>
      <h2 ref={countRef} id="count">{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default LayoutEffect;
