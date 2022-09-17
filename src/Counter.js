import {useSelector, useDispatch} from "react-redux";


function Counter() {
  const counter = useSelector(state => state.counter)
  const display = useSelector(state => state.display)
  const dispatch = useDispatch()

  // Action: code that causes an update to the state when something happens
  const increment = () => {
      dispatch({
          type: 'increment'
      })
  };

  const increase = () => {
    dispatch({
        type: 'increase', amount: 5
    })
};

  const decrement = () => {
      dispatch({
          type: 'decrement'
      })
  }

  const toggle = () => {
    dispatch({
        type: 'toggleCounter'
    })
}

  // View: the UI definition
  return (
    <div>
        <button style={{margin: '10px'}} onClick={increment}>Increment</button>
        <button style={{margin: '10px'}} onClick={increase}>Increase</button>
        <button style={{margin: '10px'}} onClick={decrement}>Decrement</button>
        <button style={{margin: '10px'}} onClick={toggle}>Toggle Counter</button>
        {display && <div>
        Value: {counter} 
        </div>}
    </div>
  );
}

export default Counter;
