// Your code here.
// Note that you do NOT need the data for this function!
// OUR code here.

const getUrl = function(arr) {
  if (arr === null) {
    return null
  } 
  return arr[1]
}

// Test
if (typeof getUrl === 'undefined') {
  getUrl = undefined;
}

module.exports = getUrl; 
