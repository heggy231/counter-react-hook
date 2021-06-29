import React, { useState }from "react";

function App() {

  const [counter, setCounter] = useState(0);

  const countUp = () => {
    setCounter(counter + 1);
  };

  const countDown = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  }

  return (
    <div>
      <h1>count at {counter}</h1>
      <button onClick={countUp}>Up</button><br/><br/>
      <button onClick={countDown}>Down</button><br/><br/>
      <button onClick={reset}>Reset</button><br/><br/>
    </div>
  );
}

export default App;
