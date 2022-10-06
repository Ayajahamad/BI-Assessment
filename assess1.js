/*
QUESTION 1:

to check the greatest of three numbers
a=10
b=20
c=30
using conditional statements , print which is the greatest no of three.
*/

a=10
b=20
c=30
if(a>=b && a>=c){
    console.log("a is a largest number");
}
else if(b>=a && b>=c){
    console.log("b is a largest number")
}
else{
    console.log("c is the largest number")
}

/*
QUESTION 2:

Declare two variables: admin and name.
Assign the value "John" to fname.
Copy the value from fname to admin.
Show the value of admin using console.log.
 */
var admin,name
var fname="john"
var admin=fname

console.log(admin);



/*
QUESTION 3:
 Write a program, using the variable declarations above, that displays the data type for each variable.
 */

 let d = "Dev";
 let e = true;
 let f =  30;
 let g = null;
 var h=[10,20,30,40];

 console.log(typeof d)
 console.log(typeof e)
 console.log(typeof f)
 console.log(typeof g)
 console.log(typeof h)

//QUESTION-4
console.log(5 > 4)                  //true
console.log("apple" > "pineapple")  //false
console.log("2" > "12")             //true
console.log(undefined == null)      //true
console.log(undefined === null)     //false





