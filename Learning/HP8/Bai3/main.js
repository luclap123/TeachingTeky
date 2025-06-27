// cách tạo hàm

// function say() {
//     alert('đây là thông báo')
// }

// say()

// tạo hàm có tham số
// return trong hàm
// function sum(a, b, c) {
//     return a+b+c
// }
// console.log(sum(10, 10, 30))
// Viết hàm `isEven(n)` trả về true nếu `n` là số chẵn.
// 1. tạo hàm isEven
// 2. số chẵn là số chia hết, số lẻ thì không chia hết 
// -> if 10%2=0 thì chẵn 10%2=1
// thông báo
// function isEven (n) {
//     if (n%2==0) {
//         console.log('đây là số chẵn')
//     } else {
//         console.log('đây là số lẻ')
//     }
// }

// isEven(11)

// let obj = {
//     name: 'Nguyen Van A',
//     birth: '29/8/2015',
//     hometown: 'Hanoi',
//     age: 10,
//     isStudent: true
// }

// console.log(obj)

// hàm có thể coi là một object
// function yourAge(age){
//     // return () =>{

//     // }
//     return () => {
//         console.log("my age is: "+ age)
//     }
// }

// let myAge = yourAge(10)
// myAge()


// const add = (a, b) => a + b;
// console.log(add(5,5))

// const isEven = (n) => {
//     if (n%2==0) {
//         console.log('đây là số chẵn')
//     } else {
//         console.log('đây là số lẻ')
//     }
// }

// isEven(10)


// 1. Tạo object `student` với các thuộc tính: `name`, `grade`, `school`.
// 2. Viết function nhận object và in ra từng thuộc tính.

// vòng lặp
// for
// cú pháp
// for (giá trị khởi tạo; điều kiện; step)
//   hành động

// for (let i=0; i<10; i++){
//     console.log('bai tap')
// }

// while
// khi sử dụng, cần chú ý dính vào lặp vô hạn
// let a = 0
// while (a<10) {
//     console.log('bai tap')
//     a++
// }

// bài tập: tính tổng các số nhỏ hơn 10
// let sum =0 
// for (let i=0; i<10; i++) {
//     sum += i 
// }
// console.log(sum)
// bài tập: tính tổng các số chẵn nhỏ hơn 10
let sum =0 
for (let i=0; i<10; i++) {
    if (i%2==0) {
        sum += i 
    }
}
console.log(sum)