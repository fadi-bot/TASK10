let n = prompt("enter a number");
let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((res, cur) => {
  return res + cur;
});
console.log("sum = ", sum);
let factorial = arr.reduce((res, cur) => {
  return res * cur;
});
console.log("factorial = ", factorial);
