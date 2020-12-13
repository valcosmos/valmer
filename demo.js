const arr = [1, 2, 34, 3];
const arr1 = arr.map(p => {
  return p + 1;
});

// console.log(arr);
console.log(
  arr.filter(a => {
    console.log(a);
    return arr.indexOf(1) < 0;
  })
);
