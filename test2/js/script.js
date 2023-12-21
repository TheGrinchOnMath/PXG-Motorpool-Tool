/*
this file contains the functions necessary to create the menus for selecting the factions
there is also necessary padding to be added for the structure to make sense
when an era is clicked, the old vehicles should be hidden, removed and 
replaced by the ones from the current selected faction era


const jsonTemplate = {
	BLUFOR: { US_ARMY: ["MODERN", "EARLY", "LATE"], SAS: ["EARLY", "LATE"] },
	OPFOR: { VSV: "LATE" },
	INDEP: { ION: "MODERN" },
	CIVILIAN: { INSURGENTS: "LATE" }
};


the above array data an be accessed by using objectName.Property == Property Value. 
therefore, jsonTemplate.BLUFOR.US_ARMY == ["MODERN", "EARLY", LATE]

What also works is objectName["property"]. this only works for a simple array. using jsonTemplate, 
one can only access the arrays of BLUFOR, OPFOR, etc and nothing inside them

console.log(jsonTemplate.BLUFOR.US_ARMY);
console.log(jsonTemplate["BLUFOR"])

below function removes the old buttons and replaces them with the buttons for the factions from chosen side
*/

let path = "./assets/test.json"

function parseJson (path, task) {
    fetch(path).then((response) => response.json()).then((json) => console.log(json));
    // parse json, return: list of factions list of eras, content of motorpool for era

}
function generateFactions(input) {
    let factions = input;
    for(let i = 0; i < factions.length; i++) {
        // create faction button here
        let faction = document.createElement("button")
        
    }


	let div = document.getElementById("Factions");
    // hide and empty out the divs of factions and eras
    // extract faction list from json, create buttons for every faction and add it to the factions div, show factions div
}

// below function generates the era buttons for the chosen faction, when the button is clicked
function generateEras(faction) {
    // empty and hide era div
    // read json, extract eras, create buttons for every era and add to eras div, show era div
	this;
}

/* 
this function generates the motorpool, filling the div with a div per vehicle, categorized into:
technical, APC, IFV, MBT, logi, rotary transport, rotary attack, fixed wing transport, fixed wing attack.
if one of the categories is empty, do not show it
*/
function motorpool(faction, era) {
    // empty and hide motorpool div, delete all vehicle divs
    // read json, extract motorpool data, create vehicle div: image, data, number input, show div
	this;
}

// below function shows the vehicles as well as their stats
function vehicle(inputData) {
    // create vehicle div, image, data and numberinput, return object
	//let parent = document.getElementById("content");
	this;
}

// this function adds an input for numbers: <input id="id" type="number" value="0" min="0" max="10" placeholder="add vehicle" step="1"/>
function addNumberInput(id, maxValue, targetId) {
	let input = document.createElement("input");
	let target = document.getElementById(targetId); // this needs to be after the target element has been created, otherwise bugs out
	console.log(target, document.getElementById(targetId), targetId);
	input.setAttribute("id", id);
	input.setAttribute("type", "number");
	input.setAttribute("min", 0);
	input.setAttribute("max", maxValue);
	input.setAttribute("placeholder", "Add vehicle");
	input.setAttribute("step", "1");
	target.insertAdjacentElement("afterbegin", input);
}

// this function is triggered by the calculate button, or not, and computes the selected vehicle stats, and shows the results in the results div
function calculate () {
    this;
}

parseJson(path, "this")
addNumberInput("input", "10", "results");
