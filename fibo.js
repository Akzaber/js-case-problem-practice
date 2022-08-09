
// 0, 1, 1, 2, 3, 5, 8, 13, 21....... before two number addding and creat a number

const fibo = [0, 1];

for(let i=2; i<20; i++){
  fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo)