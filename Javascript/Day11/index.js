//nested object

const student = {
  name: "Itihas",
  age: 22,
  address: {
    village: "Bardaha",
    pincode: 805127,
  },
};
//accessing
// console.log(student.address.pincode); //805127

//shallow copy: create reference to the same object

//object destrucure: in same fashaion we can do this with array

const obj = {
  name: "itihas",
  age: 22,
  account: 12345678,
  balance: 420,
  aadhar: "1234567",
  pan: "123456789",
};
// const {name,age,balance}=obj;
//we can rename variables
// const{name:full_name,age:umar,balance:paisa}=obj
// console.log(full_name,umar,paisa);
// console.log(name,age,balance);

// const{name,age,balance,...obj1}=obj;  //here ...obj1 is called rest operator we can put the rest element after desturing in new object;
// console.log(name,age,balance,obj1);

const st1 = {
  name: "Itihas",
  age: 22,
  address: {
    village: "Bardaha",
    pincode: 805127,
    city: "Nawada",
    state: "Bihar",
  },
};

//destructure nested object
// const {
//   address: { village,pincode,city },
// } = st1;
// console.log(village, pincode, city);


//print first value of aar using destructure
const st2 = {
    name: "Itihas",
    age: 22,
    arr:[10,20,20],
    address: {
      village: "Bardaha",
      pincode: 805127,
      city: "Nawada",
      state: "Bihar",
    },
  };
const {arr:[first,second]}=st2;
console.log(first,second);

