import { useState } from "react";
function Counter() {
//   // State: a counter value
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter -1 1);
  }

  // View: the UI definition
  return (
    <div>
        <button style={{margin: '10px'}} onClick={increment}>Increment</button>
        <button style={{margin: '10px'}} onClick={decrement}>Decrement</button>
        <div>
        Value: {counter} 
        </div>
    </div>
  );
}

export default Counter;
