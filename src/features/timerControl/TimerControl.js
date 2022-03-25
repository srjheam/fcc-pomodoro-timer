import React from 'react';
import { useDispatch } from 'react-redux';
import {
  switchIsRunning,
} from '../timer/timerSlice';

export function TimerControl() {
  const dispatch = useDispatch();

  return (
    <div>
      <button>
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
