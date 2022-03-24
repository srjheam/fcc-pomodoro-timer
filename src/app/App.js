import React from 'react';
import { Timer } from '../features/timer/Timer';
import { TimerControl } from '../features/timerControl/TimerControl'
import { Settings } from '../features/settings/Settings';

function App() {
  return (
    <div className="App">
      <Timer />
      <TimerControl />
      <Settings />
    </div>
  );
}

export default App;
