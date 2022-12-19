//BigInt
typeof 1n;
//bigInt numbers are specified by adding n at the end 
//of the number
//for adding any number into bigint must have to be a bigint

//if we have an object which has another object inside it
//we can assign their values in a variable
let will_pokemon = {
    pikachu: {
    species: 'mouse pokemon',
    height:  0.4,
    weight: 6
    }
}
let weight = will_pokemon.pikachu.weight
console.log('weight',weight)

let andrei_pokemon = {
    pikachu:{
    doremon: 'racoon pokemon',
    height: 0.8,
    weight: 30,

}
}
//the following line of code will through an error
//because andre_pokemon contains raichu not pikachu
 let weight2=andrei_pokemon.pikachu.weight
 console.log('weight', weight)
 //to overcome from this problem we can use if statement
 //which will check if andrei_pokemon contains pikachu and weight
 //property

 if(andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight){
    let weight2= andrei_pokemon.pikachu.weight
    console.log(weight2)
 } else{
    let weight2 = undefined
    console.log(weight2)
 }

 //in the above code the complication is we have to keep checking 
 //that the respective object and property exists or not

 //Optional Chaining operation?.
 // by the help of this we can overcome from these checks
let weight3 = andrei_pokemon?.pikachu?.weight
//this code will check the specified object or properties 
//exists or not, we don't need to specify if statements
//if the object or property doesn't exist it will 
//output undefined

//Nullish Chaining Operation ??
//we were using optional chaining operation to find the
//existence of a object and propery but
//we can not use optional chaining command for accesing properties
//of objects which are the end of chain
//to overcome this we can use or operator
let power = andrei_pokemon?.pikachu?.power || 'no power'
console.log(power) //this code will through no power
//if we don't have power property or the value of the
//power property is null or zero
//so with the help of Nullish coalscing Operation ??
//we can overcome from this
let  power2 = andrei_pokemon?.pikachu?.power ?? 'no power'

//this will only output no power if we don't have the power property

//.replaceAll
 let str = 'java script is so boring';
const b = str.replaceAll('boring','interesting')
//javascript already has replace method, the problem with 
//replace method is it only replaces the first element it finds
let str2 = 'java script is wrost of the wrost'
str2.replace('wrost','best')

//.at() method
const array = [100,200,400,10]
//to get the 2nd last element of the array
array[array.length-2]
// by using .at() method
array.at(-2)
//both of them will give the same output