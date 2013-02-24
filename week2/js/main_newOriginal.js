// JS Visual framkworks Project II

// Global variables

var	assignedPerson = document.getElementById("assignedPerson");
var	email = document.getElementById("email");
var	shop = document.getElementById("shop");
var	when = document.getElementById("when");
var	grocery = document.getElementById("firstForm").groceryItem;
var	qty = document.getElementById("qty");
var	notes = document.getElementById("notes");


// Save to local storage
	var pageHolder = function(){
	localStorage.setItem("Assigned To", assignedPerson.value);
	localStorage.setItem("eMail Address", email.value);
	localStorage.setItem("Where to shop", shop.value);
	localStorage.setItem("When is it needed", when.value);
	localStorage.setItem("Assigned To", grocery.value);
	localStorage.setItem("Quantity to get", qty.value);
	localStorage.setItem("Notes", notes.value);
};

// var refreshPageData = function(){
// 	var assignedPersonKey = localStorage.key("Assigned To");
// 	var assignedPersonValue = localStorage.getItem(assignedPersonKey);
// 	assignedPerson.value = assignedPersonValue;
// };

// var isItChecked = function(){
// 	for(i=0, n=checkboxes.length; i<n; i++){
// 		m=1;
// 		if(checkboxes[i].checked){
// 		checkboxes[i] = groceryList[m];
// 		m++;
// 		}	
// 	}
// };


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
// EventListners
assignedPerson.addEventListener("blur", pageHolder);
email.addEventListener("blur", pageHolder);
shop.addEventListener("blur", pageHolder);
when.addEventListener("blur", pageHolder);
grocery.addEventListener("blur", pageHolder);
qty.addEventListener("blur", pageHolder);
notes.addEventListener("blur", pageHolder);
assignedPerson.addEventListener("blur", pageHolder);
saveButton.addEventListener("click", saveInfo)
// refreshPageData();

// .getitem
for(i=0,n=localStorage.length,i<n,i++){
var storageKey = localStorage.key[i];
var storageValue = localStorage.getItem[i];
console.log(storageKey + ": " + storageValue)
};

