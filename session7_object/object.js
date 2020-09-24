// let o_empty = {};

// // Tên, tuổi, trường
// let myInfo = {
//     "name": "Hung",
//     'age': 20,
//     school: 'DHBK',
// };
// // console.log(myInfo);
// myInfo.favorite = ['Football', 'Watching'];
// myInfo.age++;

// for (const key in myInfo) {
//     let value = myInfo[key];
//     console.log(`${key}: ${value}`);
// }

// =============== //
// Tạo 1 mảng chứa thông tin của 5 điện thoại
//, mỗi điện thoại là 1 object chứa 3 thông tin:
// Tên, Giá, Hãng
// 1. In danh sách mảng này
// cú pháp:
// 1. Tên: ...
// Giá: ...
// Hãng: ...
// 2. Tên: ..
// ...
// 2. Cho người dùng nhập thêm 1 điện thoại mới,
// cũng gồm 3 thông tin trên => in lại danh sách
// 3. Cho người dùng nhập vào giá, in ra các điện thoại
// có giá lớn hơn
// 4. Cho người dùng nhập vào tên, in ra các điện thoại
// có tên chứa nội dung ng dùng nhập (không phân biệt
// hoa thường)
// 5. In các đt của hãng Apple
// 6. Tìm đt có giá cao nhất, thấp nhất
// 7. Nhập tên và giá, tìm đt chứa tên và giá thấp hơn
// ng dùng nhập (ko phân biệt hoa thường)
// 8. Sắp xếp đt theo giá cao => thấp

//
let listPhones = [
    {
        name: 'iPhone X',
        price: 20e6,
        brand: 'Apple',
    },
    {
        name: 'Galaxy Note 20 Ultra',
        price: 22e6,
        brand: 'Samsung',
    },
    {
        name: 'Reno3',
        price: 24e6,
        brand: 'OPPO',
    },
    {
        name: 'iPhone 11',
        price: 26e6,
        brand: 'Apple',
    },
    {
        name: 'Redmi 9',
        price: 28e6,
        brand: 'Xiaomi',
    },
];

// 1. In
for (let i = 0; i < listPhones.length; i++) {
    const phone = listPhones[i];
    console.log(`${i + 1}`);
    for (const key in phone) {
        let value = phone[key];
        console.log(`${key}: ${value}`);   
    }
    console.log('==========');
}