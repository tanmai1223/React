import React, { useRef, useState, useEffect } from 'react';

function Ref() {
  const [time, setTime] = useState(0);           // Elapsed time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);              // Stores the interval ID

  useEffect(() => {
    if (isRunning) {
      // Start timer
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 100);
    } else if (!isRunning && intervalRef.current) {
      // Pause timer
      clearInterval(intervalRef.current);
    }

    // Cleanup when component unmounts or isRunning changes
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    clearInterval(intervalRef.current);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>Stopwatch</h2>
      <h1>{time}s</h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Ref;
