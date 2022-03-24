import React from 'react';
import { NumberPicker } from '../numberPicker/NumberPicker';

export function Settings() {
  return (
    <div>
      <h2>Time</h2>
      <div>
        <h3>Pomodoro</h3>
        <NumberPicker />
      </div>
      <div>
        <h3>Break</h3>
        <NumberPicker />
      </div>
    </div>
  );
}
