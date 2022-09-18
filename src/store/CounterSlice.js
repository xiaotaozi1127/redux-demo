import {createSlice} from '@reduxjs/toolkit';

const initialState = {counter: 0, display: true};
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        //create unique action identifiers
        increment(state) {
            state.counter = state.counter + 1
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        decrement(state) {
            state.counter = state.counter - 1
        }
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice;
