function initMap() {
	var mapDiv = document.getElementById('map');
	var myLocation = {lat: 59.936433, lng: 30.321387};
	var center = {lat: 59.936433, lng: 30.321387};
  var map = new google.maps.Map(mapDiv, {
    	center: center,
      zoom: 16,
	    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
		position: myLocation,
		map: map,
		icon: '../img/map-marker.png'
	});
}
var pageHeader = document.querySelector(".page-header");
var menuBtn = document.querySelector(".page-header__btn-burger");
var mainNav = document.querySelector(".main-nav");
menuBtn.addEventListener("click", function(){
	if(this.classList.contains("page-header__btn-burger_active")){
			pageHeader.classList.remove("page-header_active");
			menuBtn.classList.remove("page-header__btn-burger_active");
			mainNav.classList.add("main-nav_closed");
			mainNav.classList.remove("main-nav_open");
	}
	else{
		pageHeader.classList.add("page-header_active");
		menuBtn.classList.add("page-header__btn-burger_active");
		mainNav.classList.remove("main-nav_closed");
		mainNav.classList.add("main-nav_open");
	}
});

var arrowLeft = document.getElementById("reviews__arrow-left");
var arrowRight = document.getElementById("reviews__arrow-right");
var toggle1 = document.getElementById("reviews-toggle-1");
var toggle2 = document.getElementById("reviews-toggle-2");
var toggle3 = document.getElementById("reviews-toggle-3");

arrowRight.addEventListener("click", function() {
		if(toggle1.checked){
			toggle2.checked = true;
		}
		else if(toggle2.checked){
			toggle3.checked = true;
		}
		else if(toggle3.checked){
			toggle1.checked = true;
		}
});
arrowLeft.addEventListener("click", function() {
		if(toggle1.checked){
			toggle3.checked = true;
		}
		else if(toggle2.checked){
			toggle1.checked = true;
		}
		else if(toggle3.checked){
			toggle2.checked = true;
		}
});
