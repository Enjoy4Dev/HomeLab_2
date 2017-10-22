// Get the modal
var contactModal = document.getElementById('contactModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var contactButton = document.getElementById("contactButton");

  contactButton.onclick = function () {
    contactModal.style.display = "block";
}
// Get the <span> element that closes the modal
var span = document.getElementById("closeContact");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    contactModal.style.display = "none";
}

//modal.onclick = function() { 
//    contactModal.style.display = "none";
//}