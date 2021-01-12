export const numIslands = grid => {
  if (grid.length === 0) {
    return 0;
  }
  let numIslands = 0;
  for (let m = 0; m < grid.length; m++) {
    for (let n = 0; n < grid[m].length; n++) {
      if (grid[m][n] === '1') {
        numIslands += dfs(grid, m, n);
      }
    }
  }
  return numIslands;
};

export const dfs = (grid, m, n) => {
  if (
    m < 0 ||
    m >= grid.length ||
    n < 0 ||
    n >= grid[m].length ||
    grid[m][n] === '0'
  ) {
    return 0;
  }

  grid[m][n] = '0';
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (let [x_delta, y_delta] of directions) {
    dfs(grid, m + x_delta, n + y_delta);
  }

  return 1;
};

//added a second option for counting islands, this one takes more time finding the islands
export const numIslandsAlternative = grid => {
  console.log(grid);
  if (grid.length === 0) {
    return;
  }
  let foundIslands = 0;
  // eslint-disable-next-line no-undef
  const visitedSlots = new Map();

  const isValidEntry = (grid, m, n) => {
    if (m < 0 || m >= grid.length) {
      return false;
    }
    if (n < 0 || n >= grid[0].length) {
      return false;
    }
    return true;
  };
  let islandNumber = 0;
  const searchIslands = (grid, m, n) => {
    if (grid[m][n] === '0') {
      return 0;
    }
    visitedSlots.set(`${m},${n}`, [[m, n], `island_${islandNumber}`]);

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let [x_delta, y_delta] of directions) {
      if (
        !visitedSlots.has(`${m + x_delta},${n + y_delta}`) &&
        isValidEntry(grid, m + x_delta, n + y_delta)
      ) {
        searchIslands(grid, m + x_delta, n + y_delta);
      }
    }
    return 1;
  };

  for (let m = 0; m < grid.length; m++) {
    for (let n = 0; n < grid[0].length; n++) {
      if (grid[m][n] === '1' && !visitedSlots.has(`${m},${n}`)) {
        foundIslands += searchIslands(grid, m, n);
      }
    }
  }

  return foundIslands;
};
