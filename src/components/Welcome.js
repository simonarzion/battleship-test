import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import setStatus from '../redux/actions/status';
import setUsername from '../redux/actions/user';
import PlayerBoard from './PlayerBoard';
import ShipsFleet from './ShipsFleet';

const Welcome = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    const key = e.target.value;
    dispatch(setUsername(key));
    setUserInput(key);
  };

  return (
    <div className='welcome'>
      <div className='welcome__inner'>
        <PlayerBoard />

        <div className='welcome__start'>
          <input
            type='text'
            value={userInput}
            onChange={handleChange}
            placeholder='Username'
            className='username__input'
          />

          <button
            type='button'
            className='start__button'
            onClick={() => dispatch(setStatus('start'))}
          >
            Start
          </button>
        </div>
      </div>

      <ShipsFleet />
    </div>
  );
};

export default Welcome;
