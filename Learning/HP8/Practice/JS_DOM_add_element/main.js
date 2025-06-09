// innerHTML, outerHTML
var boxElement = document.querySelector('.box');
// set with innerHTML
boxElement.innerHTML = "<h1>Hello World!</h1>";
// get with innerHTML
console.log(boxElement.innerHTML);
// console.log(document.querySelector('h1').innerText)


// set with outerHTML
boxElement.outerHTML = "<span> Test</span>";  