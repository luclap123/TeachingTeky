/**
    MỘT SỐ PHƯƠNG THỨC TRONG ARRAY
    1. for each
    2. every
    3. some
    4. find
    5. filter
    6. map
    7. reduce
 */

var courses = [
    {
        id: 1,
        name: 'javascript',
        price: 100
    },
    {
        id: 2,
        name: 'c#',
        price: 0
    },
    {
        id: 3,
        name: 'php',
        price: 300
    },
    {
        id: 4,
        name: 'python',
        price: 400
    }
];

// courses.forEach(function(course) {
//     console.log(course)
// })

// var isFree = courses.every(function(course, index) {
//     console.log(index)
//     return course.coin === 0
// })

// console.log(isFree)
// // some ngược lại với every

// var courseName = courses.find(function(course, index) {
//     console.log(index)
//     return course.name === 'php'
// })

// console.log(courseName)
// filter giống find nhưng trả về tất cả đối tượng giống nhau 


// map
// function courseHandler(course)
// {
//     // console.log(course)
//     // return course.name
//     return {
//         id: course.id,
//         name: `khóa học ${course.name}`,
//         price: course.price        
//     }
// }

// var newCourse = courses.map(courseHandler)
// console.log(newCourse)

// reduce
// var i = 0
// function totalHandler(accumulator, currentValue, currentIndex, originArray ) {
//     // i++;
//     var total = accumulator + currentValue.price;
//     console.table(
//         {
//             'biến tích trữ': accumulator,
//             'giá trị hiện tại': currentValue.price,
//             'giá trị thay đổi': total
//         }
//     )
//     return total;

// }

// var totalCoin = courses.reduce(totalHandler, 0)
// // khi không có giá trị khởi tạo, nó sẽ lấy phần tử đầu tiên làm giá trị khởi tạo
// console.log(totalCoin)

// bài tạp reduce
// bài 1: flat - làm phẳng mảng từ mảng depth sau
var depthArray = [1, 2, [3, 4, 5, 6], 7, 8, [9, 10, 11]]
var flatArray = depthArray.reduce(function (flat, depth) {
    return flat.concat(depth)
}, [])

// console.log(flatArray)


// lấy ra các khóa học và đưa vào một mảng mới
var topics = [
    {
        topic: "font-end",
        course: [
            {
                id:1,
                title: "html, css"
            },
            {
                id: 2,
                title: "javascript"
            }
        ]
    },
    {
        topic: "back-end",
        course: [
            {
                id:1,
                title: "php" 
            },
            {
                id: 2,
                title: "nodejs"
            }
        ]
    }
]

var nameCourses = topics.reduce(function (acc, topic) {
    
    return topic.course.title
    // return acc.concat(topic.course)
}, [])

console.log(nameCourses)