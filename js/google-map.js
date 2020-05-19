
var google;

function initMap() 
    {
  var direccion = {lat: -33.434616, lng: -70.656856};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: direccion
  });

	var marker = new google.maps.Marker({
  position: direccion,
  map: map
});

}
google.maps.event.addDomListener(window, 'load', initMap);