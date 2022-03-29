import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrementTime,
  nextTimer,
  switchIsRunning,
} from './timerSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Timer.scss';
import PALETTE from '../../app/App.style';

export function Timer() {
  const timeRemaining = useSelector((state) => state.timer.timeRemaining);
  const totalTime = useSelector((state) => state.timer.totalTime);
  const onBreak = useSelector((state) => state.timer.onBreak);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const dispatch = useDispatch();

  // Convert deciseconds to minutes and seconds
  const timer = {
    minutes: Math.floor(timeRemaining / 600),
    seconds: Math.floor(timeRemaining % 600 / 10),
  };

  const colors = PALETTE(onBreak);

  const svgCircleTransitionDefault = "100ms";
  let svgCircleTransition = useRef(svgCircleTransitionDefault);
  const svgCircleStyle = {
    strokeDashoffset: (1 - timeRemaining / totalTime) * 944,
    transition: svgCircleTransition.current,
  };

  const endTime = new Date(Date.now() + timeRemaining * 100);
  
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
    <div className="Timer" onClick={() => dispatch(switchIsRunning())}>
      <div className="outer">
        <div className="inner">
          <div>
            <span>
              {timer.minutes.toString().padStart(2, '0')}
            </span>
            <span>
              {timer.seconds.toString().padStart(2, '0')}
            </span>
          </div>
          <div className='endTime' style={ isRunning ? null : { opacity: ".4" }  }>
            <FontAwesomeIcon icon={solid('bell')} /> {endTime.getHours().toString().padStart(2, '0') + ':' + endTime.getMinutes().toString().padStart(2, '0')}
          </div>
        </div>
      </div>
      <svg className='timerRing' xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <linearGradient id="GradientColor" gradientTransform={`rotate(${timeRemaining})`}>
            <stop offset="0%" stopColor={colors.primaryColor} />
            <stop offset="100%" stopColor={colors.primaryLightColor} />
          </linearGradient>
          </defs>
        <circle cx="160" cy="160" r="140" strokeLinecap="round" style={svgCircleStyle} />
      </svg>
    </div>
  );
}
