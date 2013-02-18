// JS Visual framkworks Project II

// load HTML first
window.addEventListener("DOMContentLoaded", function(){


	// getElementByID function shorthand
	function getID(x){
		var elementID = document.getElementById(x);
		return elementID;
	};

	// Select field elements and populate
	function fieldElements(){
		var formTag = document.getElemenetByTagName("form"),
			selectLi = getID('select'),
			makeSelect = document.createElement('select');			
			makeSelect.setAttribute("id","groups");
		for(var i=0, n=contactGroups.length; i<n; i++){
			var makeOption = document.createElement('option');
			var optText = contactGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	};

	// Getting values from my drop down of assignedto
function getCheckBoxes(){
	if(getID('groceryItem'.checked)){
			groceryItemSelected = getID('groceryItem').value;
		}else{
			groceryItemSelected = "No";
		}
	

};
//  switching page control views in css
	function toggleControls(n){
		switch(n){
		case "on":
		getID('firstForm').style.display = "none";
		getID('eraseList').style.display = "inline";
		getID('showList').style.display = "none";
		getID('addNew').style.display = "inline";
		break;
	case "off":
		getID('firstForm').style.display = "block";
		getID('eraseList').style.display = "inline";
		getID('showList').style.display = "inline";
		getID('addNew').style.display = "none";
		getID('items').style.display = "none";
		break;
	default:
		return false;
		}
	};
	// function to find the radio button
	function getGroceries(){
		var groc = document.forms[0].groceryItem //looking at the 'html document','form' on the page,'groceryItem' is from the name= in the form for the buttons
		for(i=0; i<groc.length; i++){
			if(groc[i].checked){
			groceryItemValue = groc[i].value;
			}
		}
	};
	// saving the data from the field inputs to localstorage with a unique key for each page
	function saveData(){
		var uniqueKey = Math.floor(Math.random()*100000001)
		//Collect data in an object with label and 
	getCheckBoxes();
	getGroceries();

		var item = {};
			// item.assigned = ["Assigned to:", assignedToValue];
			item.email = ["eMail:", getID('email').value];
			item.shop = ["Shop:", getID('shop').value];
			item.when = ["When:", getID('when').value];
			item.qty = ["Quantity:", getID('qty').value];			
			item.groceryItem = ["Grocery Item:", groceryItemValue];
			item.notes = ["Notes:", getID('notes').value];
			// Saving object to a string using Stringify
			localStorage.setItem(uniqueKey, JSON.stringify(item));
			alert("The List has been saved.");
	};
// Gets the data from the form on the page.
	function getPageData(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There is no data.");
		}
		// Retrieve data from local storage to display on the browser
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		getID('items').style.display = 'block';
		for(i=0, len=localStorage.length;i<len;i++){
			var makeli = document.createElement("li");
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// taking the string from local storage and putting it back into objects
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
		for(var a in obj){
			var makeSubLi = document.createElement('li');
			makeSubList.appendChild(makeSubLi);
			var optSubText = obj[a][0]+ " "+obj[a][1];
			makeSubLi.innerHTML = optSubText;
			}
		}
	};
// clear local storage function
	function clearLocal(){
		if(localStorage.length === 0){
		alert("There is no data to clear.")
		}else{
		localStorage.clear();
		alert("All to do items have been removed.");
		window.location.reload();
		return false;
		}
	};

	// Global variables

	// var	assignedPerson = getID(assignedPerson);
	//var	email = getID(email);
	//var	shop = getID(shop);
	//var	when = getID(when);
	//var	grocery = getID(firstForm.groceryItem);
	//var	qty = getID(qty);
	//var	notes = getID(notes);
	var 	groceryItemValue;


	// click on links and save button
	var save = getID("saveButton");
	save.addEventListener("click", saveData);
	var showList = getID('showList');
	showList.addEventListener("click", getPageData);
	var eraseList = getID('eraseList');
	eraseList.addEventListener("click",clearLocal);

//last line of the code.  All of this code is a function
});