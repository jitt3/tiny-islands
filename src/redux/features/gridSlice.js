import {createSlice} from '@reduxjs/toolkit';

const gridSlice = createSlice({
  name: 'grid',
  initialState: {
    islands: 0,
    grid: [],
    width: 0,
    height: 0,
  },
  reducers: {
    setGrid(state, action) {
      const {grid} = action.payload;
      state.grid = grid;
      state.islands = 0;
    },
    setIslands(state, action) {
      const {islands} = action.payload;
      state.islands = islands;
    },
    setCell(state, action) {
      const {m, n, value} = action.payload;
      state.grid[m][n] = value;
    },
    setWidthHeight(state, action) {
      const {width, height} = action.payload;
      state.width = width;
      state.height = height;
    },
  },
});

export const {setGrid, setWidthHeight, setCell, setIslands} = gridSlice.actions;

export default gridSlice.reducer;
