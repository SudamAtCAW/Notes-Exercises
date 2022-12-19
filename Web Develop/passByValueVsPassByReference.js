// Primitive data types are immutable, means we can't change them
// in order to change them we have to completely remove them
//when a declare a value into a variable, the variable only 
//remembers the memory location of the value
//It doesn't know each other's existence,
//This is what we call pass by Value
//Example
 var a=5;
 var b=a;
 b++;
 console.log(b) //6
 //in pass by value a value won't be changed
 console.log(a) //5

 //PassByReference
 //here if we chnage the property of a object the referencing 
 //object's same property will be changed 
 //Example
 //because both of the objects pointing to 
 //same reference, changing one's property 
 //changes other's as well
 let obj1 = {name:'sam',password:'myPrecious'}
 let obj2=obj1;
 obj2.password = 'gollum'
 //by changing a property of one object the other 
 //objects property gets changed because of "PassByReference"
console.log(obj1); //{name:'sam',password:'gollum'}
console.log(obj2); //{name:'sam',password:'gollum'}
//PassByReference value is used for memory management, where we don't need to change 
//or copy the value of an object again again
var c =[1,2,3,4,5];
var d =c;
d.push(187678768);
//with out copying the data into array c
//we are able to store it inside c
console.log(c); //[1,2,3,4,5,187678768]
console.log(d); //[1,2,3,4,5,187678768]
//but when we actually do need to copy an array into
//another array we can use the concat method
//here the the array which is copied, that array's value won't be changed. 
var a =[1,3,5,4,6,7]
var e =[].concat(a)
e.push(829329)
//here a's value remain unchanged
console.log(a);  //[1,3,5,4,6,7]
console.log(e);  //[1,3,5,4,6,7,829329]

//to store the data of an object in a different memory location
//first way
let obj = {a:'a',b:'b',c:'c'}
let obj2= obj;
//or we can clone an object by this
//it takes two parameters, the first one is a empty location
//and the second one is location of source
let clone = Object.assign({}, obj)
//let's change a property of the object and check does it affect 
//the clone object
obj.c= 5;
//the clone object is unaffected
console.log(clone); //{a:'a',b:'b',c:'c'}
// the above can be done by this way too
let clone2= {...obj}
console.log(clone2) //{a:'a',b:'b',c:'c'}
//when we assign an object into another location
//the assigned location can not be overridden
//Shallow clone: it is where the copy is done on the first level
// but there are objects which contains objects inside them
//Example:
let obj={
    a:"a",
    b:'b',
    c: {
deep: "try to copy me"
    }
}
let clone3= Object.assign({}, obj);
let clone4= {...obj}
obj.c.deep="hahaha";

console.log(obj) //{a:'a',b:'b',c:{deep:'hahaha'}}
console.log(clone3) //{a:'a',b:'b',c:{deep:'hahaha'}}
console.log(clone4)  //{a:'a',b:'b',c:{deep:'hahaha'}}
// to overcome from the problems of shallow clone
//we can use superclone , which does a deep clone
//multilevel cloning
let superClone = JSON.parse(JSON.stringify(obj))
console.log(superClone) //{a:"a",b:'b',c: {deep: "try to copy me"}}
// before deep clone be cautios it may cause performance complications
//or it can have massive level which will take forever to clone
