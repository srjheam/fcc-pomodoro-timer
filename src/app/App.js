import React from 'react';
import { Timer } from '../features/timer/Timer';
import { TimerControl } from '../features/timerControl/TimerControl'
import { Settings } from '../features/settings/Settings';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='TimerWrapper'>
        <Timer />
      </div>
      <div className='TimerOptions'>
        <TimerControl />
        <Settings />
      </div>
    </div>
  );
}

export default App;
