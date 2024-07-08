import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!running && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running, time]);

  const handleStartStop = () => {
    setRunning(!running);
  };

  const handleReset = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div className="stopwatch">
        <div className="time">
          {Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
        </div>
        <div className="buttons">
          <button onClick={handleStartStop}>{running ? 'Stop' : 'Start'}</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
