import {useSelector, useDispatch} from "react-redux";
import { counterActions } from './store/index';

function Counter() {
  const counter = useSelector(state => state.counter)
  const display = useSelector(state => state.display)
  const dispatch = useDispatch()

  // Action: code that causes an update to the state when something happens
  const increment = () => {
      dispatch(counterActions.increment())
  };

  const increase = () => {
    dispatch(counterActions.increase(5)) //default argument name is payload
};

  const decrement = () => {
      dispatch(counterActions.decrement())
  }

  const toggle = () => {
    dispatch(counterActions.toggleCounter())
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
