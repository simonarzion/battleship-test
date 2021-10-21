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
  const status = useSelector((state) => state.status);
  const turn = useSelector((state) => state.turn);
  const username = useSelector((state) => state.user);
  const [userInput, setUserInput] = useState('');
  const [isHorizontal, setIsHorizontal] = useState(true);

  const handleChange = (e) => {
    const key = e.target.value;
    dispatch(setUsername(key));
    setUserInput(key);
  };

  return (
    <div className='welcome'>
      <div className='welcome__inner'>
        <PlayerBoard
          isHorizontal={isHorizontal}
          ROWS={ROWS}
          COLUMNS={COLUMNS}
        />

        {status === 'start' ? (
          <ComputerBoard ROWS={ROWS} COLUMNS={COLUMNS} />
        ) : (
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
        )}
      </div>

      {status === 'start' ? (
        <div>
          <h4>Playing: {turn ? `${username}` : 'Computer'}</h4>
        </div>
      ) : (
        ''
      )}

      {status === 'welcome' && (
        <ShipsFleet
          setIsHorizontal={setIsHorizontal}
          isHorizontal={isHorizontal}
        />
      )}
    </div>
  );
};

export default Game;
