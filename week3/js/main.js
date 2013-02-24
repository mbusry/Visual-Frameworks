// JS Visual frameworks Project II week 3

// load HTML first then execute this file
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

	//// Getting values from check boxes
	//function getCheckBoxes(){
	//	if(getID('groceryItem'.checked)){
	//		groceryItemSelected = getID('groceryItem').value;
	//	}else{
	//		groceryItemSelected = "No";
	//	}
	//
	//
	//};
	
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
		var groc = document.forms[0].groceryItem
		//looking at the 'html document','form' on the page
		//'groceryItem' is from the name= in the form for the buttons
		for(i=0; i<groc.length; i++){
			if(groc[i].checked){
			groceryItemValue = groc[i].value;
			}
		}
	};
	// saving the data from the field inputs to localstorage with a unique key for each page
	function saveData(key){
		// Looking to see if there is a key
		if(!key){
			var uniqueKey = Math.floor(Math.random()*100000001)
			alert(uniqueKey);
		}else{
		// If there is a key id=key
			uniqueKey = key;
			alert(uniqueKey + " There was a key");
		}
		//Collect data in an object with label and 
		//getCheckBoxes();
		getGroceries();

		var item = {};
			item.assigned = ["Assigned to:", getID('assignedPerson').value];
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
			var linksLi = document.createElement("li");
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
				var optSubText = obj[a][0] + " " + obj[a][1];
				makeSubLi.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
			}
			makeGrocLinks(localStorage.key(i), linksLi); //Creates edit and delete links in each item for local storage.  This is in the loop for the grocery list NOT the items.
		}
	};
	
	// creating the links for edit and delete for each item in local storage
	function makeGrocLinks(key, linksLi){
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Groceries";
		editLink.addEventListener("click", editGroceries);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		// this section will add a br tag to seperate the links for edit and delete groceries
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);
		 
		
		// delete link
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Groceries";
		deleteLink.innerHTML = deleteText;
		deleteLink.addEventListener("click", deleteGroceries); // will delete the grocerlist item
		linksLi.appendChild(deleteLink);
	};
	
	function deleteGroceries(){
		var ask = confirm("Are you sure you want to delete this?");
		if(ask){
			localStorage.removeItem(this.key)
			alert("It was deleted");
			window.location.reload();
		}else{
			alert("You didn't delete it.");
		}
	};
	
	// This edits our grocery list
	function editGroceries(){
		// Retrieve from local storage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value); // the opposite of stringify
		
		// Hide displayed items and show the form
		toggleControls("off");
		
		// fill in the form with localStorage
		//getID('assigned').value = item.assigned[1];
		getID('shop').value = item.shop[1];
		getID('when').value = item.when[1];
		getID('qty').value = item.qty[1];
		 //get the data for the radio buttons
		//var radios = document.forms[0].groceryItemValue
		//for (i=0; i < radios.length; i ++){
		//    if(radios[i].value === "Fruit" && item.groceryItemValue === "Fruit"){
		//	radios[i].setAttribute("checked", "checked");
		//    }else if(radios[i].value === "Veggie" && item.groceryItemValue === "Veggie"){
		//	radios[i].setAttribute("checked", "checked");
		//    }else if(radios[i].value === "Diary" && item.groceryItemValue === "Diary"){
		//	radios[i].setAttribute("checked", "checked");
		//    }else if(radios[i].value === "Meat" && item.groceryItemValue === "Meat"){
		//	radios[i].setAttribute("checked", "checked");
		//    }else if(radios[i].value === "Snack" && item.groceryItemValue === "Snack"){
		//	radios[i].setAttribute("checked", "checked");
		//	}
		//}				
		getID('notes').value = item.notes[1];
		
		// removing the addEventListener from the 'save contact' button
		save.removeEventListener("click", saveData);
		
		// now change the submit (saveButton) value to edit
		getID('saveButton').value = "Edit List";
		var editSubmit = getID('saveButton');
		
		// saving the key value so we can save edited groceries
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
	}
		
	function validate(e){
	// Elements we want to validate
		var getNotes = getID('notes');
		
		// reset error message (errTxt)
		errTxt.innerHTML = "";
		getNotes.style.border = "1px solid gray";
	
		
		// Error Message(s)
		var errMsgArry = [ ];
		if(getNotes.value === ""){
			var notesError = "Please provide your instructions.";
			getNotes.style.border = "1px solid red";
			errMsgArry.push(notesError);
		};
		// If errors, show on the screen we pass the errMsgArry
		// to the html id=errTxt
		if(errMsgArry.length >=1){
			for(var i=0, n=errMsgArry.length; i < n; i++){
				var txt = document.createElement('li');
				txt.innerHTML = errMsgArry[i];
				errTxt.appendChild(txt);
			}
			e.preventDefault();
			return false;
		}else{
			// Save it if no errors
			// .key comes from editGroceries as
			saveData(this.key);
		}
	};
		
		
	
	
	// clear local storage function
	function clearLocal(){
		if(localStorage.length === 0){
		alert("There is no data to clear.")
		}else{
			
		localStorage.clear();
		alert("All items have been removed.");
		window.location.reload();
		return false;
		}
	};

	// Global variables
	var 	groceryItemValue;

	// click on links and save button
	var save = getID("saveButton");
	save.addEventListener("click", validate);
	var showList = getID('showList');
	showList.addEventListener("click", getPageData);
	var eraseList = getID('eraseList');
	eraseList.addEventListener("click",clearLocal);
	var errTxt = getID('errorMsg');

//last line of the code.  All of this code is a function
});