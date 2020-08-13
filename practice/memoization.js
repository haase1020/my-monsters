function addTo80(n) {
  console.log('long time fool');
  return n + 80;
}

let cache = {};
function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n]; //or cache[n]
  } else {
    console.log('long time fool');
    cache[n] = n + 80;
    return cache[n];
  }
}

// console.log('addTo80 function', addTo80(5));
console.log('memoizedAddTo80 function', memoizedAddTo80(5));
console.log('memoizedAddTo80 function 2', memoizedAddTo80(5));
