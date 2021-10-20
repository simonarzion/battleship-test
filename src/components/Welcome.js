import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import setStatus from '../redux/actions/status';
import setUsername from '../redux/actions/user';
import Header from './Header';

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
      <Header />

      <input
        type='text'
        value={userInput}
        onChange={handleChange}
        placeholder='Username'
      />

      <button
        type='button'
        className='start__button'
        onClick={() => dispatch(setStatus('start'))}
      >
        Start
      </button>
    </div>
  );
};

export default Welcome;
