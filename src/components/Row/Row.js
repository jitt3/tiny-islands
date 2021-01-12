import React from 'react';
import Cell from 'components/Cell';
import PropTypes from 'prop-types';
const Row = ({columns, rowIndex}) => {
  const generateColumns = () => {
    return columns.map((column, index) => (
      <Cell rowIndex={rowIndex} columnIndex={index} key={index}>
        {column}
      </Cell>
    ));
  };
  return (
    <div className={'d-flex justify-content-around'}>{generateColumns()}</div>
  );
};

const propTypes = {
  columns: PropTypes.array.isRequired,
  rowIndex: PropTypes.number.isRequired,
};
Row.propTypes = propTypes;
export default Row;
