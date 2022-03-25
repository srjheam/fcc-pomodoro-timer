import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrementTime,
  switchIsRunning,
} from './timerSlice';
import './Timer.scss';

export function Timer() {
  const timeRemaining = useSelector((state) => state.timer.timeRemaining);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const hasStarted = useSelector((state) => state.timer.hasStarted);
  const dispatch = useDispatch();

  const timer = {
    minutes: Math.floor(timeRemaining / 60),
    seconds: timeRemaining % 60,
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isRunning) {
        dispatch(decrementTime());
      }
    }, 1000);

    return () => clearTimeout(timeout);
  });

  return (
    <div className="Timer" onClick={() => dispatch(switchIsRunning())} style={{ animationPlayState: !hasStarted ^ isRunning ? 'paused' : 'running' }}>
      <span>
        {timer.minutes.toString().padStart(2, '0')}
      </span>
      :
      <span>
        {timer.seconds.toString().padStart(2, '0')}
      </span>
    </div>
  );
}
