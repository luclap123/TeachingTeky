//   object trong js
// var sexKey = 'sex'
// var myObj = {
//     name: "luc lap",
//     age: 23,
//     address: "Ha Noi",
//     [sexKey]: 'male',
//     getName: function() { 
//         return this.name

//     }
//     // function --> phương thức
//     // others --> thuộc tính
// };
// myObj.email = "luc lap@gmail.com";
// myObj["hometown"]="Bac Giang"
// console.log(myObj)
// console.log(myObj.age)
// console.log(myObj["hometown"])

// var myKey = "sieu cap dep trai"
// console.log(myObj[myKey ])

// delete myObj.age;
// console.log(myObj.getName())

/* object constructor (bản thiết kế)
// có thể coi như một bản thiết kế của một ngôi nhà
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;  
    
//     this.getName = function() { 
//         return `${this.firstName} ${this.lastName}`

//     }
// }
// var author = new User('luc', 'lap', 'not avatar');
// var user = new User('lien', 'chi', 'avatar');

// // thêm thuộc tính, phương thức
// author.title ='chia sẻ dạo'
// user.comment ='hay quá'

// console.log(author.getName());
// console.log(user.getName());
*/


/**
    OBJECT PROTOTYPE - BASIC
    1. prototype là gì - giúp thêm thuộc tính, phương thức từ bên ngoài hàm tạo 
    2. sử dụng khi nào
 */ 

function Student(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
Student.prototype.hometown = "Bac Giang"
Student.prototype.getName = function() {
    return this.name;
}
var student1 = new Student("lap", 23, 'male')
console.log(student1)
console.log(student1.hometown)
console.log(student1.getName())