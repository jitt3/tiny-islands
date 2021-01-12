import {numIslands} from '../dfs';

test('get the right number of islands in this case 3', () => {
  const arr = [
    ['0', '1', '1'],
    ['0', '1', '0'],
    ['1', '0', '1'],
  ];
  expect(numIslands(arr)).toBe(3);
});

test('get the right number of islands in this case 1', () => {
  const arr = [
    ['0', '1', '1'],
    ['0', '1', '0'],
    ['1', '1', '1'],
  ];
  expect(numIslands(arr)).toBe(1);
});

test('get the right number of islands in this case 2', () => {
  const arr = [
    ['0', '1', '0'],
    ['0', '0', '1'],
    ['1', '0', '1'],
  ];
  expect(numIslands(arr)).toBe(3);
});

test('get the right number of islands in this case 4', () => {
  const arr = [
    ['0', '1', '1'],
    ['1', '0', '0'],
    ['0', '1', '1'],
    ['1', '0', '1'],
    ['1', '1', '0'],
  ];
  expect(numIslands(arr)).toBe(4);
});

test('get the right number of islands in this case 6', () => {
  const arr = [
    ['0', '1', '0'],
    ['1', '0', '1'],
    ['0', '1', '0'],
    ['1', '0', '1'],
    ['1', '1', '0'],
  ];
  expect(numIslands(arr)).toBe(6);
});
