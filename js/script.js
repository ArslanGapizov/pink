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
