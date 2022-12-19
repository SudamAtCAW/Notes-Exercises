//ES(2017)
//sString Methods
//.padStart():-
//this method will add the specified number of spaces infront of the 
//string
'turtle'.padStart(10) //"          turtle"
//.padEnd():-
//add the specified number of spaces after the string
'turtle'.padEnd(7) // "turle       "

//trailing commas,functions, parameter lists and calls
//this approach is used when we have long list of parameters
const fun =(a,
            b,
            c,
            d) => {
    console.log(a);
            }
fun(1,2,3,4,)          
  //object.values //object.entries //object.keys
//As this object is not an array we can not iterate through
//it's properties
  let obj ={
    username0: 'santa',
    username1: 'Rudolf',
    username2: 'I am Groot'
  }
  //but with object.keys we can access their properties
  Object.keys(obj).forEach((key,index) =>{
    console.log(key, obj[key]);
  }) // it will print the object keys and their values

  //object.values
  Object.values(obj).forEach(value =>{
    console.log(value)
  }) // it will print only the values

  //object.entries
  Object.entries(obj).forEach(value =>{
    console.log(value);
  })  //it will return an array of keys and values by which can get 
  // more control over the object

//create a method which return values with last number of user name
 Object.entries(obj).map(value =>{
    //value[1] refers to 2nd item of each array which is santa
    return value[1] + value[0].replace('username','')
 }) 
//ES10(2019)
//.flat():- this method is applied on arrays
//if we have an array which contains nested arrays inside it
//we can get them in 1 array by using this method
//to fan an array n number of times try with 
array.flat(infinity)
const array1=[1,2,3,4,5,6,7]
array.flat()  //[1,2,3,4,5,6,7]

const array2=[1,[2,3],4,[5,6],7]
array2.flat() //[1,2,3,4,5,6,7]

const array3=[1,[2,3],[4,[5,6],7]]
array3.flat(2)  //[1,2,3,4,5,6,7]

//in this method we can specify to which level we 
//want to flan the array
//this method will also work if we large value to flan than the actual
//flat() also cleans up our data
const entries = ['bob','sally',,,,'cindy']
entries.flat() //['bob','sally','cindy']
//flatMap :-this flans the arrary as well as iterates through 
//it's elements
const jurassicParkChaos = jurassicPark.flatMap(creature => creature + "@")
//the
.trimStart()
.trimEnd()
//methods removes the blank spaces present at the start and 
//beginning of the array 
//.fromEntries():-
//it transforms a key value list into an object
const userProfiles = [['frodo',21],['sam',22],['merry',21],['popins',20]];
Object.fromEntries(userProfiles);
//try catch
//if any error occours in try block than the 
//catch block will be executed
//in catch block we can also choose to display the error occured
  try{
  bob*12
  } catch(error){
  console.log('check your syntax'+error)
  }