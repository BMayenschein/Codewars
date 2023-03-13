// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.



//Original solution
function roundToNext5(n){
    if (n > 0) {
      return n % 5 === 1 ? n + 4 :
             n % 5 === 2 ? n + 3 :
             n % 5 === 3 ? n + 2 :
             n % 5 === 4 ? n + 1 :
             n;
    }
    else {
      return n % 5 === -1 ? n + 1 :
             n % 5 === -2 ? n + 2 :
             n % 5 === -3 ? n + 3 :
             n % 5 === -4 ? n + 4 :
             n;
    }
  }

//Short solution
function roundNext5(n) {
    return Math.ceil(n%5) * 5;
}