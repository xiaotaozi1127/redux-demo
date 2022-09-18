import {createSlice} from '@reduxjs/toolkit';

const initialState = {display: true};
const toggleSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        //create unique action identifiers
        toggle(state) {
            state.display = !state.display
        }
    }
})

export const toggleActions = toggleSlice.actions;

export default toggleSlice;