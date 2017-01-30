"use strict";

//create triangle constructor
function Triangle (sideOne, sideTwo, sideThree) {

	//if "new" not used, returns new instance of Triangle
	if (!(this instanceof Triangle)) {
		return new Triangle(sideOne, sideTwo, sideThree); 
	}

	this.type = "Triangle";
	
	//creating and assigning parameters to the properties. 
	this.sideOne = sideOne;
	this.sideTwo = sideTwo;
	this.sideThree = sideThree;
};

//exporting Trianlge to use it in shapes.js
module.exports = Triangle;