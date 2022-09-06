#!/usr/bin/node
/**
 * nb0ccurences - returns the number of Occurences.
 * @params list
 * @params searchElement
 */
exports.nbOccurences = function (list, searchElement) {
  let count = 0;
  for (let i in list) {
    if (list[i] === searchElement) {
      count++;
    }
  }
  return count;
};
