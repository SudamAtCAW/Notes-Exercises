//Type coercion
//It is the automatic or implicit conversion of 
// values from one data type to another
//it happens when we use the double equal
//when we compare 2 data types using 2 equals, it will 
//compare only their values
1 == '1'
//but when we compare 2 variables using 3 equals
//it will compare both values and their data types
1 === '1'
// in javascript 1 = true, 0= false
 if (1){
    console.log(5) // 5
 }
if(0){
    console.log(5)  //undefined
}
//always use === for comparing two variables to avoid confusion
-0 === +0 // true
Object.is(-0,+0) //false
NaN === Nan // false

//the 'includes' key word checks that the specified value 
//is whether present in the array or not if it is present,
//it returns true otherwise returns false
const pets = ['cat','dog','chimp'];
pets.includes('chimps') //true
pets.includes('bat') //false

//Exponential operator
 const square = (x) => x**2;
 square(3); //9
 const cube = (y) => y**3;
 cube(3); //27