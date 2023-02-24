// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


function towerBuilder(nFloors) {
    let baseLength = nFloors * 2 - 1;
    let numberOfStars = baseLength;
    let numOfSpaces = 0;
    let ans = [];
    for (let i = 0; i < nFloors; i++) {
      let row = '*'.repeat(numberOfStars);
      row = row.padStart(baseLength-i, " ");
      row = row.padEnd(baseLength, " ");
      numOfSpaces += 2;
      numberOfStars -= 2;
      ans.push(row);
    }
    return ans.reverse();
  }