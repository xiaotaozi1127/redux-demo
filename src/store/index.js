import {createStore} from 'redux';

const initialState = {counter: 0, display: true};
const counterReducer = (state = initialState, action)=> {
    switch(action.type) {
        case 'increment':
            return {
                counter: state.counter + 1, 
                display: state.display
            }
        case 'increase':
            return {counter: state.counter + action.amount, display: state.display}    
        case 'decrement':
            return {counter: state.counter - 1, display: state.display}
        case 'toggleCounter':
            return {
                counter: state.counter, 
                display: !state.display
            }
        default:
            return state;
    }

}

const store = createStore(counterReducer)

export default store;