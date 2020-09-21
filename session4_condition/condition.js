// // //nhập 1 số, so sánh số đó với 10
// // let n = Number(prompt("Nhập 1 số"));

// // if(n > 10){
// //     console.log('lớn hơn 10');
// // }
// // else if(n < 10){
// //     console.log('nhỏ hơn 10');
// // }
// // else {
// //     console.log('bằng 10');
// // }

// //BMI

// let canNang = Number(prompt("Nhập cân nặng (kg):"));
// let chieuCao = Number(prompt("Nhập chiều cao (cm):"));
// chieuCao = chieuCao / 100;
// let bmi = canNang / (chieuCao * chieuCao);

// if (bmi < 16) {
//     console.log('gầy');
// } else if (bmi < 25) {
//     console.log('bình thường');
// } else if (bmi < 35) {
//     console.log('hơi béo');
// } else {
//     console.log('béo');
// }

let month = Number(prompt("Nhập tháng"));

if (month === 1) {
    console.log('31 ngày');
} else if (month === 2) {
    console.log('28 hoặc 29 ngày');
}
else if (month === 4 || month === 6
    || month === 9) {
    console.log('30 ngày');
} else {
    console.log('tháng sai');
}

switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('31 ngày');
        break;
    case 2:
        console.log('28 hoặc 29 ngày');
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('31 ngày');
        break;
    default:
        console.log('tháng sai');    
}