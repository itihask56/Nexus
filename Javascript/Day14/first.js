// let obj ={};
// obj.name = "Itihas";
// obj.age = 22;

// //key value  writeable,enumerable,congigurable
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));

// //if writable is true:then objects properties ex. name value can be changed
// obj.name="Itihas Verma"
// console.log(obj.name);
// //if writable is false : we can't change the properties of object

// //if configurable true: we can change writable and enumerable else not

// let obj1 ={};

// Object.defineProperty(obj1,'name',{
//     value:'Itihas',
//     writable:true,
//     enumerable:true,
//     configurable:true

// })

//if there is a situation occur where we don't want to change certain keys object
//then we can make writeable to false

let obj2 = {
  name: "Itihas Verma",
  age: 22,
  account: 20000,
};
//by defalut writable enumrable and configureable is true
// console.log(obj2);

//lets make writeable to false

Object.defineProperty(obj2, "account", {
  writable: false,
});
obj2.account = 30000;
obj2.name = "itihas";
console.log(obj2); //{ name: 'Itihas Verma', age: 22, account: 20000 } we got the same output
// obj2.name="itihas";
// console.log(obj2); //{ name: 'itihas', age: 22, account: 20000 } but we can change the other keys

// obj1.account_number = 20001;
// console.log(obj1.account_number);

// const customer = {
//     name:"Rohit",
//     age:23,
//     account_number:123,
//     balance:2000,
// }



// name , account_number , change nahi hone chaiye
// Object.defineProperty(customer, "name",{
//    writable:false,
// })
// customer.name = "Mohit";
// // customer.account_number = 10001;

// console.log(customer);

//  Object.protoype
const customer = {
    name:"Rohit",
    age:23,
    account_number:123,
    balance:2000,
}

let customer2 = Object.create(customer);
customer2.city = "Haridwar";
customer2.place = "Delhi";

Object.defineProperty(customer, "name", {
    enumerable:false,
})

// enumerable: jis bhi key ka enumerable true hga, un sabka acces hga ya print hga
//  Inherit hoke bhi koi bhi property or key aati hai , uska enumerbale true hua toh wo bhio print hga



// console.log(Object.getOwnPropertyDescriptor(Object.prototype , 'toString'));
Object.defineProperty(Object.prototype,'toString',{
    enumerable:true,
} )

for(let key in customer)
    console.log(key);