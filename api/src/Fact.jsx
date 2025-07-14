import React, { useState, useEffect } from 'react';

function Fact() {
  const [info, setInfo] = useState(null);
  const [states, setStates] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  async function callApi() {
    const mean = await fetch('https://catfact.ninja/fact');
    const data = await mean.json();
    setInfo(data.fact);
  }

  // On initial mount
  useEffect(() => {
    callApi();
    setIsClicked(false); // Mark as not from click
  }, []);

  // On button click
  useEffect(() => {
    setIsClicked(true);  // ✅ Moved first
    callApi();
  }, [states]);

  // Unmount log
  useEffect(() => {
    return () => console.log('unmounting');
  }, []);

  const factStyle = {
    color: isClicked ? 'blue' : 'red',
  };

  return (
    <div>
      <h1>The facts are ...</h1>
      {info ? <h3 style={factStyle}>{info}</h3> : <p>Loading...</p>}
      <button onClick={() => setStates(!states)}>Another Fact</button>
    </div>
  );
}

export default Fact;
