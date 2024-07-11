// Dropdown list display
function dropDown(){
	var options = ["Breakfast", "Lunch", "Cakes", "Kuih"];
	var links = ["breakfast.html", "lunch.html", "cakes.html", "kuih.html"]
	for (var i = 0; i < options.length; i++){
		var node = document.createElement("li");
		var a = document.createElement('a');
		var textnode = document.createTextNode(options[i]);
		a.href = links[i];
		a.appendChild(textnode);
		node.appendChild(a);
		document.getElementById("dropDown").appendChild(node);
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//A useful convention is to use a "g" prefix to indicate them as global
var gErrorMsg = "";

// Check the input data from various controls are valid format
// Display error message if not valid
function validateForm(){
	"use strict"; //directive to ensure variables are declared
	var isAllOK = false; 
	gErrorMsg = ""; //reset error message
	var fnameOK = isFirstNameOk();
	var lnameOK = isLastNameOk();
	var phoneOK = isPhoneOk();
	var emailOK = chkEmail();
	var addressOK = chkAddress();
	var cityOK = chkCity();
	var stateOK = chkState();
	var codeOK = chkPostcode();
	var foodOK = chkFood();
	var feedbackOK = chkFeedback();
	
	var fname = document.getElementById("fname").value; 
	var lname = document.getElementById("lname").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("femail").value; 
	var faddress = document.getElementById("faddress").value; 
	var fcity = document.getElementById("fcity").value; 
	var stateIndex = document.getElementById("state").selectedIndex;
	var state = document.getElementById("state").options.item(stateIndex).text;
	var postcode = document.getElementById("fpostcode").value; 
	var foodIndex = document.getElementById("product").selectedIndex;
	var food = document.getElementById("product").options.item(foodIndex).text;
	var feedback = document.getElementById('feedback').value;
	if (fnameOK && lnameOK && phoneOK && emailOK && addressOK && cityOK && stateOK && codeOK && foodOK && feedbackOK){ 
		isAllOK = true;
	}
	else{
		alert(gErrorMsg); //display concatenated error messages
		gErrorMsg = ""; //reset error msg
		isAllOK = false;
	}
	if (isAllOK){ 
		storeBooking(fname,lname,phone,email,faddress,fcity,state,postcode,food,feedback);
	} 
	return isAllOK;
}

// check name valid format
function isFirstNameOk(){
	var fname = document.getElementById('fname').value;
    var pattern = /^[a-zA-Z]+$/; //check only alpha characters or space 
    var nameOk = true;
	document.getElementById("fname").style.border = "2px solid green";
	if ((fname.length == 0)){ //same as fname==""
		gErrorMsg = gErrorMsg + "Please enter your first name.\n"
		nameOk = false; //if condition or clause complex more readable if branches on separate lines
		document.getElementById("fname").style.border = "2px solid red";
	}
	else{
		if (!pattern.test(fname)){
			gErrorMsg = gErrorMsg + "Your first name must only contain alpha characters.\n"
			nameOk = false; //if condition or clause complex more readable if branches on separate lines
			document.getElementById("fname").style.border = "2px solid red";
		}
	}
	return nameOk;
}

function isLastNameOk(){
	var lname = document.getElementById('lname').value;
    var pattern = /^[a-zA-Z]+$/; //check only alpha characters or space 
    var nameOk = true;
	document.getElementById("lname").style.border = "2px solid green";
	if ((lname.length == 0)){ //same as fname==""
		gErrorMsg += "Please enter your last name.\n"
		nameOk = false; //if condition or clause complex more readable if branches on separate lines
		document.getElementById("lname").style.border = "2px solid red";
	}
	else{
		if (!pattern.test(lname)){
			gErrorMsg += "Your first name must only contain alpha characters.\n"
			nameOk = false; //if condition or clause complex more readable if branches on separate lines
			document.getElementById("lname").style.border = "2px solid red";
		}
	}
	return nameOk;
}

function isPhoneOk(){
	var phone = document.getElementById('phone').value;
    var phoneOk = true;
	var pattern = /^[0-9]+$/;
    document.getElementById("phone").style.border = "2px solid green";
    if (phone == ""){
        gErrorMsg += "Please enter your phone number. \n";
        phoneOk = false;
		document.getElementById("phone").style.border = "2px solid red";
    }else if (!pattern.test(phone)){
        gErrorMsg += "Your phone number must only contain numerical characters. \n";
        phoneOk = false;
		document.getElementById("phone").style.border = "2px solid red";
    }
	return phoneOk;
}

// check the pattern of email(regular expression)
function chkEmail () { 
	var femail = document.getElementById("femail");
	var result = false; 
	var pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-za-zA-Z0-9.-]{1,4}$/;
	document.getElementById("femail").style.border = "2px solid red";
	if (pattern.test(femail.value)){
		result = true;
		document.getElementById("femail").style.border = "2px solid green";
	}
	else{ //braces a good idea even if not strictly needed for single statement
		result = false;
		gErrorMsg += "Please enter a valid email address.\n";
		document.getElementById("femail").style.border = "2px solid red";
	}
	return result;
}

function chkAddress(){
    var faddress = document.getElementById("faddress").value;
	var addressOk = true;
	document.getElementById("faddress").style.border = "2px solid green";
    
    if (faddress.length == 0){
        gErrorMsg += "Address cannot be empty. \n";
        addressOk = false;
		document.getElementById("faddress").style.border = "2px solid red";
    }else if(faddress.length > 40){
        gErrorMsg += "Maximum characters of address is 40! \n";
        addressOk = false;
		document.getElementById("faddress").style.border = "2px solid red";
    }
    return addressOk;
}

function chkCity(){
    var fcity = document.getElementById("fcity").value;
	var cityOk = true;
	document.getElementById("fcity").style.border = "2px solid green";
	
    if (fcity.length == 0){
        gErrorMsg += "City cannot be empty. \n";
        cityOk = false;
		document.getElementById("fcity").style.border = "2px solid red";
    }else if(fcity.length > 12){
        gErrorMsg += "Maximum characters of city is 12! \n";
        cityOk = false;
		document.getElementById("fcity").style.border = "2px solid red";
    }
    return cityOk;
}

function chkState(){
    var state = document.getElementById("state").selectedIndex;
	var stateOk = true;
	document.getElementById("state").style.border = "2px solid green";
	
    if (state == 0){
        gErrorMsg += "Please select a state. \n";
        stateOk = false;
		document.getElementById("state").style.border = "2px solid red";
    }
    return stateOk;
}

function chkPostcode(){
    var codeOk = true;
    var fpostcode = document.getElementById("fpostcode").value;
    var pattern = /^[0-9]*$/;
	document.getElementById("fpostcode").style.border = "2px solid green";
    
    if (fpostcode == ""){
        gErrorMsg += "Postcode cannot be empty. \n";
        codeOk = false;
		document.getElementById("fpostcode").style.border = "2px solid red";
    }
    else if (!pattern.test(fpostcode)){
        gErrorMsg += "Postcode must only contain numerical characters. \n";
        codeOk = false;
		document.getElementById("fpostcode").style.border = "2px solid red";
    }
    else if (fpostcode.length != 5){//maxlength is 11 as it include the dash (-)
        gErrorMsg += "Postcode restricted to 5 digits! \n";
        codeOk = false;
		document.getElementById("fpostcode").style.border = "2px solid red";
    }
    return codeOk;
}

function chkFood(){
    var food = document.getElementById("product").selectedIndex;
    var foodOk = true;
    document.getElementById("product").style.border = "2px solid green";
	
    if (food == 0){
        gErrorMsg += "Please select a food you want to enquiry. \n";
        foodOk = false;
		document.getElementById("product").style.border = "2px solid red";
    }
    return foodOk;
}

function states(stateName) {
    var options = ["Johor", "Kedah", "Kelantan", "Kuala Lumpur", "Labuan", "Malacca", "Negeri Sembilan", "Pahang", "Penang", "Perak", "Perlis", "Putrajaya", "Sabah", "Sarawak", "Selangor", "Terengganu"];

    options.forEach(array);

    function array(value) {
        if (value == statetName) {
            sessionStorage.stateIndex = options.indexOf(value);
        }
    }
}

function stateList() {
    var select = document.getElementById("state");

    var options = ["Johor", "Kedah", "Kelantan", "Kuala Lumpur","Labuan", "Malacca", "Negeri Sembilan", "Pahang", 
	"Penang", "Perak", "Perlis", "Putrajaya", "Sabah", "Sarawak", "Selangor", "Terengganu"];
	
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

function chkFeedback(){
	var feedback = document.getElementById('feedback').value;
    var nameOk = true;
	document.getElementById("feedback").style.border = "2px solid green";
	if ((feedback.length == 0)){ //same as fname==""
		gErrorMsg += "Please provide your feedback with text area given.\n"
		nameOk = false; //if condition or clause complex more readable if branches on separate lines
		document.getElementById("feedback").style.border = "2px solid red";
	}
	return nameOk;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Data transfer within pages
//Store individual product page into sessionStorage
function storeProduct(productName) {
    var options = ["ABF Set", "Local Set", "Steamed Rice Noodles Rolls", "Chicken Porridge", "Pau", 
	"Prawn Soup", "Beef Soup", "Laksa","Hainanese Chicken Rice", "Nasi Kuning", "Pandan Layer Cake", "Crepes",
	"Rum Fruit Cake", "Mango Cheese", "Carrot Cheese", "UFO Tart", "Egg Tart", "Kuih Lapis", "Kuih Lenggang", "Lo Bak Gou"];

    options.forEach(array);

    function array(value) {
        if (value == productName) {
            sessionStorage.productIndex = options.indexOf(value);
        }
    }
}

//Fill the subject field with the value of product
function storeSub() {
    document.getElementById("product").selectedIndex = sessionStorage.productIndex;

    var product = document.getElementById("product").value;

    sessionStorage.subject = product;
    document.getElementById("subject").value = sessionStorage.subject;
}

//Storing first optgroup into array
function foodList() {
    var select = document.getElementById("product");

    var options = ["ABF Set", "Local Set", "Steamed Rice Noodles Rolls", "Chicken Porridge", "Pau", 
	"Prawn Soup", "Beef Soup", "Laksa","Hainanese Chicken Rice", "Nasi Kuning", "Pandan Layer Cake", "Crepes",
	"Rum Fruit Cake", "Mango Cheese", "Carrot Cheese", "UFO Tart", "Egg Tart", "Kuih Lapis", "Kuih Lenggang", "Lo Bak Gou"];
	
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

//change the value of the session storage according to the new product selected by user
function change() {
    var product = document.getElementById("product").value;
    sessionStorage.product = product;
    document.getElementById("subject").value = sessionStorage.product;
} 

////////////////////////////////////////////////////////////////////////////////////////////////////// 

//Data transfer between pages
function storeItem(item_id) {
    sessionStorage.setItem("item_id", item_id);
    window.location.replace("enquiry.html");
}

function displayItem() {
    document.getElementById("subject").value = sessionStorage.getItem("item_id");
	var product = document.getElementById("subject").value;
    sessionStorage.product = product;
    document.getElementById("product").value = sessionStorage.product;

}

function storeBooking(fname,lname,phone,email,faddress,fcity,state,postcode,food,feedback){ 
	sessionStorage.fname = fname; 
	sessionStorage.lname = lname; 
	sessionStorage.phone = phone; 
	sessionStorage.femail = email; 
	sessionStorage.faddress = faddress; 
	sessionStorage.fcity = fcity; 
	sessionStorage.state = state; 
	sessionStorage.fpostcode = postcode; 
	sessionStorage.food = food; 
	sessionStorage.feedback = feedback; 
	
	// alert ("First Name stored: " + sessionStorage.fname); //added for testing 
	// alert ("Last Name stored: " + sessionStorage.lname); //added for testing 
	// alert ("Phone Number stored: " + sessionStorage.phone); //added for testing 
	// alert ("Email Address stored: " + sessionStorage.femail); //added for testing 
	// alert ("Street Address stored: " + sessionStorage.faddress); //added for testing 
	// alert ("City stored: " + sessionStorage.fcity); //added for testing 
	// alert ("State stored: " + sessionStorage.state); //added for testing 
	// alert ("Postcode stored: " + sessionStorage.fpostcode); //added for testing 
	// alert ("Food Enquiry stored: " + sessionStorage.food); //added for testing 
	// alert ("Feedback stored: " + sessionStorage.feedback); //added for testing 
}

function initalise(){
    displayItem();
}

window.onload = initalise;