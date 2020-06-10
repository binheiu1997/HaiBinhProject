
window.onscroll = function() {myFunction()};

var imageSticky = document.getElementById("imageSticky");
var sticky = imageSticky.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		imageSticky.classList.add("sticky")
	} else {
		imageSticky.classList.remove("sticky");
	}
}