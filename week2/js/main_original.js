// JS Visual framkworks Project II

// Global variables

var	assignedPerson = document.getElementById("assignedPerson");
var	email = document.getElementById("email");
var	shop = document.getElementById("shop");
var	when = document.getElementById("when");
var	grocery = document.getElementById("firstForm").groceryItem;
var	qty = document.getElementById("qty");
var	notes = document.getElementById("notes");

function pageHolder(){
	localStorage.setItem("Assigned to", assignedPerson);
};

// click on save button
var save =$("saveButton");
save.addEventListener("click", pageHolder);