const array =[1,3,5,7];
//forEach
//when the following lines of code will be executed it'll 
//output undefined because though we are adding 2 into each number
//we are not storing it anywhere
//when you a have a single array with an arrow 
//function you can declare them without paranthesis
const newArray = array.forEach(num =>{
    num+2;
})
console.log('forEach',newArray);
//this folowing code will overcome from the problem
//array to store the changed value
const double = []
const newArray1= array.forEach(num =>{
   double.push(num+2);
})
console.log(double);

//map
//in map we have to return something
const mapArray = array.map(num =>  num * 2 );

console.log('map',mapArray)

//difference between forEach and map
// in for each
// we have to create our own array and push to 
//store the changed value and it doesn't have restriction in it
// while in map
// we don't need to create our own array , it 
//transforms the array and it has a restriction that we have to 
//return something

//Filter:
// this array function itearates through elements of
//an given array and checkes that whether the specified conditions
// is true or false
//if true stores that value in the new array otherwise
//moves onto the next element.

const filterArray = array.filter(num =>{
    return num > 6
})
// we can write the above code in following way
// const filterArray = array.filter(num => num > 6)

console.log('filterArray',filterArray)

//reduce
//the reduce method takes a parameter accumulator which keeps
//on storing the values of each iteration in it.
//we have to return something in this method

const reduceArray = array.reduce((accumulator,num) =>{
    return accumulator + num
},0)
console.log('reduce',reduceArray)