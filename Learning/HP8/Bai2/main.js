// 1. toán tử so sánh
// >, <, =, >=, <=, !=, ===
// let a = 10;
// let b = '10';
// console.log(a==b);
// // == là so sánh giá trị, không so sánh kiểu dữ liệu
// console.log(a===b);
// === là so sánh giá trị và kiểu dữ liệu

// 2. boolean
// var a = true;
// var b = false;
// console.log(a==0)

// 3. câu lệnh điều kiện if else
// let a = 10
// let b = 15
// if (a > b) {
//     console.log('a lớn hơn b')
// } else {
//     console.log('a nhỏ hơn b')
// }

// 4. kiểu dữ liệu trong js
// Kiểu dữ liệu nguyên thủy - primitive data types
// - Number: số nguyên, số thực
// - String: chuỗi
// - Boolean: 2 giá trị true, false
// - Undefined: chưa định nghĩa
// - Null: rỗng
// - Symbol: giá trị duy nhất, không thay đổi

// Kiểu dữ liệu phức tạp - complex data types
// - Object: đối tượng
// let people = {
//     name: 'Nguyen Van A',
//     age: 20,
//     hometown: 'Hanoi',
//     isStudent: false
// }
// console.log(people)
// - Function: hàm
// - Array: mảng

// 5. các phương thức làm việc với chuỗi
// charAt: lấy ra ký tự tại vị trí
// let str = 'xin chao ban'
// console.log(str.charAt(6))
// console.log(str[6])
// // length: lấy ra độ dài chuỗi
// console.log(str.length)
// // includes: kiểm tra chuỗi có chứa ký tự hay không
// console.log(str.includes('xin1'))
// // indexOf
// console.log(str.indexOf('a'))

// 6. làm việc với mảng
// let arr = [1, 2, 3, 4, 5]
// let arr2 = ['apple', 'banana', 'orange']
// console.log(arr.length)
// console.log(arr[0])
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]
// console.log(arr1.concat(arr2))

// bài tập
// 1. nhập vào năm sinh sinh, tính số tuổi hiện tại của người nhập
// let myBirth = prompt('Nhập năm sinh của bạn: ')
// let currentYear = 2025
// let age = currentYear - parseInt(myBirth)
// console.log(`bạn hiện tại ${age} tuổi`)
// console.log('bạn hiện tại ' + age + ' tuổi')
// 2. nhập vào một số, kiểm tra số đó là số chẵn hay lẻ %
// 3. nhập vào hai chuỗi, so sánh độ dài của hai chuỗi đó
// let str = 'xin chao'
// let lengthstr = str.length

// 4. nhập vào một chuỗi, thông báo lên độ dài chuỗi 
// và chữ in hoa, in thường của chuỗi đó
let input = prompt('nhập vào một chuỗi: ')
let lengInput = input.length
alert(`Độ dài chuỗi là: ${lengInput}`)
alert(`Chữ in hoa của chuỗi là: ${input.toUpperCase()}`)
alert(`Chữ in thường của chuỗi là: ${input.toLocaleLowerCase()}`)