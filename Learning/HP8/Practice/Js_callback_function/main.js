/**
 * Call back
- là một hàm được truyền qua đối số, khi gọi hàm khác
1. là hàm
2. được truyền qua đối số
3. được gọi lại trong hàm nhận đối số
 */

// function myFunction(params) {
//     if (typeof params === 'function') {
//         params("học lập trình")
//     }
// }

// function callbackFunction(value) {
//     console.log("Value: ", value);
// }

// myFunction(callbackFunction)
// Array.prototype.map2 = function(callback) {
//     var output=[], arrayLength = this.length
//     for (var i = 0; i < arrayLength; i++) {
//         var result =callback(this[i], i);
//         output.push(result);
//     }
//     return output
// }

// var courses = [
//     'javascript',
//     'php',
//     'ruby'
// ]

// var htmls= courses.map2(function(course) {
//     return `<h2>${course}</h2>`
// })

// console.log(htmls.join(''))
// courses.map(function(course) {
//     console.log(course)
// })

// Array empty elements
// var courses = [
//     'javascript', 
//     'html'
// ]

// courses.length = 10
// console.log(courses)

// for (var i = 0; i < courses.length; i++)
// {
//     console.log(courses[i])
// }

// bài tập: từ ví dụ trên xây dựng cách hoạt động của các phương thức forEach, find, filter,, some, every, reduce
// phương thức forEach 
// 1. Object prototype
// 2. For in
// 3. hasOwnProperty
// Array.prototype.forEach2 = function (callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)){
//             // console.log(index)
//             callback(this[index], index, this)
//         }
//     }
// }

// var courses = [
//     'javascript', 
//     'html',
//     'php'
// ]


// courses.forEach2(function(course, index, array) {
//     console.log(course, index, array)
// })


// filter

// var courses = [
//     {
//         name: 'html',
//         coin: 200
//     },
//     {
//         name: 'css',
//         coin: 0
//     },
//     {
//         name: 'javascript',
//         coin: 300
//     }
// ]

// Array.prototype.filter2 = function(callback) {
//     var output = []
    
//     for (var index in this) {
//         if (this.hasOwnProperty(index)){
//             var result = callback(this[index], index, this)
//             if (result ){
//                 output.push(this[index])
//             }
//         }
//     }

//     return output
// }

// var bestCoin = courses.filter2(function(course, index, array) {
//     return course.coin > 0
// })

// console.log(bestCoin)


// some: true/false

// var courses = [
//     {
//         name: 'html',
//         coin: 200,
//         isFinish: false
//     },
//     {
//         name: 'css',
//         coin: 0,
//         isFinish: false
//     },
//     {
//         name: 'javascript',
//         coin: 300,
//         isFinish: false
//     }
// ]
// Array.prototype.some2 = function(callback) {
//     for (var index in this){
//         if (this.hasOwnProperty(index)){
//             if (callback(this[index], index, this)){
//                 return true
//             }
//         }
//     }
//     return false
// }
// var result = courses.some2(function(course, index, array) {
//     return course.isFinish
// })

// console.log(result)


// every: true/false
var courses = [
    {
        name: 'html',
        coin: 200,
        isFinish: false
    },
    {
        name: 'css',
        coin: 1000,
        isFinish: false
    },
    {
        name: 'javascript',
        coin: 300,
        isFinish: false
    }
]
Array.prototype.every2 = function(callback) {
    var output = true
    
    for (var index in this){
        if (this.hasOwnProperty(index)){
            if (!callback(this[index], index, this)){
                output = false;
                break;
            }
        }
    }
    return output;
}
var result = courses.every2(function(course, index, array) {
    return course.coin > 0
})

console.log(result)

