// Your code here.
// (With the following added to get you started.)
// The 2D array we'll need to reference to return the right data.
// Check it out to see its content and shape!
const pokemon = require('./pokemon.js');

const getRow = function(str) {
  let result

  for (const name of pokemon) {
    if (str.toLowerCase() === name[0]) {
      result = name 
      break;
    } else if (str !== name[0]) {
      result = null
    }
  }
  return result
} 


// OUR code here.

if (typeof getRow === 'undefined') {
  getRow = undefined;
}

module.exports = getRow;
