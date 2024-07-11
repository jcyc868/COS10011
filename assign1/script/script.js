function storeItem(item_id) {
    sessionStorage.setItem("item_id", item_id);
    window.location.replace("enquiry.html");
}

function displayitem() {
    document.getElementById("subject").value = sessionStorage.getItem("item_id");

}


function initalise() {
    var formElement = document.getElementById("regForm");
  
    displayitem();
  
}

window.onload = initalise;