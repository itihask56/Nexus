const arr = [1, 2, "itihas", 3.14];
console.log(arr);

//gives length of arr
console.log("length of arr:", arr.length);

//accessing value with index number
console.log(arr.at(2)); //it takes negative index
//or
console.log(arr.at(-1));

console.log(arr[2]);

const newArr = arr;
console.log(arr == newArr); //output true as it points to same memory location

// it copies array to a different memory location
const newArr2 = structuredClone(arr);
console.log(arr == newArr2);

arr.push(30);
arr.push(40);
arr.pop();
console.log(arr);

//ushift ->add element at start
arr.unshift(10);
console.log(arr);

//shift->delete element from start
arr.shift();
console.log(arr);

//delete->deltes element at particular positon but it leaves it space
delete arr[0];
console.log(arr);

//indexof->tells index value of element in an arrya
console.log(arr.indexOf(0));
console.log(arr.indexOf(2));

//includes->gives boolen value wheather data is present or not
console.log(arr.includes('itihas'))

//slice: does'nt make any changes in original arrya
console.log(arr)
console.log(arr.slice(1,3))

//splice: it makes changes in original array
//splice(starting_index, total_elements_to_be_deleted,add_any_number_of_value)
console.log(arr.splice(1,3))
console.log(arr);
arr.unshift(10)

console.log(arr);
arr.pop();
arr.pop();
arr.push(20);
arr.push(30);
arr.push(40);
arr.push(50);
arr.push(60);
arr.push("itihas");
arr.push("poonam");
// console.log(arr);

//toStrign:converts array to string
let arrString=arr.toString()
console.log(arrString);
console.log(arrString.length);

console.log(arr.join())
console.log(arr.join("@")) //it can add value instead of comma in this case is @
 




