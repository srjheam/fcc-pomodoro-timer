import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeRemaining: 25 * 60, // 25 minutes in seconds
  pomodoroTime: 25 * 60,
  breakTime: 5 * 60, // 5 minutes in seconds
  onBreak: false,
  isRunning: false
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    decrementTime: (state) => {
      state.timeRemaining -= 1;
    },
    switchIsRunning: (state) => {
      state.isRunning = !state.isRunning;
    },
    nextTimer: (state) => {
      
    },
  },
});

export const { decrementTime, switchIsRunning, nextTimer } = timerSlice.actions;

export default timerSlice.reducer;
