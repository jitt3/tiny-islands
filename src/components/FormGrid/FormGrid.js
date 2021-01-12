import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setWidthHeight, setGrid} from '../../redux/features/gridSlice';
import './FormGrid.scss';

export const blockName = 'formGrid';
const FormGrid = () => {
  const dispatch = useDispatch();

  const {width, height} = useSelector(state => state.gridReducer);
  const [inputWidth, setInputWidth] = React.useState(() => width);
  const [inputHeight, setInputHeight] = React.useState(() => height);
  const handleChangeWidth = event => {
    const {
      target: {value},
    } = event;
    setInputWidth(value);
  };
  const handleChangeHeight = event => {
    const {
      target: {value},
    } = event;
    setInputHeight(value);
  };
  const setGridForm = () => {
    const gridArray = [...Array(parseInt(inputWidth))].map(() =>
      Array(parseInt(inputHeight)).fill('0'),
    );
    dispatch(setWidthHeight({width: inputWidth, height: inputHeight}));
    dispatch(setGrid({grid: gridArray}));
  };
  return (
    <div
      data-testid={blockName}
      className={`form-inline ${blockName} col-sm-2`}
    >
      <div className="form-group mb-2">
        <input
          min={0}
          onChange={handleChangeWidth}
          value={inputWidth}
          className={'form-control'}
          type="number"
          placeholder={'Width'}
        />
      </div>
      <div className="form-group mb-2">
        <input
          min={0}
          onChange={handleChangeHeight}
          value={inputHeight}
          className={'form-control'}
          type="number"
          placeholder={'Height'}
        />
      </div>
      <button onClick={setGridForm} className={'btn btn-primary'}>
        Set Grid
      </button>
    </div>
  );
};

export default FormGrid;
