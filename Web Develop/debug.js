//Debugging :-
//it is the act of looking over code, understanding what it's doing,
//and figuring out why it is not acting  as exepected or causing 
//error. 

const flattened = [[1,0],[2,3],[4,5]].reduce(
    (a,b) => a.concat(b),[]);

    //first try to understand what the peiece of
    //code does
    //if we look into the code,
    //an array is assigned to a variable & it has a reduce method
    //the reduce method takes two parameters
    //1.Accumulator
    //the above can also be written like
    //we know that the accumulator iterates through
    //the array, so b will be the array
    //from the function we found that the accumulator to start 
    //with an empty array
     const flattened1 = [[0,1],[2,3],[4,5]].reduce(
        (accumulator, array) => {
            console.log('array', array)
            console.log('accumulator', accumulator)
            //as we removed the code from single line, which 
            //meant return implicitly, now we have to return 
            //explicitly
           return  accumulator.concat(array)
           //in the first iteration it will add [0,1] into 
           //empty array, by this it will add all the arrays 
           //into the empty array
        },[]
     );

     //or we can also use debugger to understand the
     //code better
     const flattened2 = [[0,1],[2,3],[4,5]].reduce(
        (accumulator, array) => {
            debugger;
           return  accumulator.concat(array)
           
        },[]
     );
     //when ever the javascript engine reads the word into 
     //browser it freezes