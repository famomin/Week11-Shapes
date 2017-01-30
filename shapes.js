"use strict";

//importing three files for triangle, square and pentagon.
var Triangle = require('./triangle.js');
var Square = require('./square.js');
var Pentagon = require('./pentagon.js');


//creating shapes contructor
function Shapes (type) {

	//checking if "new" is used or not, if not then creats "new shape"
	if (!(this instanceof Shapes)) {
		return new Shapes(type);
	}

	this.type = type;	
}

Shapes.prototype.get_type = function () {
	 return this.type;
}

//creating Triangle a child of Shapes
Triangle.prototype = new Shapes();
Triangle.prototype.constructor = Triangle;

//creating Square a child of Shapes
Square.prototype = new Shapes();
Square.prototype.constructor = Square;

//creating Pentagon a child of Shapes
Pentagon.prototype = new Shapes();
Pentagon.prototype.constructor = Pentagon;

//assigning variables to the contructors
var triangleShape = new Triangle(7,8,9);
var squareShape = new Square(7);
var pentagonShape = new Pentagon(7,8,9,8,7);
var shapeX = new Shapes();

//printing out results for get type
console.log("Type of Triangle: " + triangleShape.get_type());
console.log("Type of Square: " + squareShape.get_type());
console.log("Type of Pentagon: " + pentagonShape.get_type());
console.log("Type of Shape: " + shapeX);

//printing out results for instanceof
//Triangle
console.log("Triangle instance of Triangle: ", triangleShape instanceof Triangle);
console.log("Triangle instance of Shape: ", triangleShape instanceof Shapes);

//Square
console.log("Square instance of Square: ", squareShape instanceof Square);
console.log("Square instance of Shape: ", squareShape instanceof Shapes);

//Triangle
console.log("Pentagon instance of Pentagon: ", pentagonShape instanceof Pentagon);
console.log("Pentagon instance of Shape: ", pentagonShape instanceof Shapes);

//Shape
console.log("Shape instance of Shape: ", shapeX instanceof Shapes);




