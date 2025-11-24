import { createSlice } from '@reduxjs/toolkit';

// 1. Type for the state
type CounterState = number;
// 2. Initial state with type
const initialState: CounterState = 0;
// 3. Create slice with state type
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
