/**
 * LÀM VIỆC VỚI ARRAY
1. to string
2. join
3. pop
4. push
5. shift
6. unshift
7. splice
8. concat
9. slice
 */

var language = ['JS', 'PHP', 'Ruby']
console.log(language.toString())
console.log(language.join(' - '))

// xóa đi element cuối mảng và trả về element đó
console.log(language.pop()) 
console.log(language)

// thêm element vào cuối mảng và trả về độ dài mới của mảng
console.log(language.push('Dart', 'Java'))
console.log(language)

// xóa đi element đầu mảng và trả về element đó
console.log(language.shift())
console.log(language)

// thêm element vào đầu mảng và trả về độ dài mới của mảng
console.log(language.unshift('Python', 'C++'))
console.log(language)

// xóa đi element từ vị trí index và trả về element đó
language.splice(1, 2)
console.log(language)
language.splice(1, 0, 'luc lap')
console.log(language)

// nối mảng
var language2 = ['C', 'C#']
console.log(language.concat(language2))

// cắt mảng
console.log(language.slice(1, 3))