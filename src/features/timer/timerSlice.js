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
    updatePomodoroTime: (state, action) => {
      state.pomodoroTime = action.payload;
    },
    updateBreakTime: (state, action) => {
      state.breakTime = action.payload;
    },
  },
});

export const { decrementTime, switchIsRunning, nextTimer, updatePomodoroTime, updateBreakTime } = timerSlice.actions;

export default timerSlice.reducer;
