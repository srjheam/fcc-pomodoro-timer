import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrementTime,
} from './timerSlice';

export function Timer() {
  const timeRemaining = useSelector((state) => state.timer.timeRemaining);
  const isRunning = useSelector((state) => state.timer.isRunning);
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
    <div>
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
