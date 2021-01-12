import React from 'react';
import {useSelector} from 'react-redux';

const Information = () => {
  const {islands} = useSelector(state => state.gridReducer);
  return (
    <div>
      <h1>Welcome to tiny island</h1>
      <p>
        In this world you can set a grid of cells. Each cell represents either
        an ocean part(blue) or a land(brown, just click upon each cell to change
        the color)
      </p>
      <p>Here will appear the number of islands found: {islands}</p>
    </div>
  );
};

export default Information;
