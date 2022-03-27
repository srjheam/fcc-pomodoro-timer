import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  switchIsRunning,
  skipTimer,
  resetTimer,
} from '../timer/timerSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './TimerControl.scss'

export function TimerControl() {
  const isRunning = useSelector((state) => state.timer.isRunning);
  const dispatch = useDispatch();

  const faSize = '2xl';

  return (
    <div className='TimerControl'>
      <button onClick={() => dispatch(resetTimer())}>
        <FontAwesomeIcon icon={solid('repeat')} size={faSize} />
      </button>
      <button onClick={() => dispatch(switchIsRunning())}>
        {isRunning ? <FontAwesomeIcon icon={solid('pause')} size={faSize} /> : <FontAwesomeIcon icon={solid('play')} size={faSize} />}
      </button>
      <button onClick={() => dispatch(skipTimer())}>
        <FontAwesomeIcon icon={solid('forward')} size={faSize} />
      </button>
    </div>
  );
}
