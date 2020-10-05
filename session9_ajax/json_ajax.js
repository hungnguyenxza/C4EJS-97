// let name = 'Hung';
// let age = 20;
// let numbers = [1,2,3,4,5];
// let infor = {
//     'name': 'Hung',
//     age: 20,
// };

// let sName = JSON.stringify(name);
// // console.log(name);
// // console.log(sName);

// let sInfo = JSON.stringify(infor);
// console.log(infor);
// console.log(sInfo);
// let newInfo = JSON.parse(sInfo);
// console.log(newInfo);

let http = new XMLHttpRequest();
http.onreadystatechange = function () {
    console.log(this);
}
http.open('GET', 'https://weather-data-demo.herokuapp.com/get-weather-today');

http.send();