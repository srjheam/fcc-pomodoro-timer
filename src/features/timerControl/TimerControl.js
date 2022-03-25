import React from 'react';
import { useDispatch } from 'react-redux';
import {
  switchIsRunning,
  resetTimer,
} from '../timer/timerSlice';

export function TimerControl() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(resetTimer())}>
        Reset
      </button>
      <button onClick={() => dispatch(switchIsRunning())}>
        Play
      </button>
      <button>
        Skip
      </button>
    </div>
  );
}
