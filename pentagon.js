"use strict";

//create pentagon constructor
function Pentagon (sideOne, sideTwo, sideThree, sideFour, sideFive) {

	//if "new" not used, returns new instance of Pentagon
	if (!(this instanceof Pentagon)) {
		return new Pentagon (sideOne, sideTwo, sideThree, sideFour, sideFive); 
	}

	this.type = "Pentagon";
	
	//creating and assigning parameters to the properties. 
	this.sideOne = sideOne;
	this.sideTwo = sideTwo;
	this.sideThree = sideThree;
	this.sideFour = sideFour;
	this.sideFive = sideFive;
};

//exporting Pentagon to use it in shapes.js
module.exports = Pentagon;