import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [animating, setAnimating] = useState(false);

  const addCount = () => {
    setAnimating(true);
    setCount(count + 1);
    setTimeout(() => setAnimating(false), 300);
  };

  const reduceCount = () => {
    setAnimating(true);
    setCount(count - 1);
    setTimeout(() => setAnimating(false), 300);
  };

  return (
    <div className="container">
      <h1>Satish Counter App</h1>
      <p className={animating ? "count-change" : ""}>Start Count: {count}</p>
      <div>
        <button onClick={addCount}>Increase Count</button>
        <button onClick={reduceCount}>Decrease Count</button>
      </div>
    </div>
  );
}

export default App;
