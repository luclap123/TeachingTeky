/** 

CHUỖI TRONG JAVASCRIPT
1. tạo chuỗi
2. một số case sử dụng backslash (\)
3. xem độ dài chuỗi
4. chú ý độ dài khi viết code
5. template string ES6
 */

// // 1. tạo chuỗi
// var name1 = 'luc lap'
// var name2 = new String('luc lap')
// // nên dùng cách 1 hơn


// // 2. một số case sử dụng backslash (\)
// var message = 'It\'s my book'
// console.log("message: ", message)

// // 3. xem độ dài chuỗi
// console.log("name1 length: ", name1.length)

// // 4. chú ý độ dài khi viết code

// // 5. template string ES6
// var firstName = 'Luc'
// var lastName = 'Lap'

// console.log(`Full name: ${firstName} ${lastName}`)



/** LÀM VIỆC VỚI CHUỖI
 */
var myString = "          xin chao JS tat ca cac ban, chao JS"
// 1. length
// 2. find index
console.log(myString.indexOf("chao", 10))
console.log(myString.lastIndexOf("JS"))
console.log(myString.search("JS"))

// 3. cut string
console.log(myString.slice(4, 12))
// 4. replace
console.log(myString.replace("JS", "Javascript"))
console.log(myString.replace(/JS/g, "Javascript"))
// 5. convert to upper case
console.log(myString.toUpperCase())
// 6. convert to lower case
console.log(myString.toLowerCase())
// 7. trim
console.log(myString.trim())
// 8. split
var languages = 'javascript, php, ruby'
console.log(languages.split(','))
// 9. get a character by index
const newString =  'luc van lap'
console.log(newString.charAt(0))


