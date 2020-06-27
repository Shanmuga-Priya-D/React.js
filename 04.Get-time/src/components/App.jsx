import React , { useState } from "react";

function App() {
  setInterval(get,1000)
  let now = new Date().toLocaleTimeString();
  const [time , setTime] = useState(now);

  function get() {
    setTime(new Date().toLocaleTimeString());
    
  }
  return (
    <div className="container">
      
      <h2>{time}</h2>
      <button onClick={get}>Get Time</button>
    </div>
  );
}

export default App;
