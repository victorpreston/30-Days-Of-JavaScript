/**
 * JavaScript is a functional language, 
 * and for object oriented programming it uses both 
 * objects and functions, but objects are usually used 
 * as a data structure, similar to a dictionary in Python or 
 * a map in Java. In this tutorial, we will learn how to
 * use objects as a data structure. 
 * The advanced tutorials explain more about object oriented JavaScript.
 */

var emptyObject = {};                                                                   
var personObject = {
    firstName: "John",
    lastName: "Smith",
};

personObject.age = 25;
personObject["date of birth"] = "01/01/1990";
personObject["salary"] = 100000;


console.log(personObject);