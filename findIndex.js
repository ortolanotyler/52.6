function findIndex(arr, target, index = 0) {
  if (index === arr.length) return -1;
  if (arr[index] === target) return index;
  return findIndex(arr, target, index + 1);
}
