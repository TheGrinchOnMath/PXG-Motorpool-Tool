let d = 100;
let e = 25;
let f = d + e;
let buttonClicked = false;
//document.body.innerHTML = "<h1>" + d + " + " + e + " is " + f + ".</h1>" // use this to show stuff on the html with data from js
// alert(d); //this shows a popup with text 100
document.getElementById("paragraph").innerHTML = "Well Hello There!";
document.getElementById("paragraph").style.fontSize = "60px";
document.getElementById("penis").style.display = "none";
function penis() {
    if (buttonClicked==false) {
        document.getElementById("penis").style.display = "block";
        document.getElementById("penis").innerHTML = "PENIS";
        buttonClicked = true;
    }
    else {
        document.getElementById("penis").style.display = "none";
        buttonClicked = false;
    }
}
document.write("<br>this is a sample text, i wonder where it will appear")
// the penis function toggles the heading visibility upon clicking the button

penis()