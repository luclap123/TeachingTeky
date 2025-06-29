// let result = "";
// let i = 0;
// // vòng lặp do...while sẽ lặp trước rồi mới kiểm tra điều kiện
// do {
//   i += 1; // i =5
//   result += i; // result = 12345
// } while (i < 5);
// console.log(result);
// a = 5
// b='5'
// console.log(a===b)

// break dùng để thoát khỏi vòng lặp
// let i = 0;

// while (i < 6) {
//   if (i === 3) {
//     break;
//   }
//   i += 1; // 1, 2, 3
// }

// console.log(i);


// continue dùng để bỏ qua vòng lặp hiện tại và tiếp tục vòng lặp tiếp theo
// let text = "";

// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   text += i; //0124
// }

// console.log(text);

// Array - mảng là một tập hợp các giá trị được lưu trữ trong một biến, 
// có nhiều kiểu dữ liệu khác nhau
// mảng sẽ bắt đầu bằng dấu [giá trị]
// mảng bắt đầu từ chỉ số (vị trí) 0 
// độ dài mảng là số lượng các phần trong mảng
// let number = [1, 'hai', 3, 'bốn', 5]

// let fruits = ['apple', 'banana', 'orange']
// // push: thêm phần tử vào cuối mảng
// fruits.push('watermelon')
// console.log(fruits)
// //   * Sử dụng các phương thức như `push`, `pop`, `shift`, `unshift`, `slice`, `splice`
// // pop: xóa phần tử cuối của mảng
// fruits.pop()
// console.log(fruits)
// // shift: xóa phần tử đầu tiên của mảng
// fruits.shift()
// console.log(fruits)
// // unshift: thêm phần tử vào đầu mảng
// fruits.unshift('apple')
// console.log(fruits)
// // slice: lấy phần tử trong mảng từ vị trí bắt đầu đến vị trí trí kết thúc
// console.log(fruits.slice(0, 2))
// // splice: xóa phần tử trongn mảng theo vị trí
// // let del = fruits.splice(0, 2)
// // console.log(del)

// // includes: kiểm tra phần tử có tồn tại không
// console.log(fruits.includes('apple'))

// Viết hàm tạo số ngẫu nhiên từ 1 đến 100
// function randomNumber() {
//     return Math.random()*100
// }

// console.log(randomNumber())

// Tính tổng các số chẵn từ 1 đến n=6 (số nhập từ bàn phím)
// let n = prompt("Nhập số n: ")
// console.log(n)
// 1 2 3 4 5 
// Tìm số chia hết cho 7 đầu tiên từ 1 đến 100
// In ra các số từ 1 đến 50 bỏ qua số chia hết cho 5
// Tính diện tích hình tròn, tam giác

// cho một mảng sau
// let arr = [2, 5, 7, 3, 9]
// 1. tính tổng các phần tử trong mảng
let arr = [2, 5, 7, 3, 9]
let sum = 0
for (let i =0; i < arr.length; i++)
{
    sum = sum + arr[i] 
    //1. i = 0; sum = 0 + arr[0] 2
    //2. i = 1; sum = 2 + arr[1] 5
    //3. i = 2; sum = 7 + arr[2] 7
    //4. i = 3; sum = 14 + arr[3] 3

}
console.log(sum)