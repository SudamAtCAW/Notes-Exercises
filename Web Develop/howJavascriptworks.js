/*What is a program:-
A program has to do some sipmle things
- Allocate memory: otherwise we wouldn't be having variables or even the file
- parse and execute: read and run commands
there is a javascript engine that each browser impliments and
incase of chrome it's V8
The V8 engine reads the javascript that we write and changes into
machine executable code
The engine consists of 2 parts
1.Memory Heap: where memory allocatons happen
2.Call Stack: where our code is read and executed, it tells us
where we are in the program*/
const a = 1;
const b = 10;
const c = 100;
/*memory leak
It happens when we have unused memory
 Global variables are bad because if we forget to clean up our code
 and fill up the memory heap, and eventually the browser will stop
 call stack*/
console.log('1')
console.log('2')
console.log('3')
//the above code gets to call stack and gets executed
//here these commands will get executed ony by one

const one = () => {
    const two = () => {
     console.log('4')
    }
    two()
}
//the later commands gets on top as they get called
console.log('4')
two()
one()
//Call stack
//the above commands will be removed after they are called
//Javascript is a single threaded language that can be non blocking
//Single Threaded: means it has only one call stack, one thing 
//at a time, 
//first in last out
//what ever is at the top of the call stack gets called and below
//that bellow that till it is empty
//the languages which has multiple call stacks , the are multithreaded
//running code in a single thread can be quiet simple 
//as we don't have to use complicated scenarios that arises in multithreaded language
//Synhronous and Astnchronous
//in java script the later command can not be executed unless 
//the first command gets executed
//Stack Overflow:
//it is similar to memory leaks
//like memory heap can overflow
//Stack overflow occours when the call stack gets bigger and bigger
//and it doesn't have space anymore
//creating a stack overflow

//creating a recusion: when a function calls itself
 function foo(){
    foo()
 }

 foo();
//synchronous is where one statement is dependent on the execution 
//of it's previous statement

//Non Blocking
//If there are statements which takes a lot of time to get executed 
//than the browser might get slow
//so we can use command  timeout to skip the particular step
 console.log('1');
 setTimeout(() =>{
    console.log('2')
 },2000)
 console.log('3')
 //in the above code 1,3 will be executed first and 2 will 
 //be executed after them
//when the settimeOut() is called the command gets poped out
//now the call stack is empty
//so it moves onto the next command and runs it
//the skipped command gets executed after the specified time
//after the specified time the call stack still has the 
//popped out command 
//when the setTimeout is done, the machine finds that it has a 
//call backs
 //Java Script runtime enviornment is part of the browser
 //They have web APIs(dom.xml,timeout), callback queue, event loop

 //we can create our own 
 //callstack, web api, call back queue, event loop
 //when the call stack it checks for any callback
 //now the call back is moved into call stack
 //now it will do console.log()

 //event loop 
 console.log('1');
 setTimeout(() =>{
    console.log('2')
 },0)
 console.log('3')

 //if you had a program which load latest tweets tjan it may take 
 // years 

//usrs might not be able to make an movemet on the groud
//Synchronous is calla program , weight till it gets executed

// synchronous: if we call our teacher, you  wait until the 
//teacher answers the phone and ask him the question and hopefully you got an
//answer while in the mean time you are not doing anything
//Asynchronous:-
//when the teacher gets the time he responds and call you
//for the answer so you can do other stuff in between
//so java script is asynchronous when you leave it a message 
//and call back tells you mr.teacher has a message for you
element.addEventListener('click',() =>{
    console.log('click')
})