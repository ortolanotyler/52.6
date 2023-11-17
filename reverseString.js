function revString(str, index = str.length - 1, result = '') {
  if (index < 0) return result;
  return revString(str, index - 1, result + str[index]);
}
