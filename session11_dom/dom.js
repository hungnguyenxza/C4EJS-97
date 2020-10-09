let h1Dom = document.getElementById('dom');
// console.dir(h1Dom);
// console.log(h1Dom.innerHTML);
h1Dom.innerHTML = "Hello world";

let titles = document.getElementsByClassName('title');
console.dir(titles);
for (let i = 0; i < titles.length; i++) {
    const dom = titles[i];
    dom.innerHTML = "Hello world";
}

let divDom = document.getElementById('content');
divDom.innerHTML = "<h1>Đây là h1 mới</h1>";

let phonesDom = document.getElementById('phones');
phonesDom.innerHTML = `<li>iPhone X</li>`;

let phones = [
    'iPhone X',
    'Galaxy Note',
    'Sony Xperia'
];
phonesDom.innerHTML = '';
for (let i = 0; i < phones.length; i++) {
    const phoneName = phones[i];
    phonesDom.innerHTML += `<li>${phoneName}</li>`;
}

phones = [
    {
        name: 'iPhone X',
        price: 20e6,
        img: ''
    },
    {
        name: 'Galaxy Note',
        price: 22e6,
        img: ''
    },
    {
        name: 'Sony Xperia',
        price: 25e6,
        img: ''
    },
];
let listPhoneDom = document.getElementById('phone-list');
listPhoneDom.innerHTML = '';
for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    listPhoneDom.innerHTML += `
    <tr>
        <td>${i + 1}</td>
        <td>${phone.name}</td>
        <td>${phone.price}</td>
        <td>
            <img src="${phone.img}" alt="">
        </td>
    </tr>
    `;
}


