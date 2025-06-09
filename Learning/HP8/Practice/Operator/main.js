/**
 1. toán tử số học
 2. toán tử gán
 3. toán tử so sánh
 4. toán tử logic

 Toán tử ++ -- với tiền tố & hậu tố (Prefix & Postfix)
//  tiền tố
var a=6
console.log("a: "+ ++a) // 7
// hậu tố
var b=6
// 1. copy b copy = 6
// 2. trừ đi b = 5
// 3. in ra b copy = 6
var output = b++
console.log("output: ", output) // 6

console.log("b: "+b) // 7

var number = 6

var outputNumber = number++ + --number
console.log("outputNumber: ", outputNumber)
 */


/**Toán tử gán

var a = 1;

a = a + 2

console.log("a: ", a)
 */ 

/**
 * Toán tử chuỗi
 * 
var firstName = 'Luc';
var lastName = 'Lap';
console.log("Full name: ", firstName +lastName);
 */

/**
 * Toán tử so sánh
 * 
var a=1
var b=2
if(a=b){
    console.log("dieu kien dung")
} else {
    console.log("dieu kien sai")
}
 */


/**
 * Boolean
 var a =1 
var b =2 

var isCheck = a>b
console.log("isCheck: ", isCheck)
 */


/**
 * If else
 * các giá trị false: 0, '', null, undefined, NaN, false
 */
/**
 * Toán tử logic
 */
 

/**
 * Toán tử so sánh P2
 * === so sánh value và data type
 * !== so sánh value và data type
 * var a = 1
var b = 1
var c = '1'
console.log(a==b)
 */

/** hiểu hơn về câu lệnh điều kiện và phép so sánh
 * && khi gặp toán tử này, sẽ lấy giá trị nằm trong dãy giá trị false, kiểm tra từ trái sang 
 * || khi gặp toán tử này, sẽ lấy giá trị nằm trong dãy giá trị true, kiếm tra từ trái sang
 */
var a =1 
var b = 2
var result = 'a' && null && 'c'
var result2 = NaN || 'b' || 'c'
console.log("result:", result)
console.log("result 2:", result2)
