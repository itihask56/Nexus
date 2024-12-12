//for of loop:generally applied on array

// const arr=[10,12,13,3,2];
// for(let val of arr){
//     console.log(val);
// }

// let str="Itihas is a good boy";
// for(let val of str){
//     console.log(val);
    
// }
//don't use for of loop in objects

const obj = {
    name:"itihas",
    age:22,
    id:1566,
    salary:65000,

}
// for(let val of obj){      // output: we will get error: as object is not iterable
//     console.log(val);
    
// }

//but if we want to iterate over an object then we can convert the object into aarays

// for(let val of Object.values(obj)){ //this will print values
//     console.log(val);
    
// }
// for(let val of Object.keys(obj)){ //this will print keys
//     console.log(val);
    
// }


//for each:it doesn't return anything

let arr1=[10,20,30,40,50];
// arr1.forEach(function (num){
//     console.log(num);
    
// })

//in more simplified way we can write it like this

//for each expects a callback function
// arr1.forEach((num)=>console.log(num));

//we can also print its index
// arr1.forEach((num,index)=>console.log(num,index));

//also we can take third parameter which is array

//single argument: we are giving number
//double argument: we are giving index also
//triple argument:we are giving reference of array also

//arr.forEach(callbackFunction)
// arr1.forEach((num,index,a)=>{
//     a[index]=num+2;
//     console.log(num,index);
    
// })
// console.log(arr1);


//filter:
// arr.filter(callBackFunction)

// const arr2=[10,12,13,31,14];
// const val = arr2.filter((num)=>{
//     return num%2==0;
// })
// console.log(val);

const students = [
    {name:"Rohan", age:22, marks:70},
    {name:"Mohan", age:24, marks:80},
    {name:"Darshan", age:28, marks:30},
    {name:"Mohit", age:32, marks:40},
    {name:"Shadik", age:12, marks:90},
]

// const result = students.filter((value)=> value.marks >50);
const result = students.filter(({marks})=> marks >50);

console.log(result);

//map
//in filter we can just filter some values we can't do operation on that we can't modify it
//map gives the ability to modify any values of array

const arr = [1,2,4,5]
// const re = arr.forEach((num)=>{
//     return num;
// }) wrong, no return

console.log(re)
// const result = arr.map((num,index)=> num*index);

// console.log(result);

// const arr = [1,2,3,4,5,6];

// const result = arr.filter((num)=> num%2==0).map((num)=> num*num).map((num)=>num/2);
// console.log(result);

//  Reduce , iske discussion karenge....
