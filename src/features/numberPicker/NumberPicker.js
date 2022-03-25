import React from 'react';

export function NumberPicker(props) {
  return (
    <div>
      <button onClick={() => props.onCounterChange(props.counter - (+props.changeAmount))}>
        --
      </button>
      <span>{props.counter}</span>
      <button onClick={() => props.onCounterChange(props.counter + (+props.changeAmount))}>
        ++
      </button>
    </div>
  );
}