import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './NumberPicker.scss';

export function NumberPicker(props) {
  return (
    <div className='NumberPicker'>
      <button className='btn-decrementer' disabled={!props.counter} onClick={() => props.onCounterChange(props.counter - (+props.changeAmount))}>
        <FontAwesomeIcon icon={solid('minus')} />
      </button>
      <span className='Counter'>{props.counter}</span>
      <button className='btn-incrementer' onClick={() => props.onCounterChange(props.counter + (+props.changeAmount))}>
        <FontAwesomeIcon icon={solid('plus')} />
      </button>
    </div>
  );
}