
// function helloWorld() {
//     console.log('123456');
//     alert('Hello world');
// }

// let h2Dom = document.getElementById('title');
// h2Dom.addEventListener('click', helloWorld);

// function welcome(e, t) {
//     console.log(e);
//     console.dir(t);
//     let inputName = document.getElementById('inputName');
//     let inputPass = document.getElementById('inputPass');
//     // console.dir(inputName.value);
//     // alert('Xin chào: ' + inputName.value);
//     if (inputName.value === 'admin'
//         && inputPass.value === '123456') {
//         alert('Thành công');
//         //window.location = "https://dantri.com.vn";
//         window.location.href = "https://dantri.com.vn";
//         //window.location.replace('https://dantri.com.vn');
//     } else {
//         alert('Sai tên hoặc pass');
//     }
// }

// function enterLogin(e, t){
//     console.log(e);
//     console.log(t);
//     if(e.key === 'Enter'){
//         welcome();
//     }
// }

let listPhones = [];
function addPhone() {
    let phoneNameDom = document.getElementById('txtPhoneName');
    let phoneName = phoneNameDom.value;
    phoneNameDom.value = '';

    listPhones.push(phoneName);
    displayListPhones();
}

function displayListPhones() {
    let listPhonesDom = document.getElementById('list-phones');
    listPhonesDom.innerHTML = '';
    for (let i = 0; i < listPhones.length; i++) {
        const phoneName = listPhones[i];
        listPhonesDom.innerHTML += `<li>${phoneName}</li>`;
    }
}

function enterAddPhone(e) {
    if (e.key === 'Enter') {
        addPhone();
    }
}