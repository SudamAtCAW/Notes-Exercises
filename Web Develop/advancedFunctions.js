const first = () =>{
    //whenever the function is executed the greet variable 
    //will be created each time
    const greet ='Hi';
    //it's a good practice not to let variables to be shared 
    // by whole program, if we don't we may never know which
    //varable is used for 2 different purposes
    const second = () =>{
        alert(greet)
    }
    return second;
}
// Closures: a function ran. the function executed, it's
//never going to be executed again but it's going to remember 
//that there are references to those variables
//so the child scope always have the access to parent scope
//children always have access to parent scope 
//but parent doesn't have access to child scope
const newFunc = first();
newFunc();

//Currying:- It's the process of converting a function that
//takes multiple arguments, into a function
//that takes them one at a time
//we use this because it is more extensible, and we can reuse them
 const multiply= (a,b) => a * b;
 const curriedMultiply = (a) => (b) => a * b;
 const multiplyBy3 = curriedMultiply(3)

 // Compose
 //an approach where the result of one function is passed on
 // to the next function, which is passed to another until 
 //the final function is executed for the final result
 
 const compose = (f,g,h) => (a) =>h(f(g(a)));
 const sum = (num) => num + 10;
 compose(sum,sum,sum)(5);

 // Side effects:-
 //if our function is writes anything to console or external 
 //variables than that is a side effect
 // var a=1;
 //  function b() {
 //  a=2;
 //  }
 // Functional purity:-
 // try to avoid side efects and always return something
 // Deterministic:-
 //No matter how many times we call this function and pass
 // certain parameters , it will always return the same value . In turn, a function 
 //that returns a random number is not deterministic, as the 
 //same input (even if it is empty, i.e. without parameters)
 // will always output a different result.
 //1. Deterministic --> always produces the same results given the same inputs
 //2.No Side Effects -->  It does not depend on any state, or data, change during a program’s execution.
 // It must only depend on its input elements.