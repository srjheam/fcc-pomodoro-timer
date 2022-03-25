import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NumberPicker } from '../numberPicker/NumberPicker';
import { updatePomodoroTime, updateBreakTime } from '../timer/timerSlice';

export function Settings() {
  const pomodoroMinutes = useSelector((state) => state.timer.pomodoroTime) / 60;
  const breakMinutes = useSelector((state) => state.timer.breakTime) / 60;
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Time</h2>
      <div>
        <h3>Pomodoro</h3>
        <NumberPicker counter={pomodoroMinutes} onCounterChange={(value) => dispatch(updatePomodoroTime(value * 60))} changeAmount={1} />
      </div>
      <div>
        <h3>Break</h3>
        <NumberPicker counter={breakMinutes} onCounterChange={(value) => dispatch(updateBreakTime(value * 60))} changeAmount={1} />
      </div>
    </div>
  );
}
