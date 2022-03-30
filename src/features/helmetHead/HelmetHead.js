import React from 'react';
import { Helmet } from "react-helmet";
import { useSelector } from 'react-redux';

export function HelmetHead() {
  const timeRemaining = useSelector((state) => state.timer.timeRemaining);
  const onBreak = useSelector((state) => state.timer.onBreak);

  const timer = (() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  })();

  return (
    <Helmet>
      <link rel="icon" href={`/fcc-pomodoro-timer/${onBreak ? 'break' : 'pomodoro'}-favicon.ico`} />
      <title>{timer} - Pomodoro</title>
    </Helmet>
  );
}