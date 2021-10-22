import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Game from './components/Game';
import setShipsAvaibles from './redux/actions/shipsAvaibles';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setShipsAvaibles([
        {
          name: 'carrier',
          amount: 1,
          spaces: 4,
        },
        {
          name: 'cruisers',
          amount: 3,
          spaces: 3,
        },
        {
          name: 'submarine',
          amount: 1,
          spaces: 2,
        },
      ]),
    );
  }, [dispatch]);

  return (
    <div>
      <Game />
    </div>
  );
};

export default App;
