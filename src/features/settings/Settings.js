import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NumberPicker } from '../numberPicker/NumberPicker';
import { updatePomodoroTime, updateBreakTime } from '../timer/timerSlice';
import './Settings.scss';

const convertSeconds = 60;

export function Settings() {
  const pomodoroMinutes = useSelector((state) => state.timer.pomodoroTime) / convertSeconds;
  const breakMinutes = useSelector((state) => state.timer.breakTime) / convertSeconds;
  const dispatch = useDispatch();

  return (
    <div className='Settings'>
      <h2>Time</h2>
      <div className='TimeWrapper'>
        <div className='TimePomodoro'>
          <h3>Pomodoro</h3>
          <NumberPicker counter={pomodoroMinutes} onCounterChange={(value) => dispatch(updatePomodoroTime(value * convertSeconds))} changeAmount={1} />
        </div>
        <div className='TimeBreak'>
          <h3>Break</h3>
          <NumberPicker counter={breakMinutes} onCounterChange={(value) => dispatch(updateBreakTime(value * convertSeconds))} changeAmount={1} />
        </div>
      </div>
    </div>
  );
}
