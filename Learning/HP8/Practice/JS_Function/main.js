/**
HÀM TRONG JAVASCRIPT
1. Hàm
- một khối mã
- làm 1 việc cụ thể
2. Loại hàm
- built-in
- tự định nghĩa
3. Tính chất
- không thực thi khi định nghĩa
- có thể nhận tham số
- có thể trả về 1 giá trị
4. tạo hàm đầu tiên
 */

// quy tắc đặt tên hàm 
// - không bắt đầu bằng số
// - không chứa ký tự đặc biệt ngoại trừ _
// - không chứa khoảng trắng
// - không trùng với từ khóa của JS
// - nên đặt theo kiểu camelCase
// - nên đặt theo kiểu dễ hiểu
// - nên đặt theo kiểu mô tả chức năng của hàm
// - nên đặt theo kiểu động từ
// function showMessage() {
//     console.log('Hello world')
// }

// showMessage();


/**
THAM SỐ TRONG HÀM
1. Tham số
- định nghĩa
- kiểu dữ liệu
- tính private
- một tham số
- nhiều tham số
2. Truyền tham số
- 1 tham số
- nhiều tham số
3. Arguments
- đối tượng arguments
- giới thiệu vòng for of
 */

// function write(message) {
//     console.log(message)
// }

// write('Hello world')

// function write() {
//     // console.log(arguments)
//     myString =''
//     for (var param of arguments) {
//         myString +=`${param} - `
//     }
//     console.log(myString)
// }
// write('Hello', 'world', 'JS')


// Return trong hàm JS
// trả về giá trị của phép toán
// trả về giá trị của biến
// trả về giá trị của biểu thức
// sẽ không chạy các đoạn code phía sau return
// có thẻ trả về bất cứ kiểu dữ liệu nào

// var isConfirm = confirm('Are you sure you want to')
// console.log(isConfirm)

// function sum(a, b) {
//     return a + b
// }

// var result = sum(2, 8)
// console.log(result)

/**
 MỘT SỐ ĐIỀU CẦN BIẾT VỀ HÀM
1. khi hàm đặt trùng tên
2. khai báo biến trong hàm
3. định nghĩa hàm trong hàm
 */

// function message() {
//     console.log('Hello world')
// }

// function message() {
//     console.log('Hello Lap')
// }

// message()

/**
 * CÁC LOẠI HÀM
1. Declaration function 
2. Expression function
3. Arrow function

 */

function declaration() {

}

var expression = function() {

}

setTimeout(function() {
})

var myObject = {
    myFunction: function() {

    }
}

// hosting