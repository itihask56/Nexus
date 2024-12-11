let obj = {
    name:"Itihas",
    age:22,
    gender:"Male",
    city:"Nawada"
}

// //for in loop: We can itereate over keys in an objects

// for (let key in obj){
//     console.log(key,obj[key]);
//  }
// console.log(Object.keys(obj)) //gives array of keys


let obj2 = Object.create(obj);
obj2.id=1566;
obj2.account = "213415465";
obj2.money = 420; //adding own properties of obj2
console.log(obj2);
console.log(obj2.name) //obj 2 has access to obj
console.log(Object.keys(obj2)); //it doesn't have access to keys of main obj.

//but if we use for in loop we can have access to inherited object
for(let key in obj2){
    console.log(key);
}
//output:
// id
// account
// money
// name
// age
// gender
// city


