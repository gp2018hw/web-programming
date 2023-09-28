// Self invoking function
(function () {
    var abc = "Hello!!";  // I will invoke myself
  })();
  alert( abc );  // try moving the alert inside the function


  //Output: Undefined Variable Error
  var myvalue;
alert( 'myvalue: ' + myvalue );

//Output: NaN Error
var test = 3/"abc";
alert( 'test:' + test)

//Creates new person object with name John, age 50.
var person = new Object();
person.firstName = "John";
person.age = 50;

//Code below creates a new cat object.
//Although an array is set, the code will output "1" as it was the last set value of the variable.
var n = new Object();
n.cat = [1,3,5];
n["cat"] = "hello";
n.cat = "1";
alert( n.cat );

//Equals Comparator. Output: True
alert( "2==`2`:" + (2 == `2`) );

//Boolean Comparator. Output: False
alert( "2===`2`:" + (2 === `2`) );


//Creates new array and sets values
myArray = ['a', 'b', 'c'];
//Deletes "b" from the array
delete myArray[1];

alert( myArray);
// ['a', undefined, 'c']
						
myArray.splice(1, 1);
// ['a', 'c']
alert(myArray)

//Creating a Function
function foo()
{
  var fooargs = 'num: ' + arguments.length + '\n'; //Outputs length of arguments array. Parameters of foo.
  fooargs += 'arg0: ' + arguments[0] + '\n'; //Outputs first element passed throught function parameters
  fooargs += 'arg1: ' + arguments[1] + '\n'; //Outputs second element passed through function parameters
  alert( fooargs );
}
foo( "test", 2, 2 );


//Type Of Statement
var ab = "2";
alert( typeof ab ); //Outputs type of variable ab. This is a String.