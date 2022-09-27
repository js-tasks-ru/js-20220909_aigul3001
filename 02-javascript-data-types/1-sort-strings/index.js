/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  switch (param) {
  case 'asc':
    return [...arr].sort((a, b) => compare(a, b));
  case 'desc':
    return [...arr].sort((a, b) => compare(b, a));
  default:
    throw new Error('Unknown direction');
  }    
}

const compare = (a, b) => {
  return a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'});
};
