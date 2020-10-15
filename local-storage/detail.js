let selectedName = localStorage.getItem('selected');
let products = JSON.parse(localStorage.getItem('products'));

let product = products.find(function (p) {
    return p.name === selectedName;
});

document.getElementById('product-name').innerHTML = product.name;
document.getElementById('product-price').innerHTML = product.price + " đ";
document.getElementById('product-img').src = product.img;
document.getElementById('product-des').innerHTML = product.description;

function getRelative() {
    let relative = document.getElementById('relative');
    relative.innerHTML = '';
    let phoneDisplayed = [];
    for (let i = 0; i < 4; i++) {

        let r = getRndInteger(0, products.length);
        while(phoneDisplayed.includes(r)){
            r = getRndInteger(0, products.length);
        }
        phoneDisplayed.push(r);
        let p = products[r];
        let html = `
            <div onclick="viewDetail('${p.name}')" class="phone-relative col-md-3 col-sm-6 mb-4 text-center">
                <img class="img-fluid" src="${p.img}" alt="">
                <p class="mt-2 font-weight-bold">${p.name}</p>
            </div>
        `;
        relative.innerHTML += html;
    }
}
getRelative();

function viewDetail(name){
    localStorage.setItem('selected', name);
    window.location.href = 'detail.html';
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }