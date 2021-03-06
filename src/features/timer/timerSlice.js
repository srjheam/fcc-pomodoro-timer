import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalTime: 25 * 60, // 25 minutes in seconds
  timeRemaining: 25 * 60, // 25 minutes in seconds
  pomodoroTime: 25 * 60,
  breakTime: 5 * 60, // 5 minutes in seconds
  onBreak: false,
  isRunning: false,
  hasStarted: false
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
      state.hasStarted = true;
    },
    nextTimer: (state) => {
      state.onBreak = !state.onBreak;
      state.timeRemaining = state.onBreak ? state.breakTime : state.pomodoroTime;
      state.totalTime = state.timeRemaining;
      state.isRunning = false;
      state.hasStarted = false;
    },
    skipTimer: (state) => {
      state.onBreak = !state.onBreak;
      state.timeRemaining = state.onBreak ? state.breakTime : state.pomodoroTime;
      state.totalTime = state.timeRemaining;
      state.isRunning = true;
      state.hasStarted = true;
    },
    resetTimer: (state) => {
      state.timeRemaining = state.onBreak ? state.breakTime : state.pomodoroTime;
      state.totalTime = state.timeRemaining;
      state.isRunning = false;
      state.hasStarted = false;
    },
    updatePomodoroTime: (state, action) => {
      state.pomodoroTime = action.payload;
      if (!state.hasStarted && !state.onBreak) {
        state.timeRemaining = action.payload;
        state.totalTime = state.timeRemaining;
      }
    },
    updateBreakTime: (state, action) => {
      state.breakTime = action.payload;
      if (!state.hasStarted && state.onBreak) {
        state.timeRemaining = action.payload;
        state.totalTime = state.timeRemaining;
      }
    },
  },
});

export const { decrementTime, switchIsRunning, nextTimer, skipTimer, resetTimer, updatePomodoroTime, updateBreakTime } = timerSlice.actions;

export default timerSlice.reducer;
