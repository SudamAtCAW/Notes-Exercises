// Reference types

var object1 = {value: 10};
//object2 has the value reference same as object 1
//that's why object1 ia equal to object2
//so if we change the value of object1 then the value of object 2 will be 
//automatically changed
var object2 = object1;
var object = {value: 10}
//though object1 and object3 has same value, they are not equal 
//because theyb have different reference value

// Context vs scope
//if we do console.log(a), it will give reference error
//because it has the scope only inside b block
function b() {
    let a =4;
}
const object4 = {
    a: function(){
        console.log(this)
    }
}
// Context : It tells us where we are within the object
// this is the object environment that we are in now
//instation is creating a copy of the object and reuse the code
 class Player {
    // whenever a instance(copy) of an object is created the
    //first thing that gets run is cunstructor function
    //it will create the properties inside that object
    constructor(name,type){
        console.log("player",this)
        this.name = name ;
        this.type = type ;
    }
    // By the help of this method a player can now introduce himself
    introduce(){
        console.log(`Hi I am ${this.name}, I am a ${this.type}`)
    }
 }
 //Now we will create a Player who is a Wizard, the Wizard have
 // the properties of a player, so we can create inheritance between 
 //wizard and player
 class Wizard extends Player{
    constructor (name,type) {
        //the below line of code will through an error
        // if we use "this" before declaring "super"
        // error from console: 
        //Uncaught ReferenceError: Must call super constructor 
        //in derived class before accessing 'this' or returning 
        //from derived constructor
        //that is why we will use "this" after declaring super 
        //console.log("wizard",this)
        //to access the variable of a parent class we have to 
        //use super keyword
        super(name,type)
        console.log("wizard",this)
    } 
    play(){
        console.log(`WEEEEEE I'm a ${this.type}`)
    }
 }

 // creating  objects(instances) of Wizard
 const wizard1 = new Wizard('Gandalf','sourcer')
 const wizard2 = new Wizard('Sauron','Dark magic')
//because we have extended or inherited the Player class , now
//have access to parent class methods
 wizard1.introduce();
 wizard2.introduce();
 // in addition we have our own methods as well
 wizard1.play();
 wizard2.play();