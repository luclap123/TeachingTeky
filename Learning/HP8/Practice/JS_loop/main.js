/**
    VÒNG LẶP - LOOP
1. for - lặp với điều kiện đúng
2. for/in - lặp qua key của đối tượng
3. for/of - lặp qua value của đối tượng
4 while - lặp khi điều kiện đúng
5. do/while - lặp ít nhất 1 lần, sau đó khi điều kiện đúng
 */

// for loop
// for (var i = 0; i <=100; i++) {
//     console.log(i)
// }

// vế số 1, số 2, số 3 trong for là không bắt buộc

// for with array
// myArray = [
//     'java',
//     'python',
//     'php',
//     'c#'
// ];

// for (var i =0; i<myArray.length; i++){
//     console.log(myArray[i])
// }

// FOR/IN LOOP
// var myObj = {
//     name: 'lap',
//     age: '23',
//     address: 'bac giang'
// }

// for (var key in myObj)
// {
//     console.log(key)
//     console.log(myObj[key])
// }

// var myString = 'luc van lap'
// for (var key in myString) {
//     console.log(myString[key])
// }


// FOR/OF 
// var myString = 'luc van lap'
// for (var value of myString) {
//     console.log(value)
// }

// var myArray = [
//     'php',
//     'js',
//     'css',
//     'jsx'
// ]

// for (var value of myArray) {
//     console.log(value)
// }

// WHILE LOOP
// var i =1;
// while (i <=100) {
//     console.log(i);
//     i++;
// }

// DO/WHILE LOOP
// var i = 0
// do {
//     i++
//     console.log(i);
// } while (i < 100)


// BREAK AND CONTINUE TRONG LOOP


// vòng lặp lồng nhau (nested loop)
// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];

// for (var i = 0; i< myArray.length; i++) {
//     for (var j = 0; j<myArray[i].length; j++) {
//         console.log(myArray[i][j])
//     }
// }

for (var i = 100; i>0; i -=5) {
    console.log(i)
}