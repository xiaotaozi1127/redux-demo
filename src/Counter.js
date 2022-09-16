import {useSelector, useDispatch} from "react-redux";


function Counter() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  // Action: code that causes an update to the state when something happens
  const increment = () => {
      dispatch({
          type: 'increment'
      })
  };

  const decrement = () => {
      dispatch({
          type: 'decrement'
      })
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
