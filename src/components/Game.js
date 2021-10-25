import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import setStatus from '../redux/actions/status';
import setUsername from '../redux/actions/user';
import ComputerBoard from './ComputerBoard';
import PlayerBoard from './PlayerBoard';
import ShipsFleet from './ShipsFleet';

const ROWS = 10;
const COLUMNS = 10;

const Game = () => {
  const dispatch = useDispatch();
  const { status, turn, user, shipsAvaibles } = useSelector((state) => state);
  const [userInput, setUserInput] = useState('');
  const [isHorizontal, setIsHorizontal] = useState(true);
  const shipsAmount = shipsAvaibles.reduce((a, b) => a + b.amount, 0);

  const handleChange = (e) => {
    const key = e.target.value;
    dispatch(setUsername(key));
    setUserInput(key);
  };

  return (
    <div className='welcome'>
      <div className='welcome__inner'>
        <PlayerBoard isHorizontal={isHorizontal} ROWS={ROWS} COLUMNS={COLUMNS} />

        {status === 'start' ? (
          <ComputerBoard ROWS={ROWS} COLUMNS={COLUMNS} />
        ) : (
          <div className='username__input-container'>
            <input id='firstname' value={userInput} onChange={handleChange} className='username__input' type='text' placeholder=' ' />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor='firstname' className='username__input-placeholder'>
              Username
            </label>
          </div>
        )}
      </div>

      {status === 'start' && (
        <div className='game__actions'>
          <h4>
            Playing: <span>{turn ? `${user}` : 'Computer'}</span>
          </h4>
        </div>
      )}

      {shipsAmount > 0 ? (
        <ShipsFleet setIsHorizontal={setIsHorizontal} isHorizontal={isHorizontal} />
      ) : (
        status === 'welcome' && (
          <div className='start__button-container'>
            <button type='button' className='start__button' onClick={() => dispatch(setStatus('start'))}>
              Start
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Game;
