"use strict";

//create square constructor
function Square (equalSides) {

	//if "new" not used, returns new instance of Square
	if (!(this instanceof Square)) {
		return new Square(equalSides); 
	}

	this.type = "Square";
	
	//creating and assigning parameter to the property. 
	this.equalSides = equalSides;
};

//exporting Square to use it in shapes.js
module.exports = Square;