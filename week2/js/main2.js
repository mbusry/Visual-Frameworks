// JS Visual framkworks Project II

// Global variables

var	assignedPerson = document.getElementByID("assignedPerson");

// eventListener for those who leave the page and comes back
var pageHolder = function(){
	localStorage.setItem("Assigned To", assignedPerson.value);
};

assignedPerson.addEventListener("blur", pageHolder);

// creating a unique key



// save info given in local storage

var saveInfo = function(){
	localStorage.setItem("Assigned To", assignedPerson.value);
	localStorage.setItem("eMail Address", email.value);
	localStorage.setItem("Shopping at", shop.value);
	localStorage.setItem("When do I need it", when.value);
	localStorage.setItem("Grocery Items", checkbox.GroceryItem.value);
	localStorage.setItem("Quanity needed", number.value);
	localStorage.setItem("Notes", notes.value);

};
// EventListner
saveButton.addEventListener("click", saveInfo)