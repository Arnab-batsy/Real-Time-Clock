import React, { useState } from 'react'

function App() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-IT", { hour12: false })
  );

  function currentTime() {
    setTime(new Date().toLocaleTimeString("en-IT", { hour12: false }));
  }
  setInterval(currentTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currentTime}> Get Time</button>
    </div>
  );
}

export default App
