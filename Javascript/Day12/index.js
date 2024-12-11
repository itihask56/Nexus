//function

function greet() {
  console.log("Hello bhaiya");
  console.log("Kaise ho aap");
}
greet();

function add(num1, num2) {
  return num1 + num2;
}
console.log(add, add(2, 3));

const multiply = function (n1, n2) {
  return n1 * n2;
};
console.log(multiply, multiply(2, 3));

//normal function
// const subtract = function(n1,n2){
//     return n1-n2;
// }
// console.log(subtract(3,4));

//arrow function

// const subtract = (n1,n2)=>{
//     return n1-n2;
// }

// console.log(subtract(3,4));

//we can remove and currly braces and return keyword if we have

// const subtract = (n1,n2)=> n1-n2;

// console.log(subtract(3,4));

//we can also remove paranthesis if we have just one parameter

// const cube = num => num*num*num;
// console.log(cube(4))

//Rest operator: Take any number of arguments: it gives array of values
const sum = (...num) => {
  //we can take some by using for loop
  console.log(num);
};
sum(2, 3);
sum(2, 31, 4, 1, 5);

//the spread operator expands an iterable into its elements, while the rest operator collects multiple elements into an array:

//spread operator
let arr = [2, 3, 4, 1, 5];

let arr2 = [...arr];
console.log(arr2);

//also we can pass obj as parameter to the function

const obj = {
  name: "Itihas",
  age: 21,
  balance: 420,
  address: {
    city: "Nawada",
    pincode: 805127,
    state: "Bihar",
  },
};
//first way to access
// const person1 = (obj)=>{
//     console.log(obj.name,obj.age);
// }

// person1(obj);

//2nd way:destructure obj at starting
const person1 = ({ name, age, address: { pincode } }) => {
  //or we can destructure inside the function
  // const {name,age,address:{pincode}}=obj;
  name = "Itihas verma"; //==> passing obj to a function is passed by reference
  console.log("Name:", name, "Age:", age, "Pincode:", pincode);
};
person1(obj);
console.log(obj);
