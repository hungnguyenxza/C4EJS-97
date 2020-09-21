// cho mảng gồm chiều cao(cm) của 5 người:
let heighs = [150, 155, 170, 145, 180];

// 1. In ra chiều cao của từng người
// 2. Tính chiều cao trung bình của 5 người
// 3. Dựa vào chiều cao trung bình, in ra những người 
// cao hơn trung bình
// 4. In ra người cao nhất, thấp nhất
// 5. In ra thứ tự chiều cao tăng dần, giảm dần.
// 6. Có bao nhiêu người thấp hơn 160cm,
// đó là những chiều cao nào.

// //1.
// for (let i = 0; i < heighs.length; i++) {
//     const height = heighs[i];
//     console.log(`${i+1}: ${height}`);
// }

// //2.
// let sum = 0;
// for (let i = 0; i < heighs.length; i++) {
//     const height = heighs[i];
//     sum += height;
// }

// let avg = sum / heighs.length;
// console.log(`Trung bình: ${avg}`);

// //3.
// for (let i = 0; i < heighs.length; i++) {
//     const height = heighs[i];
//     if(height > avg){
//         console.log(`${height}`);
//     }
// }

// //4.
// let max = heighs[0];
// for (let i = 0; i < heighs.length; i++) {
//     const height = heighs[i];
//     if(height > max){
//         max = height;
//     }
// }
// console.log(`Cao nhất: ${max}`);

// 5.
// for (let i = 0; i < heighs.length - 1; i++) {
//     for (let j = i + 1; j < heighs.length; j++) {
//         if(heighs[i] > heighs[j]){
//             let temp = heighs[i];
//             heighs[i] = heighs[j];
//             heighs[j] = temp;
//         }
//     }
// }
// console.log("Tăng dần:");
// for (let i = 0; i < heighs.length; i++) {
//     const height = heighs[i];
//     console.log(`${i+1}: ${height}`);
// }

//6
// // let count = 0;
// let a = [];

// for (let i = 0; i < heighs.length; i++) {
//     const height = heighs[i];
//     if (height < 100) {
//         // console.log(height);
//         a.push(height);
//         // count++;
//     }
// }
// if (a.length > 0) {
//     console.log(`Có ${a.length} người ${a}`);
// } else {
//     console.log("Không có ai");
// }


// while
// nhập 1 số >= 8, nhỏ hơn thì nhập lại

// let n = Number(prompt("Nhập 1 số"));

// while (n < 8) {
//     n = Number(prompt("Nhập lại số >= 8"));
// }
// console.log(n);

// nhập 1 số >= 8 và <= 10. Sai nhập lại.

// let n = Number(prompt("Nhập 1 số"));

// while (n < 8 || n > 10) {
//     n = Number(prompt("Nhập lại số >= 8 và n <= 10"));
// }
// console.log(n);

// pass có độ dài >= 8 ký tự

// let pass = prompt("Nhập password");

// while (pass.length < 8) {
//     pass = prompt("Nhập lại pass >= 8 ký tự");
// }
// console.log(pass);

// pass có độ dài >= 8 ký tự và chứa '@'
// let pass = prompt("Nhập pass");
// // while (pass.length < 8 || pass.indexOf('@') < 0) {
// //     pass = prompt("Nhập lại pass >= 8 ký tự và chứa @");
// // }
// while (!(pass.length >= 8 && pass.indexOf('@') >= 0)) {
//     pass = prompt("Nhập lại pass >= 8 ký tự và chứa @");
// }
// console.log(pass);

// tìm tất cả ước số. ktra số nguyên tố
// let n = parseInt(prompt("Nhập n"));
// let a = [];
// for (let i = 1; i <= n/2; i++) {
//     if (n % i === 0) {
//         a.push(i);
//     }
//     if(a.length > 1){
//         break;
//     }
// }
// //console.log(`Có ${a.length} ước là: ${a}`);
// if (a.length === 2) {
//     console.log('Số nguyên tố');
// } else {
//     console.log('Không là số nguyên tố');
// }

// Fibonacci: 1 1 2 3 5 8 ...
let x1 = 1, x2 = 1, sum = 0, sum2 = 2;
let N = Number(prompt("Nhập vào N:"));
if (N <= 0) {
    console.log("Mời nhập lại");
}
else if (N === 1) {
    console.log("Gia tri so thu 1 la 1");
    console.log("Tong la 1");
}
else if (N === 2) {
    console.log("Gia tri so 2 la 1");
    console.log("Tong la 2");
}
else {
    for (let i = 3; i <= N; i++) {
        sum = x1 + x2;
        x1 = x2;
        x2 = sum;
        sum2 += sum;
    }
    console.log(`Số Fibonacci thứ ${N} có giá trị là ${sum}`);
    console.log(`Tổng của ${N} số Fibonacci đầu tiên là: ${sum2}`);
}

