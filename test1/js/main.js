let d = 100,
	e = 25,
	f = d + e;
let buttonClicked = false;

let x =
	"5" + 2 + 3; /* this creates a string with the numbers 2 and 3 concatenated
be careful about using $, it can be used for variables but can also be used by frameworks etc for functions
the underscore _variable, like in python, is usually used to declare private variables (class-restricted ones for example)
declaring the same variable with let outside {} and inside them works, the outside is global and the inside is not
*/


function resizeImg(elementId) {
	var img = document.getElementById(elementId);
	// DO NOT USE VAR UNLESS SUPPORT FOR OLD BROWSERS IS REQUIRED, USE LET
	var width = img.clientWidth;
	var height = img.clientHeight;
	var aspectRatio = width / height;
	var newWidth;
	var newHeight;
	if (width > height) {
		newWidth = window.innerWidth / 2;
		newHeight = newWidth / aspectRatio;
	} else if (width == height) {
		newHeight = newWidth = Math.min(
			window.innerWidth / 2,
			window.innerHeight / 2
		);
	} else {
		newHeight = window.innerHeight / 3;
		newWidth = newHeight * aspectRatio;
	}
	console.log(newWidth + ":" + newHeight);
	document.getElementById(elementId).width = newWidth;
	document.getElementById(elementId).height = newHeight;
}

console.log(
	window.innerHeight +
		" " +
		window.innerHeight +
		"  " +
		document.getElementById("kitten").clientWidth +
		" " +
		document.getElementById("kitten").clientHeight
);


//document.body.innerHTML = "<h1>" + d + " + " + e + " is " + f + ".</h1>" // use this to show stuff on the html with data from js
// alert(d); //this shows a popup with text 100
document.getElementById("paragraph").innerHTML = "Well Hello There!";
document.getElementById("paragraph").style.fontSize = "60px";
document.getElementById("penis").style.display = "none";


function penis() {
	if (buttonClicked == false) {
		document.getElementById("penis").style.display = "block";
		document.getElementById("penis").innerHTML = "PENIS";
		buttonClicked = true;
	} else {
		document.getElementById("penis").style.display = "none";
		buttonClicked = false;
	}
}
resizeImg("kitten");

document.write("<br>this is a sample text, i wonder where it will appear");
// the penis function toggles the heading visibility upon clicking the button
console.log("lorem ipsum situ dolor amet");
