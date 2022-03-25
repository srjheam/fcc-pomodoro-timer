import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrementTime,
} from './timerSlice';

function calcTimer(timeRemaining) {
  const timer = {
    minutes: Math.floor(timeRemaining / 60),
    seconds: timeRemaining % 60,
  }

  return timer;
}

export function Timer() {
  const timeRemaining = useSelector((state) => state.timer.timeRemaining);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const dispatch = useDispatch();

  const [timer, setTimer] = useState(calcTimer(timeRemaining));

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isRunning) {
        dispatch(decrementTime());
        setTimer(calcTimer(timeRemaining));
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
