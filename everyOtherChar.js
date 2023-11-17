function everyOther(str, index = 0, result = '') {
  if (index >= str.length) return result;
  return everyOther(str, index + 2, result + str[index]);
}
