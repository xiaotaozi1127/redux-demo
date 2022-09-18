import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './CounterSlice';
import toggleSlice from './ToggleSlice';


// merge all these reducers into one reducer
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        toggle: toggleSlice.reducer
    }
})



export default store;