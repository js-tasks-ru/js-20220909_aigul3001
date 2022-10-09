/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {  

  if (size === undefined) {
    return string;
  }

  if (size < 1) {
    return '';
  }  

  let firstPart = string.slice(0, size);
  let secondPart = [...string.slice(size)];

  return secondPart.reduce((firstPart, char) => {
    if (!firstPart.endsWith(char.repeat(size))) {
      firstPart = firstPart + char;
    }
    return firstPart;
  }, firstPart);
}
