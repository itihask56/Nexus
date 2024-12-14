//set:unique values

let arr=[12,12,13,14];
const set1 = new Set([10,20,30,40,40])
console.log(set1); //output:Set(4) { 10, 20, 30, 40 }
// type of set is object

const set2=new Set();
set2.add(2);
set2.add(3);
set2.add(4);
set2.add(2);
set2.add("Itihas");
console.log(set2);

//size of set
console.log(set2.size);
//delete element of a set
set2.delete(2);
console.log(set2);

//has
console.log(set2.has(3)) //true or false


