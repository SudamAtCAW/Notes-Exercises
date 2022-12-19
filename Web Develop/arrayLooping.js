const basket = ['apples', 'orranges','grapes']
const detailedBasket ={
    apples: 5,
    oranges: 10,
    grapes: 100
}
//for loop
for(let i=0;i<basket.length;i++){
    console.log(basket[i])
}
//forEach loop
basket.forEach(item =>{
    console.log(item)
})
//both of the above loops will output the same thing
//for of loop
//here we are crateting a variable(item), you can name it whatever you want
//here we are iterating through items by the help of iterables
//iterables is somthing that javascript provides us, which helps us in 
//iterating over arrays, strings
for(item of basket){
    console.log(item)
}
//iteratting through a string
for(item of'string'){
    console.log(item)
}
//the above loop will also give the same output
// iterating: going from one element of an array to another 
//for in loop
//enumerating: going from one property to another of an object
//the properties of an object are enumerables
//enumarating is for objects 
//this loop allows us to loop over and see the object properties
for(item in detailedBasket){
    console.log(item)
}
//for of can only be used on arrays but for in can be used on both
//Objects and arrays
//because java script takes arrrays as objects
//for example basket array
 basket = {
    0: 'apples',
    1:'oranges',
    2: 'grapes'
 };