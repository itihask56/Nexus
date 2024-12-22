// document.getElementById("root").innerHTML

//create an element
// const elememt = document.createElement('li');
// elememt.innerHTML = "TS";

// const parent = document.getElementById("root");
// parent.appendChild(elememt);


function attach(content){
    const element = document.createElement('li');
    element.innerHTML = content;

    const parent = document.getElementById("root");
    parent.appendChild(element);


    const element2= document.createElement('li');
    element2.innerHTML=content + "V2.0"
    parent.append(element,element2)
    // parent.append(elememt,"Hello bandar"," bhai to chutiya hai")
}

// attach("DOM");
// attach("Solidity");
// attach("React");
// attach("Next");

///Attribute Node

//acess to first list
// const element=document.createAttribute("id");
// element.value="first";

// const current_list=document.querySelector('li');
// current_list.setAttributeNode(element);

//access to second list

// const parent = document.querySelector("#root");
// console.log(parent.children);
// parent.children[1].setAttributeNode(element);


//access attribute to an elememt

// const elememt=document.getElementById("root");
// // console.log(elememt);
// console.log(elememt.getAttribute("id"));
// // console.log(elememt.getAttribute("class"));
// elememt.setAttribute("class","first");

// const parent = document.querySelector("#root");
// // console.log(parent.children);
// parent.children[1].setAttribute("class","second");

// elememt.removeAttribute("class");

//******Add Nodes to the Dom ***********/

// const parent = document.getElementById("root");
// const element=document.createElement('li');
// element.innerHTML="Ts"

//prepend
// parent.prepend(element);

//append
// parent.append(element)

// const child2 = parent.children[1];
// // parent.insertBefore(element,child2);

// parent.replaceChild(element,child2);



// const parent = document.getElementById("root");
 
// // parent.innerHTML ="Ts" //replaces all content
// parent.innerHTML +="Ts"
// parent.innerHTML += "<li>Ts</li>"

const elememt = document.createElement("div");
elememt.innerHTML="Hello Coder Army";

// parent.insertAdjacentElement("beforebegin",elememt)
// parent.insertAdjacentElement("afterbegin",elememt)
// parent.insertAdjacentElement("beforeend",elememt)
// parent.insertAdjacentElement("afterend",elememt)

// parent.removeChild(parent.children[0]);

// document.querySelector('li').remove()

// Get the parent element
const parent = document.getElementById("root");

// Get the child element to remove
const child = document.getElementById("first");

// Remove the child element from the parent
parent.removeChild(child);




 


 


