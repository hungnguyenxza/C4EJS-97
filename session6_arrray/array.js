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
for (let i = 0; i < heighs.length - 1; i++) {
    for (let j = i + 1; j < heighs.length; j++) {
        if(heighs[i] > heighs[j]){
            let temp = heighs[i];
            heighs[i] = heighs[j];
            heighs[j] = temp;
        }
    }
}
console.log("Tăng dần:");
for (let i = 0; i < heighs.length; i++) {
    const height = heighs[i];
    console.log(`${i+1}: ${height}`);
}
