let catDiv = document.querySelector("#cat")
catDiv.innerHTML = "I am a cat";
//console.log(catDiv)

let title1 = document.querySelector("h1")
title1.style.backgroundColor='pink';
title1.style.fontSize='40px';
//console.log(title1)

let mouseDiv = document.querySelectorAll(".mouse")
let divArray = [...mouseDiv].map(element=>element.style.backgroundColor='green')
console.log(divArray)

let helloDiv = document.querySelector(".hello")
helloDiv.id='color';
