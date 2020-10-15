let products = [
    {
        name: 'OPPO Reno3',
        price: 7490000,
        description: 'OPPO Reno3 là một sản phẩm ở phân khúc tầm trung nhưng vẫn sở hữu cho mình ngoại hình bắt mắt, cụm camera chất lượng và cùng nhiều đột phá về màn hình cũng như hiệu năng.',
        img: 'https://cdn.tgdd.vn/Products/Images/42/213591/oppo-reno3-trang-400x460-400x460.png',
    },
    {
        name: 'Samsung Galaxy A71',
        price: 10490000,
        description: 'Sau A51, Samsung tiếp tục ra mắt Galaxy A71 là đại diện kế tiếp thuộc thế hệ smartphone Galaxy A 2020. Máy được cải tiến với camera macro siêu cận đột phá, camera chính lên đến 64 MP cùng thiết kế thời thượng và cao cấp.',
        img: 'https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-195320-105352-400x460.png',
    },
    {
        name: 'Samsung Galaxy Z Flip',
        price: 36000000,
        description: 'Cuối cùng sau bao nhiêu thời gian chờ đợi, chiếc điện thoại Samsung Galaxy Z Flip đã được Samsung ra mắt tại sự kiện Unpacked 2020. Siêu phẩm với thiết kế màn hình gập vỏ sò độc đáo, hiệu năng tuyệt đỉnh cùng nhiều công nghệ thời thượng, dẫn dầu 2020.',
        img: 'https://cdn.tgdd.vn/Products/Images/42/213022/samsung-galaxy-z-flip-chitiet-2-788x544.png',
    },
    {
        name: 'iPhone 11 64GB',
        price: 21990000,
        description: 'Sau bao nhiêu chờ đợi cũng như đồn đoán thì cuối cùng Apple đã chính thức giới thiệu bộ 3 siêu phẩm iPhone 11 mạnh mẽ nhất của mình vào tháng 9/2019. Có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như chiếc iPhone Xr năm ngoái, đó chính là phiên bản iPhone 11 64GB.',
        img: 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-2-400x460-400x460.png',
    },
    {
        name: 'Xiaomi Redmi Note 8 Pro',
        price: 5990000,
        description: 'Là phiên bản nâng cấp của chiếc Xiaomi Redmi Note 7 Pro đã "làm mưa làm gió" trên thị trường trước đó, chiếc Xiaomi Redmi Note 8 Pro (6GB/128GB) sẽ là sự lựa chọn hàng đầu dành cho người dùng quan tâm nhiều về hiệu năng và camera của một chiếc máy tầm trung.',
        img: 'https://cdn.tgdd.vn/Products/Images/42/214418/xiaomi-redmi-note-8-pro-6gb-128gb-white-400x460.png',
    },
];

function displayProducts(listProducts){
    let domProduct = document.getElementById('products');
    domProduct.innerHTML = '';

    for (const product of listProducts) {
        let html = `
        <div class="card col-4 p-3" style="width: 18rem;">
            <div class="text-center">
                <img src="${product.img}"
                    class="card-img-top cursor-p" onclick="viewDetail('${product.name}')" alt="${product.name}">
            </div>
            <div class="card-body">
                <h5 class="card-title cursor-p" onclick="viewDetail('${product.name}')" >
                    ${product.name}
                </h5>
                <h6 class="text-danger">
                    ${product.price} đ
                </h6>
                <p class="card-text">${getShortDescription(product.description)}</p>
                <button onclick="viewDetail('${product.name}')" class="btn btn-primary">Detail</button>
            </div>
        </div>
        `;
        domProduct.innerHTML += html;
    }
}
displayProducts(products);

function getShortDescription(des){
    return des.substring(0, 150) + (des.length > 150 ? '...' : '');
}

function viewDetail(name){
    localStorage.setItem('selected', name);
    localStorage.setItem('products', JSON.stringify(products));
    window.location.href = 'detail.html';
}