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
    if (this.readyState === 4
        && this.status === 200) {
        let data = JSON.parse(this.responseText);
        console.log(`Now: ${data.date}`);
        console.log(`Temp: ${data.temperature} ${data.unit}`);
        console.log(`Humidity: ${data.humidity}`);
    }
}
http.open('GET', 'https://weather-data-demo.herokuapp.com/get-weather-today');

http.send();