let sum:number = 0;
let size:number = 5;

function calFibonacci(num: number): number {
    if (num == 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    return calFibonacci(num - 1) + calFibonacci(num - 2);
}

let arr: Array<number> = [];

for (let i = 0; i < size; i++) {
    arr.push(calFibonacci(i))
    sum += calFibonacci(i);
}
console.log(arr);
console.log(sum);