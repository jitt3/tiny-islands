import React from 'react';
import {useSelector} from 'react-redux';
import Row from 'components/Row';

const Canvas = () => {
  const {grid, width, height} = useSelector(state => state.gridReducer);

  const generateRows = () =>
    grid.map((row, index) => (
      <Row className={'row'} key={index} rowIndex={index} columns={row} />
    ));

  return (
    <div className={'container'}>
      {width > 0 && height > 0 ? (
        generateRows()
      ) : (
        <div>Set Height and Width higher than zero</div>
      )}
    </div>
  );
};

export default Canvas;
