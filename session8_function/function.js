// function hello() {
//     console.log('Hello world');
// }

// hello();
// hello();
// hello();

// function xinChao(s) {
//     console.log(s);
// }
// xinChao('hello 11111111111');

// function tong(a, b) {
//     console.log(a + b);
// }
// //tong(10, 20);
// let a = 20;
// let b = 10;
// tong(b, a);

// 1. 
function sum(N) {
    let s = 0;
    for (let i = 0; i <= N; i++) {
        s = s + i;
    }
    return s;
}
let n = Number(prompt("Nhập 1 số"));
//sum(n);
function timSoNT(N) {
    let result = [];
    for (let i = 1; i <= N; i++) {
        if (checkSoNT(i)) {
            result.push(i);
        }
    }
    return result;
}

function checkSoNT(x) {
    let result = false;
    let count = 0;
    for (let j = 1; j <= x; j++) {
        if (x % j === 0) {
            count++;
        }
        if (count > 2) {
            break;
        }
    }
    if (count === 2) {
        result = true;
    }
    return result;
}

// 5.
function sumOfArray(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        s += value;
    }
    return s;
}
sumOfArray([1, 2, 3, 4, 5, 6]);

//8
function lonHonN(arr, N) {
    let result = [];
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] < N) {
            result.push(arr[i]);
        }
    }
    return result;
}

//9.
function hop(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }

    for (let i = result.length - 1; i >= 0; i--) {
        let value = result[i];
        if (result.indexOf(value) !== i) {
            result.splice(i, 1);
        }
    }
    return result;
}


console.log(hop([1, 2, 3,], [2, 1, 5, 5, 6, 3, 2, 1]));