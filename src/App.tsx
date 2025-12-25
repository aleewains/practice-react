import { useState } from "react";
import "./App.css";
function App() {
  const [value, setvalue] = useState(0);

  const addValue = () => {
    if (value < 5) setvalue(value + 1);
  };
  const removeValue = () => {
    if (value > 0) setvalue(value - 1);
  };
  return (
    <>
      <div>
        <h1>Practice React</h1>
        <h2>Counter Value: {value}</h2>
        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  );
}

export default App;
