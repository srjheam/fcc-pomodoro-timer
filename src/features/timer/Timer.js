import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrementTime,
  nextTimer,
  switchIsRunning,
} from './timerSlice';
import './Timer.scss';

export function Timer() {
  const timeRemaining = useSelector((state) => state.timer.timeRemaining);
  const totalTime = useSelector((state) => state.timer.totalTime);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const hasStarted = useSelector((state) => state.timer.hasStarted);
  const dispatch = useDispatch();

  // Convert deciseconds to minutes and seconds
  const timer = {
    minutes: Math.floor(timeRemaining / 600),
    seconds: Math.floor(timeRemaining % 600 / 10),
  }

  const svgCircleTransitionDefault = "100ms";
  let svgCircleTransition = useRef(svgCircleTransitionDefault);
  const svgCircleStyle = {
    strokeDashoffset: (1 - timeRemaining / totalTime) * 944,
    transition: svgCircleTransition.current,
  }
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isRunning) {
        dispatch(decrementTime());
        if (timeRemaining <= 0) {
          svgCircleTransition.current = "1.2s";
          dispatch(nextTimer());
          svgCircleTransition.current = svgCircleTransitionDefault;
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  });

  return (
    <div className="Timer" onClick={() => dispatch(switchIsRunning())} style={{ animationName: !hasStarted ^ isRunning ? 'fadein' : 'fadeout' }}>
      <div className="outer">
        <div className="inner">
          <span>
            {timer.minutes.toString().padStart(2, '0')}
          </span>
          <span>
            {timer.seconds.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <circle cx="160" cy="160" r="140" strokeLinecap="round" style={svgCircleStyle} />
      </svg>
    </div>
  );
}
