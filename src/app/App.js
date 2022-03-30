import React from 'react';
import { useSelector } from 'react-redux';
import { HelmetHead } from '../features/helmetHead/HelmetHead'
import { Timer } from '../features/timer/Timer';
import { TimerControl } from '../features/timerControl/TimerControl'
import { Settings } from '../features/settings/Settings';
import { ContactLink } from '../features/contactLink/ContactLink';
import './App.scss';

function App() {
  const onBreak = useSelector((state) => state.timer.onBreak);

  return (
    <div className={'App ' + (onBreak ? 'paletteBreak' : 'palettePomodoro')}>
      <HelmetHead />
      <div className='TimerWrapper'>
        <Timer />
      </div>
      <div className='TimerOptions'>
        <TimerControl />
        <Settings />
      </div>
      <footer>
        <ContactLink />
      </footer>
    </div>
  );
}

export default App;
