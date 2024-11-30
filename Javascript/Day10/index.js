const arr=[1,2,'itihas',3.14]
console.log(arr);

//gives length of arr
console.log("length of arr:",arr.length);

//accessing value with index number
console.log(arr.at(2))//it takes negative index
//or
console.log(arr.at(-1));

console.log(arr[2])


const newArr=arr;
console.log(arr==newArr);//output true as it points to same memory location

const newArr2=structuredClone(arr);
console.log(arr==newArr2);



