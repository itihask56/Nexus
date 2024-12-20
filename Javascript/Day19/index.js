const head1 = document.querySelector(".header1");
head1.style.backgroundColor = "red";

// const obj = document.querySelectorAll(".header1")
// console.log(obj);
//convert a nodelist to array

// const arr= Array.from(obj);
// console.log(arr);

//how to iterate over nodelist

//normal for loop

// for(i=0;i<obj.length;i++){
//     console.log(obj[i]);

// }

//for off loop

// for(let val of obj){
//     console.log(val);

// }

//foreach loop

// obj.forEach((val)=>{
//     console.log(val)
// })

//get elememt by tagname

// const tag = document.getElementsByTagName("h1");  //returns all the tag of speacified tag..returns html collection
// console.log(tag);

// const course = document.getElementsByTagName('li');
// console.log(course);

//1st way: normal for loop
// console.log("Normal For Loop")
// for(i=0;i<course.length;i++){
//     course[i].style.color="black";
//     console.log(course[i]);

// }
//html collection doesn't have for each property...we can't apply to it
//we can't apply for each directly to html collection
//for that we need to convert it into array

// const team = Array.from(course);
// console.log(team);
//2nd way: for each
// console.log("For Each Loop");
// team.forEach((val)=>{
//     console.log(val);

// })

//3rd way:for of loop
// console.log("For of loop");
// for(let val of course){
//     console.log(val);

// }

// const list = document.querySelector("li");
// console.log(list.parentNode);
// console.log(list.parentElement);

// const par = document.querySelector("ul");
// console.log(par);

// console.log(par.childNodes); //returns nodelist and empty space(text)

//html collection just give elements of html
//but nodelist return html elements along with text node

// const children=par.children
// console.log(children)//return html collection

// console.log(par.firstChild);
// console.log(par.firstElementChild);

// console.log(par.lastChild);
// console.log(par.lastElementChild);

const innerhtml=document.querySelector("#first").innerHTML;
console.log(innerhtml) //it displays everything within the tag

const innercontent = document.querySelector("#first").textContent;
console.log(innercontent);//it displays only content within the single tag


const innertext = document.querySelector("#first").innerText;
console.log(innertext) //it hides the hidden text within the tag

