/* the veryfirst time people were using java script, 
we were using inline script
here we wrote all our javascript codes with in the script tag
//it creates problem when the java script gets bigger and bigger
//when we create a new page , we have to copy the whole javascript code
into that html file
//it causes pollution of global name space
Once you use 'a' as a variable , you can not use a in the window again
//it can get confusing if some one declares a variable named 'a'
and you are calling your a() method
//Script Tags
//here if we want to create another page we still have to 
//copy and paste the script tags again
Dependency Resolution(Make sure that the scripts are added in proper order)
//when a scripts accesses a function from another script,
it will get failed
//IIFE:- Imediately Invoked Function Exexution
//an iife wraps a function in brackets, so that java script 
reads this and and evaluate this, execute this and then , the brackets at the 
//end tell to run the function*/
 var myApp = {}

 (function(){
    myApp.add= function(a,b){
    return a + b;
    }
 })();

//by using this we don't pollute the global nsme space
//Variable myApp will be in window object but others
//will remain inside function , in functions variables have scope
//when we have to add anything to myApp we can add these as 
//a property or method
//but there is stil a problem, the order of the files 
//Browserify
//Module Bundler: it bundles every thing inside the JS file
//here we can add methods into a javascript files
//js1
module.exports =  function add(a,b){
    return a * b;
}
var add= required("./add")
//it is a module bundler:
//it runs before you put the website online
//as long as we use this common/js it will keep bundling the 
//methods
//and javascript files will be stored
//Modules are buinding blocks or different block of codes

//with new es6 we have export and import

export const add = (a,b) => {

}
export default function add(){
    return a+b;
}
 

import {add} from './add';
import add from './add'

//browser aren't supporting any thing and webpack is a 
//module bundler
//browserfy bundles java script files into single files
//and it traverses throgh the dependencies tree, and make them into a
// single and multiple files as per requirement
//A webpack has a config file
module.exports = {
    entry: './app/main.js',
    outout: {
        path: './dist',
        filename: 'bundle.js'
    }
}