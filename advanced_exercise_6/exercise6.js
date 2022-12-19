//Evaluate these:
//#1
[2] === [2] //false
{} === {}  //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // {a : 5}
const object2 = object1;  // {a : 4}
const object3 = object2;  //{a : 4}
const object4 = { a: 5}; //{a : 5}
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
class Animal{
    constructor(name,type,color){
        this.name = name;
        this.type = type;
        this.color = color;

    }
}
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Cow extends Animal{
     constructor(name, type, color){
        super(name, type, color)
     }

     sound(){
        console.log(`moooo, My name is ${this.name}, I am a ${this.type} and my colour is ${this.color}`)
     }
}

const cow1 = new Cow('kamadhenu','Holy Cow', 'white');

cow1.sound();