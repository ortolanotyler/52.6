function gatherStrings(obj) {
  let result = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      result = result.concat(gatherStrings(obj[key]));
    }
  }

  return result;
}
