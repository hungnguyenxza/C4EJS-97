
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
    let phoneName = phoneNameDom.value.trim();
    if (phoneName === '') {
        alert("Nhập tên điện thoại");
        return;
    }
    phoneNameDom.value = '';

    listPhones.push(phoneName);
    displayListPhones(listPhones);
}

function displayListPhones(phones) {
    let listPhonesDom = document.getElementById('list-phones');
    listPhonesDom.innerHTML = '';
    for (let i = 0; i < phones.length; i++) {
        const phoneName = phones[i];
        listPhonesDom.innerHTML += `<li>${phoneName}</li>`;
    }
}

function searchPhone(){
    let txtSearchDom = document.getElementById('txtSearch');
    let search = txtSearchDom.value;
    let result = listPhones.filter(function(v){
        return v.toLowerCase().includes(search.toLowerCase());
    });
    displayListPhones(result);
}

function enterAddPhone(e) {
    if (e.key === 'Enter') {
        addPhone();
    }
}