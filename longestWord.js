function longest(words, index = 0, maxLength = 0) {
  if (index === words.length) return maxLength;
  return longest(words, index + 1, Math.max(maxLength, words[index].length));
}
