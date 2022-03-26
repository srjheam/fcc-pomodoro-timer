import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export function NumberPicker(props) {
  return (
    <div className='NumberPicker'>
      <button onClick={() => props.onCounterChange(props.counter - (+props.changeAmount))}>
        <FontAwesomeIcon icon={solid('minus')} />
      </button>
      <span>{props.counter}</span>
      <button onClick={() => props.onCounterChange(props.counter + (+props.changeAmount))}>
        <FontAwesomeIcon icon={solid('plus')} />
      </button>
    </div>
  );
}