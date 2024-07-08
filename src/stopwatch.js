// src/Stopwatch.js
import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const startStopwatch = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }
  };

  const stopStopwatch = () => {
    if (running) {
      setRunning(false);
      clearInterval(timerRef.current);
    }
  };

  const resetStopwatch = () => {
    setRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={startStopwatch}>Start</button>
        <button onClick={stopStopwatch}>Stop</button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
