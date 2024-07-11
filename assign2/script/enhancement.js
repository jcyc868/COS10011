////////////////////////////////////////////////////////////////////////////////////////////////////
//Scroll to top button (This enhncement is referenced from <https://www.youtube.com/watch?v=3Jbb3sQVVq0>)
function scrollToTop(){
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// COnfirmation Page: (The unit COS10011 Creating Web Applications | Lab 6 Activity: Document Object Model)	
function chkEnquiry(){ 
	"use strict";
    var errMsg = "";    /* stores the error message */ 
    var result = true;  /* assumes no errors */ 
 
    if(result){ 
        alert("Enquiry Sent Successfully"); 
    }else{ 
        alert("Enquiry Sent Failed"); 
    } 
    return result;    //if false the information will not be sent to the server 
} 

function saveEnquiryDetail(){
	document.getElementById("confirm_fname").textContent = sessionStorage.fname; 
	document.getElementById("confirm_lname").textContent = sessionStorage.lname;
	document.getElementById("confirm_phone").textContent = sessionStorage.phone;
	document.getElementById("confirm_email").textContent = sessionStorage.femail;
	document.getElementById("confirm_address").textContent = sessionStorage.faddress;
	document.getElementById("confirm_city").textContent = sessionStorage.fcity;
	document.getElementById("confirm_state").textContent = sessionStorage.state;
	document.getElementById("confirm_postcode").textContent = sessionStorage.fpostcode;
	document.getElementById("confirm_food").textContent = sessionStorage.food;
	document.getElementById("confirm_feedback").innerHTML = sessionStorage.feedback;;
}

function sendEmail(){
	var body = "First Name = " + sessionStorage.fname + '%0D%0A' + 
				"Last Name = " + sessionStorage.lname + '%0D%0A' +
				"Phone Number = " + sessionStorage.phone + '%0D%0A' + 
				"Email Address = " + sessionStorage.femail + '%0D%0A' + 
				"Street Address = " + sessionStorage.faddress + '%0D%0A' + 
				"City = " + sessionStorage.fcity + '%0D%0A' + 
				"State = " + sessionStorage.state + '%0D%0A' + 
				"Postcode = " + sessionStorage.fpostcode + '%0D%0A' + 
				"Food Enquiry = " + sessionStorage.food + '%0D%0A' + 
				"Feedback = " + sessionStorage.feedback + '%0D%0A';
				
	var link = "mailto:101221718@students.swinburne.edu.my" + "?subject=" + "&body=" + body;
	
	window.location.href = link;
	
}

function cancelSubmission(){
    window.location = "enquiry.html";
}

function confirmPage(){
	//call the getBooking() function. 
    saveEnquiryDetail(); 
    // link the variable to the HTML element 
    var bookForm = document.getElementById("bookform"); 
    var cancelSubmission = document.getElementById("cancelButton"); 
     
    //check which button is being click. 
    if(bookForm){ 
        bookForm.onsubmit = chkEnquiry;           
    }else{ 
        cancelSubmission.onclick = cancelSubmission(); 
    }  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time Implementation This information is referenced from: <https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock>.

function currentTime() {
	const today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds(); 
	let session = "AM";
	let timeZone = "MYT";

	if(h == 0){
	  h = 12;
	}
	if(h > 12){
	  h = h - 12;
	  session = "PM";
	}
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('txt').innerHTML = "Time: " + h + ":" + m + ":" + s + " " + session + " " + timeZone;
	setTimeout(currentTime, 1000);
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Image SlidePlayer  
//Referenced from:https://www.youtube.com/watch?v=H-ubrrOjunE&ab_channel=FEWFrontEndWeb

var imageBreakfast = ['images/ABFset.jpg','images/local_set.jpg','images/porridge.jpg','images/rice_noodles.jpg','images/pau.jpg'];
var imageLunch = ['images/chickenrice.jpg','images/nasikuning.jpg','images/Prawnsoup.jpg','images/beefsoup.jpg','images/laksa.jpg'];
var imageCake = ['images/rum.jpg','images/pandan.jpg','images/mango.jpg','images/crepes.jpg','images/carrot.jpg'];
var imageKuih = ['images/ufo.jpg','images/eggtart.jpg','images/Kuih_lapis.jpg','images/kuih_lenggang.jpg','images/lobak.jpg'];

var i = 0;
	
function slideShow1() {
    document.getElementById("image1").src = imageBreakfast[i];
    if(i<imageBreakfast.length-1){
        i++;
    }
    else {
        i=0;
    }

    setTimeout("slideShow1()" , 2000);

}

function slideShow2() {
    document.getElementById("image2").src = imageLunch[i];
    if(i<imageLunch.length-1){
        i++;
    }
    else {
        i=0;
    }

    setTimeout("slideShow2()" , 2000);

}

function slideShow3() {
    document.getElementById("image3").src = imageCake[i];
    if(i<imageCake.length-1){
        i++;
    }
    else {
        i=0;
    }

    setTimeout("slideShow3()" , 2000);

}

function slideShow4() {
    document.getElementById("image4").src = imageKuih[i];
    if(i<imageKuih.length-1){
        i++;
    }
    else {
        i=0;
    }

    setTimeout("slideShow4()" , 2000);

}

function slideShow(){
	slideShow1();
	slideShow2();
	slideShow3();
	slideShow4();
}
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function enhance() { 
	scrollToTop();
	currentTime();
	slideShow();
	confirmPage();
} 

window.onload = enhance;