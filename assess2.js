
// program to display the sum of natural numbers

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0, i = 1;

// looping from i = 1 to number
while(i <= number) {
    console.log(i);
    sum += i;
    i++;
}
console.log('The sum of positive numbers:', sum);

/*
QUESTION 1:

Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.
*/

var a=prompt("Enter the number")
if(a>0){
    alert("The result is 1")
}
else if(a<0){
    alert("The result is -1")
}
else if(a==0){
    alert("The result is 0")
}

/*
QUESTION 2:

Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

console.log(Math.min(2,5));  //Min=2
console.log(Math.min(3,-1)); //Min=-1
console.log(Math.min(1,1));  //Min=1



/*
QUESTION 3:

Write the code using if..else which would correspond to the following switch:

var a=browser;
switch (browser) {
case 'Edge':
alert( "You've got the Edge!" );
break;

case 'Chrome':
case 'Firefox':
case 'Safari':
case 'Opera':
alert( 'Okay we support these browsers too' );
break;

default:
alert( 'We hope that this page looks ok!' );
}*/

function browser(){
    var browser=prompt("Enter the browser");
    if(browser=="Edge"){
        alert("You've got the Edge");
    }
    else if(browser=="Chrome"||browser=="Firefox"||browser=="Safari"||browser=="Opera"){
        alert("Okay we support these browser too");
    }
    else{
        alert("We hope that these page us looks ok! ");
    }
}
browser();

/*
QUESTION 4:

Rewrite the code below using a single switch statement:
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/

let a = prompt('a?','');
switch(a){
    case '0':
        break;
    case '1':
        alert("1");
        break;
    case '2':
    case '3':
        alert("2,3")
}