import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {numIslandsAlternative} from '../../utils/dfs';
import {setCell, setIslands} from 'redux/features/gridSlice';
import propTypes from 'prop-types';
import './Cell.scss';
export const blockName = 'cell';

const Cell = ({children: slotValue, rowIndex, columnIndex}) => {
  const dispatch = useDispatch();
  const {grid} = useSelector(state => state.gridReducer);
  const [cellValue, setCellValue] = React.useState(
    () => grid[rowIndex][columnIndex],
  );
  React.useEffect(() => {
    const numberOfIslands = numIslandsAlternative(grid);
    dispatch(setIslands({islands: numberOfIslands}));
  }, [grid]);
  const classValue = slotValue === '1' ? 'ground' : 'ocean';
  const toggleValue = () => {
    let value;
    if (cellValue === '1') {
      value = '0';
    } else {
      value = '1';
    }
    setCellValue(value);
    dispatch(setCell({m: rowIndex, n: columnIndex, value}));
  };

  return (
    <div
      onClick={toggleValue}
      className={`${blockName} ${blockName}--${classValue}`}
    >
      {slotValue}
    </div>
  );
};

const PropTypes = {
  children: propTypes.any.isRequired,
  rowIndex: propTypes.number.isRequired,
  columnIndex: propTypes.number.isRequired,
};
Cell.propTypes = PropTypes;
export default Cell;
