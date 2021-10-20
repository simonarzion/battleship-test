import React from 'react';
import { useSelector } from 'react-redux';
import Game from './components/Game';
import Welcome from './components/Welcome';

const App = () => {
  const status = useSelector((state) => state.status);

  return <div>{status === 'welcome' ? <Welcome /> : <Game />}</div>;
};

export default App;
